import { DepartmentDatasource } from "../../../external/datasource/department/department-datasource";
import { DepartmentRepository } from "../../../infra/repositories/department-repository";
import { DeleteDepartmentController } from "../../../presentation/controllers/department/delete-department-controller";

export const makeDeleteDepartment = (): DeleteDepartmentController => {
    const datasource = new DepartmentDatasource()
    const repository = new DepartmentRepository(datasource)
    return new DeleteDepartmentController(repository)
}