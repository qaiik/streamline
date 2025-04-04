class _StreamlineGame {
    constructor(props) {
        Object.assign(this, props);
        this.type = "<streamline.Game>"
    }

    addUpdatePass(func) {
        this.GameLoop.addPass(func);
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