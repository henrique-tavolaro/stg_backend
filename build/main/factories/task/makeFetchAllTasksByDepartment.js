"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFetchAllTasksByDepartment = void 0;
const task_datasource_1 = require("../../../external/datasource/task/task-datasource");
const task_repository_1 = require("../../../infra/repositories/task-repository");
const fetch_all_tasks_by_department_controller_1 = require("../../../presentation/controllers/task/fetch-all-tasks-by-department-controller");
const makeFetchAllTasksByDepartment = () => {
    const datasource = new task_datasource_1.TaskDatasource();
    const repository = new task_repository_1.TaskRepository(datasource);
    return new fetch_all_tasks_by_department_controller_1.FetchAllTasksByDepartmentController(repository);
};
exports.makeFetchAllTasksByDepartment = makeFetchAllTasksByDepartment;
