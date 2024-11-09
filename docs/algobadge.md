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

  Vogliamo tenerci valori di cui non ci interessa l'ordine e possono esserci duplicati. Quindi possiamo usare.....
</details>

<details>
  <summary>Hint 2:</summary>

  Usa un unordered_multiset
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
### Cestini
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
