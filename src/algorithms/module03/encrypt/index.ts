/**
 * Algoritmo de Criptografia Simétrica (Cifra de Substituição)
 *
 * Este algoritmo realiza uma criptografia simples deslocando o valor
 * de cada caractere da mensagem original (texto claro) com base em uma chave numérica.
 *
 * O mesmo valor da chave é utilizado tanto para criptografar quanto para descriptografar,
 * por isso é chamada de **criptografia simétrica**.
 *
 * Complexidade de tempo: O(n)
 *  - n = tamanho da mensagem
 *
 * @param text - Mensagem original que será criptografada
 * @param key - Valor numérico usado para deslocar cada caractere
 * @returns Texto criptografado (ou descriptografado)
 */
export function encrypt(text: string, key: number): string {
  let encrypted = "";

  for (let index = 0; index < text.length; index++) {
    // Código numérico do caractere
    const charCode = text.charCodeAt(index); 
    const shifted = charCode + key

    // Converte de volta para caractere
    encrypted += String.fromCharCode(shifted);
  }

  return encrypted;
}

/**
 * Descriptografa um texto cifrado, revertendo o deslocamento aplicado na criptografia.
 *
 * Complexidade de tempo: O(n)
 *  - n = tamanho da mensagem
 *
 * @param encryptedText - Texto criptografado
 * @param key - Mesma chave usada na criptografia
 * @returns Texto original descriptografado
 */
export function decrypt(encryptedText: string, key: number): string {
  let decrypted = "";

  for (let index = 0; index < encryptedText.length; index++) {
    // Código do caractere cifrado
    const charCode = encryptedText.charCodeAt(index);
    const shifted = charCode - key;

    // Reverte o deslocamento
    decrypted += String.fromCharCode(shifted);
  }

  return decrypted;
}


// Exemplo de uso 

// const message = "SegredoConfidencial123";
// const key = 5;

// console.log("Mensagem original:", message);

// const encrypted = encrypt(message, key);
// console.log("Criptografado:", encrypted);

// const decrypted = decrypt(encrypted, key);
// console.log("Descriptografado:", decrypted);

// console.table([
//   { Tipo: "Criptografado", Valor: encrypted },
//   { Tipo: "Descriptografado", Valor: decrypted },
// ]);
