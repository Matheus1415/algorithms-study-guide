import { checkDuplicate, bannedUsers } from "./algorithms/module01/checkDuplicate";

const username = "admin-user";

const isDuplicate = checkDuplicate(bannedUsers, username);

if (isDuplicate) {
  console.log(
    `O nome de usuário "${username}" já existe na lista de banidos.`
  );
} else {
  console.log(`O nome de usuário "${username}" está disponível.`);
}