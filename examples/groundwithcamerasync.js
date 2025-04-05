const gp = streamline.Game.MakeSLGameProps();
const game = streamline.Game.MakeSLGame(gp);
game.Camera.position.set(0,5,30);

game.start();
const RAPIER = await streamline.Physics.Initialize();
const world = await game.addPhysics();

const g = new THREE.BoxGeometry(5, 5, 5);
const m = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const to = new streamline.Game.THREEObject(g, m);
to.addTo(game.Scene);
to.setPosition(0, 30, 0);

const rm = streamline.Physics.MakeRapierBody('dynamic', to, world);
const ro = new streamline.Game.RAPIERObject({
    threeObject: to,
    world, 
    bodyDesc: rm.bodyDesc, 
    colliderDesc: rm.colliderDesc
});
ro.create();

const otd = new streamline.Object3D(to, ro);
game.addObject(otd);

const groundGeometry = new THREE.BoxGeometry(30, 1, 30); 
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 }); 
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.position.set(0, 0, 0); 

const groundObject = new streamline.Game.THREEObject(groundGeometry, groundMaterial);
groundObject.addTo(game.Scene);

const groundBodyDesc = streamline.Physics.MakeRapierBody('fixed', groundObject, world);
const groundRO = new streamline.Game.RAPIERObject({
    threeObject: groundObject,
    world,
    bodyDesc: groundBodyDesc.bodyDesc,
    colliderDesc: groundBodyDesc.colliderDesc
});
groundRO.create();

const groundOTD = new streamline.Object3D(groundObject, groundRO);
game.addObject(groundOTD);

const debugRenderer = new streamline.Debug.DebugRenderer(game.Scene, world);
game.addDebugRenderer(debugRenderer);

game.syncPhysics();
game.addUpdatePass(function(){
    game.Camera.position.y = to.position.y
    game.Camera.position.x = to.position.x
    if (otd.position.y < 5) otd.rotation.y += 0.01
})