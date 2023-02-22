<template>
	<section class="cards">
		<span>Player 1 :{{ scorePlayer1 }}</span>
		<span>Player 2 :{{ scorePlayer2 }}</span>
		<span>Joueur :{{ turn }}</span>
		<div
			v-for="card in cards"
			:key="card.slug"
			class="card"
		>
			<PotterCard :card="card" />
		</div>
	</section>
</template>
<script>
	import PotterCard from '@/components/PotterCard.vue'
	export default {
		name: 'CardsGame',
		components: {
			PotterCard,
		},
		computed: {
			scorePlayer1() {
				return this.$store.state.scorePlayer1
			},
			scorePlayer2() {
				return this.$store.state.scorePlayer2
			},
			turn() {
				return this.$store.state.turn
			},
			cards() {
				return this.$store.state.cards
			},
		},
		created() {
			this.$store.commit('getCards')
			this.$socket.on('setBoard', (board) => {
				this.$store.state.cards = board
			})
			this.$socket.on('flipCard', (slug) => {
				this.$store.commit('checkCard', slug)
			})
		},
	}
</script>
<style>
	.cards {
		padding: 20px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 60px;
	}

	.card {
		height: 120px;
		width: 80px;
		background-color: bisque;
	}

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
	}

	.flip {
		opacity: 1 !important;
	}

	.disabled {
		opacity: 0.5 !important;
	}
</style>
