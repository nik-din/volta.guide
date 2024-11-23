# Coin combinations II
Link: [https://cses.fi/problemset/task/1636](https://cses.fi/problemset/task/1636)    
Fonte: Cses problem set
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
      int m = 1000000007;
      int N, V;
      cin >> N >> V;
      int C[N];
      for(int i = 0; i<N; i++){
          cin >> C[i];
      }
      sort(C, C+N);
      int dp[V+1];
      
      for(int j = 0; j<=V; j++){
          dp[j]=0;
      }
      
      dp[0]=1;
  
      
      for(int j=0; j<N; j++){
          for(int i =0; i<=V; i++){
              if(i-C[j]>=0&&i-C[j]<=V){
                  dp[i]+=(dp[i-C[j]]%m);
                  dp[i]=dp[i]%m;
              }
          }
      }
      cout << dp[V] << endl;
  }

  ``` 
</details>