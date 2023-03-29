"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFetchDepartment = void 0;
const department_datasource_1 = require("../../../external/datasource/department/department-datasource");
const department_repository_1 = require("../../../infra/repositories/department-repository");
const fetch_department_controller_1 = require("../../../presentation/controllers/department/fetch-department-controller");
const makeFetchDepartment = () => {
    const datasource = new department_datasource_1.DepartmentDatasource();
    const repository = new department_repository_1.DepartmentRepository(datasource);
    return new fetch_department_controller_1.FetchDepartmentController(repository);
};
exports.makeFetchDepartment = makeFetchDepartment;
