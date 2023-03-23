import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { DeleteTaskController } from "../../../presentation/controllers/task/delete-task-controller"

export const makeDeleteTask = (): DeleteTaskController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new DeleteTaskController(repository)
}