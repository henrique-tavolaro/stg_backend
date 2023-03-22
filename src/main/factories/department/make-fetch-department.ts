import { DepartmentDatasource } from "../../../external/datasource/department/department-datasource";
import { DepartmentRepository } from "../../../infra/repositories/department-repository";
import { FetchDepartmentController } from "../../../presentation/controllers/department/fetch-department-controller";

export const makeFetchDepartment = (): FetchDepartmentController => {
    const datasource = new DepartmentDatasource()
    const repository = new DepartmentRepository(datasource)
    return new FetchDepartmentController(repository)
}