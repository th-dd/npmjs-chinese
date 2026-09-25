// ==UserScript==
// @name         npmjs 汉化
// @namespace    https://github.com/th-dd/npmjs-chinese/
// @version      1.0.0
// @description  将 npmjs.com 网页翻译为中文
// @author       叹号大帝
// @icon         https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png
// @match        https://www.npmjs.com/*
// @require      https://raw.githubusercontent.com/th-dd/npmjs-chinese/dev/i18n.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 等待词库加载
    if (typeof window.I18N === 'undefined') {
        console.warn('[npmjs 汉化] 词库未加载，请检查网络或刷新重试');
        return;
    }

    const I18N = window.I18N;

    // ---------- 工具函数 ----------
    function getPageType() {
        const path = location.pathname;
        for (const rule of I18N.conf.rePagePath) {
            if (rule.pattern.test(path)) {
                return rule.type;
            }
        }
        return 'default';
    }

    function getDictionary(pageType) {
        const publicDict = I18N.public || {};
        const pageDict = I18N[pageType] || {};
        const staticDict = {
            ...(publicDict.static || {}),
            ...(pageDict.static || {})
        };
        const regexpRules = [
            ...(publicDict.regexp || []),
            ...(pageDict.regexp || [])
        ];
        return { static: staticDict, regexp: regexpRules, title: pageDict.title || {} };
    }

    // ---------- 翻译核心 ----------
    function translateText(text, dict) {
        if (!text || /^[\s0-9]*$/.test(text) || /^[\u4e00-\u9fa5]+$/.test(text)) return false;

        const trimmed = text.trim();
        const cleaned = trimmed.replace(/\xa0|\s+/g, ' ');

        if (dict.static[cleaned]) {
            return text.replace(trimmed, dict.static[cleaned]);
        }

        for (const [pattern, replacement] of dict.regexp) {
            const result = cleaned.replace(pattern, replacement);
            if (result !== cleaned) {
                return text.replace(trimmed, result);
            }
        }

        return false;
    }

    function translateAttr(el, attr, dict) {
        const val = el.getAttribute(attr);
        if (!val) return;
        const result = translateText(val, dict);
        if (result) el.setAttribute(attr, result);
    }

    function translateNode(node, dict) {
        if (node.nodeType === Node.TEXT_NODE) {
            const result = translateText(node.textContent, dict);
            if (result) node.textContent = result;
            return;
        }

        const tag = node.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
            if (['button', 'submit', 'reset'].includes(node.type)) {
                translateAttr(node, 'value', dict);
            } else {
                translateAttr(node, 'placeholder', dict);
            }
        } else if (tag === 'BUTTON' || tag === 'A' || tag === 'SPAN') {
            translateAttr(node, 'title', dict);
            translateAttr(node, 'aria-label', dict);
        } else if (tag === 'OPTGROUP') {
            translateAttr(node, 'label', dict);
        }
        translateAttr(node, 'aria-label', dict);
    }

    function traverse(root, dict) {
        const pageType = getPageType();
        const ignoreSelectors = I18N.conf.ignoreSelectorPage || {};
        const allIgnore = [...(ignoreSelectors['*'] || []), ...(ignoreSelectors[pageType] || [])];

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        for (const sel of allIgnore) {
                            if (node.matches && node.matches(sel)) {
                                return NodeFilter.FILTER_REJECT;
                            }
                        }
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;
        while ((node = walker.nextNode())) {
            translateNode(node, dict);
        }
    }

    function translateTitle(dict) {
        const titleDict = dict.title || {};
        const staticTitle = titleDict.static || {};
        const regexpTitle = titleDict.regexp || [];
        const currentTitle = document.title;
        if (staticTitle[currentTitle]) {
            document.title = staticTitle[currentTitle];
            return;
        }
        for (const [pattern, replacement] of regexpTitle) {
            const result = currentTitle.replace(pattern, replacement);
            if (result !== currentTitle) {
                document.title = result;
                return;
            }
        }
    }

    function performTranslate() {
        const pageType = getPageType();
        const dict = getDictionary(pageType);
        translateTitle(dict);
        traverse(document.body, dict);
    }

    // ---------- 防抖 ----------
    let timer;
    function debounce(fn, delay = 300) {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }

    // ---------- 触发时机 ----------
    if (document.readyState === 'complete') {
        setTimeout(performTranslate, 200);
    } else {
        window.addEventListener('load', () => setTimeout(performTranslate, 200));
    }

    const origPushState = history.pushState;
    history.pushState = function() {
        origPushState.apply(this, arguments);
        debounce(performTranslate);
    };
    const origReplaceState = history.replaceState;
    history.replaceState = function() {
        origReplaceState.apply(this, arguments);
        debounce(performTranslate);
    };
    window.addEventListener('popstate', () => debounce(performTranslate));

    const characterDataEnabled = (I18N.conf.characterDataPage || []).length > 0;
    const observer = new MutationObserver(() => debounce(performTranslate));
    const target = document.getElementById('app') || document.body;
    observer.observe(target, {
        childList: true,
        subtree: true,
        characterData: characterDataEnabled,
        attributes: false
    });

    console.log('[npmjs 汉化] 已启动，当前页面类型:', getPageType());
})();
