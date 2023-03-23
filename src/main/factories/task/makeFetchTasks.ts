import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { FetchTasksController } from "../../../presentation/controllers/task/fetch-tasks-controller"

export const makeFetchTasks = (): FetchTasksController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new FetchTasksController(repository)
}