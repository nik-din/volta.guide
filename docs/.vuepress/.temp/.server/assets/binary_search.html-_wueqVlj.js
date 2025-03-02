import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CQJnseO0.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="binary-search" tabindex="-1"><a class="header-anchor" href="#binary-search"><span>Binary search</span></a></h1><p>Complessità: $O(\\text{log}N)$</p><h2 id="codice" tabindex="-1"><a class="header-anchor" href="#codice"><span>Codice</span></a></h2><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span></span>
<span class="line">l <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> r <span class="token operator">=</span> n<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span> l <span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span> r <span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se <code>check(x)</code> è prima vera e poi falsa (se no è analogo), <code>l</code> deve essere un valore per cui siamo sicuri che funzioni, mentre <code>r</code> che siamo sicuri non funzioni. Alla fine <code>l</code> sarà il più grande t.c <code>check(l)</code> è vero mentre <code>r</code> sarà il più piccolo t.c. che sia falso.</p><h2 id="risorse-esterne" tabindex="-1"><a class="header-anchor" href="#risorse-esterne"><span>Risorse esterne</span></a></h2><p><a href="https://cp-algorithms.com/num_methods/binary_search.html" target="_blank" rel="noopener noreferrer">https://cp-algorithms.com/num_methods/binary_search.html</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/materiale/binary_search.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const binary_search_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "binary_search.html.vue"]]);
const data = JSON.parse('{"path":"/materiale/binary_search.html","title":"Binary search","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Codice","slug":"codice","link":"#codice","children":[]},{"level":2,"title":"Risorse esterne","slug":"risorse-esterne","link":"#risorse-esterne","children":[]}],"git":{"updatedTime":1740822277000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":3,"url":"https://github.com/nik-din"}]},"filePathRelative":"materiale/binary_search.md"}');
export {
  binary_search_html as comp,
  data
};
