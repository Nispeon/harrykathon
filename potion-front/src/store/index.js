import { createStore } from 'vuex'
import { globals } from '../main'
export default createStore({
  state: {
    user: null,
    checker: [],
    cards: [],
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    clearUser(state) {
      state.user = null
      localStorage.removeItem('user')
    },
    getUser(state) {
      state.user = JSON.parse(localStorage.getItem('user'))
    },
    async getCards(state) {
      await fetch('http://localhost:3000/api/cards')
        .then((response) => response.json())
        .then((data) => {
          data = data.sort(() => Math.random() - 0.5).slice(0, 12)
          this.commit('setBoard', data)
        })
    },
    setBoard(state, cards) {
			let array = []
			cards.forEach((card) => {
				array.push(card)
				// create a copy of the card with "-2" to the end and push it to the array
        array.push({ ...card, slug: card.slug + '-2' })
			})
			state.cards = array
			state.cards.sort(() => Math.random() - 0.5)

      globals.$socket.emit('setBoard', state.cards)
    },
    flipCard(state, slug) {
      document.querySelector('.' + slug).classList.add('flip')
    },
    checkCard(state, slug) {
      if (document.querySelector('.' + slug).classList.contains('flip')) return
      if (document.querySelector('.' + slug).classList.contains('disabled')) return

      if(state.checker.length == 2) return

      state.checker.push(slug)

      this.commit('flipCard', slug)

      globals.$socket.emit('flipCard', slug)

      if (state.checker.length === 2) {
        if (
          state.checker[0] === state.checker[1] + '-2' ||
          state.checker[0] + '-2' === state.checker[1]
        ) {
          console.log('match')

          state.checker.forEach((slug) => {
            document.querySelector('.' + slug).classList.add('disabled')
          })
          state.checker = []
        } else {
          console.log('no match')
          
          state.checker.forEach((slug) => {
            setTimeout(() => {
              document.querySelector('.' + slug).classList.remove('flip')
              state.checker = []
            }, 1000)
          })
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
