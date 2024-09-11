# Carry Bit
Link: [https://training.olinfo.it/#/task/weoi_trees/statement](https://training.olinfo.it/#/task/weoi_trees/statement)     
Fonte: WEOI 2024   
<details>
  <summary>Categoria</summary>

  dp, alberi
</details>
       
Problema carino, forse il più facile della competizione.
<details>
  <summary>Hint 1:</summary>

  dp su alberi
</details>
<details>
  <summary>Hint 2:</summary>

  Nella transizione cosa ti interessa sapere sui sottoalberi dei figli?
</details>
     

<details>
  <summary>Sketch di soluzione:</summary>

  Fai una dp du alberi con due array.
  In uno ti salvi il numero di combinazioni quando nel sottoalbero c'è massimo un double agent nella path che parte dalla radice.
  Nell'altro ti salvi la stessa cosa ma con due double agent. 
</details>
<br></br>

soluzione:
```cpp
#include <bits/stdc++.h>
#define ll long long
using namespace std;

ll md = 1e9+7;
vector<vector<int>> adj;
vector<ll> dp_1; //c'è un double agent sulla stassa path scendendo dalla radice
vector<ll> dp_2; //ci sono due double agent sulla stessa path scendendo dalla radice

void dfs(int v, int e){
    ll prod1 = 1;
    ll sum1 = 0;
    ll sum2 = 0;
    for(int u: adj[v]){
        if(u==e) continue;
        dfs(u, v);
        prod1 *= (dp_1[u]+1);
        prod1 %= md;
        sum1 += dp_1[u];
        sum1 %=md;
        sum2 += dp_2[u];
        sum2 %=md;
    }
    dp_1[v] = 1 + prod1-1;
    dp_2[v] = sum1+sum2;
    return;
}

int count_sets(int N, vector<int> u, vector<int> v) { 
    adj.resize(N);
    dp_1.resize(N, 0);
    dp_2.resize(N, 0);
    for(int i = 0; i<N-1; i++){
        adj[u[i]].push_back(v[i]);
        adj[v[i]].push_back(u[i]);
    }
    dfs(0, 0);
    return (dp_1[0]+dp_2[0])%md;
}

```
