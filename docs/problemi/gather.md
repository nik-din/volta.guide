# Titolo
Link: [https://training.olinfo.it/task/ois_gatherings](https://training.olinfo.it/task/ois_gatherings)
Fonte: OIS 2021 round 3   
<details>
  <summary>Categoria</summary>

  sliding window
</details>
       
Problema implementativo
<details>
  <summary>Hint 1:</summary>

  Sliding window
</details>

<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Sliding window, l è l'elemento per cui calcolo il numero di elementi più vicini di D, r è l'elemento più lontano con P[r]-P[l] <= D;
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main(){
    int n, d; cin >> n >> d;
    vector<int> p(n); for(int i = 0; i<n; i++) cin >> p[i];
    int l = 0; int r = 0;
    long long sol = 0;
    for(int l = 0; l<n-1; l++){
      while(r < n && p[r]-p[l] < d) r++;
      sol += (long long) r-l-1;
    }
    cout << sol << '\n';
    return 0;
  }

  ``` 
</details>