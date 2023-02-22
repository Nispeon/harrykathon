<template>
	<div>
		<form @submit.prevent="login">
			<input
				type="text"
				placeholder="Username"
				v-model="form.name"
			/>
			<input
				type="password"
				placeholder="Password"
				v-model="form.password"
			/>
			<button type="submit">Login</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'LoginView',
		data() {
			return {
				form: {
					name: '',
					password: '',
				},
			}
		},
		methods: {
			login() {
				console.log(JSON.stringify(this.form))
				fetch('https://hp-api-iim.azurewebsites.net/auth/log-in', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(this.form),
				})
					.then((res) => res.json())
					.then((res) => {
						// send it to the store
						this.$store.commit('setUser', res)

						// redirect to home
						this.$router.push({ name: 'home' })
					})
			},
		}
	}
</script>
<style></style>
