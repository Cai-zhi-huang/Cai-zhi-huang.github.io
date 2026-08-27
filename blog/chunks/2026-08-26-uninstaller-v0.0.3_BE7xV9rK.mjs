import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p><code>v0.0.3</code> 以“纵深防御”为目标，对命令注入、路径绕过、DLL 种植、缓存投毒和意外提权等攻击面进行了系统加固。完整审计过程见本地 <code>tools/security_audit_report.md</code>。</p>\n<section><h2 id=\"命令注入与路径绕过\">命令注入与路径绕过<a class=\"anchor\" href=\"#命令注入与路径绕过\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li><strong>F1 PowerShell 命令注入</strong>：自卸载桩对 <code>InstallLocation</code> 中的单引号做转义（<code>''</code>），<code>powershell.exe</code> 改用 <code>System32\\WindowsPowerShell\\v1.0\\</code> 完整路径。</li>\n<li><strong>F2 reg.exe 参数注入</strong>：提权删注册表前校验键名不含 <code>\"</code>，含则拒绝；<code>reg.exe</code> 改用 <code>System32</code> 完整路径。</li>\n<li><strong>F3 8.3 短名绕过</strong>：<code>isProtectedPath</code> 比较前用 <code>GetLongPathNameW</code> 还原 <code>PROGRA~1</code> 等长名，防止误删 Program Files 目录。</li>\n<li><strong>F4 裸系统二进制名</strong>：<code>reg.exe</code>、<code>powershell.exe</code>、<code>taskkill.exe</code>、<code>explorer.exe</code>、<code>regedit.exe</code>、<code>msiexec.exe</code> 全部改用 <code>GetSystemDirectoryW</code> 完整路径，杜绝 DLL/二进制种植。</li>\n<li><strong>F5 UI 线程阻塞</strong>：提权删 <code>reg.exe</code> 等待改为 <code>MsgWaitForMultipleObjects</code> + 消息泵，UAC 期间界面不再假死。</li>\n</ul></section>\n<section><h2 id=\"篡改与提权防御\">篡改与提权防御<a class=\"anchor\" href=\"#篡改与提权防御\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li><strong>F6 DLL 种植劫持</strong>：<code>main()</code> 入口调用 <code>SetDllDirectoryW(L\"\")</code> + <code>SetSearchPathMode</code>，从 DLL 搜索顺序移除当前目录、启用安全搜索模式。</li>\n<li><strong>F8 缓存投毒</strong>：<code>uninstaller_cache.json</code> 增加 Sha256 + 盐完整性校验，被清空或篡改即丢弃并回退实时扫描。</li>\n<li><strong>F10 UAC 清单缺失</strong>：新增 <code>app.manifest</code> 与 <code>installer.manifest</code>，显式声明 <code>asInvoker / uiAccess=false</code>，修复因 exe 名含 “uninstall”/“Setup” 触发 Windows 自动提权的问题。</li>\n</ul></section>\n<section><h2 id=\"发布前必做\">发布前必做<a class=\"anchor\" href=\"#发布前必做\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>代码签名（Authenticode）需证书，当前环境无法签名；下载页与 Release 提供 <strong>SHA-256 校验值</strong> 作为替代校验手段。</li>\n</ul></section>\n<section><h2 id=\"下载\">下载<a class=\"anchor\" href=\"#下载\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.3\">卸载管理器 v0.0.3 (试用版)</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.3 发布：安全加固 F1–F10","description":"v0.0.3 是一次全面安全审计与加固，重点防御命令注入、路径绕过、DLL 种植劫持、缓存投毒与意外提权。","published":"2026-08-26T01:00:00.000Z","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":2,"words":368,"excerpt":"v0.0.3 以“纵深防御”为目标，对命令注入、路径绕过、DLL 种植、缓存投毒和意外提权等攻击面进行了系统加固。完整审计过程见本地 tools/security_audit_report.md。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-26-uninstaller-v0.0.3.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
