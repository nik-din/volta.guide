# Algobadge
**work in progress!**
Qui puoi trovare hint per i problemi di Algobadge!
Algobadge è un raccolta di problemi divisi per argomento il cui completamento serve, ad esempio, per fare  gli stage o partecipare alle nazionali.
E' un ottimo modo per esercitarsi negli argomenti imparati.

## Intro
Tutti i problemi di categoria servono per allenarsi a scrivere in c++.
Per questo non dovrebbero servire hint, se avete bug che non capite come risolvere chiedete pure a noi!

## Lib
I problemi in questa categoria richiedono di conoscere l'stl.
### Cestini
<details>
  <summary>Hint:</summary>

  Usa un vettore di vettori.
</details>

### Catalogo
<details>
  <summary>Hint 1:</summary>

  Vogliamo tenerci per ogni id il numero di libri con quell'id.
</details>

<details>
  <summary>Hint 2:</summary>

  Usa una map.
</details>

### Autogrill
<details>
  <summary>Hint 1:</summary>

  Vogliamo tenerci valori diversi tra loro e ci interessa vedere l'elemento più vicino ad un certo valore. Se solo ci fosse una struttura dati con una funzione simile....
</details>
<details>
  <summary>Hint 2:</summary>

  Usa un set con lower_bound (attento a come usare lower_bound).
</details>

## Greedy
Tutti questi problemi si risolvono con tecniche greedy, quindi facendo scelte in modo avido, basandosi su un solo criterio.
Potrebbe servire anche una binary search ;)
### Collezionismo
<details>
  <summary>Hint 1:</summary>

  Intuitivamente come mettiamo i modellini sugli scaffali? Spoiler: in ordine crescente di C[i] (o decrescente).
</details>
<details>
  <summary>Hint 2:</summary>

  Se non ci fossero scaffali D sarebbe la somma delle differenze tra elementi consecutivi (se sono sortati).
</details>
<details>
  <summary>Hint 3:</summary>

  Aggiungendo uno scaffale come diminuisce la somma dei D[j]?
</details>
<details>
  <summary>Hint 4:</summary>

  Sorta le differenze tra elementi consecutivi.
</details>

### Truffa
<details>
  <summary>Hint 1:</summary>

  Il criterio greedy dovrebbe essere chiaro, semplicemente sorto V.
</details>
<details>
  <summary>Hint 3:</summary>

  Se la complessità non torna, evita ad esempio di ricalcolare la somma o risortare ogni volta.
</details>

### Quadri
<details>
  <summary>Hint 1:</summary>

  Calcolare B direttamente non è così facile.
  Però il fatto che ci chieda il B massimale e il fatto che i B che funzionano sono distribuiti in un modo ben preciso potrebbe darci un'idea.
</details>
<details>
  <summary>Hint 2:</summary>

  Binary search su B
</details>
<details>
  <summary>Hint 3:</summary>

  Come facciamo a controllare che un certo B funzioni? Spoiler: sliding window
</details>


## Rec

### Antivirus
<details>
  <summary>Hint 1:</summary>
  
  Le lunghezze delle stringhe sono tutte molto piccole, e abbiamo tanto tempo perché è un problema terry quindi possiamo sostanzialmente fare qualsiasi cosa.
</details>
<details>
  <summary>Hint 2:</summary>
  
  Potrebbe essere utile usare sapere che esiste [```stringa.substr(inizio, lunghezza)```](https://en.cppreference.com/w/cpp/string/basic_string/substr) che ritorna una sottostringa e [```stringa.find(sottostringa)```](https://en.cppreference.com/w/cpp/string/basic_string/find) che trova l'indice in cui si trova una sottostringa all'interno di una stringa (se non c'è ritorna -1).
</details>

### Ctf
<details>
  <summary>Hint 1:</summary>

  Prova a fare casi piccoli e trovare una formula.
</details>
<details>
  <summary>Hint 2:</summary>

  [https://en.wikipedia.org/wiki/Josephus_problem](https://en.wikipedia.org/wiki/Josephus_problem)
</details>

### Cabala
<details>
  <summary>Hint 1:</summary>
  
  N è molto piccolo.
</details>
<details>
  <summary>Hint 2:</summary>
  
  Posso semplicemente controllare tutti i numeri dell cabala e trovare quello con il massimo resto modulo M.
</details>
<details>
  <summary>Hint 3:</summary>
  
  Per farlo usiamo il backtracking tenendoci il numero che abbiamo fino ad adesso e procedere per ricorsione aggiungendo 3, 6 o 9 controllando che sia diversa dalla scorsa cifra.
</details>

## Math
### Caramelle
<details>
  <summary>Hint 1:</summary>
  
La risposta è semplicemente l'mcm dei V[i].
</details>
<details>
  <summary>Hint 2:</summary>
  
  Si può calcolare l'mcm sapendo che mcm(a, b)\*mcd(a, b) = a\*b. Per calcolare l'mcd si può scrivere [l'algoritmo di euclide](https://cp-algorithms.com/algebra/euclid-algorithm.html) o usare [```gcd(a, b)```](https://en.cppreference.com/w/cpp/numeric/gcd).
</details>

### Rsa 
<details>
  <summary>Hint 1:</summary>
 
  Il problema chiede sostanzialmente di calcolare velocemente delle potenze, e questo si può fare con [fastexp](materiale/fastexp.md)
</details>

### Scrigni
**todo**
<details>
  <summary>Hint 1:</summary>

  Fai conti e viene una formula chiusa.
</details>
<details>
  <summary>Hint 2:</summary>

  Se ci sono $k$ scrigni tra cui scegliere qual'è la probabilità di beccare subito quello giusto?  
</details>
<details>
  <summary>Hint 3:</summary>

  In media quante scosse prendo per indovinare il prossimo scrigno se ne ho già indovinati $n-k$?
</details>
<details>
  <summary>Hint 4:</summary>

  Se non sei riuscito a fare il calcolo dell'hint prima, prova a capire quanto viene questa sommatoria: $\frac{0}{k}$
</details>




<!---->

## Grafi
### Interrutori
<details>
  <summary>Hint 1:</summary>


</details>

### Connessioni
<details>
  <summary>Hint 1:</summary>

   Implementa una [dsu](https://cp-algorithms.com/data_structures/disjoint_set_union.html)
</details>

### Mincammino2
<details>
  <summary>Hint 1:</summary>

  Implementa [dijkstra](materiale/grafi.md)
</details>


