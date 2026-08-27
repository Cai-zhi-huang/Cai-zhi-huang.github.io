import rss from '@astrojs/rss';
import { b as getSortedPosts, s as siteConfig, u as url } from './content-utils_B3ixKXjm.mjs';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();
function stripInvalidXmlChars(str) {
  return str.replace(
    // biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
    ""
  );
}
async function GET(context) {
  const blog = await getSortedPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle,
    site: context.site ?? "https://fuwari.vercel.app",
    items: blog.map((post) => {
      const content = typeof post.body === "string" ? post.body : String(post.body || "");
      const cleanedContent = stripInvalidXmlChars(content);
      return {
        title: post.data.title,
        pubDate: post.data.published,
        description: post.data.description || "",
        link: url(`/posts/${post.slug}/`),
        content: sanitizeHtml(parser.render(cleanedContent), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
        })
      };
    }),
    customData: `<language>${siteConfig.lang}</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
