"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
class TaskRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }
    async fetchTasksByDepartment(props) {
        return await this.datasource.fetchTasksByDepartment(props);
    }
    async fetchAllTasksByDepartment(props) {
        return await this.datasource.fetchAllTasksByDepartment(props);
    }
    async createTask(props) {
        return await this.datasource.createTask(props);
    }
    async fetchTask(props) {
        return await this.datasource.fetchTask(props);
    }
    async fetchTasks(props) {
        return await this.datasource.fetchTasks(props);
    }
    async updateTask(props) {
        return await this.datasource.updateTask(props);
    }
    async deleteTask(props) {
        return await this.datasource.deleteTask(props);
    }
}
exports.TaskRepository = TaskRepository;
