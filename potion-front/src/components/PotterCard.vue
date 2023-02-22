<template>
		<img
				draggable="false"
				@click="checkCard(card.slug)"
				:class="card.slug"
				:src="require('@/assets/profils/' + card.image)"
				:alt="card.name"
			/>
</template>
<script>
export default {
	name: 'PotterCard',
	props: [
		'card'
	],
	methods: {
		checkCard(slug) {
			this.$store.commit('checkCard', slug)
		}
	}
}
</script>
<style>
	
</style>