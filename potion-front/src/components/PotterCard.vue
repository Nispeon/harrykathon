<template>
	<div class="card" :style="{backgroundColor: color}">
		<h2>{{ name }}</h2>
	</div>
</template>
<script>
export default {
	name: 'PotterCard',
	props: [
		'name',
		'color'
	]
}
</script>
<style>

.card {
	width: 80px;
	height: 100px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 20px;
	padding: 15px;
	font-size: 11px;
	text-align: center;
}

</style>