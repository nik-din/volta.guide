# Riciclo
Link: [https://training.olinfo.it/#/task/oii_riciclo/statement](https://training.olinfo.it/#/task/oii_riciclo/statement) 
Fonte: OII 2021    
<details>
  <summary>Categoria</summary>

  greedy, math
</details>
       

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
  using namespace std;

  long long riciclo(int N, int M, vector<int> T, vector<int> P) {
    vector<long long> V(32, 0);
    for(int i=0; i<N; i++){
      for(int j=30; j>=0; j--){
        if(T[i]>= (1<<j)){
          T[i]=T[i]- (1<<j);
          V[j]=V[j]+ (1<<j);
        }
      }
    }
    long long S=0;
    for(int i=0; i<M; i++){
      long long e= (1<<i);
      for(int j=i; j<31; j++){
        if(V[j]>=P[i]*e){
          V[j]=V[j]-P[i]*e;
          S=S+P[i];
          P[i]=0;
        }
        else{
          S=S+V[j]/e;
          P[i]=P[i]-V[j]/e;
          V[j]=V[j]%e;
        }
      }
    }
    return S;
  }


  ```
  
</details>