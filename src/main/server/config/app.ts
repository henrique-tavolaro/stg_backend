import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from '../routes/routes'
import 'express-async-errors';

const app = express()
app.use(express.json())
setupRoutes(app)
setupMiddlewares(app)
export default app

