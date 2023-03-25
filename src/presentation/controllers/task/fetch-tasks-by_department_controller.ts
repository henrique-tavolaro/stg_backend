
import { FetchTaskProps, FetchTasksByDepartmentProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchTasksByDepartmentController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: FetchTasksByDepartment.Request): Promise<HttpResponse> {

        const result = await this.repository.fetchTasksByDepartment(request.params)

        return {
            statusCode: 200,
            data: result
        }
    }

}

export namespace FetchTasksByDepartment {
    export type Request = {
        params: FetchTasksByDepartmentProps
    }
}