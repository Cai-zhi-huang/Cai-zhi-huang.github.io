import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as renderScript, r as renderTemplate } from './astro/server_MXCf7mdE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Markdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Markdown;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div data-pagefind-body${addAttribute(`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`, "class")}> <!--<div class="prose dark:prose-invert max-w-none custom-md">--> <!--<div class="max-w-none custom-md">--> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "D:/CZH720/tools/fuwari-blog/src/components/misc/Markdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/CZH720/tools/fuwari-blog/src/components/misc/Markdown.astro", void 0);

export { $$Markdown as default };
