import RAPIER from "../../lib/rapier";

export default async function Initialize() {
    await RAPIER.init();
    return RAPIER
}