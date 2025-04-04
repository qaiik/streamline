import * as THREE from "../../lib/three.module.min.js";
import _getWHFraction from "../math/getwhf.js"

/**
 * creates a THREE.PerspectiveCamera
 * @param {number} fov - Camera FOV.
 * @param {number} near - The near value of the camera
 * @param {number} far - The far value of the camera
 * @returns {THREE.PerspectiveCamera} The created camera is returned.
 */
export default function MakeCamera(fov, near, far) {
    return new THREE.PerspectiveCamera(fov, _getWHFraction(), near, far)
}