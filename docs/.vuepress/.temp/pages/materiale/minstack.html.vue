<template><div><h1 id="minimum-stack" tabindex="-1"><a class="header-anchor" href="#minimum-stack"><span>Minimum Stack</span></a></h1>
<p>Lo <em>stack</em> è una struttura dati della STL di tipo LIFO (i.e. Last-In, First-Out), che consente di aggiungere e rimuovere elementi solo dalla cima in <code v-pre>O(1)</code>.</p>
<p>Vogliamo modificare lo stack in modo da riuscire a trovare anche il minimo in tempo costante. Per fare ciò memorizzeremo ogni elemento in coppie: l'elemento e il minimo nello stack a partire da questo.</p>
<p>Utilizzeremo quindi la seguente struttura dati:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">stack<span class="token operator">&lt;</span>pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">>></span> st<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Vediamo ora nel dettaglio le funzioni supportate.</p>
<h2 id="aggiungere-un-elemento" tabindex="-1"><a class="header-anchor" href="#aggiungere-un-elemento"><span>Aggiungere un elemento</span></a></h2>
<p>Per aggiungere un elemento basta aggiungere alla cima dello stack la seguente coppia: l'elemento che vogliamo aggiungere e il minimo nello stack.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">,</span> st<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> x <span class="token operator">:</span> <span class="token function">min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>second<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rimuovere-un-elemento" tabindex="-1"><a class="header-anchor" href="#rimuovere-un-elemento"><span>Rimuovere un elemento</span></a></h2>
<p>Per rimuovere un elemento possiamo semplicemente togliere quello in cima.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trovare-il-minimo" tabindex="-1"><a class="header-anchor" href="#trovare-il-minimo"><span>Trovare il minimo</span></a></h2>
<p>Il minimo nello stack è memorizzato nel secondo elemento della coppia in cima.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


