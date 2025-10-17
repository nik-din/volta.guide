# Minimum Queue
La _queue_ è una struttura dati della STL di tipo FIFO (i.e. First-In, First-Out), che consente di aggiungere elementi in fondo alla coda e di rimuoverli dalla testa. 

Vogliamo modificare la queue in modo da riuscire a trovare anche il minimo in tempo costante. Per fare ciò memorizzeremo gli elementi in ordine non strettamente crescente: se l'elemento attualmente in fondo alla coda è maggiore di quello che stiamo aggiungendo non diventerà mai il minimo, quindi non ci serve e si può rimuovere. 

Poiché abbiamo bisogno di rimuovere elementi da entrambe le estremità, utilizzeremo la seguente struttura dati:
```cpp
deque<int> q;
```

Vediamo ora nel dettaglio le funzioni supportate.

## Aggiungere un elemento
Prima di aggiungere un elemento dobbiamo rimuovere tutti quelli già presenti nella queue che sono maggiori di lui e che quindi non potranno mai diventare l'elemento minore.
In questo caso la complessità è ```O(1)``` amortizzato: una chiamata alla funzione ```add``` può potenzialmente richiedere tante operazioni, ma dato che ogni elemento viene aggiunto alla queue esattamente una volta e viene rimosso al più una volta, il caso medio è costante.
```cpp
void add(int x) {
    while (!q.empty() && q.back() > x) {
        q.pop_back();
    }
    q.push_back(x);
}
```

## Rimuovere un elemento
In questo caso per rimuovere un elemento dobbiamo avere un modo di distinguerlo dagli altri (e.g. valore, indice...), in quanto è possibile che sia già stato rimosso dalla queue.
```cpp
void remove(int x) {
    if (!q.empty() && q.front() == x) {
        q.pop_front();
    }
}
```

## Trovare il minimo
Poiché gli elementi sono memorizzati in ordine crescente, l'elemento minore sarà quello nella testa della queue.
```cpp
int min() {
    return q.front();
}
```

## Problemi
- [Nearest Smaller Values](./problemi/1645.md)
- [Pila di monete](./problemi/tai_monete.md)
- Dato un array ```A``` di ```N``` elementi e un intero ```M <= N```, trova il minimo di tutti i subarray (i.e. segmenti continui) di lunghezza ```M``` in ```O(N)```.
- [Advertisement](./problemi/1142.md)
- [Maximum Building I](https://cses.fi/problemset/task/1147)