import { DepartmentModel } from "../../../domain/model/department-model";


export interface IDepartmentDatasource {
    createDepartment(props: CreateDepartmentProps): Promise<DepartmentModel>
    fetchDepartments(): Promise<DepartmentModel[]>
    fetchDepartment(props: FetchDepartmentProps): Promise<DepartmentModel>
    deleteDepartment(props: DeleteDepartmentProps): Promise<void>
}

export type CreateDepartmentProps = {
    name: string
}

export type DeleteDepartmentProps = {
    id: string
}

export type FetchDepartmentProps = {
    id: string
}