import { GetChunchunFuckWayfarerccSDK } from "../engine.js";
import { StartDialogue } from "./GLevel.js"

import { Fade } from "./GLFade.js";


const functionMap: { [key: string]: (...args: any[]) => void } = {
    //'guard:config:1': GUARD[1],

};

// Function that calls another function based on a string key, with arguments
export function ConfigExecutor(functionName: string, ...args: any[]) {
    const func = functionMap[functionName];
    console.log("正在执行conifg:" + functionName)
    if (func) {
        func(...args);
    } else {
        console.log(`Function with name ${functionName} not found.`);
    }
}





