<template><div><h1 id="grafi" tabindex="-1"><a class="header-anchor" href="#grafi"><span>Grafi</span></a></h1>
<p>Un grafo è una struttura caratterizzata da nodi, o vertici, e archi. Di seguito useremo <code v-pre>N</code> per indicare il numero di nodi e <code v-pre>M</code> per il numero di archi.</p>
<h2 id="come-memorizzare-un-grafo" tabindex="-1"><a class="header-anchor" href="#come-memorizzare-un-grafo"><span>Come memorizzare un grafo?</span></a></h2>
<p>Quando durante le risoluzione di un problema dobbiamo ricevere in input un grafo possiamo, a seconda della situazione, decidere di utilizzare uno dei tre modi principali per memorizzarlo.</p>
<p>Il metodo più utilizzato è la lista di adiacenza, ma talvolta ne possono essere richiesti anche altri meno diffusi.</p>
<h3 id="lista-di-archi" tabindex="-1"><a class="header-anchor" href="#lista-di-archi"><span>Lista di archi</span></a></h3>
<p>Il primo metodo che affronteremo è la lista di archi. La lista di archi è un vettore di M elementi in cui ogni elemento rappresenta un arco ed è quindi costituito dal nodo di partenza, dal nodo di arrivo e, in caso di grafi pesati, anche il peso dell'arco.</p>
<p>L'implementazione in C++ è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">vector<span class="token operator">&lt;</span>array<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">>></span> <span class="token function">edges</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La complessità di:</p>
<ul>
<li>Sapere se un arco esiste è <code v-pre>O(M)</code></li>
<li>Iterare sugli archi di un nodo è <code v-pre>O(M)</code></li>
<li>Iterare su tutti gli archi è <code v-pre>O(M)</code></li>
<li>Aggiungere un arco è <code v-pre>O(1)</code></li>
<li>Rimuovere un arco è <code v-pre>O(M)</code></li>
</ul>
<p>La memoria usata è <code v-pre>O(M)</code>.</p>
<h3 id="matrice-di-adiacenza" tabindex="-1"><a class="header-anchor" href="#matrice-di-adiacenza"><span>Matrice di adiacenza</span></a></h3>
<p>La matrice di adiacenza è una matrice, o un vettore bidimensionale, di bool di dimensione N. In questo caso <code v-pre>adj[i][j]</code> sarà <code v-pre>true</code> se esiste l'arco i-&gt;j, <code v-pre>false</code> altrimenti.</p>
<p>L'implementazione in C++ è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">>></span> <span class="token function">adj</span><span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token generic-function"><span class="token function">vector</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span></span></span> <span class="token punctuation">(</span>N<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La complessità di:</p>
<ul>
<li>Sapere se un arco esiste è <code v-pre>O(1)</code></li>
<li>Iterare sugli archi di un nodo è <code v-pre>O(N)</code></li>
<li>Iterare su tutti gli archi è <code v-pre>O(N^2)</code></li>
<li>Aggiungere un arco è <code v-pre>O(1)</code></li>
<li>Rimuovere un arco è <code v-pre>O(1)</code></li>
</ul>
<p>La memoria usata è <code v-pre>O(N^2)</code>.</p>
<h3 id="lista-di-adiacenza" tabindex="-1"><a class="header-anchor" href="#lista-di-adiacenza"><span>Lista di adiacenza</span></a></h3>
<p>La lista di adiacenza è un vettore bidimensionale di dimensione N. Ogni elemento  <code v-pre>adj[i]</code> è quindi a sua volta un vettore che contiene tutti i nodi collegati con un arco al nodo i.</p>
<p>L'implementazione in C++ è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> <span class="token function">adj</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Sia <code v-pre>m</code> il numero di archi uscenti da un nodo, la complessità di:</p>
<ul>
<li>Sapere se un arco esiste è <code v-pre>O(m)</code></li>
<li>Iterare sugli archi di un nodo è <code v-pre>O(m)</code></li>
<li>Iterare su tutti gli archi è <code v-pre>O(N+M)</code></li>
<li>Aggiungere un arco è <code v-pre>O(1)</code></li>
<li>Rimuovere un arco è <code v-pre>O(m)</code></li>
</ul>
<p>La memoria usata è <code v-pre>O(N+M)</code>.</p>
<h2 id="algoritmi" tabindex="-1"><a class="header-anchor" href="#algoritmi"><span>Algoritmi</span></a></h2>
<p>La BFS e la DFS sono algoritmi che, da soli, non permettono di ricavare molte informazioni o di risolvere molti problemi. Sono infatti dei modi di visitare un grafo, che di solito vanno modificati per poter rispondere alla richiesta del problema.</p>
<h3 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs"><span>DFS</span></a></h3>
<p>La DFS, o depth-first search, è un algoritmo che permette di visitare il grado &quot;in profondità&quot;. Infatti è un algoritmo ricorsivo che parte da un nodo <code v-pre>v</code> e si sposta al primo nodo <code v-pre>u</code> che non è ancora stato visitato. Quando il nodo corrente non è collegato a nessun nodo non ancora visitato ritorna al &quot;padre&quot;, che si sposterà al figlio successivo (se esiste).</p>
<p>La complessita è <code v-pre>O(N+M)</code>. Infatti ogni nodo verrà visitato dall'algoritmo esattamente una volta, e anche ogni arco verrà percorso una sola volta.</p>
<p>L'implementazione in C++ che usa la lista di adiacenza è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token comment">//variabili globali da inizializzare:</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span> visited<span class="token punctuation">;</span> </span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> adj<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> u<span class="token operator">:</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">dfs</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs"><span>BFS</span></a></h3>
<p>La BFS, o breadth-first search, è invece un algoritmo che visita il grafo in ampiezza. A differenza della DFS è un algoritmo iterativo che sfrutta la queue. Il nodo corrente <code v-pre>v</code> si trova all'inizio della queue e si aggiungono in fondo a questa tutti i nodi <code v-pre>u</code> collegati a <code v-pre>v</code> con un arco.</p>
<p>Anche in questo caso la complessità è <code v-pre>O(N+M)</code>.</p>
<p>L'implementazione in C++ che usa la lista di adiacenza è:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token comment">//variabili:</span></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">>></span> <span class="token function">adj</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span> <span class="token function">visited</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">distance</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> q<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//x è il nodo di partenza</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> u <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> v <span class="token operator">:</span> adj<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">    visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    distance<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> distance<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra"><span>Dijkstra</span></a></h3>
<p>Dijkstra è un algoritmo per calcolare la distanza (minima) di un nodo a tutti gli altri. Funziona solo con pesi non negativi. L'idea è tenersi un vettore di distanze temporanee e processare ogni volta il nodo a distanza minore. Processare un nodo vuol dire aggiornare le distanze di tutti i vicini. Per capire qual'è il nodo a distanza minore si usa una <code v-pre>priority_queue</code> in cui le distanze vengono messe negative per prendere la più piccola (la <code v-pre>priority_queue</code> ritorna l'elemento maggiore).<br>
La complessità è <code v-pre>O((N+M)logN)</code>.<br>
Implementazione:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token comment">//variabili:</span></span>
<span class="line">vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">>></span><span class="token operator">></span> <span class="token function">adj</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">bool</span><span class="token operator">></span> <span class="token function">visited</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">distance</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> INT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">priority_queue<span class="token operator">&lt;</span>pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">>></span> pq<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">pq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//x è il nodo di partenza</span></span>
<span class="line">distance<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> v <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>second<span class="token punctuation">;</span></span>
<span class="line">  pq<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">  visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">auto</span> e<span class="token operator">:</span> adj<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> u <span class="token operator">=</span> e<span class="token punctuation">.</span>first<span class="token punctuation">;</span> <span class="token keyword">int</span> w <span class="token operator">=</span> e<span class="token punctuation">.</span>second<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>distance<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">></span>distance<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      distance<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token operator">=</span>distance<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">+</span>w<span class="token punctuation">;</span></span>
<span class="line">      pq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">-</span>distance<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">,</span> u<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


