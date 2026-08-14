# npmjs 网页翻译

[![CI](https://github.com/sj817/npmjs-chinese-translator/actions/workflows/ci.yml/badge.svg)](https://github.com/sj817/npmjs-chinese-translator/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 将 npmjs.com 网站界面翻译为中文的油猴 (Tampermonkey) 脚本。配合严谨的翻译规则，告别生硬的机翻感。

## ✨ 特性

- 🌐 **精准翻译**：基于规则匹配，只翻译目标文本，不误伤代码、命令行等内容。
- ⚡ **动态响应**：自动监听页面变化（SPA 路由切换），新内容实时翻译。
- 🎯 **绝对匹配模式**：优先使用字符串精确匹配，避免正则误匹配带来的错翻风险。
- 🚀 **轻量低耗**：对页面性能影响可忽略，不增加额外请求。

## 📥 安装

### 1. 安装油猴插件

如果你还没装，先去扩展商店装一个：

- Chrome/Edge: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)
- Safari: [Tampermonkey](https://apps.apple.com/app/tampermonkey/id1482490089)

### 2. 安装脚本

点这里直接安装（始终指向最新版）：

**[➡️ 点此安装脚本](https://github.com/sj817/npmjs-chinese-translator/releases/latest/download/npmjs-chinese-translator.user.js)**

如果你想固定某个历史版本，可以去 [Releases 页面](https://github.com/sj817/npmjs-chinese-translator/releases) 下载。

### 3. 开始使用

装好后直接访问 [npmjs.com](https://www.npmjs.com)，应该就能看到中文界面了。如果没生效，可以试试刷新页面或重新启用脚本。

## 🛠️ 自定义翻译

所有翻译规则都写在 `src/translations.ts` 里，结构很清晰：

```ts
// 精确匹配（推荐）
['Search', '搜索'],
['Install', '安装'],

// 正则匹配（用于动态内容）
[/(\d+)\s+downloads?/gi, '$1 次下载'],
```

如果你想补充或修正某条翻译，直接在这个文件里增删改就行，然后重新构建。

💻 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务（带热更新）
pnpm dev:server

# 构建生产版本
pnpm build
```

目录结构

```
├── src/
│   ├── main.ts           # 脚本入口
│   ├── translations.ts   # 翻译词库（主要维护区域）
│   └── translator.ts     # 翻译核心逻辑
├── dev-server/           # 本地热更新服务
├── vite.config.ts        # Vite 配置
└── package.json
```

🤝 参与贡献

如果你发现漏翻、错翻，或者想补充新的页面翻译，欢迎提 Issue 或 PR。

大概流程：

1. Fork 本项目
2. 新建分支：git checkout -b feature/xxx
3. 修改 translations.ts 或相关逻辑
4. 提交并推送：git push origin feature/xxx
5. 发起 Pull Request

📄 许可证

MIT © shijin

---

⭐ 如果觉得好用，欢迎点个 Star，也欢迎分享给其他用 npm 的朋友！
