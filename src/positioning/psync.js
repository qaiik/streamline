import _StreamlineVec3 from "../math/vector3";
import * as THREE from "../../lib/three.module.min.js";
import RAPIER from "../../lib/rapier.js";

export default function psync(o1, o2) {
    if (o1 instanceof THREE.Mesh) {
        const t = o2.translation();
        o1.position.set(t.x, t.y, t.z)
    } else if (v1 instanceof RAPIER.RigidBody){
        v1.setTranslation({
            x: o1.position.x,
            y: o1.position.y,
            z: o1.position.z
        })
    }
    return v1
};
