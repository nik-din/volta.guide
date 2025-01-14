<template><div><h1 id="dreamteam-selection" tabindex="-1"><a class="header-anchor" href="#dreamteam-selection"><span>DreamTeam Selection</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ioit_dreamteam" target="_blank" rel="noopener noreferrer">ioit_dreamteam</a></p>
<p>Fonte: IOI in Teams 2017</p>
<details>
<summary>Categoria</summary>
Greedy  
</details>
<details>
<summary>Hint 1</summary>
Come risolveresti il problema se ogni persona avesse un valore fisso indipendente dai suoi compagni di squadra?
</details>
<details>
<summary>Hint 2</summary>
Per ogni coppia di amici, qual è tra i due il primo amico che ci conviene prendere?
</details>
<details>
<summary>Hint 3</summary>
Una volta preso il primo amico, che impatto ha sulla forza della squadra prendere anche il suo migliore amico? Come possiamo quindi vedere l'aggiunta del secondo amico di una coppia di migliori amici?
</details>
<details>
<summary>Sketch</summary>
Per ogni coppia di amici conviene prendere per primo l'amico con P[i] maggiore. Aggiungere il suo migliore amico alla squadra ha un impatto sulla forza del team pari a Q[i] + Q[F[i]] - P[i], ovvero la differenza tra i punti che effettuano se sono in squadra insieme e i punti che effettuerebbe l'amico con P[i] maggiore. 
<p>Se il problema non avesse la limitazione dei migliori amici (e avessimo quindi solo il vettore P) ci basterrebbe sortare P in ordine decrescente e sommare i primi K valori. Con le osservazioni che abbiamo fatto notiamo che ci basta per ogni coppia di amici aggiungere ad un vettore max(P[i], P[F[i]]) e Q[i] + Q[F[i]] - max(P[i], P[F[i]]), sortarlo in ordine decrescente e sommare i primi K valori.</p>
<p>N.B. nella soluzione che è allegata qui if (i &lt; F[i]) serve ad accertarsi che considereremo ogni coppia una sola volta e per sortare il vettore in ordine decrescente usiamo una lambda (ci sono anche altri modi di sortare in ordine decrescente ma la lambda è più versatile e permette di utilizzare funzioni di compare più complesse)</p>
</details>
<details>
<summary>Soluzione</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXN</span> <span class="token expression"><span class="token number">100000</span></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token keyword">int</span> N<span class="token punctuation">,</span> <span class="token keyword">int</span> K<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> F<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> P<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> Q<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> A<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> F<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">int</span> C <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>P<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> P<span class="token punctuation">[</span>F<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            A<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>C<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            A<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>Q<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> Q<span class="token punctuation">[</span>F<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> C<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">begin</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">end</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> i <span class="token operator">></span> j<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> X <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> K<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        X <span class="token operator">+=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> X<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> N<span class="token punctuation">,</span> K<span class="token punctuation">;</span> cin <span class="token operator">>></span> N <span class="token operator">>></span> K<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">F</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">P</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Q</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        cin <span class="token operator">>></span> F<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>></span> P<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>></span> Q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token function">select</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> K<span class="token punctuation">,</span> F<span class="token punctuation">,</span> P<span class="token punctuation">,</span> Q<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


