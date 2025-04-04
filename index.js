import RAPIER from "./lib/rapier.js"
import * as THREE from "./lib/three.module.min.js"
import GetWHFraction from "./src/math/getwhf.js";
import Vec3 from "./src/math/vector3.js"
import VecMath from "./src/math/vectormath.js";
import Pcopy from "./src/physics/ucopy.js";
import Sync from "./src/positioning/psync.js";
import Game from "./src/game/game.js";
import Rendering from "./src/rendering/rendering.js";
import types from "./src/types/types.js";
import checktypes from "./src/typecheck/type.js";
import Utils from "./src/util/util.js";
import Tcopy from "./src/physics/tcopy.js";
import Debug from "./src/debug/debug.js"
import Initialize from "./src/physics/initialize.js";
import p from "./src/physics/p.js";

const streamline = {
    Vec3,
    Math: {
        GetWHFraction
    },
    Game,
    VectorMath: {
        ...VecMath,
        Pcopy,
        Tcopy,
    },
    Positioning: {
        Sync
    },
    Physics: {
        Initialize,
        ...p
    },
    Rendering,

    ...types,
    TYPES: checktypes,

    Utils,
    Debug,
    
};

window.THREE = THREE; //disable after
export default streamline;
