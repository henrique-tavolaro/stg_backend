"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRepository = void 0;
class DepartmentRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }
    async createDepartment(props) {
        return await this.datasource.createDepartment(props);
    }
    async fetchDepartments() {
        return await this.datasource.fetchDepartments();
    }
    async fetchDepartment(props) {
        return await this.datasource.fetchDepartment(props);
    }
    async deleteDepartment(props) {
        return await this.datasource.deleteDepartment(props);
    }
}
exports.DepartmentRepository = DepartmentRepository;
