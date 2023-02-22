<template>
	<section class="cards">
		<div
			v-for="card in cards"
			:key="card.slug"
			class="card"
		>
			<img
				@click="checkCard(card.slug)"
				:class="card.slug"
				:src="card.image"
				:alt="card.name"
			/>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'CardsGame',
		data() {
			return {
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
				],
			}
		},
		methods: {
			checkCard(slug) {
				this.checker.push(slug)
				this.flipCard(slug)

				if (this.checker.length === 2) {
					if (
						this.checker[0] === this.checker[1] + '-2' ||
						this.checker[0] + '-2' === this.checker[1]
					) {
						console.log('match')
					} else {
						console.log('no match')

						this.checker.forEach((slug) => {
							setTimeout(() => {
								document.querySelector('.' + slug).classList.remove('flip')
							}, 1000)
						})
					}
					this.checker = []
				}
			},

			flipCard(slug) {
				document.querySelector('.' + slug).classList.add('flip')
			},
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
			console.log(this.cards)
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
</style>
