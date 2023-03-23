import { TaskModel } from "../../../domain/model/task-model";
import { NotFoundError } from "../../../main/server/errors/api-errors";
import { Task } from "../../schema-models/tasks";
import { CreateTaskProps, DeleteTaskProps, FetchTaskProps, ITaskDatasource, UpdateTaskProps } from "./i-task-datasource";


export class TaskDatasource implements ITaskDatasource {

    async createTask(props: CreateTaskProps): Promise<void> {

        if (!props.fatherId) {
            await Task.create(props)
            return
        }

        const result = await Task.create(props)

        await Task.findOneAndUpdate(
            { _id: props.previusId },
            { $push: { tasks: result.id } },
            { new: true }
        )

        return
    }

    async fetchTask(props: FetchTaskProps): Promise<TaskModel> {
        const task = await Task.findById({ _id: props.id }) as TaskModel

        if (task.deletedAt != null) {
            throw new NotFoundError('Tarefa não encontrada')
        }

        return task
    }

    async fetchTasks(): Promise<TaskModel[]> {
        return await Task.find().where('deletedAt').equals(null) as TaskModel[]
    }

    async updateTask(props: UpdateTaskProps): Promise<TaskModel> {
        return await Task.findByIdAndUpdate(
            props.id,
            props,
            {
                new: true,
                omitUndefined: true
            }

        ) as TaskModel
    }

    async deleteTask(props: DeleteTaskProps): Promise<void> {
        const now = Date.now()

        await Task.findByIdAndUpdate(props.id, { deletedAt: now })

        if (props.previusId != null) {
            const result = await Task.findByIdAndUpdate(props.previusId,
                { $pull: { tasks: props.id } }
            )
        }
        return
    }
}

