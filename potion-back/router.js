import express from 'express'
import cardRoutes from './routes/cardRoutes.js'

const router = express.Router()

router.use('/cards', cardRoutes)

export default router
