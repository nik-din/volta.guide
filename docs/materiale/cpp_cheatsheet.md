# c++ di base
Quello sotto è un elenco riassuntivo di quello che abbiamo fatto al corso base.
Se non avete mai imparato prima un linguaggio di programmazione (e non siete venuti a lezione),
può avere senso guardarsi qualche tutorial su internet, ad esempio [questo](https://cplusplus.com/doc/tutorial/) (alcune cose sono un po' in dettaglio) 
o [questo](https://www.w3schools.com/cpp/).    
(non li ho provati personalmente).    
c++ è molto più vasto di quello che c'è scritto qua e non ha neanche senso impararselo tutto. Per questo per dubbi di vario genere bisogna far riferimento alla [reference ufficiale](https://en.cppreference.com/w/), a cui tra l'altro potete accedere anche in gara.

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
Per chi sa cos'è un vector posso usare anche:
```cpp
vector<int> vec;
for(int valore: vec){

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

## funzioni
Le funzioni sono un oggetto che può essere chiamato con un certo input come parametri per ritornare un certo output.    
Ogni funzione ha quindi il tipo della variabile che ritorna e diversi parametri, ognuno con il loro tipo e un nome.   
Esempi:
```cpp
tipo_da_ritornare nome_funzione(tipo1 parametro1, tipo2 parametro2, ..., tipo3 parametro3){
    //codice
    return var; //dove var è tipo_da_ritornare
}

int main(){
    tipo_da_ritornare var;
    var = nome_funzione(parametri....); //var avrà il valore ritornato
}

//se non ritorna valori uso il tipo void

void funzione(parametri...){
    //codice
    return; //non ritorno niente
}

//esempi:

int sum(int a, int b){
    int c= a+b;
    return c;
    //o return a+b
}

int somma_di_tanti_numeri(vector<int>vec){
    int sol = 0;
    int n = vec.size();
    for(int i = 0; i<n; i++){
        sol += vec[i];
    }
    return sol;
}

//posso chiamare una funzione dentro un'altra in modo ricorsivo
int fibonacci(int n){
    if(n==1 || n==2) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

```

## stl
### funzioni
```sort()``` serve per ordinare un vettore in ordine crescente. Si può anche passare come parametro un comparatore per cambiare ordinarli secondo un altro criterio.  
```cpp
vector<int> vec;
sort(vec.begin(), vec.end()); //ordina in ordine crescente

vector<string> vec2;
sort(vec2.begin(), vec2.end()); //ordina le stringhe lessicograficamente (come nel dizionario)

vector<pair<int, int>> vec3; 
sort(vec3.begin(), vec3.end()); //anche in questo caso in ordine lessicografico

bool comp(int a, int b){
    return a > b; //posso definire un mio comparatore (quello standard è a < b)
}
sort(vec.begin(), vec.end(), comp); //ordina in modo decrescente
```

```swap``` serve per scambiare il valore di due variabili in O(1).
```cpp
int a = 2; int b = 3;
swap(a, b); //adesso a = 3 e b = 2;

vector<int> v1; vector<int> v2;
swap(v1, v2); //posso swappare tutte le strutture della stl in O(1)
```

```lower_bound``` e ```upper_bound``` servono per trovare in un vettore il primo elemento >= o > di un dato valore.
```cpp
vector<int> vec;
lower_bound(vec.begin(), vec.end() valore); //ottiene il primo elemento >= del valore complessità: O(logN)
lower_bound(vec.begin(), vec.end(), valore) - vec.begin(); //per trovare l'indice dell'elemento trovato complessità: O(logN)
upper_bound(vec.begin(), vec.end(), valore); //ottiene il primo elemento > del valore complessità: O(logN)
upper_bound(vec.begin(), vec.end(), valore) - vec.begin(); //per trovare l'indice dell'elemento trovato complessità: O(logN)
```

### data structures

#### priority_queue
Permette di trovare il più grande elemento.
```cpp
priority_queue<tipo> pq;
pq.top(); // elemento più grande complessità: O(1)
pq.pop(); // elimina l'elemento più grande complessità: O(logN)
pq.push(10); // aggiunge un elemento complessità: O(logN)
```

#### set
Data structure in cui non sono ammessi duplicati e gli elementi sono ordinati.    
Non posso accedere ad un singolo elemento con un indice, ma posso contrallare se c'è un elemento e il primo elemento più grande di un certo valore.
```cpp
set<tipo> s;
s.insert(valore); //inserisce un elemento nel set complessità: O(logN)
s.erase(valore); //elimina un elemnto complessità: O(logN)
*s.begin(); //primo elemento complessità: O(1)
s.end(); //punta a dopo l'ultimo elemento, leggere sotto per dettagli complessità: O(1)
*s.lower_bound(valore); //ottiene il primo elemento >= del valore complessità: O(logN)
*s.upper_bound(valore); //ottiene il primo elemento > del valore complessità: O(logN)
s.count(valore); //conta il numero di elementi uguali al valore 
//count nel set può ritornare solo 0 e 1 complessità: O(logN)
```
Se voglio accedere ad elementi vicini ad ```s.begin()```, ```s.end()```, ```s.lower_bound()``` o ```s.upper_bound```, basta salvarseli in una variabile ```auto``` (ad esempio ```auto it = s.begin()```) e poi ci si può spostare con ```++``` e ```--``` (tipo ```it++``` o ```it--```). A quel punto si può leggere l'elemento in quella posizione con ```*``` (ad esempio ```*it```).    
Se siete curiosi questo succede perché queste funzioni ritornano un iteratore, potete trovare informazioni su internet, diciamo che però adesso non ci servono.

#### map
Struttura dati in cui ad ogni elemento è associata una chiave, con cui posso accederci (un po' come l'indice nel vettore ma la chiave può essere qualuqnue cosa).    
All'interno le coppie chiave, valore sono ordinati in ordine crescente in base alla chiave.
```cpp
map<tipo_chiave, tipo_valore> mp;
mp[chiave] = valore; //sia per creare una coppia chiave valore che per cambiare il valore o altro complessità: O(logN)
//per ciclare sulle coppie chiave, valore posso fare:
for(auto [c, v]: mp){
    //faccio qualcosa con c e v
}
mp.count(chiave); //posso controllare il numero di elementi con una data chiave complessità: O(logN)
mp.insert({chiave, valore}); //posso aggiungere elementi così complessità: O(logN)
mp.erase({chiave, valore}); //ed eliminarli così
```

#### unordered-, multi-
Sia per i set che per le map esistono delle varianti.   
```unordered_``` vuol dire che gli elementi non sono ordinati. La complessità delle operazioni scende a O(1) ammortizzato.    
```multi``` vuol dire che possono essere più elementi con lo stesso valore (nel ```multiset```) o chiave (```multimap```). Nelle ```multimap``` non posso usare ```mp[chiave]```.

#### queue, stack, list
Con la queue aggiungo da un lato tolgo/vedo dall'altro (come una coda).
```cpp
queue<tipo> q;
q.front(); //elemento davanti complessità: O(1)
q.pop(); //elimino elemento davanti complessità: O(1)
q.push(valore); //aggiungo elemento in fondo complessità: O(1)
```
Con lo stack aggiungo e tolgo dallo stesso lato (come una pila di libri).
```cpp
stack<int> st;
st.top(); //elemento in cima complessità: O(1)
st.pop(); //elimino elemento in cima complessità: O(1)
st.push(valore); //aggiungo elemento in cima complessità: O(1)
```
Con la deque aggiungo e tolto da entrambi i lati, ma posso anche accedere agli elemnti attraverso gli indici!
```cpp
deque<int> dq;
dq.front(); //elemento davanti complessità: O(1)
dq.push_front(valore); //aggiungo elemento davanti: O(1)
dq.pop_front(); //tolgo elemenot davanti complessità: O(1)
dq.back(); //elemento dietro complessità: O(1)
dq.push_back(valore); //aggiungo elemento dietro: O(1)
dq.pop_back(); //tolgo elemenot dietro complessità: O(1)
dq[indice]; //accede con gli indici (come i vettori) complessità: O(1)
```