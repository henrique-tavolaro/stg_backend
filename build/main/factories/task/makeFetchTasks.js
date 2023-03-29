"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFetchTasks = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const fetch_tasks_controller_1 = require("../../../presentation/controllers/task/fetch-tasks-controller");
const makeFetchTasks = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new fetch_tasks_controller_1.FetchTasksController(repository);
};
exports.makeFetchTasks = makeFetchTasks;
