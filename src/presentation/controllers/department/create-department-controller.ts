import { IDepartmentReposity } from "../../../infra/repositories/department-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class CreateDepartmentController implements Controller {

    constructor(
        private repository: IDepartmentReposity
    ) { }

    async handle(request: CreateDepartment.Request): Promise<HttpResponse> {

        const result = await this.repository.createDepartment(request.body)

        return {
            statusCode: 201,
            data: result
        }
    }

}

export namespace CreateDepartment {
    export type Request = {
        body: {
            name: string;
        }
    }
}