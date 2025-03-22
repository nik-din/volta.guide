<template><div><h1 id="ponti-e-isole" tabindex="-1"><a class="header-anchor" href="#ponti-e-isole"><span>Ponti e isole</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ois_ponti" target="_blank" rel="noopener noreferrer">ois_ponti</a></p>
<p>Fonte: OIS 2014 Round 2</p>
<details>
<summary>Categoria</summary>
Grafi
</details>
<details>
<summary>Sketch</summary>
Notiamo che il problema si riduce ad individuare il numero di componenti connesse. Infatti ogni coppia di componenti connesse può essere unita tramite la costruzione di un ponte tra due nodi appartenenti alle due componenti.
<br>
Sia X il numero di componenti connesse, la risposta sarà quindi X-1.
</details>
<details>
<summary>Soluzione</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> adj<span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span> visited<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> u<span class="token operator">:</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">"input.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">freopen</span><span class="token punctuation">(</span><span class="token string">"output.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> <span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> N<span class="token punctuation">,</span> M<span class="token punctuation">;</span> cin <span class="token operator">>></span> N <span class="token operator">>></span> M<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	adj<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	visited<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> M<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		cin <span class="token operator">>></span> x <span class="token operator">>></span> y<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		adj<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		adj<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> R <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			R<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	cout <span class="token operator">&lt;&lt;</span> R<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


