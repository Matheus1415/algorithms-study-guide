import { JobQueue } from "./algorithms/module02/JobQueue";

const queue = new JobQueue();

queue.enqueue({ id: 1, description: "Enviar e-mail de boas-vindas", duration: 10000, delayAfter: 2000 });
queue.enqueue({ id: 2, description: "Gerar relatório semanal", duration: 15000, delayAfter: 2000 });
queue.enqueue({ id: 3, description: "Processar pagamento do pedido #4521", duration: 20000 });

