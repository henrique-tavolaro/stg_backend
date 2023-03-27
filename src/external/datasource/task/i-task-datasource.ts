
import { TaskModel } from '../../../domain/model/task-model'
import { TreeModel } from '../../../domain/model/tree-model'

export interface ITaskDatasource {
    createTask(props: CreateTaskProps): Promise<TaskModel>
    fetchTask(props: FetchTaskProps): Promise<TaskModel>
    fetchTasks(props: FetchTasksProps): Promise<TaskModel[]>
    fetchTasksByDepartment(props: FetchTasksByDepartmentProps): Promise<TaskModel[]>
    updateTask(props: UpdateTaskProps): Promise<void>
    deleteTask(props: DeleteTaskProps): Promise<void>
    fetchAllTasksByDepartment(props: FetchAllTasksByDepartmentProps): Promise<TaskModel[]>
}

export type FetchAllTasksByDepartmentProps = {
    department: string;
}

export type FetchTasksProps = {
    previusId: string;
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
}

export type UpdateTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
    name: string
    assignedTo: string[]
    documentation?: string
    systems: string[],
}

export type DeleteTaskProps = {
    id: string
    previusId?: string
    fatherId?: string
}