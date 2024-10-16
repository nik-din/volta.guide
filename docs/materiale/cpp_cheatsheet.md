# c++ di base
Quello sotto è un elenco riassuntivo di quello che faremo al corso base.
Se non avete mai imparato prima un linguaggio di programmazione (e non siete venuti a lezione),
può avere senso guardarsi qualche tutorial su internet, ad esempio [questo](https://cplusplus.com/doc/tutorial/) (alcune cose sono un po' in dettaglio) 
o [questo](https://www.w3schools.com/cpp/).    
(non li ho provati personalmente).

## Struttura di base
Ogni file c++ che scriveremo avrà questa struttura:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    //qui si mette il codice, concludendo ogni riga con un ;
}
```

## Tipi
c++ ha tipi statici. Sono:
- ```bool``` booleani, cioè ```true``` e ```false``` (o 1 e 0).
- ```int``` per rappresentare numeri interi tra -2147483648 e 2147483647 (ordine di grandezza 1e9).
- ```long long int``` per rappresentare numeri interi tra -9,223,372,036,854,775,808 e 9,223,372,036,854,775,807 (ordine di grandezza 1e18).
- ```float``` per rappresentare numeri con la virgola (da evitare per errori di precisione), massimo e minimo come gli ```int```.
- ```char``` per singoli caratteri, si mette il carattere tra apici: ```'a'```.
- ```string``` per liste di caratteri (parole), si mette il carattere tra doppie apici ```"stringa"```.

Per dichiarare una variabile si scrive ```tipo nome_variabile = valore```.

## Operatori

### int
per fare operazioni tra int si usano i seguenti operatori:
- ```+``` e ```-``` per addizione e sotrrazione
- ```*``` e ```/``` per moltiplicazione e divisione (intera perché tra int)
- ```%``` per il modulo (non importa se non sapete cos'è)

### bool
Gli operatori logici sono:
- ```&&``` and logico (e).
- ```||``` or logico (o inclusivo).
- ```!``` negazione.

## I/O
Input:
```cpp
cin >> variabile; // la variabile deve già esistere
cin >> variabile1 >> variabile2; // nell'input separate da uno spazio o su righe diverse
```
Output:
```cpp
cout << "stringa";
cout << variabile1 << ' ' << variabile2; //eventuali spazi vanno aggiunti a mano come char o stringhe
```

## if
La struttra dell'if è:

```cpp
if (condizione1){
    //codice eseguito se condizione1 è vera
}
else if (condizione2){
    //codice se condizione1 è falsa ma condizione2 è vera
}
else if (condizione3) { //si possono mettere tanti else if quanto serve, anche nessuno
    //codice se tutte le precedenti sono false ma condizione3 è vera
}
else{ //se tutte le condizioni precedenti sono false
    //codice
}
```

Nota:    
```=``` assegna un valore ad una variabile    
```==``` controlla se due valori sono uguali    
```!=``` controlla se sono diversi   

## while e for
La struttura di un while è:
```cpp
while(condizione){
    //codice
}
```

la struttura del for è:
```cpp
for(inizializzazione; condizione; azione eseguita dopo ogni ciclo){
    //codice
}

//esempio:
for(int i = 0; i<N; i++){ //inizia con i=0, continua finché i<N, ogni volta incrementa i di 1
    //codice
}
```

## vector
i vettori sono una lista di elementi a dimensione variabile.    
Inizializzazione:
```cpp
vector<tipo> nome(numero_elementi, valore_con_cui_riempire_il_vettore);
//esempi:
vector<int> vec; //sarà vuoto e di lunghezza 0
int N;
vector<int> v(N, 0); //sarà lungo N, con tutti gli elementi che inizialmente sono 0
vector<long long> v2 = {1, 2, 3}; //sarà quello descritto tra parentesi: il primo elemento è 1, ...
//posso anche fare vettori di vettori:
vector<vector<int>> matrice;
```
Per accedere/modificare un elemento:
```cpp
vector<int> vettore;
//gli indici vanno da 0 alla dimensione del vettore - 1
vettore[indice];
//esempi:
vector<int> v = {5, 6, 1, 2, 0};
v[0]; //è 5;
v[2]; //è 1;
v[4] = 17; //adesso il vettore è {5, 6, 1, 2, 17};
v[5]; //darà errore perchè l'ultimo elemento è il 4
```
Per aggiungere/togliere elementi alla fine:
```cpp
vector<int> vettore;
vettore.push_back(10); //aggiunge 10 alla fine, allungando il vettore
vettore.pop_back(); //toglie l'ultimo elemento, accorciando il vettore
```
Per cambiare la dimesione di un vettore:
```cpp
vector<int> vettore;
int nuova_dimensione;
vettore.resize(nuova_dimesione, valore_con_cui_riempire_il_vettore);
//esempio:
vettore.resize(5, -1); //vettore = {-1, -1, -1, -1, -1};
```