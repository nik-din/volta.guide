<template><div><h1 id="materiale" tabindex="-1"><a class="header-anchor" href="#materiale"><span>Materiale</span></a></h1>
<p>Qui caricheremo via via materiale.</p>
<h2 id="pragma" tabindex="-1"><a class="header-anchor" href="#pragma"><span>Pragma</span></a></h2>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">GCC <span class="token function">optimize</span><span class="token punctuation">(</span></span><span class="token string">"O3,unroll-loops,fast-math,trapv"</span><span class="token expression"><span class="token punctuation">)</span></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">GCC <span class="token function">target</span><span class="token punctuation">(</span></span><span class="token string">"popcnt,avx2,avx512bw"</span><span class="token expression"><span class="token punctuation">)</span></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>trap2</code> crasha con overflow.</p>
<h2 id="dp-avanzata" tabindex="-1"><a class="header-anchor" href="#dp-avanzata"><span>Dp avanzata</span></a></h2>
<p>Una raccolta di argomenti in ordine sparso su dp.</p>
<ul>
<li><RouteLink to="/materiale/inversion_trick.html">Inversion trick</RouteLink> (chiamo così un trucco per contare il numero di transizioni)</li>
<li><RouteLink to="/materiale/bitmask_dp.html">Bitmask dp</RouteLink></li>
<li><RouteLink to="/materiale/range_dp.html">Range dp</RouteLink>
Argomenti avanzati e poco utili:</li>
<li><RouteLink to="/materiale/cht.html">Convex hull trick</RouteLink></li>
<li><RouteLink to="/materiale/slope_trick.html">Slope trick</RouteLink></li>
</ul>
<h2 id="minimum-queue-stack" tabindex="-1"><a class="header-anchor" href="#minimum-queue-stack"><span>Minimum queue/stack</span></a></h2>
<p>Appunti lezione:</p>
<ul>
<li><RouteLink to="/materiale/minstack.html">Minimum Stack</RouteLink></li>
<li><RouteLink to="/materiale/minqueue.html">Minimum Queue</RouteLink></li>
</ul>
<p>Problemi svolti a lezione:</p>
<ul>
<li><RouteLink to="/problemi/1645.html">Nearest Smaller Values</RouteLink></li>
<li><RouteLink to="/problemi/tai_monete.html">Pila di monete</RouteLink></li>
</ul>
<p>Altri problemi:</p>
<ul>
<li>Dato un array <code v-pre>A</code> di <code v-pre>N</code> elementi e un intero <code v-pre>M &lt;= N</code>, trova il minimo di tutti i subarray (i.e. segmenti continui) di lunghezza <code v-pre>M</code> in <code v-pre>O(N)</code>.</li>
<li><RouteLink to="/problemi/1142.html">Advertisement</RouteLink></li>
<li><a href="https://cses.fi/problemset/task/1147" target="_blank" rel="noopener noreferrer">Maximum Building I</a></li>
</ul>
<h2 id="greedy2-e-sliding-window" tabindex="-1"><a class="header-anchor" href="#greedy2-e-sliding-window"><span>Greedy2 e sliding window</span></a></h2>
<p>Sliding window:</p>
<ul>
<li><RouteLink to="/problemi/dante.html">Dante</RouteLink></li>
<li><RouteLink to="/problemi/gather.html">Gathering</RouteLink></li>
</ul>
<p>Greedy:</p>
<ul>
<li><RouteLink to="/problemi/dreamteam.html">Dreamteam</RouteLink></li>
<li><RouteLink to="/problemi/money.html">Money</RouteLink></li>
<li><RouteLink to="/problemi/reading.html">Reading</RouteLink></li>
</ul>
<h2 id="grafi" tabindex="-1"><a class="header-anchor" href="#grafi"><span>Grafi</span></a></h2>
<p><RouteLink to="/materiale/grafi.html">Appunti lezione</RouteLink></p>
<p>Problemi svolti a lezione:</p>
<ul>
<li><RouteLink to="/problemi/ois_ponti.html">ois_ponti</RouteLink></li>
<li><RouteLink to="/problemi/oii_maree.html">oii_maree</RouteLink></li>
</ul>
<p>Altri problemi (in ordine di difficoltà):</p>
<ul>
<li><a href="https://training.olinfo.it/task/sunny" target="_blank" rel="noopener noreferrer">sunny</a></li>
<li><a href="https://training.olinfo.it/task/ois_monete" target="_blank" rel="noopener noreferrer">ois_monete</a></li>
<li><a href="https://training.olinfo.it/task/ois_patrol2" target="_blank" rel="noopener noreferrer">ois_police2</a></li>
<li><a href="https://training.olinfo.it/task/ois_rainstorm" target="_blank" rel="noopener noreferrer">ois_rainstorm</a></li>
</ul>
<h2 id="dp" tabindex="-1"><a class="header-anchor" href="#dp"><span>dp</span></a></h2>
<p>problemi fatti a lezione:</p>
<ul>
<li><RouteLink to="/problemi/poldo.html">poldo</RouteLink></li>
<li><RouteLink to="/problemi/police3.html">police3</RouteLink></li>
<li><RouteLink to="/problemi/coin_combinations_II.html">coin combinations II</RouteLink></li>
</ul>
<p>problemi:</p>
<ul>
<li><a href="https://training.olinfo.it/task/ois_brackets2" target="_blank" rel="noopener noreferrer">brackets2</a></li>
</ul>
<p>L'intero <a href="https://atcoder.jp/contests/dp" target="_blank" rel="noopener noreferrer">atcoder dp contest</a>. L'ordine di difficoltà è A B C D H F E I G K L M N P S O Q R J U Z Y X T V W (all'incirca, la fonte è un commento su cf che penso li abbia ordinati per numero di persone che li hanno risolti in gara). Le soluzioni si possono trovare <a href="https://nwatx.me/post/atcoderdp" target="_blank" rel="noopener noreferrer">qua</a>.</p>
<h2 id="greedy-e-binary-search" tabindex="-1"><a class="header-anchor" href="#greedy-e-binary-search"><span>Greedy e binary search</span></a></h2>
<p><RouteLink to="/materiale/binary_search.html">codice binary search</RouteLink><br>
<RouteLink to="/materiale/fastexp.html">codice fastexp</RouteLink><br>
<strong>Introduttivi</strong></p>
<ul>
<li><a href="https://training.olinfo.it/task/ois_annoluce" target="_blank" rel="noopener noreferrer">Annoluce</a></li>
<li><a href="https://training.olinfo.it/task/ois_rectangle" target="_blank" rel="noopener noreferrer">Rectangle</a></li>
<li><a href="https://training.olinfo.it/task/ois_truffa" target="_blank" rel="noopener noreferrer">Truffa</a></li>
<li><a href="https://training.olinfo.it/task/ois_avg2" target="_blank" rel="noopener noreferrer">avg2</a></li>
<li><a href="https://training.olinfo.it/task/oii_aeroporto" target="_blank" rel="noopener noreferrer">Aeroporto</a></li>
<li><a href="https://training.olinfo.it/task/ois_avg" target="_blank" rel="noopener noreferrer">avg</a></li>
</ul>
<p><strong>Interessanti</strong></p>
<ul>
<li><a href="https://training.olinfo.it/task/oii_trendytrash" target="_blank" rel="noopener noreferrer">Trendytrash</a>, <RouteLink to="/problemi/trendytrash.html">hint e sol</RouteLink></li>
<li><a href="https://training.olinfo.it/task/abc_altavelocita" target="_blank" rel="noopener noreferrer">Altavelocità</a>, <RouteLink to="/problemi/altavelocit%C3%A0.html">hint e sol</RouteLink></li>
</ul>
<p><strong>Difficili</strong><br>
Nota: questi problemi sono pensati per l'avanzato</p>
<ul>
<li><a href="https://training.olinfo.it/task/ois_wine" target="_blank" rel="noopener noreferrer">Wine</a></li>
<li><a href="https://training.olinfo.it/task/oii_corteo" target="_blank" rel="noopener noreferrer">Corteo</a></li>
<li><a href="https://training.olinfo.it/task/oii_lungomare" target="_blank" rel="noopener noreferrer">Lungomare</a><br>
Approfondimenti in più:</li>
<li><a href="https://cp-algorithms.com/num_methods/ternary_search.html" target="_blank" rel="noopener noreferrer">ternary search</a></li>
<li><a href="https://codeforces.com/blog/entry/45578" target="_blank" rel="noopener noreferrer">binary search parallele</a></li>
</ul>
<h2 id="base" tabindex="-1"><a class="header-anchor" href="#base"><span>Base</span></a></h2>
<h3 id="c-base" tabindex="-1"><a class="header-anchor" href="#c-base"><span>c++ base</span></a></h3>
<p><RouteLink to="/materiale/cpp_cheatsheet.html">sintassi base c++</RouteLink></p>
<h3 id="problemi" tabindex="-1"><a class="header-anchor" href="#problemi"><span>Problemi</span></a></h3>
<h4 id="lezione-3" tabindex="-1"><a class="header-anchor" href="#lezione-3"><span>Lezione 3</span></a></h4>
<ul>
<li><a href="https://training.olinfo.it/task/ois_farmula1" target="_blank" rel="noopener noreferrer">Farmula 1</a></li>
<li><a href="https://training.olinfo.it/task/ois_f1" target="_blank" rel="noopener noreferrer">Formula 1</a></li>
<li><a href="https://training.olinfo.it/task/ois_goose" target="_blank" rel="noopener noreferrer">Goose game</a></li>
<li><a href="https://training.olinfo.it/task/ois_cars" target="_blank" rel="noopener noreferrer">Cars</a></li>
<li><a href="https://training.olinfo.it/task/ois_avg" target="_blank" rel="noopener noreferrer">Avg</a></li>
<li><a href="https://training.olinfo.it/task/ois_interrogazioni" target="_blank" rel="noopener noreferrer">Interrogazioni</a></li>
</ul>
<h4 id="lezione-2" tabindex="-1"><a class="header-anchor" href="#lezione-2"><span>Lezione 2</span></a></h4>
<ul>
<li><a href="https://training.olinfo.it/task/pari" target="_blank" rel="noopener noreferrer">Pari</a></li>
<li><a href="https://training.olinfo.it/task/ois_disks" target="_blank" rel="noopener noreferrer">Disks</a></li>
<li><a href="https://training.olinfo.it/task/ois_cake" target="_blank" rel="noopener noreferrer">Cake</a></li>
<li><a href="https://training.olinfo.it/task/ois_sign" target="_blank" rel="noopener noreferrer">Sign</a></li>
</ul>
<h2 id="avanzato" tabindex="-1"><a class="header-anchor" href="#avanzato"><span>Avanzato</span></a></h2>
<h3 id="editorial-gst" tabindex="-1"><a class="header-anchor" href="#editorial-gst"><span>Editorial gst</span></a></h3>
<p>Ecco l'editorial:</p>
<ul>
<li><RouteLink to="/problemi/gather.html">A</RouteLink></li>
<li><RouteLink to="/problemi/money.html">B</RouteLink></li>
<li><RouteLink to="/problemi/reading.html">C</RouteLink></li>
<li><RouteLink to="/problemi/renovations.html">D</RouteLink></li>
</ul>
<p>l'E sarà per la prossima volta 😉</p>
</div></template>


