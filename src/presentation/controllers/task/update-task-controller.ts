
import { UpdateTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class UpdateTaskController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: UpdateTask.Request): Promise<HttpResponse> {

        await this.repository.updateTask(request.body)

        return {
            statusCode: 200,
            data: 'Tarefa atualizada com sucesso'
        }
    }

}

export namespace UpdateTask {
    export type Request = {
        body: UpdateTaskProps
    }
}