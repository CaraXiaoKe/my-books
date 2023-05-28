import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.ba9b5bcc.mjs';
import 'html-escaper';
/* empty css                           */import 'path-to-regexp';
import 'cookie';
import 'kleur/colors';
import 'fs';
import 'http';
import 'tls';
import 'mime';
import 'string-width';
import 'slash';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  console.log("\u5B83\u8FD0\u884C\u5728\u7EC8\u7AEF\u800C\u975E\u6D4F\u89C8\u5668\uFF01");
  return renderTemplate`<html class="astro-J7PV25F6">
  ${maybeRenderHead($$result)}<body class="astro-J7PV25F6">
    <h1 class="astro-J7PV25F6">Hello, World!</h1>
  </body></html>`;
}, "/Users/dupeidong/study/my-books/packages/blog/src/pages/index.astro");

const $$file = "/Users/dupeidong/study/my-books/packages/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
