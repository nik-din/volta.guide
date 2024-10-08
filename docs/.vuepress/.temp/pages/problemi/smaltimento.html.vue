<template><div><h1 id="smaltimento" tabindex="-1"><a class="header-anchor" href="#smaltimento"><span>Smaltimento</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/#/task/oii_smaltimento/statement" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/#/task/oii_smaltimento/statement</a>
Fonte: OII 2021</p>
<details>
  <summary>Categoria</summary>
<p>Grafi</p>
</details>
<p>Problema carino, non facile.<br>
<em>Nota</em><br>
<em>L'ho fatto un po' di tempo fa, non ricordo tanto della sol.</em></p>
<details>
  <summary>Hint 1:</summary>
<p>E' palesemente un grafo.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Dijkstra</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>Invece di capire quanto è distante il barile dalla fine, conviene vedere quanto ci si mette dalla fine al barile.</p>
</details>
<p><br></br></p>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token operator">></span> costo<span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> adj<span class="token punctuation">,</span> bi<span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span> visitato<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">smaltisci</span><span class="token punctuation">(</span><span class="token keyword">int</span> N<span class="token punctuation">,</span> <span class="token keyword">int</span> M<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> A<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> B<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  bi <span class="token operator">=</span> B<span class="token punctuation">;</span></span>
<span class="line">  visitato<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  costo<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> LONG_LONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  adj<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>M<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>bi<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> adj<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">:</span> bi<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                adj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    priority_queue<span class="token operator">&lt;</span>pair<span class="token operator">&lt;</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">>></span> q<span class="token punctuation">;</span></span>
<span class="line">    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> N<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    costo<span class="token punctuation">[</span>N<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> nodo<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        nodo <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>second<span class="token punctuation">;</span></span>
<span class="line">        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>visitato<span class="token punctuation">[</span>nodo<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">        visitato<span class="token punctuation">[</span>nodo<span class="token punctuation">]</span><span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">:</span> adj<span class="token punctuation">[</span>nodo<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">long</span> <span class="token keyword">long</span> sum <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">bool</span> b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> vicino<span class="token operator">:</span> bi<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>costo<span class="token punctuation">[</span>vicino<span class="token punctuation">]</span><span class="token operator">!=</span>LONG_LONG_MAX<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    sum<span class="token operator">+=</span>costo<span class="token punctuation">[</span>vicino<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        costo<span class="token punctuation">[</span>A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>costo<span class="token punctuation">[</span>A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sum<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">-</span>costo<span class="token punctuation">[</span>A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              </span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> costo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


