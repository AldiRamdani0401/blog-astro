import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DomV_7fu.mjs';
import { manifest } from './manifest_DgHJXXhi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/articles.astro.mjs');
const _page3 = () => import('./pages/auth/login.astro.mjs');
const _page4 = () => import('./pages/auth/register.astro.mjs');
const _page5 = () => import('./pages/categories.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/articles/index.astro", _page2],
    ["src/pages/auth/login/index.astro", _page3],
    ["src/pages/auth/register/index.astro", _page4],
    ["src/pages/categories/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d5beb254-05ba-4910-ac9d-5510f00497ba",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
