const gp = streamline.Game.MakeSLGameProps();
const game = streamline.Game.MakeSLGame(gp);
game.Camera.position.set(0, 5, 30);

game.start();
const RAPIER = await streamline.Physics.Initialize();
const world = await game.addPhysics();

// Load the GLB model and add its meshes as physics objects
const yat = await new gl().loadAsync('./Monkey.glb');
const monkeyScene = yat.scene;

// Iterate through children and convert to streamline.Object3D
monkeyScene.traverse((child) => {
    if (child.isMesh && child.geometry) {
        const mesh = new streamline.Game.THREEObject(child.geometry, new THREE.MeshStandardMaterial({ color: 0x00ff00 }));
        mesh.setPosition(0, 5, 0);
        mesh.addTo(game.Scene);

        const rb = streamline.Physics.MakeRapierBody('dynamic', mesh, world);
        const ro = new streamline.Game.RAPIERObject({
            threeObject: mesh,
            world,
            bodyDesc: rb.bodyDesc,
            colliderDesc: rb.colliderDesc
        });
        ro.create();

        const otd = new streamline.Object3D(mesh, ro);
        window.oo = otd;
        game.addObject(otd);
    }
});

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
game.Scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(10, 20, 10);
game.Scene.add(directionalLight);

// Ground setup
const groundGeometry = new THREE.BoxGeometry(30, 1, 30);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const groundObject = new streamline.Game.THREEObject(groundGeometry, groundMaterial);
groundObject.setPosition(0, 0, 0);
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

// Debug renderer
const debugRenderer = new streamline.Debug.DebugRenderer(game.Scene, world);
game.addDebugRenderer(debugRenderer);

game.syncPhysics();

game.addUpdatePass(function () {
    game.Camera.position.y = 3;
});
