import 'reflect-metadata'
import express from 'express'
import TodoRoute from './router/todos';

const app = express()
app.use(express.json())

app.use("api/v1/todos", TodoRoute)

export default app;