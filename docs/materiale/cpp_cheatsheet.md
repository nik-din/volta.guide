# c++ di base
Quello sotto è un elenco riassuntivo di quello che faremo al corso base.
Se non avete mai imparato prima un linguaggio di programmazione (e non siete venuti a lezione),
può avere senso guardarsi qualche tutorial su internet, ad esempio (questo)[https://cplusplus.com/doc/tutorial/] (alcune cose sono un po' in dettaglio) 
o (questo)[https://www.w3schools.com/cpp/] (non li ho provati personalmente).

## Struttura di base
Ogni file c++ che scriveremo avrà questa struttura:
```cpp
#include <bits/sdtc++.h>
using namespace std;

int main(){
    //dopo ogni riga di codice si mette un ;
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
cin >> variabile;
```
Output:
```cpp
cout << "stringa";
cout << variabile;
```

## if
La struttra dell'if è:

```cpp
if(condizione1){
    //codice
}
else if(condizione2){ //solo se condizione1 è falsa
    //codice
}
else{ //se tutte le condizioni prima sono false
    //codice
}
```

Nota:    
= assegna un valore ad una variabile    
== controlla se due valori sono uguali    
!= controlla se sono diversi   

## while e for
La struttura di un while è:
```cpp
while(condizione){
    //codice
}
```

la struttura del for è:
```cpp
for(inizializzazione, int i = 0; condizione, i<N; azione eseguita dopo ogni ciclo, i++){
    //codice
}
```



