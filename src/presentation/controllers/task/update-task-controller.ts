
import { UpdateTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class UpdateTaskController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: UpdateTask.Request): Promise<HttpResponse> {



        const result = await this.repository.updateTask(request.body.task)

        return {
            statusCode: 201,
            data: result
        }
    }

}

export namespace UpdateTask {
    export type Request = {
        body: {
            task: UpdateTaskProps;
        }
    }
}