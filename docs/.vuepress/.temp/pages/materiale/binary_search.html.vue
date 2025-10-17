<template><div><h1 id="binary-search" tabindex="-1"><a class="header-anchor" href="#binary-search"><span>Binary search</span></a></h1>
<p>Complessità: O(logN)</p>
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
<ul>
<li><a href="https://cp-algorithms.com/num_methods/binary_search.html" target="_blank" rel="noopener noreferrer">https://cp-algorithms.com/num_methods/binary_search.html</a>
Approfondimenti:</li>
<li><a href="https://cp-algorithms.com/num_methods/ternary_search.html" target="_blank" rel="noopener noreferrer">ternary search</a></li>
<li><a href="https://codeforces.com/blog/entry/45578" target="_blank" rel="noopener noreferrer">binary search parallele</a></li>
</ul>
<h2 id="problemi" tabindex="-1"><a class="header-anchor" href="#problemi"><span>Problemi</span></a></h2>
<ul>
<li><a href="https://training.olinfo.it/task/ois_annoluce" target="_blank" rel="noopener noreferrer">Annoluce</a></li>
<li><a href="https://training.olinfo.it/task/ois_avg2" target="_blank" rel="noopener noreferrer">avg2</a></li>
<li><a href="https://training.olinfo.it/task/oii_aeroporto" target="_blank" rel="noopener noreferrer">Aeroporto</a></li>
<li><RouteLink to="/materiale/problemi/trendytrash.html">Trendytrash</RouteLink></li>
<li><RouteLink to="/materiale/problemi/altavelocit%C3%A0.html">Altavelocità</RouteLink></li>
<li><a href="https://training.olinfo.it/task/ois_wine" target="_blank" rel="noopener noreferrer">Wine</a></li>
<li><a href="https://training.olinfo.it/task/oii_corteo" target="_blank" rel="noopener noreferrer">Corteo</a></li>
</ul>
</div></template>


