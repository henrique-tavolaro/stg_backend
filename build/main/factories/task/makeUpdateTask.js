"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateTask = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const update_task_controller_1 = require("../../../presentation/controllers/task/update-task-controller");
const makeUpdateTask = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new update_task_controller_1.UpdateTaskController(repository);
};
exports.makeUpdateTask = makeUpdateTask;
