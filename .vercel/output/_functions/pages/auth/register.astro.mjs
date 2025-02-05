import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CcTvVyhV.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>register</h1>`;
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/pages/auth/register/index.astro", undefined);

const $$file = "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/pages/auth/register/index.astro";
const $$url = "/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
