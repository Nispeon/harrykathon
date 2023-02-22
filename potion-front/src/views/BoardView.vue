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
						image: require('@/assets/profils/tile000.png'),
					},
					{
						slug: 'akali',
						image: require('@/assets/profils/tile001.png'),
					},
					{
						slug: 'belveth',
						image: require('@/assets/profils/tile002.png'),
					},
					{
						slug: 'caitlyn',
						image: require('@/assets/profils/tile003.png'),
					},
					{
						slug: 'cassiopeia',
						image: require('@/assets/profils/tile004.png'),
					},
					{
						slug: 'diana',
						image: require('@/assets/profils/tile005.png'),
					},
					{
						slug: 'fiddlesticks',
						image: require('@/assets/profils/tile006.png'),
					},
					{
						slug: 'graves',
						image: require('@/assets/profils/tile007.png'),
					},
					{
						slug: 'irelia',
						image: require('@/assets/profils/tile008.png'),
					},
					{
						slug: 'ivern',
						image: require('@/assets/profils/tile000.png'),
					},
					{
						slug: 'leblanc',
						image: require('@/assets/profils/tile009.png'),
					},
					{
						slug: 'leesin',
						image: require('@/assets/profils/tile010.png'),
					},
					{
						slug: 'neeko',
						image: require('@/assets/profils/tile011.png'),
					},
					{
						slug: 'qiyana',
						image: require('@/assets/profils/tile012.png'),
					},
					//here
					{
						slug: 'aatrox',
						image: require('@/assets/profils/tile000.png'),
					},
					{
						slug: 'akali',
						image: require('@/assets/profils/tile001.png'),
					},
					{
						slug: 'belveth',
						image: require('@/assets/profils/tile002.png'),
					},
					{
						slug: 'caitlyn',
						image: require('@/assets/profils/tile003.png'),
					},
					{
						slug: 'cassiopeia',
						image: require('@/assets/profils/tile004.png'),
					},
					{
						slug: 'diana',
						image: require('@/assets/profils/tile005.png'),
					},
					{
						slug: 'fiddlesticks',
						image: require('@/assets/profils/tile006.png'),
					},
					{
						slug: 'graves',
						image: require('@/assets/profils/tile007.png'),
					},
					{
						slug: 'irelia',
						image: require('@/assets/profils/tile008.png'),
					},
					{
						slug: 'ivern',
						image: require('@/assets/profils/tile000.png'),
					},
					{
						slug: 'leblanc',
						image: require('@/assets/profils/tile009.png'),
					},
					{
						slug: 'leesin',
						image: require('@/assets/profils/tile010.png'),
					},
					{
						slug: 'neeko',
						image: require('@/assets/profils/tile011.png'),
					},
					{
						slug: 'qiyana',
						image: require('@/assets/profils/tile012.png'),
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
</style>
