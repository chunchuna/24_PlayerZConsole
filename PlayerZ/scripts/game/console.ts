import { ENGINE_MUST } from "../engine.js";
import { Fade } from "./fade.js";

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
}

ENGINE_MUST.init(() => {
    Console.RegisterCommand("m_start", "", "", "");
    Console.RegisterCommand("m_setting", "", "", "");
    Console.RegisterCommand("m_load", "", "", "",);

})

ENGINE_MUST.init(() => {
    console.log(" console init")
})


// menu 

export class c_menu {

    static async m_start() {
        Fade.Fade_Empty_to_black(1, 3)
        ENGINE_MUST.waitTime(2500)
        ENGINE_MUST.CORE.goToLayout("Level")

        ENGINE_MUST.waitTime(2500)
        Console.Print("正在讀取關卡....")
    }

    static async m_load() {
        Fade.Fade_Empty_to_black(1, 3)
        ENGINE_MUST.waitTime(2500);
        ENGINE_MUST.CORE.globalVars.Load_is_LoadingState = true;
        ENGINE_MUST.CORE.goToLayout("Level")

        ENGINE_MUST.waitTime(2500)
        Console.Print("正在讀取關卡....")
    }

    static async m_setting() {
        alert("In development")
    }
}