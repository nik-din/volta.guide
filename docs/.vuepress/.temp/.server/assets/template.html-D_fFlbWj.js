import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.csbLxDaa.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="titolo" tabindex="-1"><a class="header-anchor" href="#titolo"><span>Titolo</span></a></h1><p>Link:<br> Fonte:</p><details><summary>Categoria</summary></details><p>Descrizione rapida del problema</p><details><summary>Hint 1:</summary></details><details><summary>Hint 2:</summary></details><br><details><summary>Sketch di soluzione:</summary></details><br><details><summary>Soluzione:</summary><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/problemi/template.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const template_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "template.html.vue"]]);
const data = JSON.parse('{"path":"/problemi/template.html","title":"Titolo","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1726260494000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":2,"url":"https://github.com/nik-din"}]},"filePathRelative":"problemi/template.md"}');
export {
  template_html as comp,
  data
};
