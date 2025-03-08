import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";

export class GL_COMMAND_ {
    static ACTION_OPEN_() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("ConsoleOpen")
    }

    static ACTION_CLOSE_() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("ConsoleClose")
    }

    static _draw(cont: string) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("ConsolePrint", cont)

    }

    static _REGISTER_COMMAND_(command: string, par: string, des: string, help: string) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("ConsoleBindEvent", command, par, des, help)
    }

    public static _CLEAR_ALL_CONTENT_FROM_COMMAND() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("ConsoleClear");
    }
}


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    console.log(" [GL_COMMAND] console init")
})

