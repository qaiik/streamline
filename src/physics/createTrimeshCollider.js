import RAPIER from '../../lib/rapier';
import threeToGeo from './getGeo';

export default function MakeRapierTrimesh(mesh, world) {
    const { vertices, indices } = threeToGeo(mesh);

    if (!vertices || !indices) return null;

    const colliderDesc = RAPIER.ColliderDesc.trimesh(vertices, indices);
    const collider = world.createCollider(colliderDesc);

    return collider;
}
