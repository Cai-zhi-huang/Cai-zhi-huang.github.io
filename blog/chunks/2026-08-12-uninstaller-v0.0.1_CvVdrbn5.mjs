import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>今天把做了好一阵子的<strong>卸载管理器</strong>整理出了第一个公开版本 <code>v0.0.1（试用版）</code>。它是一款轻量、绿色的 Windows 小工具，用来集中管理本机已安装软件，并清理卸载后留下的残留。</p>\n<section><h2 id=\"主要功能\">主要功能<a class=\"anchor\" href=\"#主要功能\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li><strong>软件清单</strong>：扫描注册表（<code>HKLM</code> / <code>HKCU</code> 的 Uninstall 项），列出全部已安装程序，显示名称、版本、发行商、安装大小。</li>\n<li><strong>安装大小统计</strong>：自动计算安装目录占用空间；内置三道上限保护（文件数 / 扫描时间 / 总条目）和事件泵，哪怕是钉钉那种超大目录、网络盘、或带符号链接的目录，界面也不会卡死。</li>\n<li><strong>残留项检测</strong>：智能识别“卸载程序已经不存在、但注册表项还在”的残留；并加了<strong>进程运行护栏</strong>——软件还在跑（比如微信）时不会误判为残留，避免误删。</li>\n<li><strong>空壳项识别</strong>：识别只有版本号、没有任何有效路径的空壳注册表项。</li>\n<li><strong>一键卸载</strong>：支持 MSI 与 EXE 卸载程序，自动处理带空格的路径，必要时请求 UAC 提权。</li>\n<li><strong>打开文件位置</strong>：在资源管理器里直接定位并选中主程序。</li>\n<li><strong>删除残留注册表项</strong>：对确认真实残留的项可删除其注册表项（操作 <code>HKLM</code> 时自动提权，并有二次确认）。</li>\n<li><strong>启动更新弹窗</strong>：每个大版本首次打开即展示本次更新内容，可勾选“不再提示此版本”。</li>\n</ul></section>\n<section><h2 id=\"下载与运行\">下载与运行<a class=\"anchor\" href=\"#下载与运行\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>便携版无需安装，下载解压后双击 <code>uninstaller.exe</code> 即可运行（Qt 运行库已随附）。要求 Windows 10 / 11（64 位）。</p><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.1\">卸载管理器 v0.0.1 (试用版)</a></li>\n<li>直接下载便携包（zip，约 23 MB）：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/download/v0.0.1/uninstaller-portable.zip\">uninstaller-portable.zip</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>\n<section><h2 id=\"后续计划\">后续计划<a class=\"anchor\" href=\"#后续计划\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>暂无。</p></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.1 发布：一款轻量绿色的 Windows 卸载工具","published":"2026-08-12T00:00:00.000Z","description":"轻量、绿色的 Windows 卸载工具，集中管理已安装软件并清理卸载后残留的注册表与文件。","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":2,"words":467,"excerpt":"今天把做了好一阵子的卸载管理器整理出了第一个公开版本 v0.0.1（试用版）。它是一款轻量、绿色的 Windows 小工具，用来集中管理本机已安装软件，并清理卸载后留下的残留。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-12-uninstaller-v0.0.1.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
