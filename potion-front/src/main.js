import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {io} from 'socket.io-client'

const app = createApp(App)
const globals = app.config.globalProperties

globals.$socket = io('http://localhost:3000', {
  transports: ['websocket', 'polling'],
}) 
app.use(store)
app.use(router)

export { globals }




app.mount('#app')
