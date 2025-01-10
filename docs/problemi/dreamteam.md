# DreamTeam Selection
Link: [ioit_dreamteam](https://training.olinfo.it/task/ioit_dreamteam)

Fonte: IOI in Teams 2017

<details>
<summary>Categoria</summary>
Greedy  
</details>

<details>
<summary>Hint 1</summary>
Come risolveresti il problema se ogni persona avesse un valore fisso indipendente dai suoi compagni di squadra?
</details>

<details>
<summary>Hint 2</summary>
Per ogni coppia di amici, qual è tra i due il primo amico che ci conviene prendere?
</details>

<details>
<summary>Hint 3</summary>
Una volta preso il primo amico, che impatto ha sulla forza della squadra prendere anche il suo migliore amico? Come possiamo quindi vedere l'aggiunta del secondo amico di una coppia di migliori amici?
</details>

<details>
<summary>Sketch</summary>
Per ogni coppia di amici conviene prendere per primo l'amico con P[i] maggiore. Aggiungere il suo migliore amico alla squadra ha un impatto sulla forza del team pari a Q[i] + Q[F[i]] - P[i], ovvero la differenza tra i punti che effettuano se sono in squadra insieme e i punti che effettuerebbe l'amico con P[i] maggiore. 

Se il problema non avesse la limitazione dei migliori amici (e avessimo quindi solo il vettore P) ci basterrebbe sortare P in ordine decrescente e sommare i primi K valori. Con le osservazioni che abbiamo fatto notiamo che ci basta per ogni coppia di amici aggiungere ad un vettore max(P[i], P[F[i]]) e Q[i] + Q[F[i]] - max(P[i], P[F[i]]), sortarlo in ordine decrescente e sommare i primi K valori. 

N.B. nella soluzione che è allegata qui if (i < F[i]) serve ad accertarsi che considereremo ogni coppia una sola volta e per sortare il vettore in ordine decrescente usiamo una lambda (ci sono anche altri modi di sortare in ordine decrescente ma la lambda è più versatile e permette di utilizzare funzioni di compare più complesse)
</details>

<details>
<summary>Soluzione</summary>

```cpp
#include <bits/stdc++.h>

using namespace std;

#define MAXN 100000

int select(int N, int K, vector<int> F, vector<int> P, vector<int> Q) {
    vector<int> A;
    for (int i = 0; i < N; i++) {
        if (i < F[i]) {
            int C = max(P[i], P[F[i]]);
            A.push_back(C);
            A.push_back(Q[i] + Q[F[i]] - C);
        }
    }

    sort(begin(A), end(A), [&] (int i, int j) {
        return i > j;
    });

    int X = 0;
    for (int i = 0; i < K; i++) {
        X += A[i];
    }

    return X;
}

int main() {
    int N, K; cin >> N >> K;

    vector<int> F(N), P(N), Q(N);
    for (int i = 0; i < N; i++) {
        cin >> F[i] >> P[i] >> Q[i];
    }

    cout << select(N, K, F, P, Q) << '\n';

    return 0;
}
``` 
</details>
