import express from 'express'
import plantController from '../controllers/plantController.js'

const router = express.Router()

router.get('/', plantController.getPlants)

export default router