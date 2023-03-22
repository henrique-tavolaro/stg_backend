import { Router } from "express";
import { adapterRoute } from "../../main/adapters/adapter-route";
import { makeCreateDepartment } from "../../main/factories/department/make-create-department";
import { makeDeleteDepartment } from "../../main/factories/department/make-delete-departments";
import { makeFetchDepartment } from "../../main/factories/department/make-fetch-department";
import { makeFetchDepartments } from "../../main/factories/department/make-fetch-departments";


export default (router: Router): void => {
    router.post('/department', adapterRoute(makeCreateDepartment()))
    router.get('/department', adapterRoute(makeFetchDepartment()))
    router.get('/departments', adapterRoute(makeFetchDepartments()))
    router.delete('/department', adapterRoute(makeDeleteDepartment()))
}