import Card from '../models/card.js'

const cardController = {
	getCards: async (req, res) => {
		try {
			const cards = await Card.findAll()
			res.json(cards)
		} catch (err) {
			console.log(err)
		}
	},
}

export default cardController
