import { ENGINE_MUST } from "../engine.js";
export class Console {
    static OpenConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleOpen");
    }
    static CloseConsole() {
        ENGINE_MUST.CORE.callFunction("ConsoleClose");
    }
}
