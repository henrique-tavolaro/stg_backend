"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
class UpdateTaskController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        await this.repository.updateTask(request.body);
        return {
            statusCode: 200,
            data: 'Tarefa atualizada com sucesso'
        };
    }
}
exports.UpdateTaskController = UpdateTaskController;
