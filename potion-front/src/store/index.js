import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    checker: [],
    cards: [
      {
        slug: 'aatrox',
        image: require('@/assets/champions/aatrox.jpeg'),
      },
      {
        slug: 'akali',
        image: require('@/assets/champions/akali.jpeg'),
      },
      {
        slug: 'belveth',
        image: require('@/assets/champions/belveth.jpeg'),
      },
      {
        slug: 'caitlyn',
        image: require('@/assets/champions/caitlyn.jpeg'),
      },
      {
        slug: 'cassiopeia',
        image: require('@/assets/champions/cassiopeia.jpeg'),
      },
      {
        slug: 'diana',
        image: require('@/assets/champions/diana.jpeg'),
      },
      {
        slug: 'fiddlesticks',
        image: require('@/assets/champions/fiddlesticks.jpeg'),
      },
      {
        slug: 'graves',
        image: require('@/assets/champions/graves.jpeg'),
      },
      {
        slug: 'irelia',
        image: require('@/assets/champions/irelia.jpeg'),
      },
      {
        slug: 'ivern',
        image: require('@/assets/champions/ivern.jpeg'),
      },
      {
        slug: 'leblanc',
        image: require('@/assets/champions/leblanc.jpeg'),
      },
      {
        slug: 'leesin',
        image: require('@/assets/champions/leesin.jpeg'),
      },
      {
        slug: 'neeko',
        image: require('@/assets/champions/neeko.jpeg'),
      },
      {
        slug: 'qiyana',
        image: require('@/assets/champions/qiyana.jpeg'),
      },
      {
        slug: 'aatrox',
        image: require('@/assets/champions/aatrox.jpeg'),
      },
      {
        slug: 'akali',
        image: require('@/assets/champions/akali.jpeg'),
      },
      {
        slug: 'belveth',
        image: require('@/assets/champions/belveth.jpeg'),
      },
      {
        slug: 'caitlyn',
        image: require('@/assets/champions/caitlyn.jpeg'),
      },
      {
        slug: 'cassiopeia',
        image: require('@/assets/champions/cassiopeia.jpeg'),
      },
      {
        slug: 'diana',
        image: require('@/assets/champions/diana.jpeg'),
      },
      {
        slug: 'fiddlesticks',
        image: require('@/assets/champions/fiddlesticks.jpeg'),
      },
      {
        slug: 'graves',
        image: require('@/assets/champions/graves.jpeg'),
      },
      {
        slug: 'irelia',
        image: require('@/assets/champions/irelia.jpeg'),
      },
      {
        slug: 'ivern',
        image: require('@/assets/champions/ivern.jpeg'),
      },
      {
        slug: 'leblanc',
        image: require('@/assets/champions/leblanc.jpeg'),
      },
      {
        slug: 'leesin',
        image: require('@/assets/champions/leesin.jpeg'),
      },
      {
        slug: 'neeko',
        image: require('@/assets/champions/neeko.jpeg'),
      },
      {
        slug: 'qiyana',
        image: require('@/assets/champions/qiyana.jpeg'),
      },
    ]
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
    flipCard(state, slug) {
      document.querySelector('.' + slug).classList.add('flip')
    },
    checkCard(state, slug) {
      if (document.querySelector('.' + slug).classList.contains('flip')) return
      if (document.querySelector('.' + slug).classList.contains('disabled')) return

      if(state.checker.length == 2) return

      state.checker.push(slug)

      this.commit('flipCard', slug)

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
