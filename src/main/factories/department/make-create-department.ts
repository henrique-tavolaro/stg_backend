import { DepartmentDatasource } from "../../../external/datasource/department/department-datasource";
import { DepartmentRepository } from "../../../infra/repositories/department-repository";
import { CreateDepartmentController } from "../../../presentation/controllers/department/create-department-controller";

export const makeCreateDepartment = (): CreateDepartmentController => {
    const datasource = new DepartmentDatasource()
    const repository = new DepartmentRepository(datasource)
    return new CreateDepartmentController(repository)
}