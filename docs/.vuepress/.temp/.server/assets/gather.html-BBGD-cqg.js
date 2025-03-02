import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CFd3vad-.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="do-not-gather" tabindex="-1"><a class="header-anchor" href="#do-not-gather"><span>Do not gather!</span></a></h1><p>Link: <a href="https://training.olinfo.it/task/ois_gatherings" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/ois_gatherings</a><br> Fonte: OIS 2021 round 3</p><details><summary>Categoria</summary><p>sliding window</p></details><p>Problema facile non ovvio</p><details><summary>Hint 1:</summary><p>Sliding window</p></details><br><details><summary>Sketch di soluzione:</summary><p>Sliding window, l è l&#39;elemento per cui calcolo il numero di elementi più vicini di D, r è l&#39;elemento più lontano con P[r]-P[l] &lt;= D;</p></details><br><details><summary>Soluzione:</summary><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> n<span class="token punctuation">,</span> d<span class="token punctuation">;</span> cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> d<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">p</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">long</span> <span class="token keyword">long</span> sol <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> l<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> l<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>r <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">-</span>p<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> d<span class="token punctuation">)</span> r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    sol <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span> r<span class="token operator">-</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> sol <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/problemi/gather.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gather_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "gather.html.vue"]]);
const data = JSON.parse('{"path":"/problemi/gather.html","title":"Do not gather!","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1729347937000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":2,"url":"https://github.com/nik-din"}]},"filePathRelative":"problemi/gather.md"}');
export {
  gather_html as comp,
  data
};
