import * as THREE from "../../lib/three.module.min.js";
import _StreamlineVec3 from "../math/vector3.js";
import tcopy from "../physics/tcopy.js";

export default class THREEObject {
    constructor(geo,mat) {
        this.type = "<streamline.ThreeObject>"
        this.geometry = geo;
        this.material = mat;
        this.mesh = new THREE.Mesh(geo,mat);
        this.link = null;
        this.mesh.link = this;
        this.position = this.mesh.position;
        this.rotation = this.mesh.rotation;
        this.Object3D = null;
    }

    setPhysicsObject(rapierObject) {
        this.link = rapierObject;
    }

    addTo(scn) {
        scn.add(this.mesh)
    }

    _pcopy() {
        if (this.link && this.link.body) tcopy(this.mesh.position, this.link.body.translation());
        this.position = this.mesh.position;
    }

    setPosition(...position) {
        this.mesh.position.set(..._StreamlineVec3(...position).a);
        this.position = this.mesh.position;
    }

    copyPosition(vec) {
        this.mesh.position.copy(_StreamlineVec3(vec).t);
        this.position = this.mesh.position;
    }

    setRotation(...rotation) {
        this.mesh.rotation.set(..._StreamlineVec3(...rotation).a);
        this.rotation = this.mesh.rotation;
    }
    
    copyRotation(vec) {
        this.mesh.rotation.copy(_StreamlineVec3(vec).t);
        this.rotation = this.mesh.rotation;
    }

    

    updatePosition(mathfunc) {
        return tcopy(this.camera.position, _StreamlineVec3(mathfunc(new THREE.Vector3().copy(this.camera.position))).t)
    }
}