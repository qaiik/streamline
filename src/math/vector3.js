import * as THREE from "../../lib/three.module.min.js";
import RAPIER from "../../lib/rapier.js";

function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStreamline(object) {
    return isObject(object) && typeof object.a !== "undefined" && typeof object.r !== "undefined" && typeof object.t !== "undefined"
}

export default function _StreamlineVec3(...vectorArguments) {
    if (arguments.length === 1) {
        const vector = vectorArguments[0];
        if (vector instanceof THREE.Vector3) {
            return {
                t: vector,
                r: new RAPIER.Vector3(vector.x, vector.y, vector.z), 
                a: [vector.x, vector.y, vector.z]
            }
        } else if (vector instanceof RAPIER.Vector3) {
            return {
                t: new THREE.Vector3(vector.x, vector.y, vector.z),
                r: vector, 
                a: [vector.x, vector.y, vector.z]
            }
        } else if (Array.isArray(vector)) {
            if (vector.length != 3) throw new Error("<streamline.Vec3> Length of vector array must equal three.");
            return {
                t: new THREE.Vector3(...vector),
                r: new RAPIER.Vector3(...vector), 
                a: vector
            } 
        } else if (isStreamline(vector)) {
            return vector;
        } else {
            throw new Error("<streamline.Vec3> Passed vector is of unknown type.")
        }
    } else if (arguments.length === 3) {
        return {
            t: new THREE.Vector3(...vectorArguments),
            r: new RAPIER.Vector3(...vectorArguments), 
            a: Array.from(arguments)
        }
    } else {
        throw new Error("<streamline.Vec3> improper Vec3 argument length, please provide three arguments.")
    }
}