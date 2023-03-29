"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTasksController = void 0;
class FetchTasksController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchTasks(request.params);
        return {
            statusCode: 200,
            data: result
        };
    }
}
exports.FetchTasksController = FetchTasksController;
