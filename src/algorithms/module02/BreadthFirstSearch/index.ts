/**
 * Algoritmo BFS (Breadth-First Search)
 *
 * Explora todos os vértices (nós) de um grafo nível por nível,
 * utilizando uma Fila (Queue) para garantir que todos os vizinhos
 * de um nó sejam visitados antes de passar para o próximo nível.
 *
 * Complexidade de tempo: O(V + E)
 *  - V = número de vértices (nós)
 *  - E = número de arestas (conexões)
 * @param graph - Grafo representado como um mapa de adjacência
 * @param start - Nó inicial para começar a busca
 * @returns Array com a ordem de visita dos nós
 */
export function breadthFirstSearch(
  graph: Record<string, string[]>,
  start: string
): string[] {
  // Variáveis de estado
  const visited: Set<string> = new Set();
  const queue: string[] = [start];
  const result: string[] = [];

  while (queue.length > 0) {
    // Pega o primeiro nó da fila
    const currentStack = queue.shift()!;

    // Se o nó ainda não foi visitado
    if (!visited.has(currentStack)) {
      visited.add(currentStack);
      result.push(currentStack);

      // Enfileira os vizinhos não visitados
      for (const neighborStack of graph[currentStack]) {
        if (!visited.has(neighborStack)) {
          queue.push(neighborStack);
        }
      }
    }
  }
  
  return result;
}

// Exemplo de uso
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A"],
  D: ["B"],
  E: ["B"],
};

console.log("Ordem de visita BFS:", breadthFirstSearch(graph, "A"));
// Saída esperada: A → B → C → D → E