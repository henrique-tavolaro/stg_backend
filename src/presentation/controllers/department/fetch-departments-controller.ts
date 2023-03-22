import { IDepartmentReposity } from "../../../infra/repositories/department-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchDepartmentsController implements Controller {

    constructor(
        private repository: IDepartmentReposity
    ) { }

    async handle(request: FetchDepartments.Request): Promise<HttpResponse> {
        const result = await this.repository.fetchDepartments()

        return {
            statusCode: 200,
            data: result
        }
    }
}

export namespace FetchDepartments {
    export type Request = {
    }
}