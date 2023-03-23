
import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { FetchTaskController } from "../../../presentation/controllers/task/fetch-task-controller"

export const makeFetchTask = (): FetchTaskController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new FetchTaskController(repository)
}