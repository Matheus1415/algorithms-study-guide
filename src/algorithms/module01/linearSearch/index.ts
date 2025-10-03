/**
 * Pesquisa Linear (Linear Search)
 * 
 * Percorre cada elemento de uma lista para encontrar um item específico.
 * Funciona com arrays de qualquer tipo (número, string, objeto) graças a Generics.
 * 
 * Complexidade de tempo: O(n)
 * Melhor caso: O(1) -> item está na primeira posição
 * Pior caso: O(n) -> item está no final ou não existe
 * 
 * @param array Lista de elementos genéricos
 * @param target Elemento a ser encontrado
 * @returns Índice do elemento se encontrado, caso contrário -1
 */
export function linearSearch<T>(array: T[], target: T): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1; 
}


// Exemplo de uso:
const numbers = [10, 23, 45, 70, 11, 15];
const targetNumber = 70;
const resultIndex = linearSearch(numbers, targetNumber);
console.log(`Número ${targetNumber} encontrado no índice:`, resultIndex);