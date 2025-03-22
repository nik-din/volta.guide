<template><div><h1 id="nearest-smaller-values" tabindex="-1"><a class="header-anchor" href="#nearest-smaller-values"><span>Nearest Smaller Values</span></a></h1>
<p>Link: <a href="https://cses.fi/problemset/task/1645" target="_blank" rel="noopener noreferrer">1645</a></p>
<p>Fonte: CSES problemset</p>
<details>
<summary>Categoria</summary>
minqueue
</details>
<details>
<summary>Sketch</summary>
Per risolvere il problema ci basta usare una minqueue, modificando opportunamente la funzione add affinché ritorni il valore in fondo prima di aggiungerne uno nuovo. Nell'implementazione viene usata una struct, se non vi è chiaro qualcosa potete chiedere a noi o provare a controllare su internet, ad esempio https://www.w3schools.com/cpp/cpp_structs.asp.
</details>
<details>
<summary>Soluzione</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">MinQueue</span> <span class="token punctuation">{</span></span>
<span class="line">  deque<span class="token operator">&lt;</span>array<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">>></span> q<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">>=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      q<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">int</span> r <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">,</span> i<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> r<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> N<span class="token punctuation">;</span> cin <span class="token operator">>></span> N<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">X</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cin <span class="token operator">>></span> X<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  MinQueue Q<span class="token punctuation">;</span></span>
<span class="line">  Q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> Q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>X<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">' '</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


