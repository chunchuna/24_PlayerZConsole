var _a;
export class pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit {
    static async gl$_call_eventhandle_(EventName, func) {
        // @ts-ignore
        await _a.GetConstruct3EventHandlerInstance.addEventListener(EventName, async () => {
            if (this.GetConstruct3EventHandlerInstance == null)
                return;
            func();
        });
    }
    static TryGetHandlerAgainFuckThisHandler() {
        _a.GetConstruct3EventHandlerInstance = _a.runtime.objects.EventHandler.getFirstInstance();
    }
}
_a = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime = (ms) => new Promise(res => setTimeout(res, ms));
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", func);
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("tick", func);
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", () => {
            if (runtime.globalVars.GameType === "Level")
                func();
        });
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.fl_ubu_update$$LEVEL = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("tick", () => {
            if (runtime.globalVars.GameType === "Level")
                func();
        });
    });
};
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME = {
    gl$_ubu_init: (func) => {
        runOnStartup(async (runtime) => {
            runtime.addEventListener("afteranylayoutstart", func);
        });
    },
    gl$_ubu_update: (func) => {
        runOnStartup(async (runtime) => {
            runtime.addEventListener("tick", func);
        });
    },
};
// Math
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.Justlerp = (start, end, t) => (1 - t) * start + t * end;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CalculateDistancehahaShitCode = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};
// Engine here
runOnStartup(async (runtime) => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime = runtime;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.TryGetHandlerAgainFuckThisHandler();
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    //@ts-ignore
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance);
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance == null) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler");
    }
});
