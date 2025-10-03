import { linearSearch } from "./algorithms/module01/linearSearch";

const numbers = [10, 23, 45, 70, 11, 15];
const targetNumber = 70;
const resultIndex = linearSearch(numbers, targetNumber);
console.log(`Número ${targetNumber} encontrado no índice:`, resultIndex);