import { Server } from 'socket.io'

const io = new Server({
	cors: {
		origin: '*',
	},
})

io.on("connection", (socket) => {
  console.log("connected")
})

io.listen(3000, () => {
  console.log(`listening on port 3000`)
})