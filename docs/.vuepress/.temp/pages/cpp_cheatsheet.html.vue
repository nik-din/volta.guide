<template><div><h1 id="c-di-base" tabindex="-1"><a class="header-anchor" href="#c-di-base"><span>c++ di base</span></a></h1>
<h2 id="tipi" tabindex="-1"><a class="header-anchor" href="#tipi"><span>Tipi</span></a></h2>
<p>c++ ha tipi statici. Sono:</p>
<ul>
<li><code v-pre>bool</code> booleani, cioè <code v-pre>true</code> e <code v-pre>false</code></li>
<li><code v-pre>int</code> per rappresentare numeri interi tra -2147483648 e 2147483647 (ordine di grandezza 1e9)</li>
<li><code v-pre>long long int</code> per rappresentare numeri interi tra -9,223,372,036,854,775,808 e 9,223,372,036,854,775,807 (ordine di grandezza 1e18)</li>
<li><code v-pre>float</code> per rappresentare numeri con la virgola (da evitare per errori di precisione), massimo e minimo come gli <code v-pre>int</code></li>
<li><code v-pre>char</code> per singoli caratteri, si mette il carattere tra apici: <code v-pre>'a'</code></li>
<li><code v-pre>string</code> per liste di caratteri (parole), si mette il carattere tra doppie apici <code v-pre>&quot;a&quot;</code></li>
</ul>
<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h2>
<p>La struttra dell'if è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span>condizione1<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//codice</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>condizione2<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//solo se condizione1 è falsa</span></span>
<span class="line">    <span class="token comment">//codice</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">{</span> <span class="token comment">//se tutte le condizioni prima sono false</span></span>
<span class="line">    <span class="token comment">//codice</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nota:
= assegna un valore ad una variabile
== controlla se due valori sono uguali
!= controlla se sono diversi</p>
<h2 id="while-e-for" tabindex="-1"><a class="header-anchor" href="#while-e-for"><span>while e for</span></a></h2>
<p>La struttura di un while è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>condizione<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//codice</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>la struttura del for è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span>inizializzazione<span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> condizione<span class="token punctuation">,</span> i<span class="token operator">&lt;</span>N<span class="token punctuation">;</span> azione eseguita dopo ogni ciclo<span class="token punctuation">,</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//codice</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


