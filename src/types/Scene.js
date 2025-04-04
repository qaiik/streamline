import StreamlineRenderer from "./StreamlineRenderer";

export default class StreamlineScene {
    constructor(d) {
        this.type = "<streamline.Scene>";
        this.Scene = d.SceneObject;
        this.Camera = d.CameraObject;
        this.Canvas = d.GameCanvas;
        this.Renderer = new StreamlineRenderer(d.RendererObject);
        this.StreamlineScene = null;
    }

    children() {
        return this.SceneObject.children;
    }
}