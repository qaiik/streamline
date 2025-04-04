import _StreamlineVec3 from "../math/vector3";
import RAPIER from "../../lib/rapier";

export default function MakeWorld(rapier, game, v=[0,-9.81,0]) {
    console.log("gam: ", game)
    const tv = _StreamlineVec3(v).t;
    const world = new rapier.World({x:tv.x,y:tv.y,z:tv.z});
    const physicsPass = () => world.step();
    game.addPhysicsPass(physicsPass);
    return world
}