import Initialize from "../physics/initialize";
import MakeWorld from "../physics/makePhysicsWorld";

class _StreamlineGame {
    constructor(props) {
        Object.assign(this, props);
        this.type = "<streamline.Game>"
    }

    addUpdatePass(func) {
        this.GameLoop.addPass(func);
    }

    addPhysicsPass(pass) {
        this.GameLoop.renderFunctions = [pass, ...this.GameLoop.renderFunctions];
    }

    async addPhysics(...v) {
        this.RAPIER = await Initialize();
        return this.physicsWorld = MakeWorld(this.RAPIER, this, ...v);
    }

    setCamera(c) {
        return this.Camera = c;
    }

    start() {
        this.GameLoop.animate();
    }

    pause() {
        this.GameLoop.pause();
    }

    unpause() {
        this.GameLoop.unpause();
    }
}

export default function MakeSLGame(...a) {
    return new _StreamlineGame(...a);
}