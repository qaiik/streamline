import _StreamlineVec3 from "../math/vector3";
import * as THREE from "../../lib/three.module.min.js";
import RAPIER from "../../lib/rapier.js";



export default function pcopy(v1, v2) {
    if (v1 instanceof THREE.Vector3) {
        v1.set(v2.x, v2.y, v2.z)
    } else if (v1 instanceof RAPIER.Vector3){
        v2.x = v1.x;
        v2.y = v1.y;
        v2.z = v1.z;
    } else
    return v1
};