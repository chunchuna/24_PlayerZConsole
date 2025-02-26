import { ENGINE_MUST } from "../engine.js";
import { Console } from "./GLConsole.js";
import { Fade } from "./GLFade.js";
ENGINE_MUST.init(() => {
    if (ENGINE_MUST.CORE.globalVars.GameType != "Menu")
        return;
    Console.OpenConsole();
    MenuCommand.ShowMenuConsoleHelp();
    Console.Print("new file name active");
});
export class MenuCommand {
    static ShowMenuConsoleHelp() {
        Console.Print("[background=blue] [action name=m_start color=red] m_start -> 開始游戲[/action][/background]");
        Console.Print("[background=blue][action name=m_laod color=red] m_load -> 讀取上一個存檔 [/action][/background]");
        Console.Print("[background=blue] [action name=m_setting color=red] m_setting -> 設置[/action] [/background]");
    }
}
// ConsoleCommand
ENGINE_MUST.init(() => {
    Console.RegisterCommand("m_start", "", "", "");
    Console.RegisterCommand("m_setting", "", "", "");
    Console.RegisterCommand("m_load", "", "", "");
});
ENGINE_MUST.init(async () => {
    if (ENGINE_MUST.CORE.globalVars.GameType != "Menu")
        return;
    await ENGINE_MUST.EVENT_HANDLER.addEventListener("COMMAND_M_START", async () => {
        if (ENGINE_MUST.CORE.globalVars.GameType != "Menu")
            return;
        Fade.Fade_Empty_to_black(1, 3);
        await ENGINE_MUST.waitTime(2500);
        ENGINE_MUST.CORE.goToLayout("Level");
        ENGINE_MUST.waitTime(2500);
        Console.Print("正在讀取關卡....");
        Console.Clear();
        Console.CloseConsole();
        await ENGINE_MUST.waitTime(1000);
    });
    await ENGINE_MUST.EVENT_HANDLER.addEventListener("COMMAND_M_LOAD", async () => {
        if (ENGINE_MUST.CORE.globalVars.GameType != "Menu")
            return;
        Fade.Fade_Empty_to_black(1, 3);
        await ENGINE_MUST.waitTime(2500);
        ENGINE_MUST.CORE.globalVars.Load_is_LoadingState = true;
        ENGINE_MUST.CORE.goToLayout("Level");
        ENGINE_MUST.waitTime(2500);
        Console.Print("正在讀取關卡....");
        Console.Clear();
        Console.CloseConsole();
        await ENGINE_MUST.waitTime(1000);
    });
    await ENGINE_MUST.EVENT_HANDLER.addEventListener("COMMAND_M_SETTING", async () => {
        if (ENGINE_MUST.CORE.globalVars.GameType != "Menu")
            return;
        alert("In development");
    });
});
