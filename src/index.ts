import { vigenereDecrypt, vigenereEncrypt } from "./algorithms/module03/vigenere";

const text = "Menssagem Secreta";
const key = "CHAVE";

const encrypted = vigenereEncrypt(text, key);
const decrypted = vigenereDecrypt(encrypted, key);

console.table({
  TextoOriginal: text,
  Criptografado: encrypted,
  Descriptografado: decrypted,
});