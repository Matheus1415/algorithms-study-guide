/**
 * Algoritmo de Tarefas Assíncronas (Job Queue)
 *
 * Como Funciona:
 * - Tarefas demoradas são adicionadas a uma fila (queue).
 * - Um "worker" processa cada tarefa em ordem (FIFO), aguardando a conclusão antes de iniciar a próxima.
 *
 * Uso Real:
 * - Envio de e-mails, geração de relatórios, processamento de pagamentos.
 *
 * Complexidade:
 * - Inserção (enqueue): O(1)
 * - Remoção/Processamento: O(n)
 */

// Tipagem para uma tarefa
export interface Job {
  id: number;
  description: string;
  // tempo que a tarefa leva para executar
  duration: number;
  // opcional: espera após finalizar
  delayAfter?: number;
}

export class JobQueue {
  private queue: Job[] = [];
  private isProcessing = false;

  enqueue(job: Job) {
    this.queue.push(job);
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  // Processa a fila de tarefas
  private async processQueue() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const job = this.queue.shift()!;
      console.log("--------------------------------");
      console.log(`Iniciando: ${job.description} (${job.duration}ms)`);

      // simula a execução da tarefa usando tempo absoluto
      await this.simulateJob(job.duration);
      console.log(`Finalizada: ${job.description}`);
      console.log("--------------------------------");

      // espera opcional entre tarefas
      if (job.delayAfter) {
        console.log(
          `Aguardando ${job.delayAfter}ms antes da próxima tarefa...`
        );
        await this.simulateJob(job.delayAfter);
      }
    }

    this.isProcessing = false;
    console.log("Todas as tarefas foram processadas!");
  }

  private async simulateJob(time: number) {
    const start = Date.now();
    const end = start + time;

    // "trava" o loop até que o tempo seja atingido
    while (Date.now() < end) {
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  }
}

// Exemplo de uso

// const queue = new JobQueue();
// queue.enqueue({ id: 1, description: "Enviar e-mail de boas-vindas", duration: 5000, delayAfter: 1000 });
// queue.enqueue({ id: 2, description: "Gerar relatório semanal", duration: 3000, delayAfter: 500 });
// queue.enqueue({ id: 3, description: "Processar pagamento do pedido #4521", duration: 4000 });
