import init from "./tin/tin.js";
import {execute_tin} from "./tin/tin.js";

window.loadWASM = () => {
    window.loading_tin = true;

    // Load WASM lib
    init().then(_ => {
        window.execute_tin = execute_tin;
        window.loading_tin = false;
    
    }).catch(err => {
        console.error(err);
        window.loading_tin = false;
    });
};

window.loadWASM();