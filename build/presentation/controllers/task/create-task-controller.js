"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
class CreateTaskController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.createTask(request.body);
        return {
            statusCode: 201,
            data: result
        };
    }
}
exports.CreateTaskController = CreateTaskController;
