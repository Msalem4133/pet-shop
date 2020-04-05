const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const petRouter = require('./routers/pet')
const bidRouter = require('./routers/bid')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(petRouter)
app.use(bidRouter)

module.exports = app