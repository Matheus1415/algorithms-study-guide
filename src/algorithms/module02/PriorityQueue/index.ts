/**
 * Algoritmo: Gerenciamento de Impressão e Tarefas de Servidor
 *
 * Ideia Principal:
 * "Atender os Clientes/Tarefas Mais Importantes Primeiro."
 *
 * Em sistemas de fila comuns (FIFO), a ordem de chegada define a execução.
 * Já em uma Fila de Prioridade (Priority Queue), cada tarefa tem um "peso"
 * de importância — e as mais prioritárias são processadas antes das outras,
 * independentemente da ordem de chegada.
 *
 * Exemplos Reais:
 * - Impressoras corporativas (documentos urgentes primeiro)
 * - Processamento de pagamentos (clientes Premium antes dos comuns)
 * - Microsserviços e APIs (requisições críticas com prioridade alta)
 *
 * Complexidade:
 * - Inserção (enqueue): O(log n)
 * - Remoção (dequeue): O(log n)
 * - Consulta (peek): O(1)
 */

export interface PriorityJob {
  id: number;
  description: string;
  // quanto menor o número, maior a prioridade
  priority: number;
  duration: number;
}

export class PriorityQueue {
  private queue: PriorityJob[] = [];
  private isProcessing = false;
  private processedJobs: PriorityJob[] = [];

  // Adiciona uma nova tarefa à fila por orderm de prioridade
  enqueue(job: PriorityJob) {
    this.queue.push(job);
    this.queue.sort((a, b) => a.priority - b.priority);
    this.processQueue();
  }

  private async processQueue() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const job = this.queue.shift()!;
      console.log("--------------------------------");
      console.log(`Iniciando: ${job.description} (Prioridade: ${job.priority})`);

      const startTime = Date.now();
      await this.simulateJob(job.duration);
      const endTime = Date.now();

      console.log(
        `Finalizada: ${job.description} — Tempo total: ${(endTime - startTime) / 1000}s`
      );

      this.processedJobs.push(job);
    }

    this.isProcessing = false;
    console.log("--------------------------------");
    console.log("Todas as tarefas foram processadas!");
  }

  private async simulateJob(time: number) {
    const start = Date.now();
    const end = start + time;
    while (Date.now() < end) {
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  }

  exportToSheet() {
    console.log("\nExportando tarefas para planilha...");
    console.table(this.processedJobs);
  }
}

// Exemplo de uso
// const priorityQueue = new PriorityQueue();

// priorityQueue.enqueue({
//   id: 1,
//   description: "Impressão urgente do diretor",
//   priority: 1,
//   duration: 3000,
// });
// priorityQueue.enqueue({
//   id: 2,
//   description: "Relatório de 500 páginas do estagiário",
//   priority: 5,
//   duration: 2000,
// });
// priorityQueue.enqueue({
//   id: 3,
//   description: "Processar pagamento Premium",
//   priority: 2,
//   duration: 2500,
// });
// priorityQueue.enqueue({
//   id: 4,
//   description: "Processar pagamento padrão",
//   priority: 4,
//   duration: 1500,
// });

// setTimeout(() => priorityQueue.exportToSheet(), 12000);
