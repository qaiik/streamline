export default class RapierDebugRenderer {
    mesh
    world
    enabled = true
  
    constructor(scene, world) {
      this.world = world;
      this.mesh = new THREE.LineSegments(
        new THREE.BufferGeometry(),
        new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true })
      );
      this.mesh.frustumCulled = false;  // To make sure the debug mesh is always visible
      scene.add(this.mesh);
    }
  
    update() {
      if (this.enabled) {
        const { vertices, colors } = this.world.debugRender();
        this.mesh.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        this.mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
        this.mesh.visible = true;  // Enable visibility
      } else {
        this.mesh.visible = false;
      }
    }
  }