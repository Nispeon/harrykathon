<template>
	<div class="loginContainer">
		<div class="formWrapper">
			<form @submit.prevent="login">
				<h1>Login</h1>
				<div class="inputContainer">
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
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
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
<style scopped>
* {
	font-family: 'ringbearermedium';
	color: #2c3e50;
}

.loginContainer {
	width: 100vw;
	height: 100vh;
	background-color: black;
	display: flex;
	align-items: center;
}

.formWrapper {
	margin: auto;
	width: 500px;
	background: -webkit-linear-gradient(top,#7579ff,#b224ef);
	padding: 55px 55px 37px;
	border-radius: 10px;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
}

.inputContainer {
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

input {
	border-radius: 5px;
	height: 40px;
	font-size: 16px;
	padding: 0 10px;
	border: none;
}

button {
	font-size: 16px;
	background-color: white;
	border: none;
	border-radius: 25px;
	padding: 10px 20px;
}
</style>
