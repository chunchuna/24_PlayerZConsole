import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../../engine.js";
import { StartDialogue } from "./GLevel.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
const functionMap = {
//'guard:config:1': GUARD[1],
};
// Function that calls another function based on a string key, with arguments
export function ConfigExecutor(functionName, ...args) {
    const func = functionMap[functionName];
    console.log("[ConfigExecutor] 正在执行conifg:" + functionName);
    if (func) {
        func(...args);
    }
    else {
        console.log(`Function with name ${functionName} not found.`);
    }
}
