export default class StreamlineSceneDescriptor {
    constructor(r,s,c,gc,pn,pp) {
        this.type = "<streamline.SceneDescriptor>";
        this.SceneObject = s;
        this.CameraObject = c;
        this.GameCanvas = gc;
        this.RendererObject = r;
        this.Projectname = pn;
        this.Projectpath = pp;
    }

}