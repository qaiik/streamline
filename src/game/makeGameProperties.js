import GameCanvas from "../rendering/canvas";
import makeRenderPass from "../rendering/makeRenderPass";
import MakeRenderer from "../rendering/Renderer";
import StyleCanvas from "../rendering/stylebody";
import StreamlineScene from "../types/Scene";
import StreamlineSceneDescriptor from "../types/SceneDescriptor";
import StreamlineRenderer from "../types/StreamlineRenderer";
import MakeCamera from "./camera";
import GameLoop from "./gameloop";
import MakeScene from "./scene";

export default function MakeGameProps() {
    const gc = new GameCanvas();
    gc.addTo(document.body);
    gc.size();
    StyleCanvas();

    const r = MakeRenderer({antialiasing: true,canvas: gc.element});
    
    const sr = new StreamlineRenderer(r, gc);
    sr.size();
    sr.ListenResize();
    

    const s = MakeScene();
    const c = MakeCamera();

    const sd = new StreamlineSceneDescriptor(r,s,c,gc,"example_project","example/path/");
    const ss = new StreamlineScene(sd);

    const gl = new GameLoop(r,s,c);

    return {
        Canvas: gc,
        StreamlineRenderer: r,
        Renderer: sr,
        Scene: s,
        Camera: c,
        SceneDescriptor: sd,
        RenderFunction: makeRenderPass(r,s,c),
        GameLoop: gl
    }

    
}