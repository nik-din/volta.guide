<template><div><h1 id="trees" tabindex="-1"><a class="header-anchor" href="#trees"><span>Trees</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/#/task/weoi_trees/statement" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/#/task/weoi_trees/statement</a><br>
Fonte: WEOI 2024</p>
<details>
  <summary>Categoria</summary>
<p>dp, alberi</p>
</details>
<p>Problema carino, forse il più facile della competizione.</p>
<details>
  <summary>Hint 1:</summary>
<p>dp su alberi</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Nella transizione cosa ti interessa sapere sui sottoalberi dei figli?</p>
</details>
<br></br> 
<details>
  <summary>Sketch di soluzione:</summary>
<p>Fai una dp du alberi con due array.
In uno ti salvi il numero di combinazioni quando nel sottoalbero c'è massimo un double agent nella path che parte dalla radice.
Nell'altro ti salvi la stessa cosa ma con due double agent.</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ll</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">ll md <span class="token operator">=</span> <span class="token number">1e9</span><span class="token operator">+</span><span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> adj<span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span>ll<span class="token operator">></span> dp_1<span class="token punctuation">;</span> <span class="token comment">//c'è un double agent sulla stassa path scendendo dalla radice</span></span>
<span class="line">vector<span class="token operator">&lt;</span>ll<span class="token operator">></span> dp_2<span class="token punctuation">;</span> <span class="token comment">//ci sono due double agent sulla stessa path scendendo dalla radice</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    ll prod1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    ll sum1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    ll sum2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token operator">:</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>u<span class="token operator">==</span>e<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        prod1 <span class="token operator">*=</span> <span class="token punctuation">(</span>dp_1<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        prod1 <span class="token operator">%=</span> md<span class="token punctuation">;</span></span>
<span class="line">        sum1 <span class="token operator">+=</span> dp_1<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        sum1 <span class="token operator">%=</span>md<span class="token punctuation">;</span></span>
<span class="line">        sum2 <span class="token operator">+=</span> dp_2<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        sum2 <span class="token operator">%=</span>md<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    dp_1<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> prod1<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    dp_2<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> sum1<span class="token operator">+</span>sum2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">count_sets</span><span class="token punctuation">(</span><span class="token keyword">int</span> N<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> u<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    adj<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    dp_1<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    dp_2<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>N<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        adj<span class="token punctuation">[</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        adj<span class="token punctuation">[</span>v<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>u<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>dp_1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">+</span>dp_2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">%</span>md<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


