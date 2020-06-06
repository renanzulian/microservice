import routes from './app/routes'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

class Application {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.expectionHandler()
  }

  middlewares() {
    this.server.use(morgan('dev'))
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/', routes)
  }

  expectionHandler() {
    this.server.use('*', (req, res) => {
      return res.status(404).send({
        message: 'Method does not found.',
      })
    })
  }
}

export default Application()
