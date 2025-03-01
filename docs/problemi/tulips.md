# Tulips
Link: [https://training.olinfo.it/task/ois_tulips](https://training.olinfo.it/task/ois_tulips)
Fonte: OIS 2024 Round 2
<details>
  <summary>Categoria</summary>

  dp optimization
</details>
       
non facile
<details>
  <summary>Hint 1:</summary>

  trova la dp naive n, k
</details>
<details>
  <summary>Hint 2:</summary>

  per ogni k cicla su n
</details>
<details>
  <summary>Hint 3:</summary>

  vorremmo in qualche salvare stati della dp passati sapendo qualcosa sul minimo dell'ultimo intervallo
</details>
<details>
  <summary>Hint 4:</summary>

  teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione sapendo che l'ultimo intervallo ha come minimo T[indice]. 
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Facciamo una dp n, k e la calcoliamo ciclando su k e per ogni k ciclando su n.    
  Ci teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione senza l'ultimo intervallo e sapendo che questo ha come minimo T[indice] (quindi la sol sarebbe valore + T[indice]). 
  Per ogni i vogliamo aggiornare lo stack con un nuovo valore che chiamiamo S[i] e calcolare dp[i][j] (1<=j<=k).
  All'inizio S[i] sarà dp[i-1][j-1] (l'ultimo intervallo è solo T[i]).    
  Poi prendiamo tutti quelli nello stack (dalla cima) e vediamo se il loro minimo dell'ultimo intervallo, chimamalo A è maggiore di T[i] che stiamo considerando.
  Se A >= T[i] allora il minimo dell'ultimo intervallo sarà T[i]. Quindi vediamo se il valore che abbiamo nello stack è meglio di S[i] e togliamo l'elemento dallo stack, perché non rispetta più le sue condizioni (il minimo dell'ultimo intervallo sarà < T[indice]).   
  Se A < T[i] smettiamo di togliere elementi dallo stack e dp[i][j] = max(S[i] + T[i], dp[indice dell'elemento in cima allo stack][j]).
  Questo perché o l'ultimo intervallo avrà come minimo T[i] (e questo è il caso S[i]+T[i]) o sarà minore di T[i] (e questo è il caso della dp).    
  La soluzione non è facile da capire e non è spiegata benissimo per ogni dubbio leggete il codice e convincetevi di quello che fa.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using ll = long long;
  using namespace std;

  int main() {
    iostream::sync_with_stdio(0);
    cin.tie(0);
    ll n, k;
    cin >> n >> k;
    vector<ll> T(n);
    for (ll i = 0; i < n; ++i){
      cin >> T[i];
    }
    
    vector<ll> dp(n);
    vector<ll> prev(n);
    ll t = T[0];
    for(ll i = 0; i<n; i++){
      t = min(t, T[i]);
      dp[i] = t;
    }

    for(ll i = 1; i<k; i++){
      stack<array<ll, 2>> st; //{indice, prev -> sol con ultimo a t[indice]}
      prev = dp;
      for(ll j = i; j<n; j++){
        ll tmp = prev[j-1];
        while(!st.empty() && T[j] <= T[st.top()[0]]){
          tmp = max(tmp, st.top()[1]);
          st.pop();
        }
        dp[j] = tmp + T[j];
        if(!st.empty()){
          dp[j] = max(dp[j], dp[st.top()[0]]);
        }   
        st.push({j, tmp});
      }
    }
    cout << dp[n-1] << '\n';
    return 0;
  }

  ``` 
</details>