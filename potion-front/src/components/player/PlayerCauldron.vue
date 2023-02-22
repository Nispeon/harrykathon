<template>
    <div class="cauldron"
    >
        <div v-for="card in getCards('cauldron')" :key="card.name">
            <PotterCard
            :name="card.name"
            :color="card.color" 
            />
        </div>
    </div>
</template>

<script>
import PotterCard from '@/components/PotterCard.vue'

export default {
    name: 'PlayerCauldron',

    props: {
        getCards: Function,
    },

    components: {
        PotterCard,
    },
}

</script>

<style scoped>
.cauldron {
    background-color: orange;
}

.dropzone {
    height: 100%;
    width: 100%;
}

</style>