<template>
	<section class="cards">
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
		data() {
			return {
				checker: [],
				cards: this.$store.state.cards,
			}
		},
		created() {
			let array = []
			this.cards.forEach((card) => {
				array.push(card)
				if (array.filter((item) => item.slug === card.slug).length > 1) {
					card.slug = card.slug + '-2'
				}
			})
			this.cards = array
			this.cards.sort(() => Math.random() - 0.5)
			console.log(this.cards.length)
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
