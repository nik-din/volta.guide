# Trendytrash
Link: [https://training.olinfo.it/#/task/oii_trendytrash/statement](https://training.olinfo.it/#/task/oii_trendytrash/statement)

Fonte: OII 2021    
<details>
  <summary>Categoria</summary>

  Greedy, sort
</details>

Problema carino, difficilino per essere il primo problema (effettivamente 100 punti bastavano per arrivare 60esimi, 118 cutoff argento).    
   
<details>
  <summary>Hint 1:</summary>

  Che quantità posso usare per rappresentare quello che mi interessa vermante di una riga/colonna?
</details>
<details>
  <summary>Hint 2:</summary>

  Cosa succede se scambio due colonne? E due righe?    
  In generale posso permutare le righe/colonne?
</details>
<details>
  <summary>Hint 3:</summary>

  Sort
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>
    
  Calcolo le somme di righe e colonne e poi le sorto. A quel punto controllo dalla più grande se posso cancellarla.    
  Il tutto stando attenti ad aggiornare il valore delle somme.
  
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  //codice di carena
  #include <bits/stdc++.h>

  using namespace std;

  int pulisci(int N, int M, vector<string> V) {
    vector<int> R(N, 0);
    vector<int> C(M, 0);
    for(int i=0; i<N; i++){
      for(int j=0; j<M; j++){
        if(V[i][j]=='1') R[i]++;
      }
    }
    for(int i=0; i<N; i++){
      for(int j=0; j<M; j++){
        if(V[i][j]=='1') C[j]++;
      }
    }
    sort(R.begin(), R.end());
    sort(C.begin(), C.end());
    for(int i=0; i<N+M; i++){
      if(!R.empty()){
        if(!C.empty()){
          if(R[0]==0){
            R.erase(R.begin());
          }
          else if(R[R.size()-1]==C.size()){
            R.pop_back();
            for(int j=0; j<C.size(); j++) C[j]--;
          }
          else if(C[0]==0){
            C.erase(C.begin());
          }
          else if(C[C.size()-1]==R.size()){
            C.pop_back();
            for(int j=0; j<R.size(); j++) R[j]--;
          }
          else break;
        }
      }
    }
    return R.size()*C.size();
  }

  ```

</details>