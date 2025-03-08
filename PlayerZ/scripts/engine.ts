export class pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit {

    public static runtime: IRuntime;
    public static GetConstruct3EventHandlerInstance: InstanceType.EventHandler | null;
    public static HaaWaitSomeTime = (ms: number) => new Promise(res => setTimeout(res, ms));

    public static gl$_ubu_init = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("afteranylayoutstart", func);
        });
    }
    public static gl$_ubu_update = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("tick", func);
        });
    };

    public static async gl$_call_eventhandle_(EventName: string, func: any) {
        // @ts-ignore
        await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)(EventName, async () => {
            if (this.GetConstruct3EventHandlerInstance == null) return;
            func();
        })

    }

    public static gl_ubu_init_$$LEVEL = (func: () => void) => {

        runOnStartup(async runtime => {
            runtime.addEventListener("afteranylayoutstart", () => {
                if (runtime.globalVars.GameType === "Level") func();
            });
        });
    }
    public static fl_ubu_update$$LEVEL = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("tick", () => {
                if (runtime.globalVars.GameType === "Level") func();
            });
        });
    };


    public static UBU_CLIENT_DRAW_FRAME = {
        gl$_ubu_init: (func: () => void) => {
            runOnStartup(async runtime => {
                runtime.addEventListener("afteranylayoutstart", func);
            });
        },
        gl$_ubu_update: (func: () => void) => {
            runOnStartup(async runtime => {
                runtime.addEventListener("tick", func);
            });
        },

    }

    // Math

    public static Justlerp = (start: number, end: number, t: number): number => (1 - t) * start + t * end;
    public static CalculateDistancehahaShitCode = (x1: number, y1: number, x2: number, y2: number): number => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    public static TryGetHandlerAgainFuckThisHandler() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EventHandler.getFirstInstance();
    }
}

// Engine here

runOnStartup(async runtime => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime = runtime;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.TryGetHandlerAgainFuckThisHandler();
});

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    //@ts-ignore
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance)
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance == null) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler")
    }
});





