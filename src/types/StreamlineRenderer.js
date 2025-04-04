export default class StreamlineRenderer {
    constructor(r, gc) {
        this.type = "<streamline.Renderer>"
        this.r = r;
        this.autoResize = false;
        this.gc = gc;
    }

    size(w=window.innerWidth, h=window.innerHeight) {
        this.r.setSize(w,h);
    }

    ListenResize() {
        this.autoResize = true;
        window.addEventListener('resize', () => {
            if (this.autoResize) this.size(); this.gc.size()
        })
    }
}