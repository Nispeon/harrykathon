import express from 'express'
import bodyParser from 'body-parser'
import router from './router.js'
import sequelize from './database.js'
import cors from 'cors'
import morgan from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'http'

// models
import './models/models.js'

const app = express()
const port = 3000

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')

		app.use(cors())
		app.use(bodyParser.json())
		app.use(morgan('dev'))

		app.use('/api', router)

    const http = createServer(app)

		const io = new Server(http, {
			cors: {
				origin: '*',
			},
			transports: ['websocket', 'polling'],
		})

		io.on('connection', (socket) => {
			console.log('a user connected')
			socket.on('disconnect', () => {
				console.log('user disconnected')
			})
			socket.on('setBoard', (data) => {
				socket.broadcast.emit('setBoard', data)
			})

			socket.on('flipCard', (data) => {
				console.log('retourner')
				socket.broadcast.emit('flipCard', data)
			})

			socket.on('restart', (data) => {
				console.log('coucou')
				socket.emit('restart', data)
			})

			socket.on('score', (data) => {
				socket.broadcast.emit('score', data)
			})

			socket.on('turn', (data) => {
				socket.broadcast.emit('turn', data)
			})
		})

		sequelize.sync()

		http.listen(port, () => {
			console.log(`Server listening at port: ${port}`)
		})
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err)
	})
