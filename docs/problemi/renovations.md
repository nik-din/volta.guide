# City redevelopment
Link: [https://training.olinfo.it/task/ois_renovations](https://training.olinfo.it/task/ois_renovations)    
Fonte: OIS 2022 Round 1
<details>
  <summary>Categoria</summary>

  math, ds
</details>
       
Non particolarmente illuminante
<details>
  <summary>Hint 1:</summary>

  Ignora K e trova una formula per calcolare le query
</details>
<details>
  <summary>Hint 3:</summary>

  Come tratto gli elementi < K?
</details>
<details>
  <summary>Hint 2:</summary>

  Usa un segment, precacola il fattoriale e usa gli inversi per calcolare la formula in logN
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Innanizittutto per ogni i V[i] = max(V[i], K), perché ogni volta che faccio una query sono costretto ad aumentarlo fino a K.   
  Poi costruisco un segment tree con somma sull'intervallo.   
  Per rispondere alle query basta fare stars and bars, in particolare con s - somma(l, r) caramelle e r-l+1 bambini.   
  Precalcolo il fattoriale e uso gli inversi per concludere.  
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  #define ll long long
  using namespace std;

  template<typename T>
  struct segtree{
    T n;
    vector<T> t;
    function<T(T, T)> f;
    segtree(vector<T> v, function<T(T, T)> f): f(f){
      n = 1;
      while(n<v.size()) n *= 2;
      t.resize(2*n, 0);
      for(int i = 0; i<v.size(); i++) t[i+n] = v[i];
      for(int i = n-1; i>0; i--) t[i] = f(t[i*2], t[i*2+1]);
    }
    void upd(int x, T k){
      x += n;
      t[x] = k;
      for(x/=2; x>=1; x/=2){
        t[x] = f(t[x*2], t[x*2+1]);
      }
    }
    T query(int l, int r){
      l +=n; r +=n;
      T s= 0;
      for(; l<=r; l/=2, r/=2){
        if(l%2) s = f(t[l++], s);
        if(!(r%2)) s = f(s, t[r--]);
      }
      return s;
    }
  };

  const ll md = 1e9+7;
  vector<ll> fact;

  ll fastexp(ll a, ll b){
    if(b==0) return 1;
    ll c = fastexp(a, b/2);
    if(b%2) return (((c*c)%md)*a)%md;
    return (c*c)%md;
  }

  ll binomiale(ll n, ll k){
    ll ans = fact[n];
    ans *= fastexp(fact[k], md-2);
    ans %= md;
    ans *= fastexp(fact[n-k], md-2);
    ans %= md;
    return ans;
  }

  int main(){
    ll n, q, k; cin >> n >> q >> k;
    vector<ll> vec(n);
    for(int i = 0; i<n; i++){
      cin >> vec[i];
      vec[i] = max(k, vec[i]);
    }
    segtree t = segtree<ll>(vec, [](int a, int b){return a + b;});

    fact.resize(3e6);
    fact[0]=1;
    for(int i = 1; i<3e6; i++) fact[i] = (fact[i-1]*i)%md;

    while(q--){
      int type; cin >> type;
      if(type==1){
        ll a, b; cin >> a >> b;
        a--;
        t.upd(a, max(k, b));
      }
      else{
        ll l, r, s; cin >> l >> r >> s;
        l--; r--;
        ll sum = t.query(l, r);
        if(sum > s) cout << "0\n";
        else{
            cout << binomiale(s-sum + r-l, r-l) << '\n';
        }
      }
    }
    return 0;
  }


  ``` 
</details>