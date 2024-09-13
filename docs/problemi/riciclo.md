# Riciclo
Link: [https://training.olinfo.it/#/task/oii_riciclo/statement](https://training.olinfo.it/#/task/oii_riciclo/statement) 
Fonte: OII 2022
<details>
  <summary>Categoria</summary>

  greedy, math
</details>
       
*Nota:*
*Il codice sotto è parzialmente lamerato. Questo perché per qualche motivo continuava a sbagliare il caso del second subtask e non riuscendo a trovare il bug ho semplicement combinato il mio codice con una soluzione per il subtask in questione. Non penso sia un errore concettuale, sarà un bug random. Se qualcuno riesce a scrivere un codice che funzioni, aspetto una pr :)*

<details>
  <summary>Hint 1:</summary>

  Una strategia greedy funziona.
  Conviene sempre prendere una palette più piccola. Ma come li distribuisco sui camion?
  Spoiler: anche in questo caso greedy.
</details>
<details>
  <summary>Hint 2:</summary>

  Dividi i T[i] in potenze di 2.
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Dividi i T[i] in potenze di 2. A quel punto cicla su P[i] e semplicemente proviamo a mettere i P[i] nelle potenze di 2 dei T[i]. 
  La scomposizione dei T[i] funziona perché, banalmente, tutti i P[i] sono potenze di due. (Convincetevi che funziona insomma)
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  #define ll long long
  using namespace std;

  long long riciclo(int N, int M, vector<int> T, vector<int> P) {
    ll n = N; ll m = M; 
    vector<ll> t(n);
    for(ll i = 0; i<n; i++) t[i]=T[i];
    vector<ll> p(m);
    for(ll i = 0; i<m; i++) p[i]=P[i];

    if(n == 1){
      ll s2 = 0;
      for(ll i = 0; i<m; i++){
        if(p[i]==0) continue;
        ll var = min(t[0]/(1<<i), p[i]);
        s2 += var;
        p[i]-=var;
        if(p[i]>0) return s2;
        t[0]-=var*(1<<i);
      }
      return s2;
    }

    ll maxt = 0;
    for(ll i = 0; i<n; i++) maxt = max(maxt, t[i]);
    ll pw2 = 1;
    vector<ll> exp;
    while(pw2<=maxt){
      exp.push_back(0);
      for(ll i =0; i<n; i++){
        if(t[i]&pw2){
          exp[exp.size()-1]++;
        }
      }
      pw2<<=1;
    }
    ll idx = 0;
    ll sol = 0;
    ll last =0;
    for(ll i = 0; i<M; i++){
      //elimino last
      if(last!=0){
        if(last < (1<<i)) last = 0;
        else{
          ll var = min(last/(1<<i), p[i]);
          p[i]-=var;
          last -= var;
          sol += var;
        }
      }
      if(p[i]==0) continue;
      while(idx<i) idx++;
      while(p[i]>0&&idx<exp.size()){
        if(p[i]>=exp[idx]*(1<<(idx-i))){
          sol += exp[idx]*(1<<(idx-i));
          p[i] -= exp[idx]*(1<<(idx-i));
          idx++;
        }
        else{
          ll var = (p[i]/(1<<(idx-i)));
          sol += p[i];
          exp[idx]-=var+1;
          last = (1<<idx)-(p[i]%(1<<(idx-i)))*(1<<i);
          p[i]=0;

        }
      }
      if(idx>=exp.size()) break;
    }
    return sol;
  }


  ```
  
</details>