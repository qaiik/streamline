export default function Promisify(value) {
    return new Promise(r=>r(value));
} 