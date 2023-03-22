import { Express } from 'express'
import { cors } from '../middlewares/cors'
import { errorMiddleware } from '../middlewares/error-middleware'
import { morganMiddleware } from '../middlewares/morgan'

export default (app: Express): void => {
    app.use(cors)
    app.use(morganMiddleware)
    app.use(errorMiddleware)
}