export default function StyleCanvas() {
    const s = document.createElement('style');
    s.innerText = `body{margin:0px;padding:0px;overflow:hidden;}`
    document.head.appendChild(s);
    return s;
}