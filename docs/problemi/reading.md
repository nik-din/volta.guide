# Reading papers
Link: [https://training.olinfo.it/task/ois_reading](https://training.olinfo.it/task/ois_reading)
Fonte: OIS 2022 Final Round
<details>
  <summary>Categoria</summary>

  greedy, stl
</details>
       
Carino
<details>
  <summary>Hint 1:</summary>

  Parti dall'ultimo giorno.
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Decidi cosa leggere ogni giorno a partire dall'ultimo giorno. Per decidere ti tieni una priority_queue con gli P_i. All'inizio ci saranno solo gli articoli con D_i = -1, via via che si va avanti si aggiungono gli altri articoli.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main() {
    int N, L; cin >> N >> L;
    vector<vector<int>> A(L);
    priority_queue<int> q;
    for (int i = 0, p, d; i < N; i++) {
      cin >> p >> d;
      A[((d+L)%L)].push_back(p);
    }
    int risposta = 0;
    for (int i = L-1; i >= 0; i--) {
      for (int j: A[i]) {
        q.push(j);
      }
      if (!q.empty()) {
        risposta += q.top();
        q.pop();
      }
    }
    cout << risposta << '\n';
    return 0;
  }

  ``` 
</details>