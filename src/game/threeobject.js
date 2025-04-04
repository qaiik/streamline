import * as THREE from "../../lib/three.module.min.js";
import _StreamlineVec3 from "../math/vector3.js";
import vectormath from "../math/vectormath.js";
import tcopy from "../physics/tcopy.js";

export default class THREEObject {
    constructor(geo,mat) {
        this.geometry = geo;
        this.material = mat;
        this.mesh = new THREE.Mesh(geo,mat);
        this.mesh.link = this;
        this.position = this.mesh.position;
    }

    addTo(scn) {
        scn.add(this.mesh)
    }

    setPosition(...position) {
        this.mesh.position.set(..._StreamlineVec3(...position).a);
        this.position = this.mesh.position;
    }

    copyPosition(vec) {
        this.mesh.position.copy(_StreamlineVec3(vec).t);
        this.position = this.mesh.position;
    }

    updatePosition(mathfunc) {
        return tcopy(this.camera.position, _StreamlineVec3(mathfunc(new THREE.Vector3().copy(this.camera.position))).t)
    }
}