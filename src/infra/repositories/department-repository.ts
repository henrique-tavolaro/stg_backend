import { DepartmentModel } from "../../domain/model/department-model";
import { CreateDepartmentProps, DeleteDepartmentProps, FetchDepartmentProps, IDepartmentDatasource } from "../../external/datasource/department/i-department-datasource";

export interface IDepartmentReposity {
    createDepartment(props: CreateDepartmentProps): Promise<DepartmentModel>
    fetchDepartments(): Promise<DepartmentModel[]>
    fetchDepartment(props: FetchDepartmentProps): Promise<DepartmentModel>
    deleteDepartment(props: DeleteDepartmentProps): Promise<void>
}

export class DepartmentRepository implements IDepartmentReposity {

    constructor(
        private datasource: IDepartmentDatasource
    ) { }

    async createDepartment(props: CreateDepartmentProps): Promise<DepartmentModel> {
        return await this.datasource.createDepartment(props)
    }

    async fetchDepartments(): Promise<DepartmentModel[]> {
        return await this.datasource.fetchDepartments()
    }

    async fetchDepartment(props: FetchDepartmentProps): Promise<DepartmentModel> {
        return await this.datasource.fetchDepartment(props)
    }

    async deleteDepartment(props: DeleteDepartmentProps): Promise<void> {
        return await this.datasource.deleteDepartment(props)
    }

}