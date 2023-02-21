<template>
  <div class="container">
    <div class="menu">
      <nav>
        <router-link to="/create">Create game</router-link>
        <router-link to="/join">Join</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  name: 'HomeView',

  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined
    }
  },

  methods: {
    renderScene() {
      this.renderer.render(this.scene, this.camera)
    },
    init() {
      this.scene = new THREE.Scene();
      this.scene.background = null;

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setPixelRatio(window.devicePixelRatio);

      const container = document.getElementById(this.containerId);
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(this.renderer.domElement);

      this.camera = new THREE.PerspectiveCamera(
          45,
          container.offsetWidth / container.offsetHeight,
          0.25,
          20
      );
      this.camera.position.set(this.modelSettings.cameraPosition[0], this.modelSettings.cameraPosition[1], this.modelSettings.cameraPosition[2]);

    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
  }

  .container .menu {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container .menu nav {
    display: flex;
    flex-direction: column;
  }

  .container .menu a {
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 2.5rem;
    padding: 5px 0;
  }
</style>
