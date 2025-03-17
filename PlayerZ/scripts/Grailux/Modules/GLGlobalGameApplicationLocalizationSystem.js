import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../../engine.js";
import { GL_COMMAND_ } from "./GLGameplayInputCommandConsoleMechanism.js";
export class GLLanguageClass {
    static GetTranslatedStringByKEY(Key, Lan) {
        if (Lan == null || Lan == "") {
            Lan = GLLanguageClass.GLOB_CurrentLanguage;
        }
        var ReturnStringKey = STRING_CONFIG.KEY_LIST[Key][Lan];
        if (ReturnStringKey != null) {
            return STRING_CONFIG.KEY_LIST[Key][Lan];
        }
    }
}
GLLanguageClass.GLOB_CurrentLanguage = "LAN_CN";
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    // GL_COMMAND_._LOG("[GLLanguageClass] 测试翻译:" + GLLanguageClass.GetTranslatedStringByKEY("K_START_GAME", ""))
});
export class STRING_CONFIG {
}
STRING_CONFIG.KEY_LIST = {
    "K_START_GAME": { LAN_CN: "开始游戏", LAN_EN: "Start Game" },
    "K_LOAD_GAME": { LAN_CN: "加载游戏", LAN_EN: "LOAD_GAME" },
    "K_GAME_SETTING": { LAN_CN: "设置", LAN_EN: "Setting" },
    "K_IS_LOADING_LEVEL": { LAN_CN: "正在读取关卡", LAN_EN: "null" },
};
