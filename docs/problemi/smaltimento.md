# Smaltimento
Link: [https://training.olinfo.it/#/task/oii_smaltimento/statement](https://training.olinfo.it/#/task/oii_smaltimento/statement)
Fonte: OII 2021
<details>
  <summary>Categoria</summary>

  Grafi
</details>
       
Problema carino, non facile.    
*Nota*    
*L'ho fatto un po' di tempo fa, non ricordo tanto della sol.*    
<details>
  <summary>Hint 1:</summary>

  E' palesemente un grafo.

</details>

<details>
  <summary>Hint 2:</summary>

  Dijkstra

</details>

<details>
  <summary>Hint 3:</summary>

  Invece di capire quanto è distante il barile dalla fine, conviene vedere quanto ci si mette dalla fine al barile.

</details>

<br></br> 

<details>
  <summary>Soluzione:</summary>
  
  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  vector<long long> costo;
  vector<vector<int>> adj, bi;
  vector<bool> visitato;

  long long smaltisci(int N, int M, vector<int> A, vector<vector<int>> B) {
    bi = B;
    visitato.resize(N+1, false);
    costo.resize(N+1, LONG_LONG_MAX);
    adj.resize(N+1);

    for(int i = 0; i<M; i++){
          if(bi[i].empty()) adj[N].push_back(i);
          else{
              for(int j: bi[i]){
                  adj[j].push_back(i);
              }
          }
      }
      priority_queue<pair<long long,int>> q;
      q.push({0, N});
      
      costo[N] = 0;
      int nodo;
      while(!q.empty()){
          nodo = q.top().second;
          q.pop();
          if(visitato[nodo]) continue;
          visitato[nodo]=true;
          for(int k: adj[nodo]){
              long long sum =0;
              bool b = true;
              for(int vicino: bi[k]){
                  if(costo[vicino]!=LONG_LONG_MAX){
                      sum+=costo[vicino];
                  }
                  else{
                      b = false;
                      break;
                  }
              }
              if(b){
          costo[A[k]] = min(costo[A[k]], sum+1);
                  q.push({-costo[A[k]], A[k]});
                
        }
          }

      }
      return costo[0];
  }


  ```


</details>