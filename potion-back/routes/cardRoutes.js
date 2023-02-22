import express from 'express'
import cardController from '../controllers/cardController.js'

const router = express.Router()

router.get('/', cardController.getCards)

export default router
