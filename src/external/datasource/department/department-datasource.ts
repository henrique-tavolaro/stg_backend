import { DepartmentModel } from "../../../domain/model/department-model";
import { BadRequestError, NotFoundError } from "../../../main/server/errors/api-errors";
import { Department } from "../../schema-models/department";
import { CreateDepartmentProps, DeleteDepartmentProps, FetchDepartmentProps, IDepartmentDatasource } from "./i-department-datasource";

export class DepartmentDatasource implements IDepartmentDatasource {
    async createDepartment(props: CreateDepartmentProps): Promise<DepartmentModel> {
        const { name } = props

        if (await Department.findOne({ name })) {
            throw new BadRequestError('Esta área já existe')
        }

        return await Department.create({ name }) as DepartmentModel
    }

    async fetchDepartments(): Promise<DepartmentModel[]> {
        return await Department.find().where('deletedAt').equals(null) as DepartmentModel[];
    }

    async fetchDepartment(props: FetchDepartmentProps): Promise<DepartmentModel> {

        const department = await Department.findById(props.id) as DepartmentModel

        if (department.deletedAt != null) {
            throw new NotFoundError('Área não encontrada')
        }

        return department
    }

    async deleteDepartment(props: DeleteDepartmentProps): Promise<void> {
        const now = Date.now()

        await Department.findByIdAndUpdate(props.id, { deletedAt: now })

        return
    }

}