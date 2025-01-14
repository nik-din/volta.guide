<template><div><h1 id="lasciate-ogni-speranza" tabindex="-1"><a class="header-anchor" href="#lasciate-ogni-speranza"><span>Lasciate ogni speranza</span></a></h1>
<p>Link: (https://training.olinfo.it/task/preoii_dante)[https://training.olinfo.it/task/preoii_dante]<br>
Fonte: PreOII 2024</p>
<details>
  <summary>Categoria</summary>
<p>Sliding window</p>
</details>
<p><br></br></p>
<details>
  <summary>Sketch di soluzione:</summary>
<p>Sliding window: mi tengo un contatore e ogni volta che c'è 1 vado avanti, se c'è 0 diminuisco il contatore. Quando il contatore è negativo porto vanti l'estremo sinistro fino a quando torna non negativo.<br>
Complessità: <code v-pre>O(N)</code></p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">rimembra</span><span class="token punctuation">(</span><span class="token keyword">int</span> N<span class="token punctuation">,</span> <span class="token keyword">int</span> K<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> V<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


