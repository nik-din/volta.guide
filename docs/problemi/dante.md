# Lasciate ogni speranza
Link: (https://training.olinfo.it/task/preoii_dante)[https://training.olinfo.it/task/preoii_dante]  
Fonte: PreOII 2024  
<details>
  <summary>Categoria</summary>

  Sliding window
</details>
       
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Sliding window: mi tengo un contatore e ogni volta che c'è 1 vado avanti, se c'è 0 diminuisco il contatore. Quando il contatore è negativo porto vanti l'estremo sinistro fino a quando torna non negativo.   
  Complessità: ```O(N)```
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <vector>

  using namespace std;

  int rimembra(int N, int K, vector<int> V){
    int sol =0;
    int l, r;
    l = 0; r=0;
    int cont = 0;
    while(r<=N){
        if(r<N && V[r]==1) r++;
        else{
            if(cont < K){
                cont++;
                r++;
            }
            else break;
        }
    }
    
    sol = r-l;
    while(r<=N){
        int lst = V[l];
        l++;
        if(lst == 1) continue;
        else{
            while(r<N&&V[r]==1) r++;
            r++;
            while(r<N&&V[r]==1) r++;
        }
        sol = max(sol, r-l);
    }
    return sol; 
  }

  ``` 
</details>