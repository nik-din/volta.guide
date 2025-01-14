<template><div><h1 id="coin-combinations-ii" tabindex="-1"><a class="header-anchor" href="#coin-combinations-ii"><span>Coin combinations II</span></a></h1>
<p>Link: <a href="https://cses.fi/problemset/task/1636" target="_blank" rel="noopener noreferrer">https://cses.fi/problemset/task/1636</a><br>
Fonte: Cses problem set</p>
<details>
  <summary>Categoria</summary>
<p>dp</p>
</details>
<details>
  <summary>Codice:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> N<span class="token punctuation">,</span> V<span class="token punctuation">;</span></span>
<span class="line">    cin <span class="token operator">>></span> N <span class="token operator">>></span> V<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> C<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        cin <span class="token operator">>></span> C<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
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
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;=</span>V<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+=</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span>C<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">%</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span>m<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> dp<span class="token punctuation">[</span>V<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


