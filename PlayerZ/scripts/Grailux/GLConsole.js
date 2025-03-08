import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
export class GL_COMMAND_ {
    static ACTION_OPEN_() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleOpen");
    }
    static ACTION_CLOSE_() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleClose");
    }
    static _draw(cont) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsolePrint", cont);
    }
    static _REGISTER_COMMAND_(command, par, des, help) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleBindEvent", command, par, des, help);
    }
    static _CLEAR_ALL_CONTENT_FROM_COMMAND() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleClear");
    }
}
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    console.log(" [GL_COMMAND] console init");
});
