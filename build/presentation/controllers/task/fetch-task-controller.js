"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTaskController = void 0;
class FetchTaskController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchTask(request.params);
        return {
            statusCode: 200,
            data: result
        };
    }
}
exports.FetchTaskController = FetchTaskController;
