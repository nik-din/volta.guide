# Esponenziazione veloce
Complessità: O(logN) (dove N è l'esponente)
## Codice
```cpp
int fastexp(int a, int b){
    if(b==0) return 1;
    int c = fastexp(a, b/2);
    if(b%2) return c*c*a;
    return c*c;
}
```
Attenti a overflow, spesso va implementato con i ```long long```  e i moduli.

Se no esiste la versione iterativa (più veloce):
```cpp
int fastexp(int a, int b){
    int sol = 1;
    while(b){
        if(b&1) sol *= a;
        a *= a;
        b >>= 1;
    }
    return sol;
}

```

## Risorse esterne
[https://cp-algorithms.com/algebra/binary-exp.html](https://cp-algorithms.com/algebra/binary-exp.html)

