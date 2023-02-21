<template>
  <canvas id="canvas"></canvas>
<!--  <div class="container">-->
<!--    <div class="menu">-->
<!--      <nav>-->
<!--        <router-link to="/create">Create game</router-link>-->
<!--        <router-link to="/join">Join</router-link>-->
<!--        <router-link to="/settings">Settings</router-link>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script>
import * as THREE from 'three';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {TransformControls} from "three/addons/controls/TransformControls.js";

// import mainbg from '../three-assets/main.jpg';
// import titleTexture from '../three-assets/titleTexture.jpg';
// import titleModel from '../three-assets/models/title.STL?url';
// import potionModel from '../three-assets/models/potion/scene.gltf?url';
// import cauldronModel from '../three-assets/models/cauldron/scene.gltf?url';
// import hagridModel from '../three-assets/models/hagrid/hagrid.glb?url';
import {onMounted, ref} from "vue";

export default {
  name: 'HomeView',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      plane: null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    render() {
      requestAnimationFrame(this.render);
      this.renderer.render(this.scene, this.camera);
    },
    init() {
      console.log('init')
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x0000ff);
      // const textureLoader = new THREE.TextureLoader();
      // const mainTexture = textureLoader.load(mainbg);
      // scene.background = mainTexture;

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.scene.add(this.camera);
      const container = document.getElementById('canvas');

      this.renderer = new THREE.WebGLRenderer({
        canvas: container,
        antialias: false
      });

      this.geometry = new THREE.PlaneBufferGeometry(  );
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

      this.plane = new THREE.Mesh(this.geometry, material);
      this.plane.position.set(0, 0, 0);
      this.plane.rotation.set(0, 1, 0);

      this.scene.add(this.plane);

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio * 0.5);
      this.camera.position.setZ(10);
    }
  },
}
    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);
    // // const textureLoader = new THREE.TextureLoader();
    // // const mainTexture = textureLoader.load(mainbg);
    // // scene.background = mainTexture;
    //
    // const canvas = ref < HTMLCanvasElement | null > null;
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // scene.add(camera);
    //
    // const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    // const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x008080});
    // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // sphere.position.set(0, 0, 0);
    // scene.add(sphere);

    // onMounted(() => {
    //   const renderer = new THREE.WebGLRenderer({
    //     canvas: canvas.value,
    //     antialias: false
    //   });
    //
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   renderer.setPixelRatio(window.devicePixelRatio * 0.5);
    //   camera.position.setZ(10);
    //   renderer.render(scene, camera);
    // }),

// create semi-transparent plane
// const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
// const planeMaterial = new THREE.MeshBasicMaterial({
//   color: 0x000000,
//   opacity: 0.5,
//   transparent: true,
//   side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.position.set(0, 0, -1);
// scene.add(plane);
//
// const ModelControls = new TransformControls(camera, renderer.domElement);
//
// const material = new THREE.MeshStandardMaterial({
//   map: new THREE.TextureLoader().load(titleTexture),
// })
//
// const stlLoader = new STLLoader();
// const gltfLoader = new GLTFLoader();
//
// let title;
// let promise = stlLoader.loadAsync(titleModel);
// promise.then(
//     function (geometry) {
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.set(-7, 2, 0);
//       mesh.scale.set(0.03, 0.03, 0.03);
//
//       scene.add(mesh);
//
//       title = mesh;
//     }
// )
//
// let potion;
// gltfLoader.load(
//     potionModel,
//     function (gltf) {
//       potion = gltf.scene;
//       potion.position.set(10, -3, 0);
//       potion.rotation.set(0, 1, 0);
//       potion.scale.set(0.007, 0.007, 0.007);
//       scene.add(potion);
//
//       const glow = new THREE.PointLight(0x0000ff, 1, 100);
//       glow.position.set(0, 0, 0);
//       glow.intensity = 2;
//       glow.decay = 10;
//       potion.add(glow);
//     }
// );
//
// let cauldron;
// gltfLoader.load(
//     cauldronModel,
//     function (gltf) {
//       cauldron = gltf.scene;
//       cauldron.position.set(-10, -2, 0);
//       cauldron.rotation.set(0, 1, 0);
//       cauldron.scale.set(1.5, 1.5, 1.5);
//       cauldron.rotation.set(0.2, 0, -0.2);
//
//       const glow = new THREE.PointLight(0x00ff00, 1, 100);
//       glow.position.set(0, 0, 0);
//       glow.intensity = 1;
//       glow.decay = 10;
//       cauldron.add(glow);
//
//       scene.add(cauldron);
//     }
// );
//
// let hagrid;
//
// async function loadHagrid() {
//   const hagridData = await gltfLoader.loadAsync(hagridModel);
//
//   hagrid = hagridData.scene;
//   hagrid.position.set(0, -12, 0);
//   hagrid.scale.set(0.0007, 0.0007, 0.0007);
//
//   const glow = new THREE.PointLight(0xff0000, 1, 100);
//   glow.position.set(0, 0, 0);
//   glow.intensity = 1;
//   glow.decay = 10;
//   hagrid.add(glow);
//
//   scene.add(hagrid);
// }
//
// loadHagrid();
//
// const backLight = new THREE.PointLight(0xffffff);
// backLight.position.set(0, 5, 0);
// backLight.intensity = 2;
// scene.add(backLight);
//
// const frontLightL = new THREE.PointLight(0xffffff);
// frontLightL.position.set(-4, 5, 2);
// frontLightL.intensity = 0.7;
// frontLightL.decay = 10;
// scene.add(frontLightL);
//
// const frontLightR = new THREE.PointLight(0xffffff);
// frontLightR.position.set(4, 5, 2);
// frontLightR.intensity = 0.7;
// frontLightR.decay = 10;
// scene.add(frontLightR);
//
// const ambientLight = new THREE.AmbientLight(0xffffff);
// ambientLight.intensity = 0.3;
// scene.add(ambientLight);
//
// const gridHelper = new THREE.GridHelper(50, 50);
// gridHelper.rotation.x = Math.PI / 2;
// // scene.add(gridHelper);
//
// scene.add(ModelControls);
//
// window.addEventListener('keydown', (e) => {
//   switch (e.key) {
//     case 'w':
//       ModelControls.setMode('translate');
//       break;
//     case 'e':
//       ModelControls.setMode('rotate');
//       break;
//     case 'r':
//       ModelControls.setMode('scale');
//       break;
//   }
// });
//
// function animate() {
//   requestAnimationFrame(animate);
//
//   if (title) {
//     title.position.y = 1.5 + Math.sin(Date.now() / 1000) * 0.2;
//     title.position.x = -7 + Math.cos(Date.now() / 1000) * 0.2;
//   }
//
//   if (potion) {
//     potion.position.y = -3 + Math.sin(Date.now() / 1000) * 0.1;
//     potion.position.x = 10 + Math.sin(Date.now() / 1000) * 0.06;
//   }
//
//   if (cauldron) {
//     cauldron.position.y = -2 + Math.sin(Date.now() / 1000) * 0.1;
//     cauldron.position.x = -10 + Math.sin(Date.now() / 1000) * 0.06;
//     cauldron.rotation.y += 0.001;
//   }
//
//   if (hagrid) {
//     hagrid.position.y = -12 + Math.cos(Date.now() / 1000) * 0.05;
//   }
//
//   renderer.render(scene, camera);
// }
//
// animate();

// export default {
//   name: 'HomeView',
//
//   data() {
//     return {
//       scene: new THREE.Scene(),
//       stlLoader: new STLLoader(),
//       gltfLoader: new GLTFLoader(),
//       textureLoader: new THREE.TextureLoader(),
//       renderer: new THREE.WebGLRenderer({
//         canvas: document.querySelector('#bg'),
//         antialias: false
//       }),
//       camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
//       title: null,
//       potion: null,
//       cauldron: null,
//       hagrid: null,
//     }
//   },
//
//   methods: {
//     async loadHagrid() {
//       const hagridData = await this.gltfLoader.loadAsync(hagridModel);
//
//       this.hagrid = hagridData.scene;
//       this.hagrid.position.set(0, -12, 0);
//       this.hagrid.scale.set(0.0007, 0.0007, 0.0007);
//
//       const glow = new THREE.PointLight(0xff0000, 1, 100);
//       glow.position.set(0, 0, 0);
//       glow.intensity = 1;
//       glow.decay = 10;
//       this.hagrid.add(glow);
//
//       this.scene.add(this.hagrid);
//     },
//     animate(){
//       requestAnimationFrame(animate);
//
//       if (this.title) {
//         this.title.position.y = 1.5 + Math.sin(Date.now() / 1000) * 0.2;
//         this.title.position.x = -7 + Math.cos(Date.now() / 1000) * 0.2;
//       }
//
//       if (this.potion) {
//         this.potion.position.y = -3 + Math.sin(Date.now() / 1000) * 0.1;
//         this.potion.position.x = 10 + Math.sin(Date.now() / 1000) * 0.06;
//       }
//
//       if (this.cauldron) {
//         this.cauldron.position.y = -2 + Math.sin(Date.now() / 1000) * 0.1;
//         this.cauldron.position.x = -10 + Math.sin(Date.now() / 1000) * 0.06;
//         this.cauldron.rotation.y += 0.001;
//       }
//
//       if (this.hagrid) {
//         this.hagrid.position.y = -12 + Math.cos(Date.now() / 1000) * 0.05;
//       }
//
//   this.renderer.render(this.scene, this.camera);
// }
//   },
//
//   created() {
//     this.scene.background = this.textureLoader.load(mainbg);
//
//     // Create dark bg filter
//       const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
//       const planeMaterial = new THREE.MeshBasicMaterial({
//         color: 0x000000,
//         opacity: 0.5,
//         transparent: true,
//         side: THREE.DoubleSide
//       });
//       const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//       plane.position.set(0, 0, -1);
//       this.scene.add(plane);
//
//     // Set renderer
//       this.renderer.setPixelRatio( window.devicePixelRatio * 0.5 );
//       this.renderer.setSize( window.innerWidth, window.innerHeight );
//       this.camera.position.setZ(10);
//       this.renderer.render( this.scene, this.camera );
//
//     const ModelControls = new TransformControls(this.camera, this.renderer.domElement);
//     const material = new THREE.MeshStandardMaterial({
//       map: new THREE.TextureLoader().load(titleTexture),
//     })
//
//     let promise = this.stlLoader.loadAsync(titleModel);
//     promise.then(
//         function (geometry) {
//           const mesh = new THREE.Mesh(geometry, material);
//           mesh.position.set(-7, 2, 0);
//           mesh.scale.set(0.03, 0.03, 0.03);
//
//           this.scene.add(mesh);
//
//           this.title = mesh;
//         }
//     )
//
//     this.gltfLoader.load(
//         potionModel,
//         function (gltf) {
//           this.potion = gltf.scene;
//           this.potion.position.set(10, -3, 0);
//           this.potion.rotation.set(0, 1, 0);
//           this.potion.scale.set(0.007, 0.007, 0.007);
//           this.scene.add(this.potion);
//
//           const glow = new THREE.PointLight(0x0000ff, 1, 100);
//           glow.position.set(0, 0, 0);
//           glow.intensity = 2;
//           glow.decay = 10;
//           this.potion.add(glow);
//         }
//     );
//
//     this.gltfLoader.load(
//         cauldronModel,
//         function (gltf) {
//           this.cauldron = gltf.scene;
//           this.cauldron.position.set(-10, -2, 0);
//           this.cauldron.rotation.set(0, 1, 0);
//           this.cauldron.scale.set(1.5, 1.5, 1.5);
//           this.cauldron.rotation.set(0.2, 0, -0.2);
//
//           const glow = new THREE.PointLight(0x00ff00, 1, 100);
//           glow.position.set(0, 0, 0);
//           glow.intensity = 1;
//           glow.decay = 10;
//           this.cauldron.add(glow);
//
//           this.scene.add(this.cauldron);
//         }
//     );
//
//     this.loadHagrid();
//
//     const backLight = new THREE.PointLight(0xffffff);
//     backLight.position.set(0, 5, 0);
//     backLight.intensity = 2;
//     this.scene.add(backLight);
//
//     const frontLightL = new THREE.PointLight(0xffffff);
//     frontLightL.position.set(-4, 5, 2);
//     frontLightL.intensity = 0.7;
//     frontLightL.decay = 10;
//     this.scene.add(frontLightL);
//
//     const frontLightR = new THREE.PointLight(0xffffff);
//     frontLightR.position.set(4, 5, 2);
//     frontLightR.intensity = 0.7;
//     frontLightR.decay = 10;
//     this.scene.add(frontLightR);
//
//     const ambientLight = new THREE.AmbientLight(0xffffff);
//     ambientLight.intensity = 0.3;
//     this.scene.add(ambientLight);
//
//     const gridHelper = new THREE.GridHelper(50, 50);
//     gridHelper.rotation.x = Math.PI / 2;
//     // scene.add(gridHelper);
//
//     this.scene.add(ModelControls);
//
//     window.addEventListener('keydown', (e) => {
//       switch (e.key) {
//         case 'w':
//           ModelControls.setMode('translate');
//           break;
//         case 'e':
//           ModelControls.setMode('rotate');
//           break;
//         case 'r':
//           ModelControls.setMode('scale');
//           break;
//       }
//     });
//
//     this.animate()
//   },
// }
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

canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
