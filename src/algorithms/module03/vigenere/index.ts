/**
 * Criptografa um texto utilizando a Cifra de Vigenère.
 *
 * Cada letra do texto é deslocada de acordo com o valor correspondente
 * da letra da chave. O deslocamento varia, criando uma criptografia
 * polialfabética (diferente da Cifra de César, que usa um deslocamento fixo).
 *
 * Complexidade de tempo: O(n)
 *  - n = tamanho da mensagem
 *
 * @param text - Texto original (apenas letras são cifradas)
 * @param key - Palavra-chave usada para definir os deslocamentos
 * @returns Texto criptografado
 */
export function vigenereEncrypt(text: string, key: string): string {
  let encrypted = "";

  const { sanitizedText, sanitizedKey } = sanitizeInput(text, key);
  const normalizedText = sanitizedText.toUpperCase();
  const normalizedKey = sanitizedKey.toUpperCase();

  for (
    let textIndex = 0, keyIndex = 0;
    textIndex < normalizedText.length;
    textIndex++
  ) {
    const char = normalizedText[textIndex];

    if (char >= "A" && char <= "Z") {
      const ASCII_A = 65;
      // valor entre 0 e 25
      const textCode = char.charCodeAt(0) - ASCII_A;
      const keyCode =
        normalizedKey[keyIndex % normalizedKey.length].charCodeAt(0) - ASCII_A;
      // aplica deslocamento
      const encryptedCode = (textCode + keyCode) % 26;
      encrypted += String.fromCharCode(encryptedCode + ASCII_A);
      keyIndex++;
    } else {
      // mantém espaços e pontuação
      encrypted += char;
    }
  }

  return encrypted;
}

/**
 * Descriptografa um texto cifrado utilizando a Cifra de Vigenère.
 *
 * Reverte o deslocamento aplicado na criptografia, subtraindo o valor
 * da letra da chave de cada letra do texto cifrado.
 *
 * Complexidade de tempo: O(n)
 *  - n = tamanho da mensagem
 *
 * @param encryptedText - Texto criptografado
 * @param key - Mesma chave usada na criptografia
 * @returns Texto original descriptografado
 */
export function vigenereDecrypt(encryptedText: string, key: string): string {
  let decrypted = "";

  const { sanitizedText, sanitizedKey } = sanitizeInput(encryptedText, key);
  const normalizedText = sanitizedText.toUpperCase();
  const normalizedKey = sanitizedKey.toUpperCase();

  for (
    let textIndex = 0, keyIndex = 0;
    textIndex < normalizedText.length;
    textIndex++
  ) {
    const char = normalizedText[textIndex];

    if (char >= "A" && char <= "Z") {
      const ASCII_A = 65;
      // valor entre 0 e 25
      const cipherCode = char.charCodeAt(0) - ASCII_A;
      const keyCode =
        normalizedKey[keyIndex % normalizedKey.length].charCodeAt(0) - ASCII_A;
      // aplica deslocamento
      const decryptedCode = (cipherCode - keyCode + 26) % 26;
      decrypted += String.fromCharCode(decryptedCode + ASCII_A);
      keyIndex++;
    } else {
      decrypted += char;
    }
  }

  return decrypted;
}

/**
 * Sanitiza o texto e a chave antes da criptografia:
 * - Remove números (0–9)
 * - Remove espaços extras
 * - Se após a limpeza o texto ou a chave ficarem vazios,
 *   aplica valores padrão.
 *
 * @param text Texto original para criptografar
 * @param key Chave fornecida
 * @returns Um objeto com { sanitizedText, sanitizedKey }
 */
function sanitizeInput(
  text: string,
  key: string
): { sanitizedText: string; sanitizedKey: string } {
  // Remove números e espaços extras
  let sanitizedText = text.replace(/[0-9]/g, "").trim();
  let sanitizedKey = key.replace(/[0-9]/g, "").trim();

  // Substitui por valores padrão se estiver vazio
  if (!sanitizedText) {
    sanitizedText = "TEXTO_PADRAO";
    console.warn(
      "Nenhum texto válido fornecido. Usando valor padrão: 'TEXTO_PADRAO'"
    );
  }

  if (!sanitizedKey) {
    sanitizedKey = "CHAVE";
    console.warn(
      "Nenhuma chave válida fornecida. Usando valor padrão: 'CHAVE'"
    );
  }

  return { sanitizedText, sanitizedKey };
}

// Exemplo de uso:
// const text = "Menssagem Secreta";
// const key = "CHAVE";

// const encrypted = vigenereEncrypt(text, key);
// const decrypted = vigenereDecrypt(encrypted, key);

// console.table({
//   TextoOriginal: text,
//   Criptografado: encrypted,
//   Descriptografado: decrypted,
// });
