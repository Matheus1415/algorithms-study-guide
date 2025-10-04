/**
 * Verificação de Duplicidade em Conjuntos de Dados Pequenos
 *
 * Ideia principal: "Parar na Primeira Ocorrência Positiva".
 *
 * O algoritmo percorre uma lista e compara cada item com o novo valor a ser validado.
 * Assim que encontra uma correspondência, interrompe a execução imediatamente,
 * retornando `true`. Se não encontrar nenhuma, retorna `false`.
 *
 * - Estruturas de repetição
 * - Comparação de valores
 * - Early return (parar logo que a condição é satisfeita)
 *
 * Complexidade:
 * - Tempo: O(n) — percorre cada item até achar (ou não) o duplicado
 * - Espaço: O(1) — não cria estruturas adicionais
 *
 * @param dataset - Lista de itens existentes
 * @param newItem - Item a ser verificado
 * @returns true se o item já existir, false caso contrário
 */

export function checkDuplicate<T>(dataset: T[], newItem: T): boolean {
  for (const item of dataset) {
    if (item === newItem) {
      return true;
    }
  }
  return false;
}

// Exemplo de uso:
export const bannedUsers = ["root", "test", "admin-user", "guest"];
const username = "admin-user";

const isDuplicate = checkDuplicate(bannedUsers, username);

if (isDuplicate) {
  console.log(
    `O nome de usuário "${username}" já existe na lista de banidos.`
  );
} else {
  console.log(`O nome de usuário "${username}" está disponível.`);
}
