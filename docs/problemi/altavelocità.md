# Altavelocità
Link: [https://training.olinfo.it/task/abc_altavelocita](https://training.olinfo.it/task/abc_altavelocita)
Fonte: ABC 2016

<details>
  <summary>Hint 1:</summary>

  Puoi controllare in O(n) se data una progressiva chilometrica, se ci sono più o meno di K chilometri di binari dal capolinea.
</details>
<details>
  <summary>Hint 2:</summary>

  Puoi fare una binary search sulla soluzione
</details>
<br></br>

<details>
  <summary>Sketch di soluzione:</summary>

  Facciamo una binary search sulla soluzione. Possimao controllare se una progressiva chilometrica è più o meno della soluzione semplicemente ciclando sugli lotti e vedendo se sono prima o dopo la progressiva.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  #define ll long long
  using namespace std;

  int main(){
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    ll n, k; cin >> n >> k;
    vector<array<ll, 2>> vec(n);
    ll mx = 0;
    for(ll i = 0; i<n; i++){
        ll a, b; cin >> a >> b;
        vec[i] = {a, b};
        mx = max(mx, b);
    }
    auto check = [&](ll val) -> bool {
        ll cont = 0;
        for(ll i =0; i<n; i++){
            if(vec[i][0] <= val){
                if(val <= vec[i][1]){
                    cont += val-vec[i][0]+1;
                }
                else cont += vec[i][1]-vec[i][0]+1;
            }
            if(cont >= k) return true;
        }
        return false;
    };
    ll l = -1; ll r = mx; //l è falso, r è vero
    while(r-l>1){
        ll m = (l+r)/2;
        if(check(m)) r = m;
        else l= m;
    }
    cout << r << '\n';
  }

  ```
</details>
