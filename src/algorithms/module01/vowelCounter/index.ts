/**
 * Contagem de Vogais (Vowel Counter)
 *
 * Recebe uma string e retorna o número de vogais encontradas.
 *
 * Complexidade:
 * - Tempo: O(n), onde n é o tamanho da string
 * - Espaço: O(1)
 *
 * @param text - A string a ser analisada
 * @returns Número de vogais encontradas
 */
export function vowelCounter(text: string): number {
  const vowel = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    "â",
    "ê",
    "î",
    "ô",
    "û",
    "ã",
    "õ",
    "ä",
    "ë",
    "ï",
    "ö",
    "ü",
  ];
  let count = 0;

  for (const char of text.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }

  return count;
}

// Exemplo de uso:
const text = "Aprender TypeScript é muito bom!";
console.log(`Vogais em "${text}":`, vowelCounter(text));
