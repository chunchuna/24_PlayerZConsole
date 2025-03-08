// gAME Enegine
// fcuk
var _a;
var GAME_STATES;
(function (GAME_STATES) {
    GAME_STATES["INIT"] = "afteranylayoutstart";
    GAME_STATES["TICK"] = "tick";
})(GAME_STATES || (GAME_STATES = {}));
export class pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit {
    static async gl$_call_eventhandle_(EventName, func) {
        // @ts-ignore
        await _a.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener(EventName, async () => {
            if (_a.GET_CONSTRUCT3_EVENTHANDL_INSTANCE == null)
                return;
            func();
        });
    }
    static TryGetHandlerAgainFuckThisHandler() {
        _a.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = _a.RUN_TIME_.objects.EventHandler.getFirstInstance();
    }
}
_a = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit;
//The entry point function of Construct 3 engine, used to register callbacks at startup.
//This function will be called at engine startup, passing in the current runtime environment (` IRuntime `).
//Developers can register initialization logic or event listeners through this function.
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT = runOnStartup;
//A utility function used to create a Promise with a specified delay time.
//This function is typically used to implement asynchronous wait logic, such as delaying the execution of certain operations or simulating asynchronous tasks.
//The parameter 'ms' represents the delay time (in milliseconds).
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE = (ms) => new Promise(res => setTimeout(res, ms));
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init = (Function) => {
    _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", Function);
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update = (Function) => {
    _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
        runtime.addEventListener("tick", Function);
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL = (Function) => {
    _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", () => {
            if (runtime.globalVars.GameType === "Level")
                Function();
        });
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_update$$LEVEL = (Function) => {
    _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
        runtime.addEventListener("tick", () => {
            if (runtime.globalVars.GameType === "Level")
                Function();
        });
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME = {
    gl$_ubu_init: (Fcuntion) => {
        _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
            runtime.addEventListener("afteranylayoutstart", Fcuntion);
        });
    },
    gl$_ubu_update: (Function) => {
        _a.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
            runtime.addEventListener("tick", Function);
        });
    },
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.Justlerp = (start, end, t) => (1 - t) * start + t * end;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CalculateDistancehahaShitCode = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};
// Engine here
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async (runtime) => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_ = runtime;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.TryGetHandlerAgainFuckThisHandler();
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    //@ts-ignore
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE);
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE == null) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler");
    }
});
