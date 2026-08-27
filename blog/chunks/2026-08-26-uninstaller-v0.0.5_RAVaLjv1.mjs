import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p><code>v0.0.5</code> 是一个小版本的 UX 优化，解决“扫描文件”按钮容易被误点、结果提示含糊的问题。</p>\n<section><h2 id=\"修复内容\">修复内容<a class=\"anchor\" href=\"#修复内容\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"扫描残留提示更明确\">扫描残留提示更明确<a class=\"anchor\" href=\"#扫描残留提示更明确\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><code>scanResiduals()</code> 对非残留项（<code>isOrphaned == false</code>）直接说明“该软件当前正在正常运行，未被判定为残留项，因此没有可扫描的残留文件”。</li>\n<li>不再走完流程后弹出模糊的“未找到”。根因在于 <code>scanResidualFiles</code> 对正常软件本就返回空，此按钮仅用于扫描已卸载但仍遗留文件的残留项。</li>\n</ul></section><section><h3 id=\"详情页按钮置灰\">详情页按钮置灰<a class=\"anchor\" href=\"#详情页按钮置灰\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><code>showDetailDialog</code> 中“扫描文件”按钮对正常软件禁用，并加 tooltip“仅『残留项』（已卸载但仍有遗留文件）可扫描残留”，避免误点。</li>\n</ul></section></section>\n<section><h2 id=\"下载\">下载<a class=\"anchor\" href=\"#下载\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.5\">卸载管理器 v0.0.5 (试用版)</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.5 发布：扫描残留 UX 优化","published":"2026-08-26T06:00:00.000Z","description":"v0.0.5 修复「扫描文件」按钮对正常软件点击后弹出模糊「未找到」的误导问题。","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":1,"words":217,"excerpt":"v0.0.5 是一个小版本的 UX 优化，解决“扫描文件”按钮容易被误点、结果提示含糊的问题。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-26-uninstaller-v0.0.5.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
