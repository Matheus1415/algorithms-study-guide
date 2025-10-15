import { decrypt, encrypt } from "./algorithms/module03/encrypt";

const message = "SegredoConfidencial123";
const key = 5;

console.log("Mensagem original:", message);

const encrypted = encrypt(message, key);
console.log("Criptografado:", encrypted);

const decrypted = decrypt(encrypted, key);
console.log("Descriptografado:", decrypted);

console.table([
  { Tipo: "Criptografado", Valor: encrypted },
  { Tipo: "Descriptografado", Valor: decrypted },
]);