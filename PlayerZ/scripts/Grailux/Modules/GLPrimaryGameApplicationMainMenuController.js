import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../../engine.js";
import { GL_COMMAND_ } from "./GLGameplayInputCommandConsoleMechanism.js";
import { LayoutTransitionScreenEffect } from "./GLOverallGameScreenFadeInOutHandler.js";
import { GLLanguageClass } from "./GLGlobalGameApplicationLocalizationSystem.js";
var gl_init = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init;
var gl_update = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update;
var gl_lan = GLLanguageClass.GetTranslatedStringByKEY;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    //GL_COMMAND_._LOG("[GLGameGroupMenuClass] Testasdasdasdasdasdasdasdasdasdasd")
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Menu")
        return;
    GL_COMMAND_.ACTION_OPEN_();
    //CommandPlatform.Print("new file name active")
});
export class GLGameGroupMenuClass {
    static async OnStartGame() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Menu")
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.goToLayout("Level");
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(2500);
        GL_COMMAND_._draw(gl_lan("K_IS_LOADING_LEVEL", ""));
        GL_COMMAND_._CLEAR_ALL_CONTENT_FROM_COMMAND();
        GL_COMMAND_.ACTION_CLOSE_();
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(1000);
    }
    static async OnLoadGame() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Menu")
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Load_is_LoadingState = true;
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.goToLayout("Level");
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(2500);
        GL_COMMAND_._draw(gl_lan("K_IS_LOADING_LEVEL", ""));
        GL_COMMAND_._CLEAR_ALL_CONTENT_FROM_COMMAND();
        GL_COMMAND_.ACTION_CLOSE_();
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(1000);
    }
    static OnSetting() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Menu")
            return;
        alert("In development");
    }
}
// Command
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    GL_COMMAND_._draw(`[background=blue] [action name=m_start color=red] m_start -> ${gl_lan("K_START_GAME", "")}[/action][/background]`);
    GL_COMMAND_._draw(`[background=blue][action name=m_laod color=red] m_load -> ${gl_lan("K_LOAD_GAME", "")} [/action][/background]`);
    GL_COMMAND_._draw(`[background=blue] [action name=m_setting color=red] m_setting -> ${gl_lan("K_GAME_SETTING", "")}[/action] [/background]`);
    GL_COMMAND_._REGISTER_COMMAND_("m_start", "", "", "");
    GL_COMMAND_._REGISTER_COMMAND_("m_setting", "", "", "");
    GL_COMMAND_._REGISTER_COMMAND_("m_load", "", "", "");
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(async () => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Menu")
        return;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_call_eventhandle_("COMMAND_M_START", async () => {
        GLGameGroupMenuClass.OnStartGame();
    });
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_call_eventhandle_("COMMAND_M_LOAD", async () => {
        GLGameGroupMenuClass.OnLoadGame();
    });
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_call_eventhandle_("COMMAND_M_SETTING", async () => {
        GLGameGroupMenuClass.OnSetting();
    });
});
