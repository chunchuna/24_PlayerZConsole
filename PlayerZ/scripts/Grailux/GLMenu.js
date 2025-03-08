import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { GL_COMMAND_ } from "./GLConsole.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
var gl_init = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init;
var gl_update = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    //GL_COMMAND_._LOG("[GLGameGroupMenuClass] Testasdasdasdasdasdasdasdasdasdasd")
});
gl_init(() => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Menu")
        return;
    GL_COMMAND_.ACTION_OPEN_();
    //CommandPlatform.Print("new file name active")
});
export class GLGameGroupMenuClass {
    static async OnStartGame() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Menu")
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.goToLayout("Level");
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(2500);
        GL_COMMAND_._LOG("正在讀取關卡....");
        GL_COMMAND_._CLEAR_ALL_CONTENT_FROM_COMMAND();
        GL_COMMAND_.ACTION_CLOSE_();
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(1000);
    }
    static async OnLoadGame() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Menu")
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Load_is_LoadingState = true;
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.goToLayout("Level");
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(2500);
        GL_COMMAND_._LOG("正在讀取關卡....");
        GL_COMMAND_._CLEAR_ALL_CONTENT_FROM_COMMAND();
        GL_COMMAND_.ACTION_CLOSE_();
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(1000);
    }
    static OnSetting() {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Menu")
            return;
        alert("In development");
    }
}
// Command
gl_init(() => {
    GL_COMMAND_._LOG("[background=blue] [action name=m_start color=red] m_start -> 開始游戲[/action][/background]");
    GL_COMMAND_._LOG("[background=blue][action name=m_laod color=red] m_load -> 讀取上一個存檔 [/action][/background]");
    GL_COMMAND_._LOG("[background=blue] [action name=m_setting color=red] m_setting -> 設置[/action] [/background]");
    GL_COMMAND_._REGISTER_COMMAND_("m_start", "", "", "");
    GL_COMMAND_._REGISTER_COMMAND_("m_setting", "", "", "");
    GL_COMMAND_._REGISTER_COMMAND_("m_load", "", "", "");
});
gl_init(async () => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Menu")
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
