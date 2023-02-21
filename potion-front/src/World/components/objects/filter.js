import {
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    TextureLoader,
    DoubleSide
} from "three";

export default function createFilter(props) {
    const geometry = new PlaneGeometry(100, 100, 1, 1);

    const material = new MeshBasicMaterial({
        color: 0x000000,
        opacity: 0.5,
        transparent: true,
        side: DoubleSide
    });

    const plane = new Mesh(geometry, material);
    plane.position.set(0, 0, -1);

    let frame = 0;
    plane.tick = (delta) => {

    };

    return plane;
}
