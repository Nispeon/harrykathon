<template>
	<div class="board">
		<div id="player-side">
			<div
			@drop="onDrop($event, 'pot')"
			@dragenter.prevent
			@dragover.prevent
			class="player-table"
			>
				<div v-for="card in getCards('pot')" :key="card.name">
					<PotterCard
					@dragstart="startDrag($event, card)"
					draggable="true"
					:name="card.name"
					:color="card.color" 
					/>
				</div>
			</div>
			<div
			class="player-hand"
			>
				<div v-for="card in getCards('hand')" :key="card.name">
					<PotterCard 
					@dragstart="startDrag($event, card)"
					draggable="true"
					:name="card.name"
					:color="card.color"
					/>
				</div>
			</div>
		</div>
		<PlayerHand
		:onDrop="onDrop"
		:getCards="getCards"
		/>
	</div>
</template>
<script>
	import PotterCard from '@/components/PotterCard.vue'
	import PlayerHand from '@/components/PlayerHand.vue'

	export default {
		name: 'BoardView',

		data() {
			return {
				cards:[
					{ id: 0, name: 'lvl1', color: 'green', location: 'pot' },
					{ id: 1, name: 'lvl2', color: 'blue', location: 'hand' },
					{ id: 2, name: 'lvl0', color: 'red', location: 'hand' },
				]
			}
		},

		methods: {
			log(event) {
				console.log(event)
			},

			getCards(location) {
				return this.cards.filter((card) => card.location == location)
			},

			startDrag (event, card) {
				event.dataTransfer.dropEffect = 'move'
				event.dataTransfer.effectAllowed = 'move'
				event.dataTransfer.setData('cardID', card.id)
			},

			onDrop (event, destination) {
				const cardID = event.dataTransfer.getData('cardID')
				const card = this.cards.find((card) => card.id == cardID)

				if (card.location == destination) {
					return
				} else if (destination == 'cauldron' && card.location != 'pot') {
					return
				}
				
				if (destination == 'cauldron') {
					// remove card from cards
					this.cards = this.cards.filter((card) => card.id != cardID)
					console.log('cards ', this.cards)
				} else {
					card.location = destination
				}
			},
		},

		components: {
			PotterCard,
			PlayerHand,
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
		background-color: grey;
		width: 100vw;
		height: 20vh;
	}

	.player-hand {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: grey;
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
