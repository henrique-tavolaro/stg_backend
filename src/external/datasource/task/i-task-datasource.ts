
import { TaskModel } from '../../../domain/model/task-model'

export interface ITaskDatasource {
    createTask(props: CreateTaskProps): Promise<void>
    fetchTask(props: FetchTaskProps): Promise<TaskModel>
    fetchTasks(): Promise<TaskModel[]>
    updateTask(props: UpdateTaskProps): Promise<TaskModel>
    deleteTask(props: DeleteTaskProps): Promise<void>
}

export type CreateTaskProps = {
    previusId?: string
    fatherId?: string
    name: string
    description?: string
    assignedTo: string[]
    documentation?: string
    systems: string[],
    tasks: string[]
}

export type FetchTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
}

export type UpdateTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
    name: string
    description?: string
    assignedTo: string[]
    documentation?: string
    systems: string[]
}

export type DeleteTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
}