import _StreamlineVec3 from "../math/vector3";

export default function MakeRapierBody(type, object, world) {
    const staticBodyDesc = RAPIER.RigidBodyDesc[type]().setTranslation(..._StreamlineVec3(object.position).a).setRotation(object.mesh.quaternion);  // Static body (doesn't move)
    const cd = streamline.Physics.MakeRapierTrimesh(object, world)
// const staticColliderDesc = RAPIER.ColliderDesc.cuboid(5 / 2, 5 / 2, 5 / 2);  // Cuboid size (5x5x5)

    // const staticBody = world.createRigidBody(staticBodyDesc);
    // const staticCollider = world.createCollider(cd, staticBody);
    return {
        colliderDesc: cd,
        bodyDesc: staticBodyDesc
    }
}