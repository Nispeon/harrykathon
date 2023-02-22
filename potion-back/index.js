import express from 'express'
import bodyParser from 'body-parser'
import router from './router.js'
import sequelize from './database.js'
import cors from 'cors'
import morgan from 'morgan'

// models
import Plant from './models/plant.js'
import Spell from './models/spell.js'

const app = express()
const port = 3000

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')

		app.use(cors())

    app.use('/api', router)

		app.use(bodyParser.json())
		app.use(morgan('dev'))

		sequelize.sync()

		app.listen(port, () => {
			console.log(`Server listening at port: ${port}`)
		})
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err)
	})
