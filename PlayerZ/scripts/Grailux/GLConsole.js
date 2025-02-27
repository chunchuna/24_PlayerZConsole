import { GetChunchunFuckWayfarerccSDK } from "../engine.js";
import { Fade } from "./GLFade.js";
export class Console {
    static OpenConsole() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleOpen");
    }
    static CloseConsole() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClose");
    }
    static Print(cont) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsolePrint", cont);
    }
    static RegisterCommand(command, par, des, help) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleBindEvent", command, par, des, help);
    }
    static Clear() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClear");
    }
}
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    console.log(" console init");
});
