"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFetchTask = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const fetch_task_controller_1 = require("../../../presentation/controllers/task/fetch-task-controller");
const makeFetchTask = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new fetch_task_controller_1.FetchTaskController(repository);
};
exports.makeFetchTask = makeFetchTask;
