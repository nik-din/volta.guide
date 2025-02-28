# Pila di monete
Link: [tai_monete](https://training.olinfo.it/task/tai_monete)

Fonte: Think About It

<details>
<summary>Categoria</summary>
dp, minqueue
</details>

<details>
<summary>Hint 1</summary>
Come puoi risolvere il problema in O(NK)?
</details>

<details>
<summary>Hint 2</summary>
Prova a ottimizzare la dp, pensando anche ai tag. Vogliamo calcolare il minimo di un range in cui possiamo solo aggiungere in fondo e togliere dall'inizio, quindi...
</details>

<details>
<summary>Sketch</summary>
Per prima cosa pensiamo alla dp in ```O(NK)```: per ogni elemento ```i``` iteriamo sui ```K``` valori precedenti nella dp e scegliamo il valore ottimale, la soluzione sarà quindi ```S - dp[j]```, dove ```S``` è la somma dei valori delle prime ```i``` monete (quell che guadagnamo sarà dato dalla differenza tra il totale e quello che guadagna il nostro avversario). Possiamo ottimizzare la dp utilizzando una minqueue: quando calcoliamo ```dp[i]``` la aggiungiamo in fondo alla minqueue e togliamo il valore di ```dp[i-K]```, trovando quindi il minimo in ```O(1)```.
</details>

<details>
<summary>Soluzione</summary>

```cpp
#include<bits/stdc++.h>

using namespace std;

struct MinQueue {
	deque<array<int, 2>> q;

	void add(int x, int i) {
		while (!q.empty() && q.back()[0] > x) {
			q.pop_back();
		}
		q.push_back({x, i});
	}

	bool remove(int i) {
		if (q.front()[1] == i) {
			q.pop_front();
			return true;
		}
		return false;
	}

	int min() {
		return q.empty() ? -1 : q.front()[0];
	}
};

int best_score(int N, int K, vector<int> &monete){
	MinQueue Q; Q.add(0, -1);

	int S = 0;
	vector<int> dp(N);
	for (int i = 0; i < N; i++) {
		S += monete[i];
		dp[i] = S - Q.min();
		Q.add(dp[i], i);
		Q.remove(i - K);
	}

	return dp[N - 1];
}
```
</details>