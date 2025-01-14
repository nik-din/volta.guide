<template><div><h1 id="binary-search" tabindex="-1"><a class="header-anchor" href="#binary-search"><span>Binary search</span></a></h1>
<p>Complessità: O(NlogN)</p>
<h2 id="codice" tabindex="-1"><a class="header-anchor" href="#codice"><span>Codice</span></a></h2>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span></span>
<span class="line">l <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> r <span class="token operator">=</span> n<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span> l <span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span> r <span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se <code v-pre>check(x)</code> è prima vera e poi falsa (se no è analogo), <code v-pre>l</code> deve essere un valore per cui siamo sicuri che funzioni,
mentre <code v-pre>r</code> che siamo sicuri non funzioni. Alla fine <code v-pre>l</code> sarà il più grande t.c <code v-pre>check(l)</code> è vero
mentre <code v-pre>r</code> sarà il più piccolo t.c. che sia falso.</p>
<h2 id="risorse-esterne" tabindex="-1"><a class="header-anchor" href="#risorse-esterne"><span>Risorse esterne</span></a></h2>
<p><a href="https://cp-algorithms.com/num_methods/binary_search.html" target="_blank" rel="noopener noreferrer">https://cp-algorithms.com/num_methods/binary_search.html</a></p>
</div></template>


