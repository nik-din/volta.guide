# Grafi
Un grafo è una struttura caratterizzata da nodi, o vertici, e archi. Di seguito useremo ```N``` per indicare il numero di nodi e ```M``` per il numero di archi.

## Come memorizzare un grafo?
Quando durante le risoluzione di un problema dobbiamo ricevere in input un grafo possiamo, a seconda della situazione, decidere di utilizzare uno dei tre modi principali per memorizzarlo.

Il metodo più utilizzato è la lista di adiacenza, ma talvolta ne possono essere richiesti anche altri meno diffusi.

### Lista di archi
Il primo metodo che affronteremo è la lista di archi. La lista di archi è un vettore di M elementi in cui ogni elemento rappresenta un arco ed è quindi costituito dal nodo di partenza, dal nodo di arrivo e, in caso di grafi pesati, anche il peso dell'arco.

L'implementazione in C++ è:
```cpp
vector<array<int, 2>> edges(M);
```

La complessità di:
 - Sapere se un arco esiste è ```O(M)```
 - Iterare sugli archi di un nodo è ```O(M)```
 - Iterare su tutti gli archi è ```O(M)```
 - Aggiungere un arco è ```O(1)```
 - Rimuovere un arco è ```O(M)```

La memoria usata è ```O(M)```.

### Matrice di adiacenza
La matrice di adiacenza è una matrice, o un vettore bidimensionale, di bool di dimensione N. In questo caso ```adj[i][j]``` sarà ```true``` se esiste l'arco i->j, ```false``` altrimenti.

L'implementazione in C++ è:
```cpp
vector<vector<bool>> adj(N, vector<bool> (N, false));
```

La complessità di:
 - Sapere se un arco esiste è ```O(1)```
 - Iterare sugli archi di un nodo è ```O(N)```
 - Iterare su tutti gli archi è ```O(N^2)```
 - Aggiungere un arco è ```O(1)```
 - Rimuovere un arco è ```O(1)```

La memoria usata è ```O(N^2)```.

### Lista di adiacenza
La lista di adiacenza è un vettore bidimensionale di dimensione N. Ogni elemento  ```adj[i]``` è quindi a sua volta un vettore che contiene tutti i nodi collegati con un arco al nodo i.

L'implementazione in C++ è:
```cpp
vector<vector<int>> adj(N);
```

Sia ```m``` il numero di archi uscenti da un nodo, la complessità di:
 - Sapere se un arco esiste è ```O(m)```
 - Iterare sugli archi di un nodo è ```O(m)```
 - Iterare su tutti gli archi è ```O(N+M)```
 - Aggiungere un arco è ```O(1)```
 - Rimuovere un arco è ```O(m)```

La memoria usata è ```O(N+M)```.

## Algoritmi
La BFS e la DFS sono algoritmi che, da soli, non permettono di ricavare molte informazioni o di risolvere molti problemi. Sono infatti dei modi di visitare un grafo, che di solito vanno modificati per poter rispondere alla richiesta del problema.

### DFS
La DFS, o depth-first search, è un algoritmo che permette di visitare il grado "in profondità". Infatti è un algoritmo ricorsivo che parte da un nodo ```v``` e si sposta al primo nodo ```u``` che non è ancora stato visitato. Quando il nodo corrente non è collegato a nessun nodo non ancora visitato ritorna al "padre", che si sposterà al figlio successivo (se esiste).

La complessita è ```O(N+M)```. Infatti ogni nodo verrà visitato dall'algoritmo esattamente una volta, e anche ogni arco verrà percorso una sola volta.

L'implementazione in C++ che usa la lista di adiacenza è:
```cpp
//variabili globali da inizializzare:
vector<bool> visited; 
vector<vector<int>> adj;

void dfs(int v) {
  if (visited[v]) return;
  visited[v] = true;

  for (auto u: adj[v]) {
    dfs(u);
  }
}
```

### BFS
La BFS, o breadth-first search, è invece un algoritmo che visita il grafo in ampiezza. A differenza della DFS è un algoritmo iterativo che sfrutta la queue. Il nodo corrente ```v``` si trova all'inizio della queue e si aggiungono in fondo a questa tutti i nodi ```u``` collegati a ```v``` con un arco.

Anche in questo caso la complessità è ```O(N+M)```.

L'implementazione in C++ che usa la lista di adiacenza è:
```cpp
//variabili:
vector<vector<int>> adj(n);
vector<bool> visited(n, 0);
vector<int> distance(n);
queue<int> q;

q.push(x); //x è il nodo di partenza
while (!q.empty()) {
  int u = q.front(); q.pop();

  for (auto v : adj[u]) {
    if (visited[v]) continue;
    visited[v] = true;
    distance[v] = distance[u]+1;
    q.push(v);
  }
}
```

### Dijkstra
Dijkstra è un algoritmo per calcolare la distanza (minima) di un nodo a tutti gli altri. Funziona solo con pesi non negativi. L'idea è tenersi un vettore di distanze temporanee e processare ogni volta il nodo a distanza minore. Processare un nodo vuol dire aggiornare le distanze di tutti i vicini. Per capire qual'è il nodo a distanza minore si usa una ```priority_queue``` in cui le distanze vengono messe negative per prendere la più piccola (la ```priority_queue``` ritorna l'elemento maggiore).   
La complessità è ```O((N+M)logN)```.   
Implementazione:
```cpp
//variabili:
vector<vector<pair<int, int>>> adj(n);
vector<bool> visited(n, 0);
vector<int> distance(n, INT_MAX);
priority_queue<pair<int, int>> pq;

pq.push({0, x}); //x è il nodo di partenza
distance[x]=0;
while(!pq.empty()){
  int v = pq.top().second;
  pq.pop();
  if(visited[v]) continue;
  visited[v]=1;
  for(auto e: adj[v]){
    int u = e.first; int w = e.second;
    if(distance[u]>distance[v]+w){
      distance[u]=distance[v]+w;
      pq.push({-distance[u], u});
    }
  }
}

```

## Problemi
- [ois_ponti](./problemi/ois_ponti.md)
- [oii_maree](./problemi/oii_maree.md)
- [sunny](https://training.olinfo.it/task/sunny)
- [ois_monete](https://training.olinfo.it/task/ois_monete)
- [ois_police2](https://training.olinfo.it/task/ois_patrol2)
- [ois_rainstorm](https://training.olinfo.it/task/ois_rainstorm)