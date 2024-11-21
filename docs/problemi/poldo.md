# Poldo
[link](https://training.olinfo.it/task/poldo)    
Lis (longest increasing subsequence), basta O(N^2)
<details>
  <summary>Codice:</summary>
  
  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main(){
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    int n; cin >> n;
    vector<int> p(n); 
    for(int i = 0; i<n; i++) cin >> p[i];
    vector<int> dp(n, 1); 
    for(int i = 1; i<n; i++){
      for(int j = 0; j<i; j++){
        if(p[j]>p[i]) dp[i] = max(dp[i], dp[j]+1);
      }
    }
    int sol = 1;
    for(int i = 0; i<n; i++) sol = max(sol, dp[i]);
    cout << sol <<'\n';
  }
  ```
</details>