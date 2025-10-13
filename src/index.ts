import { PriorityQueue } from "./algorithms/module02/PriorityQueue";

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue({
  id: 1,
  description: "Impressão urgente do diretor",
  priority: 1,
  duration: 3000,
});
priorityQueue.enqueue({
  id: 2,
  description: "Relatório de 500 páginas do estagiário",
  priority: 5,
  duration: 2000,
});
priorityQueue.enqueue({
  id: 3,
  description: "Processar pagamento Premium",
  priority: 2,
  duration: 2500,
});
priorityQueue.enqueue({
  id: 4,
  description: "Processar pagamento padrão",
  priority: 4,
  duration: 1500,
});

setTimeout(() => priorityQueue.exportToSheet(), 12000);