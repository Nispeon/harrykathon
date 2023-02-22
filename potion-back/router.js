import express from 'express'
import plantRoutes from './routes/plantRoutes.js'
import spellRoutes from './routes/spellRoutes.js'

const router = express.Router()

router.use('/plants', plantRoutes)
router.use('/spells', spellRoutes)

export default router