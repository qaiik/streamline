import makeRenderPass from "../rendering/makeRenderPass";

export default class GameLoop {
    constructor(renderer, scene, camera) {
        this.type = "<streamline.GameLoop>"
        this.renderFunctions = [];
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.animate = this._animate.bind(this);
        this.paused = false;
        this.render = makeRenderPass(renderer, scene, camera);
    }

    pause() {
        this.paused = true;
    }

    unpause() {
        this.paused = false;
    }

    _animate(){
        if (this.paused) return this.step(this.animate)
        for (const f of this.renderFunctions) {
            f()
        }

        this.render();
        this.step(this.animate);
    };

    step(...a) {
        return requestAnimationFrame(...a);
    }

    getRf() {
        return this.renderFunctions
    }

    addPass(f) {
        this.renderFunctions.push(f);
    } 
}

