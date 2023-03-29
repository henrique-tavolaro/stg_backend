"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateDepartment = void 0;
const department_datasource_1 = require("../../../external/datasource/department/department-datasource");
const department_repository_1 = require("../../../infra/repositories/department-repository");
const create_department_controller_1 = require("../../../presentation/controllers/department/create-department-controller");
const makeCreateDepartment = () => {
    const datasource = new department_datasource_1.DepartmentDatasource();
    const repository = new department_repository_1.DepartmentRepository(datasource);
    return new create_department_controller_1.CreateDepartmentController(repository);
};
exports.makeCreateDepartment = makeCreateDepartment;
