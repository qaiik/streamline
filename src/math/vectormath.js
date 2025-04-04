import _StreamlineVec3 from "./vector3";
/**
 * Enables vector math on a RAPIER.Vector3 using the THREE Vector api.
 * @param {RAPIER.Vector3} vector - The RAPIER.Vector3 to perform math operations on.
 * @param {function} callback - The callback function. A THREE.Vector3 will be provided to perform operations on. Function must return the vector.
 * @returns {RAPIER.Vector3} The output RAPIER.Vector3
 */
function _doRapierVecMath(vec, callback) {
    const nv = _StreamlineVec3(vec).t;
    const output = callback(nv);
    if (!output) throw new Error("<streamline.VectorMath.Rapier> Callback function did not return a vector.")
    return _StreamlineVec3(output).r
}

export default {
    Rapier: _doRapierVecMath
}
