import { TaskModel } from "../../domain/model/task-model"
import { CreateTaskProps, DeleteTaskProps, FetchTaskProps, FetchTasksByDepartmentProps, UpdateTaskProps } from "../../external/datasource/task/i-task-datasource"
import { ITaskDatasource } from "../../external/datasource/task/i-task-datasource"

export interface ITaskRepository {
    createTask(props: CreateTaskProps): Promise<TaskModel>
    fetchTask(props: FetchTaskProps): Promise<TaskModel>
    fetchTasks(): Promise<TaskModel[]>
    fetchTasksByDepartment(props: FetchTasksByDepartmentProps): Promise<TaskModel[]>
    updateTask(props: UpdateTaskProps): Promise<void>
    deleteTask(props: DeleteTaskProps): Promise<void>
}

export class TaskRepository implements ITaskRepository {

    constructor(
        private datasource: ITaskDatasource
    ) { }
    async fetchTasksByDepartment(props: FetchTasksByDepartmentProps): Promise<TaskModel[]> {
        return await this.datasource.fetchTasksByDepartment(props)
    }

    async createTask(props: CreateTaskProps): Promise<TaskModel> {
        return await this.datasource.createTask(props)
    }

    async fetchTask(props: FetchTaskProps): Promise<TaskModel> {
        return await this.datasource.fetchTask(props)
    }

    async fetchTasks(): Promise<TaskModel[]> {
        return await this.datasource.fetchTasks()
    }

    async updateTask(props: UpdateTaskProps): Promise<void> {
        return await this.datasource.updateTask(props)
    }

    async deleteTask(props: DeleteTaskProps): Promise<void> {
        return await this.datasource.deleteTask(props)
    }
}