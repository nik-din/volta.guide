<template><div><h1 id="do-not-gather" tabindex="-1"><a class="header-anchor" href="#do-not-gather"><span>Do not gather!</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ois_gatherings" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/ois_gatherings</a><br>
Fonte: OIS 2021 round 3</p>
<details>
  <summary>Categoria</summary>
<p>sliding window</p>
</details>
<p>Problema facile non ovvio</p>
<details>
  <summary>Hint 1:</summary>
<p>Sliding window</p>
</details>
<br></br> 
<details>
  <summary>Sketch di soluzione:</summary>
<p>Sliding window, l è l'elemento per cui calcolo il numero di elementi più vicini di D, r è l'elemento più lontano con P[r]-P[l] &lt;= D;</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> n<span class="token punctuation">,</span> d<span class="token punctuation">;</span> cin <span class="token operator">>></span> n <span class="token operator">>></span> d<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">p</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cin <span class="token operator">>></span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">long</span> <span class="token keyword">long</span> sol <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> l<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> l<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>r <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token operator">-</span>p<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> d<span class="token punctuation">)</span> r<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    sol <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span> r<span class="token operator">-</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> sol <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


