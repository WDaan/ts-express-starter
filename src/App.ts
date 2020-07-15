import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import 'dotenv/config'
import apiRouter from './routes/Api'
import webRouter from './routes/Web'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Database connection
 */
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PATH}/${process.env.MONGO_DATABASE}`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)

/**
 * Routes
 */
app.use('/', webRouter)
app.use('/api', apiRouter)

export default app
