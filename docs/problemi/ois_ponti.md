# Ponti e isole

Link: [ois_ponti](https://training.olinfo.it/task/ois_ponti)

Fonte: OIS 2014 Round 2

<details>
<summary>Categoria</summary>
Grafi
</details>

<details>
<summary>Sketch</summary>
Notiamo che il problema si riduce ad individuare il numero di componenti connesse. Infatti ogni coppia di componenti connesse può essere unita tramite la costruzione di un ponte tra due nodi appartenenti alle due componenti.
<br>
Sia X il numero di componenti connesse, la risposta sarà quindi X-1.
</details>

<details>
<summary>Soluzione</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> adj;
vector<bool> visited;

void dfs(int v) {
	if (visited[v]) return;
	visited[v] = true;

	for (auto u: adj[v]) {
		dfs(u);
	}
}

int main() {
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);

	int N, M; cin >> N >> M;

	adj.resize(N);
	visited.resize(N, false);

	for (int i = 0, x, y; i < M; i++) {
		cin >> x >> y;

		adj[x].push_back(y);
		adj[y].push_back(x);
	}

	int R = 0;
	for (int i = 0; i < N; i++) {
		if (!visited[i]) {
			dfs(i);
			R++;
		}
	}

	cout << R-1 << '\n';
    return 0;
}
```
</details>
