<template>
	<div>
		<nav v-if="user">
			<span>{{ user.user.name }}</span>
			<button @click="logout">Logout</button>
		</nav>

		<audio autoplay loop id="audio">
			<source :src="require('@/assets/music/menualt.mp3')" type="audio/mp3">
		</audio>

		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		computed: {
			user() {
				return this.$store.state.user
			},
		},
		methods: {
			login() {
				// redirect to login
				this.$router.push({ name: 'login' })
			},
			logout() {
				// remove user from local storage
				localStorage.removeItem('user')

				this.$store.commit('clearUser')

				// redirect to login
				this.$router.push({ name: 'login' })
			},
		},
		mounted() {
			// check if user is already logged in
			const user = localStorage.getItem('user')
			if (user) {
				this.$store.commit('setUser', JSON.parse(user))
			}
		}
	}

	let playAttempt = setInterval(() => {
	document.querySelector("#audio")
			.play()
			.then(() => {
				clearInterval(playAttempt);
			})
			.catch((error) => {
				console.log("Unable to play the video, User has not interacted yet.");
			});
	}, 1000);
</script>

<style>
@font-face {
    font-family: 'ringbearermedium';
    src: url('~@/assets/font/webfont/ringbearermedium-51mgz-webfont.woff2') format('woff2'),
         url('~@/assets/font/webfont/ringbearermedium-51mgz-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'ringbearermedium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000;
  min-height: 100vh;
}

nav {
  padding: 30px;
}
</style>
