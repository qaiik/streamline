import _StreamlineVec3 from "../math/vector3";
import rotcopy from "../physics/rotcopy";

export default class Object3D {
    constructor(t, r) {
        this.type = "<streamline.Object3D>"
        this.t = t;
        this.r = r;
        if (typeof this.r == "undefined" || !this.r) this.hasPhysics = false; else this.hasPhysics = true;
        if (this.hasPhysics) this.t.setPhysicsObject(this.r);
        this._position = this.t.position;
        this._rotation = this.t.rotation;
        this._definePosition();
    }

    _syncPhysics() {
        this.t._pcopy();
        rotcopy(this.r.body,this.t);
        this.t.Object3D = this;
        this.r.Object3D = this;
    }

    _definePosition() {
        const self = this;
    
        const handler = {
            set(target, prop, value) {
                target[prop] = value;
                self.setPosition(target);
                return true;
            }
        };
    
        this.position = new Proxy(this._position, handler);

        const rotHandler = {
            set(target, prop, value) {
                target[prop] = value;
                self.setRotation(target);
                return true;
            }
        };
    
        this.rotation = new Proxy(this._rotation, rotHandler);
    }
    



    setPosition(...v) {
        this.t.setPosition(...v);
        if (this.hasPhysics) {
            const tv = _StreamlineVec3(...v).t;
            this.r.body.setTranslation({
                x: tv.x,
                y: tv.y,
                z: tv.z
            })
        }
    }

    setRotation(v) {
        this.t.rotation = v
        this._rotation = this.t.rotation;
    }
}