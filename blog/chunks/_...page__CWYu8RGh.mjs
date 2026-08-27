import './_page_.c3ff9ba7_IOAJoecU.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import $$Pagination from './Pagination_CfgbkZAp.mjs';
import $$PostPage from './PostPage_B2_iiahx.mjs';
import { $ as $$MainGridLayout, P as PAGE_SIZE } from './MainGridLayout_DdaOC5iQ.mjs';
import { b as getSortedPosts } from './content-utils_B3ixKXjm.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "D:/CZH720/tools/fuwari-blog/src/pages/[...page].astro", void 0);

const $$file = "D:/CZH720/tools/fuwari-blog/src/pages/[...page].astro";
const $$url = "/blog/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
