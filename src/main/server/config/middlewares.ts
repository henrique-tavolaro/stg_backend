import { Express } from 'express'
import { cors } from '../middlewares/cors'
import { errorMiddleware } from '../middlewares/error-middleware'
import { morganMiddleware } from '../middlewares/morgan'
import swaggerUi from "swagger-ui-express"

import swaggerDocs from '../../../swagger.json'

export default (app: Express): void => {
    app.use(cors)
    app.use(morganMiddleware)
    app.use(errorMiddleware)
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}