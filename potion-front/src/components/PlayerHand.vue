<template>
    <div class="hand">
        <PlayerCauldron
        @drop="this.onDrop($event, 'cauldron')"
        @dragenter.prevent
	    @dragover.prevent
        :getCards="getCards"
        />
        <PlayerSpells />
        <PlayerSeeds />
        <PlayerFertilizer />
    </div>
</template>

<script>
	import PlayerCauldron from '@/components/player/PlayerCauldron.vue'
	import PlayerSpells from '@/components/player/PlayerSpells.vue'
	import PlayerSeeds from '@/components/player/PlayerSeeds.vue'
    import PlayerFertilizer from '@/components/player/PlayerFertilizer.vue'

    export default {
        name: 'PlayerHand',

        props: {
            onDrop: { type: Function },
            getCards: { type: Function },
        },

        components: {
			PlayerCauldron,
            PlayerSpells,
            PlayerSeeds,
            PlayerFertilizer,
		},
    }

</script>

<style scoped>
.hand {
    width: 100%;
    height: 20vh;
    background-color: darkslategrey;
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
}

</style>