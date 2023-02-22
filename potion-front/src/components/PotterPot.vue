<template>
	<img class="pot" :id="id" src="@/assets/pngegg.png" alt="pot">
</template>

<script>
export default {
    name: 'PotterPot',

    props: [
        'id',
        'src'
    ]
}

</script>

<style>
img {
    width: 150px;
    height: 150px;
}
</style>