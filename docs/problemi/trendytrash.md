# Trendytrash
Link: [https://training.olinfo.it/#/task/oii_trendytrash/statement](https://training.olinfo.it/#/task/oii_trendytrash/statement)
Fonte: OII 2022  
<details>
  <summary>Categoria</summary>

  Greedy, sort
</details>

Problema carino, difficilino per essere il primo problema (effettivamente 100 punti bastavano per arrivare 60esimi, 118 cutoff argento).
*Nota:*
*Probabilmente c'è un modo più decente di implementare la mia sol*
<details>
  <summary>Hint 1:</summary>

  La strategia greedy funziona. Ma come implementarla con complessità decenti?
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
    
  Calcolo le somme di righe e colonne (ho considerato gli 0 come -1). Poi andare avanti e indietro tra sortare colonne/righe e controllare se il più grande della colonna/riga funziona. 
  Il tutto stando attenti ad aggiornare la lunghezza attuale di una colonna/riga e salvarsi una variabile per capire cosa è stato tolto da ogni riga/colonna. Guarda il codice per dettagli.
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>

  using namespace std;

  int pulisci(int N, int M, vector<string> S) {
    vector<int> righe(N);
    vector<int> col(M);
    for(int i = 0; i<N; i++){
      for(int j = 0; j<M; j++){
        int a;
        if(S[i][j]=='0') a = -1;
        else a = 1;
        righe[i]+=a;
        col[j]+=a;
      }
    }
    sort(righe.begin(), righe.end(), [](int a, int b){
      return abs(a)>abs(b);
    });
    sort(col.begin(), col.end(), [](int a, int b){
    return abs(a)>abs(b);
    });
    int dif_righe = 0;
    int dif_col = 0;
    int curr_righe = M;
    int curr_col = N;
    int sol = N*M;

    int i = 0;
    int j = 0;  
    while(sol!=0){
      if(col[i]!=INT_MAX && abs(col[i]+dif_col)==curr_col){
        sol-=curr_col;
        if(col[i]+dif_col<0){
          dif_righe++;
        }
        else dif_righe--;
        curr_righe--;
        col[i] = INT_MAX;
        sort(righe.begin(), righe.end(), [&](int a, int b){
          if(a==INT_MAX) return false;
          if(b==INT_MAX) return true;
          return abs(a+dif_righe)>abs(b+dif_righe);
        });
        i++;
        j=0;
      }
      else if(righe[j]!=INT_MAX && abs(righe[j]+dif_righe)==curr_righe){
        sol-=curr_righe;
        if(righe[j]+dif_righe<0){
          dif_col++;
        }
        else dif_col--;
        curr_col--;
        righe[j]=INT_MAX;
        sort(col.begin(), col.end(), [&](int a, int b){
          if(a==INT_MAX) return false;
          if(b==INT_MAX) return true;
          return abs(a+dif_col)>abs(b+dif_col);
        });
        j++; i=0;
      }
      else break;    
    }

    return sol;
    
  }

  ```

</details>