<template>
	<div class="board">
		<div id="opponent-side">
			<div class="opponent-hand">
				<PotterCard :name="'Drago'" :color="'green'" />
			</div>
			<div class="opponent-table"></div>
		</div>
		<div id="player-side">
			<div class="player-table"></div>
			<div class="player-hand">
				<PotterCard :name="'Harry'" :color="'pink'" />
				<PotterCard :name="'Albus'" :color="'yellow'" />
			</div>
		</div>
	</div>
</template>
<script>
	import PotterCard from '@/components/PotterCard.vue'
	import dragula from 'dragula'
	export default {
		name: 'BoardView',
		methods: {
			drag() {
				dragula([document.querySelector('.player-hand'), document.querySelector('.player-table')], {
					moves: (el, source) => {
						return source === document.querySelector('.player-hand')
					},
					accepts: (el, target) => {
						return target === document.querySelector('.player-table')
					},
					direction: 'horizontal',
					revertOnSpill: true,
					removeOnSpill: false,
					mirrorContainer: document.body,
					ignoreInputTextSelection: true,
				})
			},
		},
		mounted() {
			this.drag()
		},
		components: { PotterCard },
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
