import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { FetchAllTasksByDepartmentController } from "../../../presentation/controllers/task/fetch-all-tasks-by-department-controller"
export const makeFetchAllTasksByDepartment = (): FetchAllTasksByDepartmentController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new FetchAllTasksByDepartmentController(repository)
}