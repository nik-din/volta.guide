<template><div><h1 id="c-di-base" tabindex="-1"><a class="header-anchor" href="#c-di-base"><span>c++ di base</span></a></h1>
<p>Quello sotto è un elenco riassuntivo di quello che faremo al corso base.
Se non avete mai imparato prima un linguaggio di programmazione (e non siete venuti a lezione),
può avere senso guardarsi qualche tutorial su internet, ad esempio <a href="https://cplusplus.com/doc/tutorial/" target="_blank" rel="noopener noreferrer">questo</a> (alcune cose sono un po' in dettaglio)
o <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer">questo</a>.<br>
(non li ho provati personalmente).</p>
<h2 id="struttura-di-base" tabindex="-1"><a class="header-anchor" href="#struttura-di-base"><span>Struttura di base</span></a></h2>
<p>Ogni file c++ che scriveremo avrà questa struttura:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/sdtc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//dopo ogni riga di codice si mette un ;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tipi" tabindex="-1"><a class="header-anchor" href="#tipi"><span>Tipi</span></a></h2>
<p>c++ ha tipi statici. Sono:</p>
<ul>
<li><code v-pre>bool</code> booleani, cioè <code v-pre>true</code> e <code v-pre>false</code> (o 1 e 0).</li>
<li><code v-pre>int</code> per rappresentare numeri interi tra -2147483648 e 2147483647 (ordine di grandezza 1e9).</li>
<li><code v-pre>long long int</code> per rappresentare numeri interi tra -9,223,372,036,854,775,808 e 9,223,372,036,854,775,807 (ordine di grandezza 1e18).</li>
<li><code v-pre>float</code> per rappresentare numeri con la virgola (da evitare per errori di precisione), massimo e minimo come gli <code v-pre>int</code>.</li>
<li><code v-pre>char</code> per singoli caratteri, si mette il carattere tra apici: <code v-pre>'a'</code>.</li>
<li><code v-pre>string</code> per liste di caratteri (parole), si mette il carattere tra doppie apici <code v-pre>&quot;stringa&quot;</code>.</li>
</ul>
<p>Per dichiarare una variabile si scrive <code v-pre>tipo nome_variabile = valore</code>.</p>
<h2 id="operatori" tabindex="-1"><a class="header-anchor" href="#operatori"><span>Operatori</span></a></h2>
<h3 id="int" tabindex="-1"><a class="header-anchor" href="#int"><span>int</span></a></h3>
<p>per fare operazioni tra int si usano i seguenti operatori:</p>
<ul>
<li><code v-pre>+</code> e <code v-pre>-</code> per addizione e sotrrazione</li>
<li><code v-pre>*</code> e <code v-pre>/</code> per moltiplicazione e divisione (intera perché tra int)</li>
<li><code v-pre>%</code> per il modulo (non importa se non sapete cos'è)</li>
</ul>
<h3 id="bool" tabindex="-1"><a class="header-anchor" href="#bool"><span>bool</span></a></h3>
<p>Gli operatori logici sono:</p>
<ul>
<li><code v-pre>&amp;&amp;</code> and logico (e).</li>
<li><code v-pre>||</code> or logico (o inclusivo).</li>
<li><code v-pre>!</code> negazione.</li>
</ul>
<h2 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o"><span>I/O</span></a></h2>
<p>Input:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">cin <span class="token operator">>></span> variabile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">cout <span class="token operator">&lt;&lt;</span> <span class="token string">"stringa"</span><span class="token punctuation">;</span></span>
<span class="line">cout <span class="token operator">&lt;&lt;</span> variabile<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h2>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nota:<br>
<code v-pre>=</code> assegna un valore ad una variabile<br>
<code v-pre>==</code> controlla se due valori sono uguali<br>
<code v-pre>!=</code> controlla se sono diversi</p>
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


