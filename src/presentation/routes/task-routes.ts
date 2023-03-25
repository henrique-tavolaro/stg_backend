import { Router } from "express"
import { adapterRoute } from "../../main/adapters/adapter-route"
import { makeCreateTask } from "../../main/factories/task/makeCreateTask"
import { makeDeleteTask } from "../../main/factories/task/makeDeleteTask"
import { makeFetchTask } from "../../main/factories/task/makeFetchTask"
import { makeFetchTasks } from "../../main/factories/task/makeFetchTasks"
import { makeFetchTasksByDepartment } from "../../main/factories/task/makeFetchTasksByDepartment"
import { makeUpdateTask } from "../../main/factories/task/makeUpdateTask"

export default (router: Router): void => {
    router.post('/task', adapterRoute(makeCreateTask()))
    router.get('/task', adapterRoute(makeFetchTask()))
    router.get('/tasks', adapterRoute(makeFetchTasks()))
    router.put('/task', adapterRoute(makeUpdateTask()))
    router.delete('/task', adapterRoute(makeDeleteTask()))
    router.get('/tasks/:department', adapterRoute(makeFetchTasksByDepartment()))
}