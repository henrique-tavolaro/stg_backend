"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentDatasource = void 0;
const api_errors_1 = require("../../../main/server/errors/api-errors");
const department_1 = require("../../schema-models/department");
class DepartmentDatasource {
    async createDepartment(props) {
        const { name } = props;
        if (await department_1.Department.findOne({ name })) {
            throw new api_errors_1.BadRequestError('Esta área já existe');
        }
        return await department_1.Department.create({ name });
    }
    async fetchDepartments() {
        return await department_1.Department.find().where('deletedAt').equals(null);
    }
    async fetchDepartment(props) {
        const department = await department_1.Department.findById(props.id);
        if (department.deletedAt != null) {
            throw new api_errors_1.NotFoundError('Área não encontrada');
        }
        return department;
    }
    async deleteDepartment(props) {
        const now = Date.now();
        await department_1.Department.findByIdAndUpdate(props.id, { deletedAt: now });
        return;
    }
}
exports.DepartmentDatasource = DepartmentDatasource;
