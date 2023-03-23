import { DeleteTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class DeleteTaskController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: DeleteTask.Request): Promise<HttpResponse> {

        const result = await this.repository.deleteTask(request.body.task)

        return {
            statusCode: 201,
            data: "Tarefa excluída com sucesso"
        }
    }

}

export namespace DeleteTask {
    export type Request = {
        body: {
            task: DeleteTaskProps;
        }
    }
}