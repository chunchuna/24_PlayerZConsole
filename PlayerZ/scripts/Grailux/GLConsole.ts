import {GetChunchunFuckWayfarerccSDK} from "../engine.js";
import {Fade} from "./GLFade.js";

export class Console {
    static OpenConsole() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleOpen")
    }

    static CloseConsole() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClose")
    }

    static Print(cont: string) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsolePrint", cont)

    }

    static RegisterCommand(command: string, par: string, des: string, help: string) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleBindEvent", command, par, des, help)
    }

    public static Clear() {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("ConsoleClear");
    }
}


GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    console.log(" console init")
})

