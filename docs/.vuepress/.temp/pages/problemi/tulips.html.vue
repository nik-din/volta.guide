<template><div><h1 id="tulips" tabindex="-1"><a class="header-anchor" href="#tulips"><span>Tulips</span></a></h1>
<p>Link: <a href="https://training.olinfo.it/task/ois_tulips" target="_blank" rel="noopener noreferrer">https://training.olinfo.it/task/ois_tulips</a>
Fonte: OIS 2024 Round 2</p>
<details>
  <summary>Categoria</summary>
<p>dp optimization</p>
</details>
<p>non facile</p>
<details>
  <summary>Hint 1:</summary>
<p>trova la dp naive n, k</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>per ogni k cicla su n</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>vorremmo in qualche salvare stati della dp passati sapendo qualcosa sul minimo dell'ultimo intervallo</p>
</details>
<details>
  <summary>Hint 4:</summary>
<p>teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione sapendo che l'ultimo intervallo ha come minimo T[indice].</p>
</details>
<br></br> 
<details>
  <summary>Sketch di soluzione:</summary>
<p>Facciamo una dp n, k e la calcoliamo ciclando su k e per ogni k ciclando su n.<br>
Ci teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione senza l'ultimo intervallo e sapendo che questo ha come minimo T[indice] (quindi la sol sarebbe valore + T[indice]).
Per ogni i vogliamo aggiornare lo stack con un nuovo valore che chiamiamo S[i] e calcolare dp[i][j] (1&lt;=j&lt;=k).
All'inizio S[i] sarà dp[i-1][j-1] (l'ultimo intervallo è solo T[i]).<br>
Poi prendiamo tutti quelli nello stack (dalla cima) e vediamo se il loro minimo dell'ultimo intervallo, chimamalo A è maggiore di T[i] che stiamo considerando.
Se A &gt;= T[i] allora il minimo dell'ultimo intervallo sarà T[i]. Quindi vediamo se il valore che abbiamo nello stack è meglio di S[i] e togliamo l'elemento dallo stack, perché non rispetta più le sue condizioni (il minimo dell'ultimo intervallo sarà &lt; T[indice]).<br>
Se A &lt; T[i] smettiamo di togliere elementi dallo stack e dp[i][j] = max(S[i] + T[i], dp[indice dell'elemento in cima allo stack][j]).
Questo perché o l'ultimo intervallo avrà come minimo T[i] (e questo è il caso S[i]+T[i]) o sarà minore di T[i] (e questo è il caso della dp).<br>
La soluzione non è facile da capire e non è spiegata benissimo per ogni dubbio leggete il codice e convincetevi di quello che fa.</p>
</details>
<br></br>
<details>
  <summary>Soluzione:</summary>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h></span></span></span>
<span class="line"><span class="token keyword">using</span> ll <span class="token operator">=</span> <span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  iostream<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ll n<span class="token punctuation">,</span> k<span class="token punctuation">;</span></span>
<span class="line">  cin <span class="token operator">>></span> n <span class="token operator">>></span> k<span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span>ll<span class="token operator">></span> <span class="token function">T</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    cin <span class="token operator">>></span> T<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  vector<span class="token operator">&lt;</span>ll<span class="token operator">></span> <span class="token function">dp</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  vector<span class="token operator">&lt;</span>ll<span class="token operator">></span> <span class="token function">prev</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ll t <span class="token operator">=</span> T<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    t <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> T<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span><span class="token punctuation">(</span>ll i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    stack<span class="token operator">&lt;</span>array<span class="token operator">&lt;</span>ll<span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">>></span> st<span class="token punctuation">;</span> <span class="token comment">//{indice, prev -> sol con ultimo a t[indice]}</span></span>
<span class="line">    prev <span class="token operator">=</span> dp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span>ll j <span class="token operator">=</span> i<span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      ll tmp <span class="token operator">=</span> prev<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> T<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> T<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        tmp <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp <span class="token operator">+</span> T<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span>   </span>
<span class="line">      st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>j<span class="token punctuation">,</span> tmp<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  cout <span class="token operator">&lt;&lt;</span> dp<span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">'\n'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div></template>


