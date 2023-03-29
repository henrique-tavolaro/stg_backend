"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_route_1 = require("../../main/adapters/adapter-route");
const makeCreateTask_1 = require("../../main/factories/task/makeCreateTask");
const makeDeleteTask_1 = require("../../main/factories/task/makeDeleteTask");
const makeFetchAllTasksByDepartment_1 = require("../../main/factories/task/makeFetchAllTasksByDepartment");
const makeFetchTask_1 = require("../../main/factories/task/makeFetchTask");
const makeFetchTasks_1 = require("../../main/factories/task/makeFetchTasks");
const makeFetchTasksByDepartment_1 = require("../../main/factories/task/makeFetchTasksByDepartment");
const makeUpdateTask_1 = require("../../main/factories/task/makeUpdateTask");
exports.default = (router) => {
    router.post('/task', (0, adapter_route_1.adapterRoute)((0, makeCreateTask_1.makeCreateTask)()));
    router.get('/task/:id', (0, adapter_route_1.adapterRoute)((0, makeFetchTask_1.makeFetchTask)()));
    router.get('/tasks/:previusId', (0, adapter_route_1.adapterRoute)((0, makeFetchTasks_1.makeFetchTasks)()));
    router.put('/task', (0, adapter_route_1.adapterRoute)((0, makeUpdateTask_1.makeUpdateTask)()));
    router.delete('/task', (0, adapter_route_1.adapterRoute)((0, makeDeleteTask_1.makeDeleteTask)()));
    router.get('/tasksdepartment/:department', (0, adapter_route_1.adapterRoute)((0, makeFetchTasksByDepartment_1.makeFetchTasksByDepartment)()));
    router.get('/alltasksdepartment/:department', (0, adapter_route_1.adapterRoute)((0, makeFetchAllTasksByDepartment_1.makeFetchAllTasksByDepartment)()));
};
