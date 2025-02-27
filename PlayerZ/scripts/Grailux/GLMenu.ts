import {GetChunchunFuckWayfarerccSDK} from "../engine.js";
import {Console} from "./GLConsole.js";

import {Fade} from "./GLFade.js";

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;
    Console.OpenConsole();

    MenuCommand.ShowMenuConsoleHelp();
    Console.Print("new file name active")


})

export class MenuCommand {
    static ShowMenuConsoleHelp() {
        Console.Print("[background=blue] [action name=m_start color=red] m_start -> 開始游戲[/action][/background]")
        Console.Print("[background=blue][action name=m_laod color=red] m_load -> 讀取上一個存檔 [/action][/background]")
        Console.Print("[background=blue] [action name=m_setting color=red] m_setting -> 設置[/action] [/background]")

    }
}

// ConsoleCommand


GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    Console.RegisterCommand("m_start", "", "", "");
    Console.RegisterCommand("m_setting", "", "", "");
    Console.RegisterCommand("m_load", "", "", "",);
})

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(async () => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;

    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_START", async () => {

        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;

        Fade.Fade_Empty_to_black(1, 3)
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("Level")

        GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        Console.Print("正在讀取關卡....")
        Console.Clear();
        Console.CloseConsole();
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(1000)


    })

    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_LOAD", async () => {


        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;

        Fade.Fade_Empty_to_black(1, 3)
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500);
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Load_is_LoadingState = true;
        GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("Level")

        GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        Console.Print("正在讀取關卡....")
        Console.Clear();

        Console.CloseConsole();
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(1000)

    })

    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_SETTING", async () => {

        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;
        
        alert("In development")

    })


})