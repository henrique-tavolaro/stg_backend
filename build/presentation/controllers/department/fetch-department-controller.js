"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchDepartmentController = void 0;
class FetchDepartmentController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchDepartment(request.body);
        return {
            statusCode: 200,
            data: result
        };
    }
}
exports.FetchDepartmentController = FetchDepartmentController;
