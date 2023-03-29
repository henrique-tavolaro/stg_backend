"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateTask = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const create_task_controller_1 = require("../../../presentation/controllers/task/create-task-controller");
const makeCreateTask = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new create_task_controller_1.CreateTaskController(repository);
};
exports.makeCreateTask = makeCreateTask;
