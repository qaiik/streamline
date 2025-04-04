/**
 * Makes a function that will render the scene onto the game canvas for use as a final animate loop function.
 * @param {THREE.WebGLRenderer} renderer - The games renderer object.
 * @param {THREE.Scene} scene - The games <THREE.Scene> object.
 * @param {THREE.PerspectiveCamera} camera - The games camera object.
 * @returns {function} Returns the created render pass function.
 */
export default function makeRenderPass(renderer, scene, camera) {
    return function _streamlineRenderPass(){renderer.render(scene, camera)};
}

makeRenderPass()