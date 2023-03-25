
import { FetchTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchTaskController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: FetchTask.Request): Promise<HttpResponse> {

        const result = await this.repository.fetchTask(request.body.task)

        return {
            statusCode: 200,
            data: result
        }
    }

}

export namespace FetchTask {
    export type Request = {
        body: {
            task: FetchTaskProps;
        }
    }
}