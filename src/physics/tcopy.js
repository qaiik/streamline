function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStreamline(object) {
    return isObject(object) && typeof object.a !== "undefined" && typeof object.r !== "undefined" && typeof object.t !== "undefined"
}

import _StreamlineVec3 from "../math/vector3";

export default function tcopy(v1, ...v2) {
    v1.copy(_StreamlineVec3(...v2).t)
    return v1
};