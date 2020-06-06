import { User } from './models'
import Router from 'express'

const router = Router

User.create({
  name: 'Renan',
  email: 'renoite@brabo.com',
  password: 'senha123',
})

export default router
