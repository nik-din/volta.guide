<template><div><h1 id="minimum-queue" tabindex="-1"><a class="header-anchor" href="#minimum-queue"><span>Minimum Queue</span></a></h1>
<p>La <em>queue</em> è una struttura dati della STL di tipo FIFO (i.e. First-In, First-Out), che consente di aggiungere elementi in fondo alla coda e di rimuoverli dalla testa.</p>
<p>Vogliamo modificare la queue in modo da riuscire a trovare anche il minimo in tempo costante. Per fare ciò memorizzeremo gli elementi in ordine non strettamente crescente: se l'elemento attualmente in fondo alla coda è maggiore di quello che stiamo aggiungendo non diventerà mai il minimo, quindi non ci serve e si può rimuovere.</p>
<p>Poiché abbiamo bisogno di rimuovere elementi da entrambe le estremità, utilizzeremo la seguente struttura dati:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Vediamo ora nel dettaglio le funzioni supportate.</p>
<h2 id="aggiungere-un-elemento" tabindex="-1"><a class="header-anchor" href="#aggiungere-un-elemento"><span>Aggiungere un elemento</span></a></h2>
<p>Prima di aggiungere un elemento dobbiamo rimuovere tutti quelli già presenti nella queue che sono maggiori di lui e che quindi non potranno mai diventare l'elemento minore.
In questo caso la complessità è <code v-pre>O(1)</code> amortizzato: una chiamata alla funzione <code v-pre>add</code> può potenzialmente richiedere tante operazioni, ma dato che ogni elemento viene aggiunto alla queue esattamente una volta e viene rimosso al più una volta, il caso medio è costante.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        q<span class="token punctuation">.</span><span class="token function">pop_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    q<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rimuovere-un-elemento" tabindex="-1"><a class="header-anchor" href="#rimuovere-un-elemento"><span>Rimuovere un elemento</span></a></h2>
<p>In questo caso per rimuovere un elemento dobbiamo avere un modo di distinguerlo dagli altri (e.g. valore, indice...), in quanto è possibile che sia già stato rimosso dalla queue.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        q<span class="token punctuation">.</span><span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trovare-il-minimo" tabindex="-1"><a class="header-anchor" href="#trovare-il-minimo"><span>Trovare il minimo</span></a></h2>
<p>Poiché gli elementi sono memorizzati in ordine crescente, l'elemento minore sarà quello nella testa della queue.</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="problemi" tabindex="-1"><a class="header-anchor" href="#problemi"><span>Problemi</span></a></h2>
<ul>
<li><RouteLink to="/materiale/problemi/1645.html">Nearest Smaller Values</RouteLink></li>
<li><RouteLink to="/materiale/problemi/tai_monete.html">Pila di monete</RouteLink></li>
<li>Dato un array <code v-pre>A</code> di <code v-pre>N</code> elementi e un intero <code v-pre>M &lt;= N</code>, trova il minimo di tutti i subarray (i.e. segmenti continui) di lunghezza <code v-pre>M</code> in <code v-pre>O(N)</code>.</li>
<li><RouteLink to="/materiale/problemi/1142.html">Advertisement</RouteLink></li>
<li><a href="https://cses.fi/problemset/task/1147" target="_blank" rel="noopener noreferrer">Maximum Building I</a></li>
</ul>
</div></template>


