import 'source-map-support/register'
import express, { ErrorRequestHandler } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import routes from './routes'

const app = express()

app.enable('trust proxy')

app.use(helmet())
app.use(compression())

app.use('/', routes)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err)
  res.sendStatus(500)
}

app.use(errorHandler)

app.listen(10001, () => {
  console.log('app listening on port 10001!')
})
