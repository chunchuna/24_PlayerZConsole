
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

import "./engine.js"


import "./Grailux/Modules/GLEventTrigger.js"
import "./Grailux/Modules/GLevel.js"
import "./Grailux/Modules/GLEvent.js"
import "./Grailux/Modules/GLFade.js"
import "./Grailux/Modules/GLConsole.js"
import "./Grailux/Modules/GLMenu.js"

import "./Grailux/Modules/GLLanguage.js"




runOnStartup(async runtime => {
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime: IRuntime) {
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.

	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime: IRuntime) {
	// Code to run every tick

}
