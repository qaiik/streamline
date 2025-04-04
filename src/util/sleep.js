export default function sleep(d) {
    return new Promise(r=>setTimeout(()=>r(),d))
}