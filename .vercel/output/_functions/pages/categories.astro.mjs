import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CcTvVyhV.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_D8WU6QDN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Categories" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Categories</h1> ` })}`;
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/pages/categories/index.astro", undefined);

const $$file = "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
