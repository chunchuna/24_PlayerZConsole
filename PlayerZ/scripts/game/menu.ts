import { ENGINE_MUST } from "../engine.js";
import { Console } from "./console.js";

ENGINE_MUST.init(() => {
    if (ENGINE_MUST.CORE.globalVars.GameType != "Menu") return;
    Console.OpenConsole();


})


ENGINE_MUST.init(() => {
    if (ENGINE_MUST.CORE.globalVars.GameType != "Menu") return;
    Menu.ShowMenuConsoleHelp();
})

export class Menu {
    static ShowMenuConsoleHelp() {
        Console.Print("[background=blue] m_start -> 開始游戲[/background]")
        Console.Print("[background=blue] m_load -> 讀取上一個存檔[/background]")
        Console.Print("[background=blue] m_setting -> 設置[/background]")

    }
}
