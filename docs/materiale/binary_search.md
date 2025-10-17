# Binary search
Complessità: O(logN)
## Codice
```cpp
int l, r;
l = -1; r = n;
while(r-l>1){
    int m = (l+r)/2;
    if(check(m)) l = m;
    else r = m;
}
```
Se ```check(x)``` è prima vera e poi falsa (se no è analogo), ```l``` deve essere un valore per cui siamo sicuri che funzioni,
mentre ```r``` che siamo sicuri non funzioni. Alla fine ```l``` sarà il più grande t.c ```check(l)``` è vero
mentre ```r``` sarà il più piccolo t.c. che sia falso.

## Risorse esterne
- [https://cp-algorithms.com/num_methods/binary_search.html](https://cp-algorithms.com/num_methods/binary_search.html)
Approfondimenti:
- [ternary search](https://cp-algorithms.com/num_methods/ternary_search.html)
- [binary search parallele](https://codeforces.com/blog/entry/45578)

## Problemi
- [Annoluce](https://training.olinfo.it/task/ois_annoluce)
- [avg2](https://training.olinfo.it/task/ois_avg2)
- [Aeroporto](https://training.olinfo.it/task/oii_aeroporto)
- [Trendytrash](./problemi/trendytrash.md)
- [Altavelocità](./problemi/altavelocità.md)
- [Wine](https://training.olinfo.it/task/ois_wine)
- [Corteo](https://training.olinfo.it/task/oii_corteo)
 
