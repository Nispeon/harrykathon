import express from 'express'
import spellController from '../controllers/spellController.js'

const router = express.Router()

router.get('/', spellController.getSpells)

export default router