import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<section><h1 id=\"关于我\">关于我<a class=\"anchor\" href=\"#关于我\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h1><p>你好，我是 <strong>CZH</strong>，一个喜欢折腾小工具、把重复劳动自动化的开发者。</p><p>平时主要写一些网页和脚本。这个站点用来记录我做过的工具、踩过的坑，以及一些随手记。</p><section><h2 id=\"我做的东西\">我做的东西<a class=\"anchor\" href=\"#我做的东西\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li><strong>卸载管理器</strong>：一款轻量、绿色的 Windows 卸载工具，集中管理已安装软件，并清理卸载后残留的注册表与文件。详见<a href=\"/posts/2026-08-12-uninstaller-v001/\">发布文章</a>。</li>\n</ul></section><section><h2 id=\"联系我\">联系我<a class=\"anchor\" href=\"#联系我\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub：<a href=\"https://github.com/Cai-zhi-huang\">Cai-zhi-huang</a></li>\n<li>QQ：2143845625</li>\n<li>微信：C2010Z0720Har</li>\n</ul></section></section>";

				const frontmatter = {"minutes":1,"words":125,"excerpt":"你好，我是 CZH，一个喜欢折腾小工具、把重复劳动自动化的开发者。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/spec/about.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
