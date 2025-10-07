import { breadthFirstSearch } from "./algorithms/module02/BreadthFirstSearch";

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A"],
  D: ["B"],
  E: ["B"],
};

console.log("Ordem de visita BFS:", breadthFirstSearch(graph, "A"));