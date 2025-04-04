export default function MakeRenderer(options={antialiasing:true}) {
    return new THREE.WebGLRenderer(options);
}