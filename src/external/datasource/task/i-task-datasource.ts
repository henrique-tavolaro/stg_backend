
import { TaskModel } from '../../../domain/model/task-model'

export interface ITaskDatasource {
    createTask(props: CreateTaskProps): Promise<TaskModel>
    fetchTask(props: FetchTaskProps): Promise<TaskModel>
    fetchTasks(): Promise<TaskModel[]>
    fetchTasksByDepartment(props: FetchTasksByDepartmentProps): Promise<TaskModel[]>
    updateTask(props: UpdateTaskProps): Promise<void>
    deleteTask(props: DeleteTaskProps): Promise<void>
}

export type FetchTasksByDepartmentProps = {
    department: string;
}

export type CreateTaskProps = {
    previusId?: string
    fatherId?: string
    name: string,
    department: string
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
    systems: string[],
    status: string
}

export type DeleteTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
}