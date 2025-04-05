const gp = streamline.Game.MakeSLGameProps();
const game = streamline.Game.MakeSLGame(gp);
game.Camera.position.setZ(30);

game.start();
const RAPIER = await streamline.Physics.Initialize();
const world = await game.addPhysics();

const g = new THREE.BoxGeometry(5, 5, 5);
const m = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const obj = new streamline.Game.THREEObject(g, m);
obj.addTo(game.Scene);
obj.mesh.position.set(0, 1000, 0);

const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 30, 0);
const colliderDesc = RAPIER.ColliderDesc.cuboid(5/2, 5/2, 5/2);

const robj = new streamline.Game.RAPIERObject({ world, bodyDesc, colliderDesc });
robj.create();

const object = new streamline.Object3D(obj, robj);
game.addObject(object);

function drawDebug() {
    const colliders = world.colliders();
    
    colliders.forEach(collider => {
        const shape = collider.shape();
        const position = collider.translation();
        const rotation = collider.rotation();

        let geometry;
        
        if (shape instanceof RAPIER.Cuboid) {
            const extents = shape.halfExtents();
            geometry = new THREE.BoxGeometry(extents.x * 2, extents.y * 2, extents.z * 2);
        } else if (shape instanceof RAPIER.Sphere) {
            geometry = new THREE.SphereGeometry(shape.radius() * 2);
        }

        const mesh = new THREE.Mesh(geometry, debugRenderer);
        mesh.position.set(position.x, position.y, position.z);
        mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        game.Scene.add(mesh);
    });
}