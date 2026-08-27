import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p><code>v0.0.4</code> 是 v0.0.3 发布后的热修复版，解决两个用户可见的回归问题。</p>\n<section><h2 id=\"修复内容\">修复内容<a class=\"anchor\" href=\"#修复内容\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"打开文件位置失效\">打开文件位置失效<a class=\"anchor\" href=\"#打开文件位置失效\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><p>v0.0.3 安全加固 F4 中误用 <code>GetSystemDirectoryW</code> 拼出 <code>C:\\Windows\\System32\\explorer.exe</code>，但该路径下并不存在资源管理器（真实位置是 <code>C:\\Windows\\explorer.exe</code>），导致 <code>ShellExecuteW</code> 返回 ≤32 并误报“找不到文件位置”。</p><p>现已改为 <code>GetWindowsDirectoryW</code> 取 Windows 主目录，既修复失效，又保留 F4 的防种植目标。</p></section><section><h3 id=\"详情页版本显示-000\">详情页版本显示 0.0.0<a class=\"anchor\" href=\"#详情页版本显示-000\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><p>安装器 <code>installer.cpp</code> 的 <code>DisplayVersion</code> 被硬编码为 <code>L\"0.0.0\"</code>，未随版本 bump。现改为 <code>L\"0.0.4\"</code>，与 <code>version.hpp</code> / <code>appicon.rc</code> 保持一致。</p></section></section>\n<section><h2 id=\"下载\">下载<a class=\"anchor\" href=\"#下载\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.4\">卸载管理器 v0.0.4 (试用版)</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.4 发布：热修打开文件位置失效 + 详情版本显示","published":"2026-08-26T03:00:00.000Z","description":"v0.0.4 修复 v0.0.3 发布后发现的两个缺陷：打开文件位置失效与详情页版本显示 0.0.0。","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":1,"words":168,"excerpt":"v0.0.4 是 v0.0.3 发布后的热修复版，解决两个用户可见的回归问题。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-26-uninstaller-v0.0.4.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
