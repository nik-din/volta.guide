# Johnnie Walker
Link: [https://training.olinfo.it/task/ois_walker](https://training.olinfo.it/task/ois_walker)
Fonte: OIS 2021 round 3
<details>
  <summary>Categoria</summary>

  math
</details>
       
Problema di conteggi decente
<details>
  <summary>Hint 1:</summary>

  Calcola la quantità ricorsivamente
</details>
<details>
  <summary>Hint 2:</summary>

  In particolare ricorsivamente su K, e poi trova la formula chiusa. Attento agli inversi.
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Calcoliamo la soluzione ricorsivamente. In particolare f_i è la soluzione per k = i.   
  Allora f_1 = 0, f_2 = n-1. f_3 sarà uguale a (n-1)^2 meno f_2, perché se arrivo a 1 appena prima della fine non posso rimanere nello stesso posto.   
  Generalizzando f_i = (n-1)^(i-1)-f_{i-1}. Espandendo viene f_i = (n-1)^(i-1) - (n-1)^(i-2) + ... +- (n-1); l'ultimo segno dipende dalla parità di i. Facendo due casi dievrsi in base alla parità ed usando l'espansione di a^k+1 conclude.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  #define ll long long
  using namespace std;

  long long MOD = 666013;

  // input data
  long long n, k;

  ll fastexp(ll a, ll b){
    if(b==0) return 1;
    ll c= fastexp(a, b/2);
    if(b%2) return (((c*c)%MOD)*a)%MOD;
    return (c*c)%MOD;
  }


  int main() {
    assert(2 == scanf("%lld %lld", &n, &k));

    // insert your code here
    if(k%2) cout << ((((fastexp(n-1, k)+1)*fastexp(n, MOD-2))%MOD)-1 + MOD) %MOD << '\n';
    else cout << ((n-1)*(((fastexp(n-1, k-1)+1)*fastexp(n, MOD-2))%MOD))%MOD<< '\n';
    return 0;
  }
  ``` 
</details>