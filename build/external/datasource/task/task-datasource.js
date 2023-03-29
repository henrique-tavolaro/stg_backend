"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDatasource = void 0;
const api_errors_1 = require("../../../main/server/errors/api-errors");
const tasks_1 = require("../../schema-models/tasks");
class TaskDatasource {
    async fetchAllTasksByDepartment(props) {
        return await tasks_1.Task
            .find()
            .where('department').equals(props.department);
    }
    async fetchTasks(props) {
        return await tasks_1.Task
            .find()
            .where('previusId').equals(props.previusId)
            .where('deletedAt').equals(null);
    }
    async fetchTasksByDepartment(props) {
        return await tasks_1.Task
            .find()
            .where('department').equals(props.department)
            .where('deletedAt').equals(null)
            .where('fatherId').equals(null);
    }
    async createTask(props) {
        if (!props.fatherId) {
            const result = await tasks_1.Task.create(props);
            return result;
        }
        const result = await tasks_1.Task.create(props);
        await tasks_1.Task.findOneAndUpdate({ _id: props.previusId }, { $push: { tasks: result.id } }, { new: true });
        return result;
    }
    async fetchTask(props) {
        const task = await tasks_1.Task.findById({ _id: props.id });
        if (task.deletedAt != null) {
            throw new api_errors_1.NotFoundError('Tarefa não encontrada');
        }
        return task;
    }
    async updateTask(props) {
        await tasks_1.Task.findByIdAndUpdate(props.id, props, {
            new: true,
            omitUndefined: true
        });
        return;
    }
    async deleteTask(props) {
        const now = Date.now();
        await tasks_1.Task.findByIdAndUpdate(props.id, { deletedAt: now });
        if (props.previusId != null) {
            const result = await tasks_1.Task.findByIdAndUpdate(props.previusId, { $pull: { tasks: props.id } });
        }
        return;
    }
}
exports.TaskDatasource = TaskDatasource;
