# Police3
Link: [https://training.olinfo.it/task/ois_police3](https://training.olinfo.it/task/ois_police3)   
Fonte: OIS2022 Round 1
<details>
  <summary>Categoria</summary>

  dp
</details>

<details>
  <summary>Codice:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main(){
    int n; cin >> n;
    vector<int> t(n);
    for(int i = 0; i<n; i++) cin >> t[i];
    vector<int> dp(n, INT_MAX);
    dp[0] = 0;
    if(n>1) dp[1] = min(t[0], t[1]);
    for(int i = 1; i<n; i++) dp[i] = min(dp[i-1]+t[i], dp[i-2] +t[i-1]);
    cout << dp[n-1] << '\n';
  }

  ``` 
</details>