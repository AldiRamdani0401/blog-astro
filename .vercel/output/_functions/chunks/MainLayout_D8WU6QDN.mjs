import { c as createComponent, b as createAstro, r as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead, a as renderComponent } from './astro/server_CcTvVyhV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Astro" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>MyBlog | ", '</title><!-- Font Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><!-- Icon --><script src="https://kit.fontawesome.com/3e5321d52d.js" crossorigin="anonymous"><\/script>', "</head> <body data-astro-cid-37fxchfa> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/layouts/BaseLayout.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  // HANDLERS //\n  // ** caution ** //\n  function closeCaution() {\n    const element = document.getElementById("caution");\n    element.remove();\n  }\n  // ** end of caution ** //\n\n  // === MOBILE === //\n  // ** NAV ** //\n  function openMenu() {\n    const element = document.getElementById("mobile-menu");\n    element.classList.remove("hidden");\n    element.classList.add("absolute");\n  }\n  function closeMenu() {\n    const element = document.getElementById("mobile-menu");\n    element.classList.remove("absolute");\n    element.classList.add("hidden");\n  }\n  // ** end of NAV ** //\n<\/script> <!-- HEADER -->', '<header class="flex flex-row justify-between items-center h-fit px-2 lg:px-10 bg-gray-950"> <a href="/" class="text-2xl font-medium text-white py-2">MyBlog \u{1F680}</a> <!-- === DESKTOP === --> <nav class="hidden lg:flex flex-row h-full text-lg justify-around w-1/2 text-slate-200 border"> <a href="/" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Home</a> <a href="/about" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">About</a> <a href="/articles" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Articles</a> <a href="/categories" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Categories</a> </nav> <a href="/auth/login" class="hidden lg:flex items-center justify-center h-full w-[10%] text-slate-200 hover:font-bold hover:bg-indigo-800">Sign In</a> <!-- === end of DESKTOP === --> <!-- === MOBILE === --> <button type="button" class="block lg:hidden text-white text-2xl" onclick="openMenu()"> <svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path d="M3 12 21 12"></path><path d="M3 6 21 6"></path><path d="M3 18 21 18"></path></svg> </button> <!-- === NAVIGATION === --> <div id="mobile-menu" class="absolute h-full w-full top-0 left-0"> <!-- Masking --> <div class="w-full h-full bg-black opacity-30"></div> <!-- Menu --> <div class="absolute lg:hidden flex flex-col justify-between pt-5 pb-10 top-0 bg-gray-800 right-0 h-full w-[70%]"> <div class="flex flex-col gap-2"> <button type="button" class="px-2 w-fit text-3xl text-red-700 border" onclick="closeMenu()"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path d="m563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></button> <nav class="flex flex-col h-fit text-lg justify-around w-full text-slate-200 border"> <a href="/" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Home</a> <a href="/about" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">About</a> <a href="/articles" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Articles</a> <a href="/categories" class="flex items-center justify-center w-full h-full hover:font-bold hover:bg-blue-900">Categories</a> <a href="/auth/login" class="h-full w-full flex items-center text-slate-200 justify-center hover:font-bold hover:bg-indigo-800">Sign In</a> </nav> </div> <div class="align-baseline border">copyright</div> </div> </div> <!-- === end of MOBILE === --> </header> <!-- === CAUTION === --> <div id="caution" class="flex flex-row justify-center items-center gap-5 text-xl text-center py-2 px-2 bg-yellow-400 select-none"> <img src="/src/assets/gif/development.gif" class="h-10 rounded-full" alt="Development"> <h1 class="font-bold text-sm">This website is still under development</h1> <button class="text-red-500 font-bold text-3xl cursor-pointer" onclick="closeCaution()">\n\u2716\n</button> </div> <!-- CAUTION --> <!-- <Caution client:only /> -->'])), maybeRenderHead());
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/components/NavBar/index.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <h1>Footer</h1> </footer>`;
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/components/Footer.astro", undefined);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Basic" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col h-screen w-screen"> <!-- Header --> ${renderComponent($$result2, "NavBar", $$Index, {})} <!-- Content --> <main class="flex-1 px-10"> ${renderSlot($$result2, $$slots["default"])} </main> <!-- Footer --> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "D:/Documents/Desktop/ASTRO-PROJECT/blog-astro/src/layouts/MainLayout.astro", undefined);

export { $$MainLayout as $ };
