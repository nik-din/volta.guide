# c++ di base

## Tipi
c++ ha tipi statici. Sono:
- ```bool``` booleani, cioè ```true``` e ```false```
- ```int``` per rappresentare numeri interi tra -2147483648 e 2147483647 (ordine di grandezza 1e9)
- ```long long int``` per rappresentare numeri interi tra -9,223,372,036,854,775,808 e 9,223,372,036,854,775,807 (ordine di grandezza 1e18)
- ```float``` per rappresentare numeri con la virgola (da evitare per errori di precisione), massimo e minimo come gli ```int```
- ```char``` per singoli caratteri, si mette il carattere tra apici: ```'a'```
- ```string``` per liste di caratteri (parole), si mette il carattere tra doppie apici ```"a"```

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

