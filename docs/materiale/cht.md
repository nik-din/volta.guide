# Convex hull trick
L'ottimizazione si può usare per transizioni del tipo:    
$\text{dp}_i = \min_{j<i}(\text{dp}_j+q_j+m_jx_i)$
Transizioni di questo tipo si possono interpretare come trovare il minimo in un punto per un insieme di rette.   
Funziona solo se gli $x_i$ sono crescenti/decrescenti. Per casi più complicati è necessario il [Li chao tree](https://cp-algorithms.com/geometry/convex_hull_trick.html).
## Risorse 
- [Blog cf](https://codeforces.com/blog/entry/63823)
## Problemi
- [The fair nut and the rectangles](https://codeforces.com/contest/1083/problem) implementazione della tecnica
- [Usaco.guide](https://usaco.guide/plat/convex-hull-trick)
- [Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z) implementazione
- [Circular barn](https://usaco.org/index.php?page=viewproblem2&cpid=626) meno ovvio