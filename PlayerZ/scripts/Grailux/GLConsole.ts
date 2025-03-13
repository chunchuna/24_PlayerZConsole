import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";

export class GL_COMMAND_ {

	public static GET_LAST_ACTION: string;
	public static IN_GAME_CONSOLE_INSTANCE: any;


	static ACTION_OPEN_() {
		pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleOpen")
	}

	static ACTION_CLOSE_() {
		pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleClose")
	}

	static _draw(cont: string) {
		pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsolePrint", cont)

	}

	static _REGISTER_COMMAND_(command: string, par: string, des: string, help: string) {
		pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleBindEvent", command, par, des, help)
	}

	public static _CLEAR_ALL_CONTENT_FROM_COMMAND() {
		pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("ConsoleClear");
	}

	public static _TRY_ACTION_UPDATE(ActionName: string, Fcuntion: () => void) {

		if (GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE == null) return;

		if (ActionName !== GL_COMMAND_.GET_LAST_ACTION) {
			if (GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE._lastAction == ActionName) {
				Fcuntion();
				GL_COMMAND_.GET_LAST_ACTION = ActionName;
			}
		}

	}
}


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
	console.log(" [GL_COMMAND] console init")
})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
	GL_COMMAND_.IN_GAME_CONSOLE_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.InGameConsole.getFirstInstance();

})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_update(() => {

	GL_COMMAND_._TRY_ACTION_UPDATE("m_setting", () => {
		alert("try action")
	})


})

