import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../../engine.js";
import { LayoutTransitionScreenEffect } from "./GLOverallGameScreenFadeInOutHandler.js";
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
    static _TRY_ACTION_UPDATE(ActionName, Fcuntion) {
        if (GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE == null)
            return;
        if (ActionName !== GL_COMMAND_.GET_LAST_ACTION) {
            if (GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE._lastAction == ActionName) {
                Fcuntion();
                GL_COMMAND_.GET_LAST_ACTION = ActionName;
            }
        }
    }
}
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    console.log(" [GL_COMMAND] console init");
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.InGameConsole.getFirstInstance();
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_update(() => {
    GL_COMMAND_._TRY_ACTION_UPDATE("m_setting", () => {
        alert("try action");
    });
});
