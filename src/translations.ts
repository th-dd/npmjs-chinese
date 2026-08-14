/**
 * 翻译规则配置
 *
 * 支持两种匹配模式：
 * 1. 字符串 - 绝对匹配（精确匹配，推荐）
 * 2. 正则表达式 - 正则匹配（灵活匹配，高级用法）
 *
 * 格式：[匹配规则, 翻译文本]
 * - 匹配规则可以是字符串或正则表达式
 * - 字符串：完全匹配原文
 * - 正则表达式：按正则规则匹配，支持捕获组
 */

/**
 * 翻译规则类型
 * [0]: 匹配规则 - string(绝对匹配) | RegExp(正则匹配)
 * [1]: 翻译文本 - 可使用 $1, $2 等捕获组（仅正则有效）
 */
export type TranslationRule = [string | RegExp, string]

/**
 * 翻译规则列表
 * 执行顺序：从上到下依次匹配
 */
export const translationRules: TranslationRule[] = [
  // ==================== 绝对匹配规则 ====================
  // 格式：[字符串, 翻译文本]
  // 特点：精确匹配，安全可靠，推荐使用

  // www.npmjs.com 主页
  ['Popular libraries', '流行库'],
  ['Discover packages', '发现包'],
  ['By the numbers', '数字统计'],
  ['Search', '搜索'],
  ['Downloads · Last Week', '下载量 · 上周'],
  ['Downloads · Last Month', '下载量 · 上月'],

  // 顶部横幅通知
  ['Security Update', '安全更新'],
  [': Classic tokens have been revoked. Granular tokens are now limited to 90 days and require 2FA by default. Update your CI/CD workflows to avoid disruption.', '：经典令牌已被撤销。细粒度令牌现在限制为 90 天，并默认要求双重验证。请更新您的 CI/CD 工作流以避免中断。'],
  ['Learn more', '了解更多'],
  ['Front-end', '前端'],
  ['Back-end', '后端'],
  ['CLI', '命令行工具'],
  ['Documentation', '文档'],
  ['Testing', '测试'],
  ['IoT', '物联网'],
  ['Coverage', '覆盖率'],
  ['Mobile', '移动端'],
  ['Frameworks', '框架'],
  ['Robotics', '机器人'],
  ['Math', '数学'],
  ['Recently updated packages', '最近更新的包'],
  ['Support', '支持'],
  ['Help', '帮助'],
  ['Advisories', '公告'],
  ['Status', '状态'],
  ['Contact npm', '联系 npm'],
  ['Company', '公司'],
  ['About', '关于'],
  ['Blog', '博客'],
  ['Press', '新闻'],
  ['Terms & Policies', '条款与政策'],
  ['Policies', '政策'],
  ['Terms of Use', '使用条款'],
  ['Code of Conduct', '行为准则'],
  ['Privacy', '隐私政策'],

  // 导航栏
  ['Packages', '包'],
  ['Search packages', '搜索包'],
  ['Sign Up', '注册'],
  ['Sign In', '登录'],
  ['Free', '免费版'],
  ['Pro', '专业版'],
  ['Teams', '团队版'],
  ['Pricing', '价格'],

  // products/pro 专业版
  ['Publish your own packages to the world\'s most popular software ecosystem', '将您自己的包发布到全球最受欢迎的软件生态系统中'],
  ['Get started', '开始使用'],
  ['Unlimited public packages', '无限公共包'],
  ['Bring the best of open source JavaScript development to your own projects.', '将开源 JavaScript 开发的最佳实践引入您自己的项目。'],
  ['Unlimited private packages', '无限私有包'],
  ['Seamlessly integrate public and private packages into your development cycle.', '将公共包和私有包无缝集成到您的开发流程中。'],
  ['Package-based permissions', '基于包的权限管理'],
  ['Add collaborators to work on your public and private packages together.', '添加协作者，共同处理您的公共包和私有包。'],
  ['Working on a team?', '正在团队中使用？'],
  ['Try npm Teams.', '试试 npm 团队版。'],
  ['Team-based access controls to manage package permissions across your organization.', '基于团队的访问控制，可在整个组织中管理包权限。'],
  ['Learn about Teams', '了解 团队版 详情'],
  ['Feature Comparison', '功能对比'],
  ['Feature comparison across Free, Pro, and Teams plans', '免费版、专业版和团队版的功能对比'],
  ['Unlimited public packages & automatic security warnings', '无限公共包与自动安全警告'],
  ['Unlimited private packages', '无限私有包'],
  ['Unlimited team-based management', '无限的基于团队的管理'],
  ['All versions include basic support', '所有版本均包含基础支持'],
  ['Get Started', '开始使用'],
  ['If you don\'t have one yet,', '如果还没有，'],
  ['create a free npm account', '创建一个免费的 npm 账户。'],
  ['Upgrade your account', '升级您的账户'],
  ['Log into your account and', '登录您的账户并'],
  ['upgrade your plan', '升级您的套餐'],
  
  // 汉堡菜单 / 用户菜单
  ['Profile', '个人资料'],
  ['Edit Profile', '编辑个人资料'],
  ['Account', '账户'],
  ['Billing Info', '账单信息'],
  ['Access Tokens', '访问令牌'],
  ['Organizations', '组织'],
  ['Add Organization', '添加组织'],
  ['Sign Out', '退出登录'],

  // 访问令牌页面
  ['Name', '名称'],
  ['Bypass 2FA', '跳过双重验证'],
  ['Created', '创建时间'],
  ['Last used', '最后使用'],
  ['Expires', '过期时间'],
  ['Delete', '删除'],
  ['Select all', '全选'],
  ['Generate New Token', '生成新令牌'],
  ['Delete Selected Tokens', '删除所选令牌'],
  ['Rows', '第'],
  ['to', '至'],
  ['of', '行，共'],
  ['📋 Read the Documentation', '📋 阅读文档'],

  // 新建细粒度访问令牌页面
  ['New Granular Access Token', '新建细粒度访问令牌'],
  ['Granular access tokens', '细粒度访问令牌'],
  ['provide the most control by allowing you to configure fine-grained, tightly scoped permissions for your packages and organizations.', '通过允许您为包和组织配置精细、严格范围的权限，提供最大程度的控制。'],
  ['View token documentation', '查看令牌文档'],
  ['General', '常规'],
  ['Token name *', '令牌名称 *'],
  ['Token name', '令牌名称'],
  ['Provide a unique name.', '提供一个唯一的名称。'],
  ['Description', '描述'],
  ['(optional)', '（可选）'],
  ['What is this token for?', '这个令牌用于什么？'],
  ['Bypass two-factor authentication (2FA)', '跳过双重身份验证 (2FA)'],
  ['Allowed IP ranges', '允许的 IP 范围'],
  ['Must be valid', '必须是有效的'],
  ['CIDR notation', 'CIDR 表示法'],
  ['Input Range 1', '输入范围 1'],
  ['Add IP Range', '添加 IP 范围'],
  ['Please provide an IP address range before adding a new one.', '请先输入 IP 地址范围，然后再添加新的。'],
  ['Packages and scopes', '包和作用域'],
  ['packages and scopes', '包和作用域'],
  ['Add Private Packages', '添加私有包'],
  ['Permissions', '权限'],
  ['No access', '无访问权限'],
  ['Read only', '只读'],
  ['Read and write', '读写'],
  ['Expiration', '过期时间'],
  ['Expiration Date', '过期日期'],
  ['7 days', '7 天'],
  ['30 days', '30 天'],
  ['60 days', '60 天'],
  ['90 days', '90 天'],
  ['Custom...', '自定义...'],

  // 令牌摘要
  ['Summary', '摘要'],
  ['This token will:', '此令牌将：'],
  ['Provide', '提供'],
  ['no', '无'],
  ['access to', '访问权限'],
  ['packages and  scopes', '包和作用域'],
  ['organizations', '组织'],
  ['Expires on', '过期时间为'],
  ['Generate token', '生成令牌'],
  ['Cancel', '取消'],

  // 账户设置页面
  ['Account Settings', '账户设置'],
  ['Profile Picture', '头像'],
  ['Email & Password', '邮箱和密码'],
  ['This email will be added to the metadata of packages you publish', '此邮箱将被添加到您发布的包的元数据中'],
  ['Two-Factor Authentication', '双重身份验证'],
  ['Enabled for authorization and publishing', '已启用授权和发布验证'],
  ['Authenticator app', '身份验证器应用'],
  ['security', '安全'],
  ['keys', '密钥'],
  ['Linked Accounts & Recovery Option', '关联账户和恢复选项'],
  ['You can link existing or new accounts to help us verify your identity in the case of account recovery. Linked accounts will show up on your profile page.', '您可以关联现有或新账户，以便在账户恢复时帮助我们验证您的身份。关联的账户将显示在您的个人资料页面上。'],
  ['Delete Account', '删除账户'],
  ['Once you delete your account, you will lose access to your packages. Please be certain.', '一旦删除账户，您将无法访问您的包。请慎重考虑。'],
  ['Change your Gravatar', '更改您的 Gravatar 头像'],
  ['Change email', '更改邮箱'],
  ['Change password', '更改密码'],
  ['Save', '保存'],
  ['Discard Changes', '放弃更改'],
  ['Modify 2FA', '修改双重验证'],
  ['Link with GitHub', '关联 GitHub'],
  ['Delete your account', '删除您的账户'],
  ['Link your social accounts in the', '在'],
  ['to make them visible to others.', '中关联您的社交账户，让其他人可以看到。'],

  // 包详情页
  ['Install', '安装'],
  ['Repository', '仓库'],
  ['Homepage', '主页'],
  ['Weekly Downloads', '周下载量'],
  ['Version', '版本'],
  ['License', '许可证'],
  ['Unpacked Size', '解包大小'],
  ['Total Files', '文件总数'],
  ['Issues', '问题'],
  ['Pull Requests', '拉取请求'],
  ['Last publish', '最后发布'],
  ['Collaborators', '协作者'],
  ['Try on RunKit', '在 RunKit 上试用'],
  ['Report malware', '报告恶意软件'],

  // README 相关
  ['Readme', '说明文档'],
  ['MIT', 'MIT 许可证'],
  ['ISC', 'ISC 许可证'],

  // 依赖相关
  ['Dependencies', '依赖'],
  ['Dev Dependencies', '开发依赖'],
  ['Peer Dependencies', '对等依赖'],
  ['Optional Dependencies', '可选依赖'],
  ['Dependents', '依赖者'],

  // 版本相关
  ['Versions', '版本'],
  ['View all', '查看全部'],
  ['View →', '查看 →'],
  ['latest', '最新'],
  ['beta', '测试版'],
  ['alpha', '预览版'],

  // 搜索相关
  ['Sort by', '排序方式'],
  ['Popularity', '热门'],
  ['Quality', '质量'],
  ['Maintenance', '维护'],
  ['Optimal', '最优'],
  ['show more packages', '显示更多包'],

  // 包信息
  ['published', '发布于'],
  ['ago', '前'],
  ['Keywords', '关键词'],
  ['Maintainers', '维护者'],

  // 统计信息
  ['downloads in the last day', '最近一天的下载量'],
  ['downloads in the last week', '最近一周的下载量'],
  ['downloads in the last month', '最近一月的下载量'],

  // 其他常用词
  ['Package Health Score', '包健康评分'],
  ['Security', '安全'],
  ['Explore', '探索'],
  ['Products', '产品'],
  ['npm Pro', 'npm 专业版'],
  ['npm Teams', 'npm 团队版'],
  ['npm Enterprise', 'npm 企业版'],
  ['Community', '社区'],
  ['GitHub', 'GitHub'],
  ['Twitter', 'Twitter'],

  // 登录 注册
  ['Username', '用户名'],
  ['Password', '密码'],
  ['Forgot password', '忘记密码'],
  ['Show', '显示'],
  ['Hide', '隐藏'],
  ['Create Account', '创建账户'],
  ['Please enter a password.', '请输入密码'],
  ['username or password was invalid.', '用户名或密码无效。'],
  ['Email address', '邮箱地址'],
  ['Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.', '您的邮箱地址将被添加到您发布的包的元数据中，因此可能会被公开查看。'],
  ['Minimum of 10 characters and must meet our password guidelines.', '至少 10 个字符，并且必须符合我们的密码指南。'],
  ['I agree to the End User License Agreement and Privacy Policy.', '我同意最终用户许可协议和隐私政策。'],
  ['Verify you are a human', '验证您是人类'],
  ['Create an account', '创建账户'],
  ['Already have an account?', '已经有账户？'],
  // ==================== 正则表达式规则 ====================
  // 格式：[正则表达式, 翻译文本]
  // 特点：灵活匹配，支持捕获组，需谨慎使用

  // 时间相关
  [/(\d+)\s+days?\s+ago/gi, '$1 天前'],
  [/(\d+)\s+hours?\s+ago/gi, '$1 小时前'],
  [/(\d+)\s+minutes?\s+ago/gi, '$1 分钟前'],
  [/(\d+)\s+weeks?\s+ago/gi, '$1 周前'],
  [/(\d+)\s+months?\s+ago/gi, '$1 个月前'],
  [/(\d+)\s+years?\s+ago/gi, '$1 年前'],

  // 日期格式 (如 Nov 29, 2025)
  [/Jan\s+(\d+),\s+(\d+)/gi, '$2年1月$1日'],
  [/Feb\s+(\d+),\s+(\d+)/gi, '$2年2月$1日'],
  [/Mar\s+(\d+),\s+(\d+)/gi, '$2年3月$1日'],
  [/Apr\s+(\d+),\s+(\d+)/gi, '$2年4月$1日'],
  [/May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日'],
  [/Jun\s+(\d+),\s+(\d+)/gi, '$2年6月$1日'],
  [/Jul\s+(\d+),\s+(\d+)/gi, '$2年7月$1日'],
  [/Aug\s+(\d+),\s+(\d+)/gi, '$2年8月$1日'],
  [/Sep\s+(\d+),\s+(\d+)/gi, '$2年9月$1日'],
  [/Oct\s+(\d+),\s+(\d+)/gi, '$2年10月$1日'],
  [/Nov\s+(\d+),\s+(\d+)/gi, '$2年11月$1日'],
  [/Dec\s+(\d+),\s+(\d+)/gi, '$2年12月$1日'],

  // 带星期的日期格式 (如 Sunday, February 1, 2026)
  [/Sunday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期日'],
  [/Monday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期一'],
  [/Tuesday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期二'],
  [/Wednesday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期三'],
  [/Thursday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期四'],
  [/Friday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期五'],
  [/Saturday,\s+January\s+(\d+),\s+(\d+)/gi, '$2年1月$1日 星期六'],
  [/Sunday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期日'],
  [/Monday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期一'],
  [/Tuesday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期二'],
  [/Wednesday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期三'],
  [/Thursday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期四'],
  [/Friday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期五'],
  [/Saturday,\s+February\s+(\d+),\s+(\d+)/gi, '$2年2月$1日 星期六'],
  [/Sunday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期日'],
  [/Monday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期一'],
  [/Tuesday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期二'],
  [/Wednesday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期三'],
  [/Thursday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期四'],
  [/Friday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期五'],
  [/Saturday,\s+March\s+(\d+),\s+(\d+)/gi, '$2年3月$1日 星期六'],
  [/Sunday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期日'],
  [/Monday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期一'],
  [/Tuesday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期二'],
  [/Wednesday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期三'],
  [/Thursday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期四'],
  [/Friday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期五'],
  [/Saturday,\s+April\s+(\d+),\s+(\d+)/gi, '$2年4月$1日 星期六'],
  [/Sunday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期日'],
  [/Monday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期一'],
  [/Tuesday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期二'],
  [/Wednesday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期三'],
  [/Thursday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期四'],
  [/Friday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期五'],
  [/Saturday,\s+May\s+(\d+),\s+(\d+)/gi, '$2年5月$1日 星期六'],
  [/Sunday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期日'],
  [/Monday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期一'],
  [/Tuesday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期二'],
  [/Wednesday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期三'],
  [/Thursday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期四'],
  [/Friday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期五'],
  [/Saturday,\s+June\s+(\d+),\s+(\d+)/gi, '$2年6月$1日 星期六'],
  [/Sunday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期日'],
  [/Monday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期一'],
  [/Tuesday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期二'],
  [/Wednesday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期三'],
  [/Thursday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期四'],
  [/Friday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期五'],
  [/Saturday,\s+July\s+(\d+),\s+(\d+)/gi, '$2年7月$1日 星期六'],
  [/Sunday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期日'],
  [/Monday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期一'],
  [/Tuesday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期二'],
  [/Wednesday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期三'],
  [/Thursday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期四'],
  [/Friday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期五'],
  [/Saturday,\s+August\s+(\d+),\s+(\d+)/gi, '$2年8月$1日 星期六'],
  [/Sunday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期日'],
  [/Monday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期一'],
  [/Tuesday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期二'],
  [/Wednesday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期三'],
  [/Thursday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期四'],
  [/Friday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期五'],
  [/Saturday,\s+September\s+(\d+),\s+(\d+)/gi, '$2年9月$1日 星期六'],
  [/Sunday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期日'],
  [/Monday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期一'],
  [/Tuesday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期二'],
  [/Wednesday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期三'],
  [/Thursday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期四'],
  [/Friday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期五'],
  [/Saturday,\s+October\s+(\d+),\s+(\d+)/gi, '$2年10月$1日 星期六'],
  [/Sunday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期日'],
  [/Monday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期一'],
  [/Tuesday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期二'],
  [/Wednesday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期三'],
  [/Thursday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期四'],
  [/Friday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期五'],
  [/Saturday,\s+November\s+(\d+),\s+(\d+)/gi, '$2年11月$1日 星期六'],
  [/Sunday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期日'],
  [/Monday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期一'],
  [/Tuesday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期二'],
  [/Wednesday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期三'],
  [/Thursday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期四'],
  [/Friday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期五'],
  [/Saturday,\s+December\s+(\d+),\s+(\d+)/gi, '$2年12月$1日 星期六'],
]

/**
 * 添加翻译规则
 */
export function addTranslationRule (pattern: string | RegExp, translation: string): void {
  translationRules.push([pattern, translation])
}

/**
 * 批量添加翻译规则
 */
export function addTranslationRules (rules: TranslationRule[]): void {
  translationRules.push(...rules)
}
