"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepartmentController = void 0;
class CreateDepartmentController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.createDepartment(request.body);
        return {
            statusCode: 201,
            data: result
        };
    }
}
exports.CreateDepartmentController = CreateDepartmentController;
