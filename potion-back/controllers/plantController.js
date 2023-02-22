import Plant from '../models/plant.js'

const plantController = {
	getPlants: async (req, res) => {
		try {
			const plants = await Plant.findAll()
			res.json(plants)
		} catch (err) {
			console.log(err)
		}
	},
}

export default plantController