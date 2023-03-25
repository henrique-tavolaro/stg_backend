import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { FetchTasksByDepartmentController } from "../../../presentation/controllers/task/fetch-tasks-by_department_controller"

export const makeFetchTasksByDepartment = (): FetchTasksByDepartmentController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new FetchTasksByDepartmentController(repository)
}