import Spell from '../models/spell.js'

const spellController = {
	getSpells: async (req, res) => {
		try {
			const spells = await Spell.findAll()
			res.json(spells)
		} catch (err) {
			console.log(err)
		}
	},
}

export default spellController