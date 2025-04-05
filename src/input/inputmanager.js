export default class InputManager {
    constructor() {
        this.keys = {};
        this.mouseDown = false;
        this._listenKeys();
        this._listenMouse();
    }

    listenKeys() {
        document.addEventListener('keydown', (e => {
            this.keys[e.code] = true;
        }).bind(this));

        document.addEventListener('keyup', (e => {
            this.keys[e.code] = false;
        }).bind(this));
    }

    listenMouse() {
        document.addEventListener('mousedown', (e => {
            this.mouseDown = true;
        }).bind(this));

        document.addEventListener('mouseup', (e => {
            this.mouseDown = false;
        }).bind(this));
    }

    onMouseUp(f) {
        document.addEventListener('mouseup', e => {
            f(e)
        });
    }

    onMouseDown(f) {
        document.addEventListener('mousedown', e => {
            f(e)
        });
    }

    onKeyUp() {
        document.addEventListener('keyup', e => {
            f(e)
        });
    }

    onKeyDown() {
        document.addEventListener('keydown', e => {
            f(e)
        });
    }
}