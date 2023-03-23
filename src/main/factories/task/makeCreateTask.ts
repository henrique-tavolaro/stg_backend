import { TaskDatasource } from "../../../external/datasource/task/task-datasource"
import { TaskRepository } from "../../../infra/repositories/task-repository"
import { CreateTaskController } from "../../../presentation/controllers/task/create-task-controller"

export const makeCreateTask = (): CreateTaskController => {
    const datasource = new TaskDatasource()
    const repository = new TaskRepository(datasource)
    return new CreateTaskController(repository)
}