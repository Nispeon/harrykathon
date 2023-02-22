<template>
    <div class="container">
        <i @click="goTo('home')" class="fa-solid fa-arrow-left back-arrow"></i>
        <div class="join-container">
            <h2 class="join-title">Enter code</h2>
            <input type="text" name="code" id="code" v-model="code">
            <button @click="goTo('home')">Join</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JoinView',

    data() {
        return {
            value: this.code
        }
    },

    methods: {
        goTo(route) {
            this.$router.push({ name: route })
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
}

.container .back-arrow {
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 20px;
}

.container .join-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container .join-container .join-title {
    color: white;
    padding-top: 200px;
    letter-spacing: 3px;
    padding-bottom: 10px;
}

.container .join-container input {
    padding: 5px;
}

.container .join-container button {
    color: white;
    border: 3px solid white;
    background-color: black;
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
}

.container .join-container button:hover {
    color: black;
    background-color: white;
    font-weight: bold;
    transition: 0.2s;
}
</style>