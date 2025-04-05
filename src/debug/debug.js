import DebugRenderer from "./debugRenderer";

export default {
    Expose(o) {
        if(window["__streamline_debug_mode"] || false) {
            Object.assign(window, o)
        }
    },

    ExposeVariable(k,v) {
        if(window["__streamline_debug_mode"] || false) {
            window[k] = v;
        }
    },
    
    SetDebug(bool) {
        return window["__streamline_debug_mode"] = bool;
    },
    
    IsDebug() {
        return window["__streamline_debug_mode"] || false
    },

    Log(...values) {
        if(window["__streamline_debug_mode"] || false) {
            console.log(...values)
        }
    },

    LogForce(...values) {
        console.log(...values)
    },

    DebugRenderer
}