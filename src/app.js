const express = require('express')
require('./db/mongoose')

const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const port = process.env.PORT | 3000
const app = express()
app.use(express.json())



app.use(userRouter)
app.use(taskRouter)

module.exports = app