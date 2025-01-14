<template><div><h1 id="algobadge" tabindex="-1"><a class="header-anchor" href="#algobadge"><span>Algobadge</span></a></h1>
<p><strong>work in progress!</strong>
Qui puoi trovare hint per i problemi di Algobadge!
Algobadge è un raccolta di problemi divisi per argomento il cui completamento serve, ad esempio, per fare  gli stage o partecipare alle nazionali.
E' un ottimo modo per esercitarsi negli argomenti imparati.</p>
<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro"><span>Intro</span></a></h2>
<p>Tutti i problemi di categoria servono per allenarsi a scrivere in c++.
Per questo non dovrebbero servire hint, se avete bug che non capite come risolvere chiedete pure a noi!</p>
<h2 id="lib" tabindex="-1"><a class="header-anchor" href="#lib"><span>Lib</span></a></h2>
<p>I problemi in questa categoria richiedono di conoscere l'stl.</p>
<h3 id="cestini" tabindex="-1"><a class="header-anchor" href="#cestini"><span>Cestini</span></a></h3>
<details>
  <summary>Hint:</summary>
<p>Usa un vettore di vettori.</p>
</details>
<h3 id="catalogo" tabindex="-1"><a class="header-anchor" href="#catalogo"><span>Catalogo</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Vogliamo tenerci valori di cui non ci interessa l'ordine e possono esserci duplicati. Quindi possiamo usare.....</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Usa un unordered_multiset</p>
</details>
<h3 id="autogrill" tabindex="-1"><a class="header-anchor" href="#autogrill"><span>Autogrill</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Vogliamo tenerci valori diversi tra loro e ci interessa vedere l'elemento più vicino ad un certo valore. Se solo ci fosse una struttura dati con una funzione simile....</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Usa un set con lower_bound (attento a come usare lower_bound).</p>
</details>
<h2 id="greedy" tabindex="-1"><a class="header-anchor" href="#greedy"><span>Greedy</span></a></h2>
<p>Tutti questi problemi si risolvono con tecniche greedy, quindi facendo scelte in modo avido, basandosi su un solo criterio.
Potrebbe servire anche una binary search 😉</p>
<h3 id="collezionismo" tabindex="-1"><a class="header-anchor" href="#collezionismo"><span>Collezionismo</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Intuitivamente come mettiamo i modellini sugli scaffali? Spoiler: in ordine crescente di C[i] (o decrescente).</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Se non ci fossero scaffali D sarebbe la somma delle differenze tra elementi consecutivi (se sono sortati).</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>Aggiungendo uno scaffale come diminuisce la somma dei D[j]?</p>
</details>
<details>
  <summary>Hint 4:</summary>
<p>Sorta le differenze tra elementi consecutivi.</p>
</details>
<h3 id="truffa" tabindex="-1"><a class="header-anchor" href="#truffa"><span>Truffa</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Il criterio greedy dovrebbe essere chiaro, semplicemente sorto V.</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>Se la complessità non torna, evita ad esempio di ricalcolare la somma o risortare ogni volta.</p>
</details>
<h3 id="quadri" tabindex="-1"><a class="header-anchor" href="#quadri"><span>Quadri</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Calcolare B direttamente non è così facile.
Però il fatto che ci chieda il B massimale e il fatto che i B che funzionano sono distribuiti in un modo ben preciso potrebbe darci un'idea.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Binary search su B</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>Come facciamo a controllare che un certo B funzioni? Spoiler: sliding window</p>
</details>
<h2 id="rec" tabindex="-1"><a class="header-anchor" href="#rec"><span>Rec</span></a></h2>
<h3 id="antivirus" tabindex="-1"><a class="header-anchor" href="#antivirus"><span>Antivirus</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Le lunghezze delle stringhe sono tutte molto piccole, e abbiamo tanto tempo perché è un problema terry quindi possiamo sostanzialmente fare qualsiasi cosa.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Potrebbe essere utile usare sapere che esiste <a href="https://en.cppreference.com/w/cpp/string/basic_string/substr" target="_blank" rel="noopener noreferrer"><code v-pre>stringa.substr(inizio, lunghezza)</code></a> che ritorna una sottostringa e <a href="https://en.cppreference.com/w/cpp/string/basic_string/find" target="_blank" rel="noopener noreferrer"><code v-pre>stringa.find(sottostringa)</code></a> che trova l'indice in cui si trova una sottostringa all'interno di una stringa (se non c'è ritorna -1).</p>
</details>
<h3 id="ctf" tabindex="-1"><a class="header-anchor" href="#ctf"><span>Ctf</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Prova a fare casi piccoli e trovare una formula.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p><a href="https://en.wikipedia.org/wiki/Josephus_problem" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Josephus_problem</a></p>
</details>
<h3 id="cabala" tabindex="-1"><a class="header-anchor" href="#cabala"><span>Cabala</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>N è molto piccolo.</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Posso semplicemente controllare tutti i numeri dell cabala e trovare quello con il massimo resto modulo M.</p>
</details>
<details>
  <summary>Hint 3:</summary>
<p>Per farlo usiamo il backtracking tenendoci il numero che abbiamo fino ad adesso e procedere per ricorsione aggiungendo 3, 6 o 9 controllando che sia diversa dalla scorsa cifra.</p>
</details>
<h2 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h2>
<h3 id="caramelle" tabindex="-1"><a class="header-anchor" href="#caramelle"><span>Caramelle</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>La risposta è semplicemente l'mcm dei V[i].</p>
</details>
<details>
  <summary>Hint 2:</summary>
<p>Si può calcolare l'mcm sapendo che mcm(a, b)*mcd(a, b) = a*b. Per calcolare l'mcd si può scrivere <a href="https://cp-algorithms.com/algebra/euclid-algorithm.html" target="_blank" rel="noopener noreferrer">l'algoritmo di euclide</a> o usare <a href="https://en.cppreference.com/w/cpp/numeric/gcd" target="_blank" rel="noopener noreferrer"><code v-pre>gcd(a, b)</code></a>.</p>
</details>
<h3 id="rsa" tabindex="-1"><a class="header-anchor" href="#rsa"><span>Rsa</span></a></h3>
<details>
  <summary>Hint 1:</summary>
<p>Il problema chiede sostanzialmente di calcolare velocemente delle potenze, e questo si può fare con <RouteLink to="/materiale/fastexp.html">fastexp</RouteLink></p>
</details>
<h3 id="scrigni" tabindex="-1"><a class="header-anchor" href="#scrigni"><span>Scrigni</span></a></h3>
<p><strong>todo!</strong></p>
</div></template>


