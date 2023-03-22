import { IDepartmentReposity } from "../../../infra/repositories/department-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class DeleteDepartmentController implements Controller {

    constructor(
        private repository: IDepartmentReposity
    ) { }

    async handle(request: DeleteDepartment.Request): Promise<HttpResponse> {
        await this.repository.deleteDepartment(request.body)

        return {
            statusCode: 200,
            data: 'Usuário deletado com sucesso'
        }
    }
}

export namespace DeleteDepartment {
    export type Request = {
        body: {
            id: string;
        }
    }
}