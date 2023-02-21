import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        75, // FOV
        window.innerWidth / window.innerHeight, // ratio
        0.1,
        1000
    );


    camera.position.setZ(10);
    camera.tick = (delta) => {

    };

    return camera;
}

export { createCamera };
