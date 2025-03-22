<template><div><h1 id="altavelocita" tabindex="-1"><a class="header-anchor" href="#altavelocita"><span>Altavelocità</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/abc_altavelocita" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/abc_altavelocita</a>
Fonte: ABC 2016</p>
<details>
  <summary>Hint 1:</summary>
<p>Puoi controllare in O(n) se data una progressiva chilometrica, se ci sono più o meno di K chilometri di binari dal capolinea.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Puoi fare una binary search sulla soluzione</p>
</details>
<br></br>
<details>
  <summary>Sketch di soluzione:</summary>
<p>Facciamo una binary search sulla soluzione. Possimao controllare se una progressiva chilometrica è più o meno della soluzione semplicemente ciclando sugli lotti e vedendo se sono prima o dopo la progressiva.</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ll</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">"input.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">"output.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ll n<span class="token punctuation">,</span> k<span class="token punctuation">;</span> cin <span class="token operator">>></span> n <span class="token operator">>></span> k<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span>array<span class="token operator">&lt;</span>ll<span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">>></span> <span class="token function">vec</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ll mx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      ll a<span class="token punctuation">,</span> b<span class="token punctuation">;</span> cin <span class="token operator">>></span> a <span class="token operator">>></span> b<span class="token punctuation">;</span></span>
<span class="line">      vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      mx <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>mx<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">auto</span> check <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>ll val<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">bool</span> <span class="token punctuation">{</span></span>
<span class="line">      ll cont <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">for</span><span class="token punctuation">(</span>ll i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span><span class="token punctuation">(</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;=</span> vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                  cont <span class="token operator">+=</span> val<span class="token operator">-</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">              <span class="token keyword">else</span> cont <span class="token operator">+=</span> vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>vec<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">if</span><span class="token punctuation">(</span>cont <span class="token operator">>=</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  ll l <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> ll r <span class="token operator">=</span> mx<span class="token punctuation">;</span> <span class="token comment">//l è falso, r è vero</span></span>
<span class="line">  <span class="token keyword">while</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      ll m <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token operator">+</span>r<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span> r <span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">else</span> l<span class="token operator">=</span> m<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> r <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


