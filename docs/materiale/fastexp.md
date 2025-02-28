<script
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  type="text/javascript">
</script>

# Esponenziazione veloce
Complessità: $O(\text{log}N)$ (dove N è l'esponente)
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

## Risorse esterne
[https://cp-algorithms.com/algebra/binary-exp.html](https://cp-algorithms.com/algebra/binary-exp.html)
