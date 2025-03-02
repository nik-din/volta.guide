import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CQJnseO0.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="coin-combinations-ii" tabindex="-1"><a class="header-anchor" href="#coin-combinations-ii"><span>Coin combinations II</span></a></h1><p>Link: <a href="https://cses.fi/problemset/task/1636" target="_blank" rel="noopener noreferrer">https://cses.fi/problemset/task/1636</a><br> Fonte: Cses problem set</p><details><summary>Categoria</summary><p>dp</p></details><details><summary>Codice:</summary><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> N<span class="token punctuation">,</span> V<span class="token punctuation">;</span></span>
<span class="line">    cin <span class="token operator">&gt;&gt;</span> N <span class="token operator">&gt;&gt;</span> V<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> C<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        cin <span class="token operator">&gt;&gt;</span> C<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">sort</span><span class="token punctuation">(</span>C<span class="token punctuation">,</span> C<span class="token operator">+</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> dp<span class="token punctuation">[</span>V<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;=</span>V<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>N<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>V<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;=</span>V<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+=</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">%</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span>m<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> dp<span class="token punctuation">[</span>V<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/problemi/coin_combinations_II.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coin_combinations_II_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "coin_combinations_II.html.vue"]]);
const data = JSON.parse('{"path":"/problemi/coin_combinations_II.html","title":"Coin combinations II","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1732208320000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":1,"url":"https://github.com/nik-din"}]},"filePathRelative":"problemi/coin_combinations_II.md"}');
export {
  coin_combinations_II_html as comp,
  data
};
