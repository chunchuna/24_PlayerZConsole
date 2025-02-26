import { ENGINE_MUST } from "../engine.js";
import { Fade } from "./GLFade.js";
export class Console {
    static OpenConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleOpen");
    }
    static CloseConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleClose");
    }
    static Print(cont) {
        ENGINE_MUST.CORE.callFunction("ConsolePrint", cont);
    }
    static RegisterCommand(command, par, des, help) {
        ENGINE_MUST.CORE.callFunction("ConsoleBindEvent", command, par, des, help);
    }
    static Clear() {
        ENGINE_MUST.CORE.callFunction("ConsoleClear");
    }
}
ENGINE_MUST.init(() => {
    console.log(" console init");
});
