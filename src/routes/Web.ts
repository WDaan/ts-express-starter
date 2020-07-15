import { Router } from 'express'
import HomeController from '../controllers/Home.controller'

const router = Router()

/* Home */
router.get('/', HomeController.index)

export default router
