import { Router } from 'express'
import UserController from '../controllers/User.controller'

const router = Router()

/* Users */
router.get('/users', UserController.index)
router.post('/users', UserController.create)
router.get('/users/:id', UserController.show)

export default router
