import { createCamera } from "./camera.js";
import { createLights } from "./lights.js";
import { createScene } from "./scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/loop.js";
import { Resizer } from "./systems/resizer.js";
import createFilter from "./objects/filter.js";
import createTitle from "./objects/title.js";

// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {

        // Instances of camera, scene, and renderer
        camera = createCamera();
        scene = createScene("blue");
        renderer = createRenderer();

        // Initialize Loop
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        // Light Instance, with optional light helper
        const {backLight, frontLightL, frontLightR, ambientLight} = createLights(0xffffff, 0xffffff, 0xffffff);
        loop.updatables.push(backLight);
        loop.updatables.push(frontLightR);
        loop.updatables.push(frontLightL);
        loop.updatables.push(ambientLight);

        // Filter Instance
        const filter = createFilter();

        // Title Instance
        const title = createTitle();

        console.log(title)
        if (title) {
            loop.updatables.push(title);
            console.log(title)

            scene.add(title);
        }

        scene.add(
            backLight,
            frontLightL,
            frontLightR,
            ambientLight,
            filter,
        );

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
            this.render();
        };

    }
    render() {
        // Draw a single frame
        renderer.render(scene, camera);
    }
    // Animation handlers
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}
export { World };
