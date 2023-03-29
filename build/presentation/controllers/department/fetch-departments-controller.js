"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchDepartmentsController = void 0;
class FetchDepartmentsController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchDepartments();
        return {
            statusCode: 200,
            data: result
        };
    }
}
exports.FetchDepartmentsController = FetchDepartmentsController;
