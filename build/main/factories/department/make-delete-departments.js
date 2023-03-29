"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteDepartment = void 0;
const department_datasource_1 = require("../../../external/datasource/department/department-datasource");
const department_repository_1 = require("../../../infra/repositories/department-repository");
const delete_department_controller_1 = require("../../../presentation/controllers/department/delete-department-controller");
const makeDeleteDepartment = () => {
    const datasource = new department_datasource_1.DepartmentDatasource();
    const repository = new department_repository_1.DepartmentRepository(datasource);
    return new delete_department_controller_1.DeleteDepartmentController(repository);
};
exports.makeDeleteDepartment = makeDeleteDepartment;
