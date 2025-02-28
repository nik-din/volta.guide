# Minimum Stack
Lo _stack_ è una struttura dati della STL di tipo LIFO (i.e. Last-In, First-Out), che consente di aggiungere e rimuovere elementi solo dalla cima in $O(1)$. 

Vogliamo modificare lo stack in modo da riuscire a trovare anche il minimo in tempo costante. Per fare ciò memorizzeremo ogni elemento in coppie: l'elemento e il minimo nello stack a partire da questo.

Utilizzeremo quindi la seguente struttura dati: 
```cpp
stack<pair<int, int>> st;
```

Vediamo ora nel dettaglio le funzioni supportate.

## Aggiungere un elemento
Per aggiungere un elemento basta aggiungere alla cima dello stack la seguente coppia: l'elemento che vogliamo aggiungere e il minimo nello stack.
```cpp
void add(int x) {
    st.push({x, st.empty() ? x : min(x, st.top().second)});
}
```

## Rimuovere un elemento
Per rimuovere un elemento possiamo semplicemente togliere quello in cima.
```cpp
void remove() {
    st.pop();
}
```

## Trovare il minimo
Il minimo nello stack è memorizzato nel secondo elemento della coppia in cima. 
```cpp
int min() {
    return st.top().second;
}
```