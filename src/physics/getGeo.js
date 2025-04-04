export default function threeToGeo(threeo) {
    const mesh = threeo.mesh;
    // Ensure the geometry is indexed (i.e., it has indices)
    const geometry = mesh.geometry.index ? mesh.geometry : mesh.geometry.toNonIndexed();
    
    // Extract vertices
    const vertices = geometry.attributes.position.array;
    
    // Extract indices (face indices)
    const indices = geometry.index ? geometry.index.array : null;

    if (!indices) {
        console.error("Mesh must be indexed to be converted to a Trimesh in Rapier.");
        return null;
    }

    return { vertices, indices };
}