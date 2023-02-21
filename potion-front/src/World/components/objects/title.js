import {
    Mesh,
    MeshPhongMaterial,
} from "three";

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default function createTitle(props) {
    const stlLoader = new STLLoader();

    const material = new MeshPhongMaterial({
        color: 0xffd700,
        specular: 0x111111,
        shininess: 200,
    });

    let title;

    stlLoader.load('./../../title.STL', async (geometry) => {
        const mesh = new Mesh(geometry, material);
        mesh.position.set(-7, 2, 0);
        mesh.scale.set(0.03, 0.03, 0.03);

        console.log(mesh)
        title = mesh;
    });

    if (title) {
        title.tick = (delta) => {

        };
    }

    return title;
}
