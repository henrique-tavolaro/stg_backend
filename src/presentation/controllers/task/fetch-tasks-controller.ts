
import { FetchTaskProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchTasksController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: FetchTasks.Request): Promise<HttpResponse> {

        const result = await this.repository.fetchTasks()

        return {
            statusCode: 200,
            data: result
        }
    }

}

export namespace FetchTasks {
    export type Request = {
    }
}