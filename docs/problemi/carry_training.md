# Carry Bit
Link: [https://training.olinfo.it/#/task/ois_carry/statement](https://training.olinfo.it/#/task/ois_carry/statement)     
Fonte: OIS2024, round 3    
<details>
  <summary>Categoria</summary>

  stringhe, binary search
</details>
       
Problema carino, non particolarmente difficile sapendo la teoria.   
<details>
  <summary>Hint 1:</summary>

  inverti una stringa
</details>
<details>
  <summary>Hint 2:</summary>

  hashing + precalcolo
</details>
     
<details>
  <summary>Hint 3:</summary>

  binary search per concludere
</details>
<br></br>

<details>
  <summary>Editorial:</summary>

  [https://wiki.olinfo.it/it/ois-2024/round-3](https://wiki.olinfo.it/it/ois-2024/round-3)
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp

  #include <bits/stdc++.h>
  #define ll long long
  using namespace std;

  vector<ll> hprefa;
  vector<ll> hprefb;
  vector<ll> hc;
  vector<ll> pw;
  const ll b = 29;
  const ll m = 1000000007;

  ll ha(ll l, ll r){
      return (l==0) ? hprefa[r] : ((hprefa[r]-(hprefa[l-1]*pw[r-l+1])%m)%m+m)%m;
  }

  ll hb(ll l, ll r){
      return (l==0) ? hprefb[r] : ((hprefb[r]-(hprefb[l-1]*pw[r-l+1])%m)%m+m)%m;
  }



  int main() {
    

      int N;
      cin >> N;
      
      string A;
      cin >> A;
      
      string C;
      cin >> C;
      
      int Q;
      cin >> Q;
      
      vector<int> X(Q), Y(Q), L(Q);
      for (int i = 0; i < Q; ++i)
          cin >> X[i] >> Y[i] >> L[i];
      
      
      
      // INSERT YOUR CODE HERE
      
      string B = "";
      for(int i =0; i<N; i++){
          B += !(C[i]-'0')+'0';
      }

      hprefa.resize(N);
      hprefb.resize(N);
      pw.resize(N);

      hprefa[0]=A[0]-'0'+1;
      hprefb[0]=B[0]-'0'+1;
      pw[0]=1;
      for(int i = 1; i<N; i++){
          hprefa[i] = (hprefa[i-1]*b+A[i]-'0'+1) %m;
          hprefb[i] = (hprefb[i-1]*b+B[i]-'0'+1) %m;
          pw[i] = (pw[i-1]*b)%m;
      }

      for(int i = 0; i<Q; i++){
          ll lb = 0; ll ub = L[i];
          while(lb<ub){
              ll x = (lb+ub)/2;
              if(ha(X[i], X[i]+x)==hb(Y[i], Y[i]+x)){
                  lb = x+1;
              }
              else ub = x;
          }
          if(lb == L[i]) cout << "1 ";
          else{
              if((A[X[i]+lb]-'0')&&(C[Y[i]+lb]-'0')) cout << "0 ";
              else cout << "1 ";
          }
          
      }
      cout << '\n';
      
      
      

      return 0;
  }
  ```
</details>