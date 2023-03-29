import express from 'express'
import * as NewsController from '../controllers/news'
import { requiresAuth } from '../middleware/auth'

const router = express.Router()

router.get('/:user', requiresAuth, NewsController.generalNews)

export default router
