import {ENGINE_MUST} from "../engine.js";
import {Fade} from "./fade.js";

export class Console {
    static OpenConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleOpen")
    }

    static CloseConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleClose")
    }

    static Print(cont: string) {
        ENGINE_MUST.CORE.callFunction("ConsolePrint", cont)

    }

    static RegisterCommand(command: string, par: string, des: string, help: string) {
        ENGINE_MUST.CORE.callFunction("ConsoleBindEvent", command, par, des, help)
    }

    public static Clear() {
        ENGINE_MUST.CORE.callFunction("ConsoleClear");
    }
}


ENGINE_MUST.init(() => {
    console.log(" console init")
})

