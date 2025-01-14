<template><div><h1 id="splitting-the-bill" tabindex="-1"><a class="header-anchor" href="#splitting-the-bill"><span>Splitting the bill</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ois_money" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/ois_money</a><br>
Fonte: OIS 2020 Round 1</p>
<details>
  <summary>Categoria</summary>
<p>greedy</p>
</details>
<p>Descrizione rapida del problema</p>
<details>
  <summary>Hint 1:</summary>
<p>Non pensare al grafo</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Gli archi non ci interessano veramente. Considerando una persona, quali condizioni devono essere rispettate perché sia ripagato?</p>
</details>
<br></br> 
<details>
  <summary>Sketch di soluzione:</summary>
<p>Crea un array in cui ti salvi quanto ogni persona ha pagato/guadagnato. A quel punto fai le transizioni tra la prima e la seconda persona, la seconda e la terza e così via.</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> n<span class="token punctuation">;</span> cin <span class="token operator">>></span>n<span class="token punctuation">;</span> <span class="token keyword">int</span> m<span class="token punctuation">;</span> cin <span class="token operator">>></span> m<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">vec</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> a<span class="token punctuation">,</span> w<span class="token punctuation">,</span> b<span class="token punctuation">;</span></span>
<span class="line">    cin <span class="token operator">>></span> a <span class="token operator">>></span> b <span class="token operator">>></span> w<span class="token punctuation">;</span></span>
<span class="line">    vec<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">-=</span> w<span class="token punctuation">;</span> vec<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">+=</span> w<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  vector<span class="token operator">&lt;</span>array<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">>></span> <span class="token function">sol</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> cont <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> cont<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    sol<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">abs</span><span class="token punctuation">(</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>sol<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sol<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    vec<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> cont <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> ar<span class="token operator">:</span> sol<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>ar<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> ar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">' '</span> <span class="token operator">&lt;&lt;</span> ar<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">' '</span> <span class="token operator">&lt;&lt;</span> ar<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>   </span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


