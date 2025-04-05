import RAPIER from "../../lib/rapier"

export default class RAPIERObject {
    constructor({ threeObject, world, bodyDesc, colliderDesc }) {
      this.type = "<streamline.RapierObject>"
      this.world = world;
      this.bodyDesc = bodyDesc;
      this.colliderDesc = colliderDesc;
  
      this.body = null;
      this.collider = null;
      this.link = threeObject ? threeObject : null;
      this.Object3D = null;
    }
  
    create() {
      this.body = this.world.createRigidBody(this.bodyDesc);
      this.collider = this.world.createCollider(this.colliderDesc, this.body);
      if (typeof this.body.userData == "undefined") {
        this.body.userData = {};
      }
      this.body.userData.link = this.link ? this.link : null;
      return this;
    }
  }
  