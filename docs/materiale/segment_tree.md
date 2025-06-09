# Segment tree
La struttura dati più utile e versatile in cp.
## Risorse esterne
- [segment tree, guida di Arcari](https://wiki.olinfo.it/lezioni/segment-tree-1)
- [segment tree con lazy, sempre di Arcari](https://wiki.olinfo.it/it/lezioni/segment-tree-2)
- [cp-algorithms](https://cp-algorithms.com/data_structures/segment_tree.html)
## Implementazione
Segment iterativo, preso da [questo blog su cf](https://codeforces.com/blog/entry/18051):
```cpp
// segment ierativo
#include <bits/stdc++.h>
using namespace std;

struct segtree {
  int n;
  vector<int> t;
  segtree(vector<int> &v) : n(v.size()) {
    t.resize(2*n);
    copy(v.begin(), v.end(), t.begin()+n);
    for (int i = n - 1; i >= 1; i--) t[i] = t[i << 1 | 1] + t[i << 1];
  }
  void upd(int i, int x){
    for(t[i += n] += x; i >>= 1; ) t[i] = t[i << 1] + t[i << 1 | 1];
  }
  int query(int l, int r){
    int sum = 0;
    for(l += n, r+= n; l<=r; l >>= 1, r >>= 1){
      if(l & 1) sum += t[l++];
      if(!(r & 1)) sum += t[r--];
    }
    return sum;
  }
};
```
Segment ricorsivo (con lazy propagation):
```cpp
//segment tree ricorsivo con lazy propagation
//in questo caso l'operazione è la somma, l'update è add

#include <bits/stdc++.h>
using namespace std;

vector<int> t; //resize(4n)
vector<int> lazy; //resize(4n)
int n;

void push(int v, int nl, int nr){
    if(!lazy[v]) return;
    t[v] += lazy[v]*(nr-nl+1);
    if(nl!=nr){
        lazy[v*2]+=lazy[v];
        lazy[v*2+1]+=lazy[v];
    }
    lazy[v]=0;
    return;
}

int sum(int v, int nl, int nr, int ql, int qr){
    push(v, nl, nr);
    if(ql<=nl && nr<=qr) return t[v];
    if(nl > qr || nr < ql) return 0;
    int m = (nl+nr)/2;
    return sum(v*2, nl, m, ql, qr) + sum(v*2+1, m+1, nr, ql, qr);
}

void lazy_add(int v, int nl, int nr, int ql, int qr, int k){
    push(v, nl, nr);
    if(ql<=nl && nr<=qr){
        lazy[v]+=k; return;
    }
    if(nl>qr || nr <ql) return;
    int m = (nl+nr)/2;
    lazy_add(v*2, nl, m, ql, qr, k); 
    lazy_add(v*2+1, nl, nr, m+1, qr, k);
    return;
}

void add(int v, int nl, int nr, int idx, int k){
    push(v, nl, nr);
    if(nl==nr){
        t[v]+=k; return;
    }
    int m = (nl+nr)/2;
    if(idx<=m) add(v*2, nl, m, idx, k); 
    else add(v*2+1, m+1, nr, idx, k);
    t[v]=t[v*2]+t[v*2+1];
    return;
}
```