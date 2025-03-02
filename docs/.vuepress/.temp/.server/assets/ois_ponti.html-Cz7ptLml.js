import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.csbLxDaa.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ponti-e-isole" tabindex="-1"><a class="header-anchor" href="#ponti-e-isole"><span>Ponti e isole</span></a></h1><p>Link: <a href="https://training.olinfo.it/task/ois_ponti" target="_blank" rel="noopener noreferrer">ois_ponti</a></p><p>Fonte: OIS 2014 Round 2</p><details><summary>Categoria</summary> Grafi </details><details><summary>Sketch</summary> Notiamo che il problema si riduce ad individuare il numero di componenti connesse. Infatti ogni coppia di componenti connesse può essere unita tramite la costruzione di un ponte tra due nodi appartenenti alle due componenti. <br> Sia X il numero di componenti connesse, la risposta sarà quindi X-1. </details><details><summary>Soluzione</summary><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> adj<span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">&gt;</span> visited<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> u<span class="token operator">:</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;input.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> N<span class="token punctuation">,</span> M<span class="token punctuation">;</span> cin <span class="token operator">&gt;&gt;</span> N <span class="token operator">&gt;&gt;</span> M<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	adj<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	visited<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> M<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cin <span class="token operator">&gt;&gt;</span> x <span class="token operator">&gt;&gt;</span> y<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		adj<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		adj<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> R <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			R<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> R<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/problemi/ois_ponti.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ois_ponti_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ois_ponti.html.vue"]]);
const data = JSON.parse('{"path":"/problemi/ois_ponti.html","title":"Ponti e isole","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1732922180000,"contributors":[{"name":"Giovanni","username":"Giovanni","email":"112493877+ciao-gio@users.noreply.github.com","commits":1,"url":"https://github.com/Giovanni"}]},"filePathRelative":"problemi/ois_ponti.md"}');
export {
  ois_ponti_html as comp,
  data
};
