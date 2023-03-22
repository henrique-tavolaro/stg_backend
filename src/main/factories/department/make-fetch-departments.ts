import { DepartmentDatasource } from "../../../external/datasource/department/department-datasource";
import { DepartmentRepository } from "../../../infra/repositories/department-repository";
import { FetchDepartmentsController } from "../../../presentation/controllers/department/fetch-departments-controller";

export const makeFetchDepartments = (): FetchDepartmentsController => {
    const datasource = new DepartmentDatasource()
    const repository = new DepartmentRepository(datasource)
    return new FetchDepartmentsController(repository)
}