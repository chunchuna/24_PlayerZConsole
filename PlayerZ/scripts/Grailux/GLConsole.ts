import {GetChunchunFuckWayfarerccSDK} from "../engine.js";
import {LayoutTransitionScreenEffect} from "./GLFade.js";

export class CommandPlatform {
    static OpenConsolePlatformPanel() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleOpen")
    }

    static CloseConsolePlatformPanel() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClose")
    }

    static Print(cont: string) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsolePrint", cont)

    }

    static RegisterCommand(command: string, par: string, des: string, help: string) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleBindEvent", command, par, des, help)
    }

    public static ClearAllInfomation() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClear");
    }
}


GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    console.log(" [CommandPlatform] console init")
})

