<template>
	<div class="board">
		<div id="player-side">
			<div
			@drop="onDrop($event, 1)"
			@dragenter.prevent
			@dragover.prevent
			class="player-table"
			>
				<div v-for="card in getCards(1)" :key="card.name">
					<PotterCard :name="card.name" :color="card.color" />
				</div>
			</div>
			<div
			class="player-hand"
			>

				<div @dragstart="startDrag($event, card)" draggable="true" v-for="card in getCards(2)" :key="card.name">
					<PotterCard :name="card.name" :color="card.color" />
				</div>
			</div>
		</div>
		<Cauldron />
	</div>
</template>
<script>
	import PotterCard from '@/components/PotterCard.vue'
	import Cauldron from '@/components/Cauldron.vue'
	import { ref } from 'vue'

	export default {
		name: 'BoardView',

		setup() {
			const cards = ref([
				{ id: 0, name: 'Harry', color: 'pink', list: 1 },
				{ id: 1, name: 'Albus', color: 'yellow', list: 2 },
				{ id: 2, name: 'Neville', color: 'red', list: 2 },
			])

			const getCards = (list) => {
				return cards.value.filter((card) => card.list == list)
			}

			const startDrag = (event, card) => {
				console.log(card)
				event.dataTransfer.dropEffect = 'move'
				event.dataTransfer.effectAllowed = 'move'
				event.dataTransfer.setData('cardID', card.id)
			}

			const onDrop = (event, list) => {
				const cardID = event.dataTransfer.getData('cardID')
				console.log('list ', list)
				const card = cards.value.find((card) => card.id == cardID)
				console.log('card ', card, cards.value)
				card.list = list
			}

			return {
				getCards,
				onDrop,
				startDrag
			}
		},

		methods: {
			log(event) {
				console.log(event)
			},
		},
		components: {
			PotterCard,
			Cauldron
		},
	}
</script>
<style>
	.board {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	#opponent-side {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: blue;
		width: 100%;
		height: 50vh;
	}

	#player-side {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: blue;
		height: 50vh;
	}

	.opponent-hand {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: red;
		width: 100vw;
		height: 20vh;
	}

	.player-hand {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: red;
		width: 100vw;
		height: 20vh;
	}

	.opponent-table {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: black;
		width: 100%;
		height: 20vh;
	}

	.player-table {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: black;
		width: 100%;
		height: 20vh;
	}
</style>
