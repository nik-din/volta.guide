<template><div><h1 id="advertisement" tabindex="-1"><a class="header-anchor" href="#advertisement"><span>Advertisement</span></a></h1>
<p>Link: <a href="https://cses.fi/problemset/task/1142" target="_blank" rel="noopener noreferrer">1142</a></p>
<p>Fonte: CSES problemset</p>
<details>
<summary>Categoria</summary>
minqueue
</details>
<details>
<summary>Hint 1</summary>
Fissato un elemento in posizione i, quale sarà il più grande rettangolo valido di altezza k[i] che lo contiene?
</details>
<details>
<summary>Hint 2</summary>
Come possiamo calcolare il primo elementi più piccolo a destra e a sinistra? Hint 3: guarda il tag del problema :))
</details>
<details>
<summary>Sketch</summary>
Fissato un elemento i, il più grande rettangolo in cui possiamo inserire una pubblicità è il range [l, r], dove l e r sono rispettivamente gli ultimi elementi minori di i a partire da questo. Possiamo quindi usare due minqueue, una da destra a sinistra e una da sinistra a destra per rispondere velocemente a questa domanda. In particolare per ogni minqueue iteriamo in ordine sugli elementi e aggiungiamo ad ans[i], che inizialmente contiene solo 0, l'area del più grande rettangolo di altezza k[i] che possiamo costruire che inizia o finisce nella posizione i.
</details>
<details>
<summary>Soluzione</summary>
Se qualcuno volesse contribuire, può inviarci la sua soluzione di questo problema che (nel caso in cui faccia effettivamente AC) verrà incollata qui sotto insieme al nome dell'autore che entrerà nella storia di questo sito :))
<!-- ```cpp
``` -->
</details></div></template>


