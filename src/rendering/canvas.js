function assertBrowser() {
    if (typeof document == "undefined") {
        throw new Error("<streamline.rendering.CreateCanvas> Error: environment is not a web browser.")
    }
}


export default class GameCanvas {
    constructor() {
        assertBrowser();
        this.element = document.createElement("canvas");
    }

    size(w=window.innerWidth, h=window.innerHeight) {
        this.element.width = w;
        this.element.height = h;
    }

    addTo(element) {
        element.appendChild(this.element);
    }
}

