# Maree a Venezia
Link: [oii_maree](https://training.olinfo.it/task/oii_maree)

Fonte: OII 2013

<details>
<summary>Categoria</summary>
Grafi
</details>

<details>
<summary>Sketch</summary>
Per risolvere il problema usiamo due BFS: la prima che parte dal nodo 0, la seconda che parte dal nodo N-1. Se nella prima BFS, senza superare l'istante T in cui i canali si invertono, riusciamo a raggiungere il nodo N-1 allora la risposta sarà il tempo impiegato.
<br>
Se invece non riusciamo a raggiungerlo, facciamo una seconda BFS che parte dal nodo N-1. Ora per ogni nodo i raggiunto dalla prima BFS, calcoliamo il valore minore della somma tra il tempo richiesto per raggiungere i con la seconda BFS e T. Questo perché all'inizio navigheremo fino al nodo i in un istante minore di T, per poi aspettare fino all'istante T in cui i canali si invertono e raggiungere il nodo N-1 nel tempo trovato attraverso la seconda BFS.
</details>

<details>
<summary>Soluzione</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;

int N, M, T;
vector<vector<int>> adj;

vector<int> bfs(int x, bool flag = false) {
  vector<bool> visited(N, false);
  vector<int> distance(N, -1);
  queue<int> q;

  visited[x] = true;
  distance[x] = 0;
  q.push(x);

  while (!q.empty()) {
    int u = q.front(); q.pop();

    if (flag && distance[u] == T) break;

    for (auto v : adj[u]) {
      if (visited[v]) continue;
      visited[v] = true;
      distance[v] = distance[u]+1;
      q.push(v);
    }
  }

  return distance;
}

int solve(int N, int M, int T, int* S, int* E) {
  ::N = N; ::M = M; ::T = T;

  adj.resize(N);
  for (int i = 0; i < M; i++) {
    adj[S[i]].push_back(E[i]);
  }

  vector<int> distance1 = bfs(0, true), distance2 = bfs(N-1);
  int R = distance1[N-1];
  for (int i = 0; i < N; i++) {
    if (distance1[i] != -1 && distance2[i] != -1) R = min((R == -1 ? INT_MAX : R), distance2[i] + T);
  }

    return R;
}
```
</details>
