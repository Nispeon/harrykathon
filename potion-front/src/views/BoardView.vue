<template>
	<div class="board">
		<div id="player-side">
			<div class="player-table">
				<div v-for="card in getCards(1)" :key="card.name">
					<PotterCard :name="card.name" :color="card.color" />
				</div>
				<div class="align-pots">
					<PotterPot v-for="pot in pots" :key="pot.id" :id="pot.id" />
				</div>
				
			</div>
			<div
			class="player-hand"
			>
				<div v-for="card in getCards(2)" :key="card.name">
					<PotterCard @dragstart="startDrag($event, card)" draggable="true" :name="card.name" :color="card.color" />
				</div>
			</div>
		</div>
		<PotterCauldron />
	</div>
</template>
<script>
	import PotterCard from '@/components/PotterCard.vue'
	import PotterCauldron from '@/components/PotterCauldron.vue'
	import PotterPot from '@/components/PotterPot.vue'

	export default {
		name: 'BoardView',

		data() {
            return {
                cards:[
                    { id: 0, name: 'Harry', color: 'pink', list: 2 },
                    { id: 1, name: 'Albus', color: 'yellow', list: 2 },
                    { id: 2, name: 'Neville', color: 'red', list: 2 },
                ],
				pots: [
					{ id: 0, list: 2 },
					{ id: 1, list: 2 },
					{ id: 2, list: 2 }
				]
            }
        },

        methods: {
            getCards(list) {
                return this.cards.filter((card) => card.list == list)
            },

            startDrag (event, card) {
                console.log(card)
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('cardID', card.id)
            },

            onDrop (event, list) {
                const cardID = event.dataTransfer.getData('cardID')
                const card = this.cards.find((card) => card.id == cardID)
                card.list = list
				
            },
        },


		components: {
			PotterCard,
			PotterCauldron,
			PotterPot
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
		margin-top: 100px;
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
		width: 100%;
		height: 20vh;
	}

	.player-table .align-pots {
		display: flex;
		width: 100%;
		justify-content: center;
		padding: 30px 0;
	}
</style>
