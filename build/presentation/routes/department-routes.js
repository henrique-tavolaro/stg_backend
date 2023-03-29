"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_route_1 = require("../../main/adapters/adapter-route");
const make_create_department_1 = require("../../main/factories/department/make-create-department");
const make_delete_departments_1 = require("../../main/factories/department/make-delete-departments");
const make_fetch_department_1 = require("../../main/factories/department/make-fetch-department");
const make_fetch_departments_1 = require("../../main/factories/department/make-fetch-departments");
exports.default = (router) => {
    router.post('/department', (0, adapter_route_1.adapterRoute)((0, make_create_department_1.makeCreateDepartment)()));
    router.get('/department', (0, adapter_route_1.adapterRoute)((0, make_fetch_department_1.makeFetchDepartment)()));
    router.get('/departments', (0, adapter_route_1.adapterRoute)((0, make_fetch_departments_1.makeFetchDepartments)()));
    router.delete('/department', (0, adapter_route_1.adapterRoute)((0, make_delete_departments_1.makeDeleteDepartment)()));
};
