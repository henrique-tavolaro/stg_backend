"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFetchDepartments = void 0;
const department_datasource_1 = require("../../../external/datasource/department/department-datasource");
const department_repository_1 = require("../../../infra/repositories/department-repository");
const fetch_departments_controller_1 = require("../../../presentation/controllers/department/fetch-departments-controller");
const makeFetchDepartments = () => {
    const datasource = new department_datasource_1.DepartmentDatasource();
    const repository = new department_repository_1.DepartmentRepository(datasource);
    return new fetch_departments_controller_1.FetchDepartmentsController(repository);
};
exports.makeFetchDepartments = makeFetchDepartments;
