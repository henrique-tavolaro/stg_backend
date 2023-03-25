import { CreateTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class CreateTaskController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: CreateTask.Request): Promise<HttpResponse> {


        const result = await this.repository.createTask(request.body)

        return {
            statusCode: 201,
            data: result
        }
    }

}

export namespace CreateTask {
    export type Request = {
        body: CreateTaskProps;

    }
}