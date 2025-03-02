<template><div><h1 id="esponenziazione-veloce" tabindex="-1"><a class="header-anchor" href="#esponenziazione-veloce"><span>Esponenziazione veloce</span></a></h1>
<p>Complessità: $O(\text{log}N)$ (dove N è l'esponente)</p>
<h2 id="codice" tabindex="-1"><a class="header-anchor" href="#codice"><span>Codice</span></a></h2>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">int</span> <span class="token function">fastexp</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">fastexp</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> c<span class="token operator">*</span>c<span class="token operator">*</span>a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> c<span class="token operator">*</span>c<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Attenti a overflow, spesso va implementato con i <code v-pre>long long</code>  e i moduli.</p>
<h2 id="risorse-esterne" tabindex="-1"><a class="header-anchor" href="#risorse-esterne"><span>Risorse esterne</span></a></h2>
<p><a href="https://cp-algorithms.com/algebra/binary-exp.html" target="_blank" rel="noopener noreferrer">https://cp-algorithms.com/algebra/binary-exp.html</a></p>
</div></template>

<script
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  type="text/javascript">
</script>
