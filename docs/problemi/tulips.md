# Tulips
Link: [https://training.olinfo.it/task/ois_tulips](https://training.olinfo.it/task/ois_tulips)
Fonte: OIS 2024 Round 2
<details>
  <summary>Categoria</summary>

  dp optimization
</details>
       
non facile
<details>
  <summary>Hint 1:</summary>

  trova la dp naive n, k
</details>
<details>
  <summary>Hint 2:</summary>

  per ogni k cicla su n
</details>
<details>
  <summary>Hint 3:</summary>

  vorremmo in qualche salvare stati della dp passati sapendo qualcosa sul minimo dell'ultimo intervallo
</details>
<details>
  <summary>Hint 4:</summary>

  teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione sapendo che l'ultimo intervallo ha come minimo T[indice]. 
</details>
<br></br> 

<details>
  <summary>Sketch di soluzione:</summary>

  Facciamo una dp n, k e la calcoliamo ciclando su k e per ogni k ciclando su n.    
  Ci teniamo uno stack con l'indice della dp e invece di tenere il valore della dp, teniamo la soluzione sapendo che l'ultimo intervallo ha come minimo T[indice]. 
  All'inizio prendiamo tutti quelli nello stack (dalla cima) 
</details>
<br></br>

<details>
  <summary>Soluzione:</summary>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  int main(){
    
  }

  ``` 
</details>