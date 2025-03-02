import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.IYfY5e4b.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lasciate-ogni-speranza" tabindex="-1"><a class="header-anchor" href="#lasciate-ogni-speranza"><span>Lasciate ogni speranza</span></a></h1><p>Link: (https://training.olinfo.it/task/preoii_dante)[https://training.olinfo.it/task/preoii_dante]<br> Fonte: PreOII 2024</p><details><summary>Categoria</summary><p>Sliding window</p></details><p><br></p><details><summary>Sketch di soluzione:</summary><p>Sliding window: mi tengo un contatore e ogni volta che c&#39;è 1 vado avanti, se c&#39;è 0 diminuisco il contatore. Quando il contatore è negativo porto vanti l&#39;estremo sinistro fino a quando torna non negativo.<br> Complessità: <code>O(N)</code></p></details><br><details><summary>Soluzione:</summary><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">rimembra</span><span class="token punctuation">(</span><span class="token keyword">int</span> N<span class="token punctuation">,</span> <span class="token keyword">int</span> K<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> V<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> sol <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span></span>
<span class="line">  l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> cont <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">&lt;=</span>N<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span>r<span class="token operator">&lt;</span>N <span class="token operator">&amp;&amp;</span> V<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span><span class="token punctuation">(</span>cont <span class="token operator">&lt;</span> K<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">              cont<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">              r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">else</span> <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  sol <span class="token operator">=</span> r<span class="token operator">-</span>l<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">&lt;=</span>N<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">int</span> lst <span class="token operator">=</span> V<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      l<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span>lst <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">&lt;</span>N<span class="token operator">&amp;&amp;</span>V<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">          r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">&lt;</span>N<span class="token operator">&amp;&amp;</span>V<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      sol <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>sol<span class="token punctuation">,</span> r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> sol<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/problemi/dante.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dante_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "dante.html.vue"]]);
const data = JSON.parse('{"path":"/problemi/dante.html","title":"Lasciate ogni speranza","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1736443395000,"contributors":[{"name":"nik-din","email":"nik.dindo@gmail.com","commits":1}]},"filePathRelative":"problemi/dante.md"}');
export {
  dante_html as comp,
  data
};
