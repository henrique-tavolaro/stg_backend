"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteTask = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const delete_task_controller_1 = require("../../../presentation/controllers/task/delete-task-controller");
const makeDeleteTask = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new delete_task_controller_1.DeleteTaskController(repository);
};
exports.makeDeleteTask = makeDeleteTask;
