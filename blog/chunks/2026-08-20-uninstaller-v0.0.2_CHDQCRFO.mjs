import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p><code>v0.0.2</code> 聚焦“列表状态真实、排序不被重置、搜索结果更全”三个方向，对扫描、搜索、卸载反馈做了一轮集中打磨。</p>\n<section><h2 id=\"运行中--残留判定更准确\">运行中 / 残留判定更准确<a class=\"anchor\" href=\"#运行中--残留判定更准确\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>扩展了中文软件名到进程关键字的映射，覆盖企业微信、腾讯会议、网易云音乐、百度网盘、支付宝、抖音、飞书、B站、米哈游/原神、小红书、喜马拉雅、知乎、微博等常见国产软件。</li>\n<li>“运行中”标记与残留判定共用同一套关键字，减少误判残留或漏标运行中的情况。</li>\n<li>运行中软件不再被整组隐藏，而是保留在列表中并以蓝色“运行中”标注；空名称软件以“（未命名软件）”占位显示，仍可选中卸载。</li>\n</ul></section>\n<section><h2 id=\"残留扫描防卡死\">残留扫描防卡死<a class=\"anchor\" href=\"#残留扫描防卡死\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>扫描安装目录前，先判断所在磁盘类型：网络盘、可移动盘、U 盘、CD 等非固定盘直接跳过，避免后台扫描在慢速或不可达路径上阻塞列表加载。</li>\n<li>卸载/删除残留后强制重扫列表（不再命中启动缓存），确保界面状态与真实系统一致。</li>\n</ul></section>\n<section><h2 id=\"搜索别名扩展\">搜索别名扩展<a class=\"anchor\" href=\"#搜索别名扩展\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>新增 13 组常用软件别名，例如“网易云音乐”可命中 <code>cloudmusic</code> / <code>netease</code>，中英文可互搜，找软件更快。</li>\n</ul></section>\n<section><h2 id=\"卸载状态三态化\">卸载状态三态化<a class=\"anchor\" href=\"#卸载状态三态化\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>卸载结果改为“成功 / 失败 / 已取消”。用户拒绝 UAC 提权或在 MSI 向导中点取消时，会正确提示“已取消、未做任何更改”，不再误报为失败。</li>\n<li>批量卸载独立统计成功 / 已取消 / 失败数量，取消项不再计入失败。</li>\n</ul></section>\n<section><h2 id=\"其他体验修复\">其他体验修复<a class=\"anchor\" href=\"#其他体验修复\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>卸载/删除/刷新后保留用户排序偏好，清空搜索框后排序也不再重置。</li>\n<li>并行扫描前只枚举一次系统进程快照，避免数百次重复枚举。</li>\n<li>卸载入口缺失时不再误报失败。</li>\n</ul></section>\n<section><h2 id=\"下载\">下载<a class=\"anchor\" href=\"#下载\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>GitHub Release：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable/releases/tag/v0.0.2\">卸载管理器 v0.0.2 (试用版)</a></li>\n<li>项目仓库：<a href=\"https://github.com/Cai-zhi-huang/uninstaller-portable\">Cai-zhi-huang/uninstaller-portable</a></li>\n</ul></section>";

				const frontmatter = {"title":"卸载管理器 v0.0.2 发布：运行态可见、扫描更快、搜索更准","published":"2026-08-20T11:00:00.000Z","description":"v0.0.2 优化运行中软件显示、残留扫描策略、搜索别名与卸载状态反馈，让列表状态更准确、操作更可控。","tags":["Windows","小工具","Qt"],"category":"发布","draft":false,"minutes":3,"words":530,"excerpt":"v0.0.2 聚焦“列表状态真实、排序不被重置、搜索结果更全”三个方向，对扫描、搜索、卸载反馈做了一轮集中打磨。"};
				const file = "D:/CZH720/tools/fuwari-blog/src/content/posts/2026-08-20-uninstaller-v0.0.2.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
