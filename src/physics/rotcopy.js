export default function rotcopy(rbody, tobj) {
    return rbody.setRotation(tobj.mesh.quaternion)
}