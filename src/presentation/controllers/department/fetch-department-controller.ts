import { IDepartmentReposity } from "../../../infra/repositories/department-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchDepartmentController implements Controller {

    constructor(
        private repository: IDepartmentReposity
    ) { }

    async handle(request: FetchDepartment.Request): Promise<HttpResponse> {
        const result = await this.repository.fetchDepartment(request.body)

        return {
            statusCode: 200,
            data: result
        }
    }
}

export namespace FetchDepartment {
    export type Request = {
        body: {
            id: string;
        }
    }
}