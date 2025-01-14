<template><div><h1 id="reading-papers" tabindex="-1"><a class="header-anchor" href="#reading-papers"><span>Reading papers</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ois_reading" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/ois_reading</a>
Fonte: OIS 2022 Final Round</p>
<details>
  <summary>Categoria</summary>
<p>greedy, stl</p>
</details>
<p>Carino</p>
<details>
  <summary>Hint 1:</summary>
<p>Parti dall'ultimo giorno.</p>
</details>
<br></br> 
<details>
  <summary>Sketch di soluzione:</summary>
<p>Decidi cosa leggere ogni giorno a partire dall'ultimo giorno. Per decidere ti tieni una priority_queue con gli P_i. All'inizio ci saranno solo gli articoli con D_i = -1, via via che si va avanti si aggiungono gli altri articoli.</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> N<span class="token punctuation">,</span> L<span class="token punctuation">;</span> cin <span class="token operator">>></span> N <span class="token operator">>></span> L<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> <span class="token function">A</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  priority_queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> d<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cin <span class="token operator">>></span> p <span class="token operator">>></span> d<span class="token punctuation">;</span></span>
<span class="line">    A<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token operator">+</span>L<span class="token punctuation">)</span><span class="token operator">%</span>L<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">int</span> risposta <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">:</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      risposta <span class="token operator">+=</span> q<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> risposta <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


