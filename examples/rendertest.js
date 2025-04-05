const gp = streamline.Game.MakeSLGameProps();
const game = streamline.Game.MakeSLGame(gp);
game.Camera.position.setZ(30);

game.start();
const RAPIER = await streamline.Physics.Initialize();
const world = await game.addPhysics();

const g = new THREE.BoxGeometry(5, 5, 5);
const m = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // green
const to = new streamline.Game.THREEObject(g,m)
to.addTo(game.Scene)
const rm = streamline.Physics.MakeRapierBody('dynamic', to, world)
const ro = new streamline.Game.RAPIERObject({
    threeObject: to,
    world, 
    bodyDesc: rm.bodyDesc, 
    colliderDesc: rm.colliderDesc
})
ro.create();

const otd = new streamline.Object3D(to,ro);
game.addObject(otd);
game.syncPhysics();

// // Create a static cuboid rigidbody at position (0, 0, 0) with 5x5 size
const debugRenderer = new streamline.Debug.DebugRenderer(game.Scene, world);

game.addDebugRenderer(debugRenderer);