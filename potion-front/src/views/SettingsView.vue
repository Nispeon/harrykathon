<template>
    <div class="container">
        <i @click="goTo('home')" class="fa-solid fa-arrow-left back-arrow"></i>
        <div class="settings-container">
            <h2 class="settings-title">Settings</h2>
            <div>
                <span>Music </span>
                <input type="range" min="0" max="100" step="1" v-model="value"> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingsView",

    methods: {
        goTo(route) {
            this.$router.push({ name: route })
        }
    }
}
</script>

<style scoped>
.container .settings-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
}

.container .back-arrow {
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 20px;
}
.container .settings-container .settings-title {
    color: white;
    text-align: center;
    font-size: 3rem;
    padding: 20px 0;
    letter-spacing: 3px;
}

.container .settings-container div span {
    color: white;
    padding: 20px;
}
</style>