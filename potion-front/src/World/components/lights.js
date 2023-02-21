import {
    AmbientLight,
    PointLight,
} from "three";
function createLights(backLightColor, frontLightColor, ambientLightColor) {
    const backLight = new PointLight(backLightColor);
    backLight.position.set(0, 5, 0);
    backLight.intensity = 2;
    backLight.tick = (delta) => {

    };

    const frontLightL = new PointLight(frontLightColor);
    frontLightL.position.set(-4, 5, 2);
    frontLightL.intensity = 0.7;
    frontLightL.decay = 10;
    frontLightL.tick = (delta) => {

    };

    const frontLightR = new PointLight(frontLightColor);
    frontLightR.position.set(4, 5, 2);
    frontLightR.intensity = 0.7;
    frontLightR.decay = 10;
    frontLightR.tick = (delta) => {

    };

    const ambientLight = new AmbientLight(ambientLightColor);
    ambientLight.intensity = 0.3;
    ambientLight.tick = (delta) => {

    };

    return { backLight, frontLightL, frontLightR, ambientLight };
}
export { createLights };
