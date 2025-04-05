export default class AudioLoader {
    constructor() {
        this.audios = []; 
        this.loadedArr = [];
    }

    addAudio(path) {
        this.audios.push(path);
        this.loadedArr.push(false);
        return path;
    }

    loadAll() {
        return new Promise((resolve, reject) => {
            this.audios = this.audios.map((path, index) => {
                const audio = new Audio(path);
                audio.addEventListener('canplaythrough', () => {
                    this.loadedArr[index] = true;
                    if (this.loadedArr.every(loaded => loaded)) {
                        resolve();
                    }
                });
                audio.addEventListener('error', () => {
                    reject(new Error(`Failed to load audio: ${path}`));
                });
                return audio;
            });
        });
    }
}
