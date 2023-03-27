
import { TaskModel } from "../../../domain/model/task-model";
import { TreeModel } from "../../../domain/model/tree-model";
import { FetchAllTasksByDepartmentProps } from "../../../external/datasource/task/i-task-datasource";
import { ITaskRepository } from "../../../infra/repositories/task-repository";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";

export class FetchAllTasksByDepartmentController implements Controller {

    constructor(
        private repository: ITaskRepository
    ) { }

    async handle(request: FetchAllTasksByDepartment.Request): Promise<HttpResponse> {

        const result = await this.repository.fetchAllTasksByDepartment(request.params);

        const treeModel = result.map(task => ({
            id: task.id,
            previusId: task.previusId ?? null,
            name: task.name,
            tasks: task.tasks,
            treeList: []
        }));

        const tree = createTreeFromJson(treeModel);


        function createTreeFromJson(json: TreeModel[]): TreeModel[] {
            const nodeMap: Map<string, TreeModel> = new Map();

            for (const node of json) {
                nodeMap.set(node.id, node);
            }

            const tree: TreeModel[] = [];
            for (const node of json) {
                if (node.previusId === null) {
                    tree.push(node);
                } else {
                    const parentNode = nodeMap.get(node.previusId!);
                    if (parentNode) {
                        parentNode.treeList.push(node);
                    }
                }
            }

            return tree;
        }

        return {
            statusCode: 200,
            data: tree
        }
    }

}

export namespace FetchAllTasksByDepartment {
    export type Request = {
        params: FetchAllTasksByDepartmentProps
    }
}