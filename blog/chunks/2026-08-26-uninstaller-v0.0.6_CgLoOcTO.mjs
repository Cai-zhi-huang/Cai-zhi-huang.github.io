import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p><code>v0.0.6</code> 修复 v0.0.5 中“不再提示此版本”设置失效的问题。</p>\n<section><h2 id=\"根因\">根因<a class=\"anchor\" href=\"#根因\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>程序在 <code>closeEvent</code> 中调用 <code>::ExitProcess(0)</code> 强制退出，不跑完整析构与 <code>QSettings</code> 自动 sync。如果用户勾选/取消“不再提示此版本”后没有手动触发 <code>settings.sync()</code>，设置可能来不及落盘，下次启动仍会弹窗。</p></section>\n<section><h2 id=\"修复内容\">修复内容<a class=\"anchor\" href=\"#修复内容\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li><code>showUpdatePopup()</code> 不再仅在点击“知道了”时才写 <code>QSettings</code>。</li>\n<li>用户勾选或取消“不再提示此版本”时，立即写入并调用 <code>settings.sync()</code> 强制 flush。</li>\n<li>OK 路径二次写入，确保状态可靠落盘。</li>\n<li>追加 <code>startup.log</code> 诊断日志，便于排查“勾了仍弹”的真实状态。</li>\n</ul></section>\n<section><h2 id=\"教训\">教训<a class=\"anchor\" href=\"#教训\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>任何需要在退出前持久化的设置，写入后都要立刻 <code>sync()</code>，不能依赖析构自动落盘。</p></section>\n<section><h2 id=\"下载\">下载<a class=\"anchor\" href=\"#下载\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.6\">卸载管理器 v0.0.6 (试用版)</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.6 发布：热修更新弹窗“不再提示此版本”失效","published":"2026-08-26T09:00:00.000Z","description":"v0.0.6 修复勾选“不再提示此版本”后，下次启动仍会弹出更新日志的问题。","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":1,"words":225,"excerpt":"v0.0.6 修复 v0.0.5 中“不再提示此版本”设置失效的问题。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-26-uninstaller-v0.0.6.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
