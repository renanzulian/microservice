import routes from './app/routes'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('*', (req, res) => {
  return res.status(404).send({
    message: 'Method does not found.',
  })
})

export default server
