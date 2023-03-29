"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAllTasksByDepartmentController = void 0;
class FetchAllTasksByDepartmentController {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(request) {
        const result = await this.repository.fetchAllTasksByDepartment(request.params);
        const treeModel = result.map(task => ({
            id: task.id,
            previusId: task.previusId ?? null,
            name: task.name,
            tasks: task.tasks,
            treeList: []
        }));
        const tree = createTreeFromJson(treeModel);
        function createTreeFromJson(json) {
            const nodeMap = new Map();
            for (const node of json) {
                nodeMap.set(node.id, node);
            }
            const tree = [];
            for (const node of json) {
                if (node.previusId === null) {
                    tree.push(node);
                }
                else {
                    const parentNode = nodeMap.get(node.previusId);
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
        };
    }
}
exports.FetchAllTasksByDepartmentController = FetchAllTasksByDepartmentController;
