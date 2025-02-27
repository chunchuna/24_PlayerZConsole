import {GetChunchunFuckWayfarerccSDK} from "../engine.js";
import {CommandPlatform} from "./GLConsole.js";

import {LayoutTransitionScreenEffect} from "./GLFade.js";

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;
    CommandPlatform.OpenConsolePlatformPanel();

    MenuCommand.ShowMenuConsoleHelp();
    CommandPlatform.Print("new file name active")


})

export class MenuCommand {
    static ShowMenuConsoleHelp() {
        CommandPlatform.Print("[background=blue] [action name=m_start color=red] m_start -> 開始游戲[/action][/background]")
        CommandPlatform.Print("[background=blue][action name=m_laod color=red] m_load -> 讀取上一個存檔 [/action][/background]")
        CommandPlatform.Print("[background=blue] [action name=m_setting color=red] m_setting -> 設置[/action] [/background]")

    }
}

// ConsoleCommand


GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    CommandPlatform.RegisterCommand("m_start", "", "", "");
    CommandPlatform.RegisterCommand("m_setting", "", "", "");
    CommandPlatform.RegisterCommand("m_load", "", "", "",);
})

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(async () => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;
// @ts-ignore
    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_START", async () => {

        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;

        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3)
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("Level")

        GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        CommandPlatform.Print("正在讀取關卡....")
        CommandPlatform.ClearAllInfomation();
        CommandPlatform.CloseConsolePlatformPanel();
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(1000)


    })
// @ts-ignore
    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_LOAD", async () => {


        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;

        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3)
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500);
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Load_is_LoadingState = true;
        GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("Level")

        GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2500)
        CommandPlatform.Print("正在讀取關卡....")
        CommandPlatform.ClearAllInfomation();

        CommandPlatform.CloseConsolePlatformPanel();
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(1000)

    })
// @ts-ignore
    await (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener as any)("COMMAND_M_SETTING", async () => {

        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Menu") return;
        
        alert("In development")

    })


})