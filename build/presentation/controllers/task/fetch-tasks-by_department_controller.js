"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTasksByDepartmentController = void 0;
class FetchTasksByDepartmentController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchTasksByDepartment(request.params);
        return {
            statusCode: 200,
            data: result
        };
    }
}
exports.FetchTasksByDepartmentController = FetchTasksByDepartmentController;
