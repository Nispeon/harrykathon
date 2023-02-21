import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { World } from "./World/components/world";

function main() {
    // Get a reference to the container element
    const container = document.querySelector("#scene-container");

    // Create an instance of the World app
    const world = new World(container);

    world.start();
}

main();

createApp(App).use(store).use(router).mount('#app')
