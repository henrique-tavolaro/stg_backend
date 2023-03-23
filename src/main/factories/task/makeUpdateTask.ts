import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { UpdateTaskController } from "../../../presentation/controllers/task/update-task-controller"

export const makeUpdateTask = (): UpdateTaskController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new UpdateTaskController(repository)
}