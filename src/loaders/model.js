import { GLTFLoader } from "https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js"

export default class ModelLoader {
    constructor() {
        this.loaded = false;
    }

    load(glbPath) {
        const loaded = (await (new GLTFLoader()).load(glbPath)).scene;
        return {
            scene: loaded.scene,
            meshes: loaded.scene.meshes,
            iterateMeshes: loaded.scene.meshes.forEach
        }
    }
}

