# Splitting the bill
Link: [https://training.olinfo.it/task/ois_money](https://training.olinfo.it/task/ois_money)     
Fonte: OIS 2020 Round 1
<details>
  <summary>Categoria</summary>

  greedy
</details>
       
Descrizione rapida del problema
<details>
  <summary>Hint 1:</summary>

  Non pensare al grafo
</details>
<details>
  <summary>Hint 2:</summary>

  Gli archi non ci interessano veramente. Considerando una persona, quali condizioni devono essere rispettate perché sia ripagato?
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Crea un array in cui ti salvi quanto ogni persona ha pagato/guadagnato. A quel punto fai le transizioni tra la prima e la seconda persona, la seconda e la terza e così via.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main(){
    int n; cin >>n; int m; cin >> m;
    vector<int> vec(n);
    for(int i = 0; i<m; i++){
      int a, w, b;
      cin >> a >> b >> w;
      vec[a] -= w; vec[b] += w;
    }
    vector<array<int, 3>> sol(n-1);
    int cont = 0;
    for(int i = 0; i<n-1; i++){
      if(vec[i]) cont++;
      sol[i] = {i, i+1, abs(vec[i])};
      if(vec[i]<0) swap(sol[i][0], sol[i][1]);
      vec[i+1] += vec[i];
    }
    cout << cont << '\n';
    for(auto ar: sol){
      if(ar[2]==0) continue;
      cout << ar[0] << ' ' << ar[1] << ' ' << ar[2] << '\n';
    }
    return 0;
  }   

  ``` 
</details>