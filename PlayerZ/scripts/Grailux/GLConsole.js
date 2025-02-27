import { GetChunchunFuckWayfarerccSDK } from "../engine.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
export class CommandPlatform {
    static OpenConsolePlatformPanel() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleOpen");
    }
    static CloseConsolePlatformPanel() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClose");
    }
    static Print(cont) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsolePrint", cont);
    }
    static RegisterCommand(command, par, des, help) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleBindEvent", command, par, des, help);
    }
    static ClearAllInfomation() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClear");
    }
}
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    console.log(" [CommandPlatform] console init");
});
