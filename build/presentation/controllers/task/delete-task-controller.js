"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
class DeleteTaskController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.deleteTask(request.body);
        return {
            statusCode: 200,
            data: "Tarefa excluída com sucesso"
        };
    }
}
exports.DeleteTaskController = DeleteTaskController;
