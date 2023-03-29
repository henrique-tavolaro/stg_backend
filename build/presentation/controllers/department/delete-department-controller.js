"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDepartmentController = void 0;
class DeleteDepartmentController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        await this.repository.deleteDepartment(request.body);
        return {
            statusCode: 200,
            data: 'Usuário deletado com sucesso'
        };
    }
}
exports.DeleteDepartmentController = DeleteDepartmentController;
