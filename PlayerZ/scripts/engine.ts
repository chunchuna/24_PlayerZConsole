
// gAME Enegine
// fcuk

enum GAME_STATES {
    INIT = "afteranylayoutstart",
    TICK = "tick",

}



export class pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit {


    // 当前运行时环境的实例，用于访问 Construct 3 引擎的运行时 API。
    // 该变量会在引擎启动时通过 `CONSTRUCT3_ENGINE_ENTRY_POINT` 初始化。
    public static RUN_TIME_: IRuntime;

    // Construct 3 引擎的入口点函数，用于注册启动时的回调。
    // 该函数会在引擎启动时调用，传入当前的运行时环境 (`IRuntime`)。
    // 开发者可以通过此函数注册初始化逻辑或事件监听器。
    public static CONSTRUCT3_ENGINE_ENTRY_POINT = runOnStartup;

    // Construct 3 引擎中的事件处理器实例。
    // 该实例用于监听和处理引擎中的事件（如用户输入、游戏逻辑事件等）。
    // 如果未初始化或未找到事件处理器，该值为 `null`。
    public static GET_CONSTRUCT3_EVENTHANDL_INSTANCE: InstanceType.EventHandler | null;

    // 一个工具函数，用于创建一个延迟指定时间的 Promise。
    // 该函数通常用于实现异步等待逻辑，例如延迟执行某些操作或模拟异步任务。
    // 参数 `ms` 表示延迟的时间（以毫秒为单位）。
    public static WAIT_TIME_FORM_PROMISE = (ms: number) => new Promise(res => setTimeout(res, ms));




    // 初始化函数，用于在 "afteranylayoutstart" 事件触发时执行指定的回调函数。
    // 该事件通常在 Construct 3 引擎完成布局初始化后触发。
    // 参数 `Function` 是一个回调函数，会在事件触发时执行。
    public static gl$_ubu_init = (Function: () => void) => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
            runtime.addEventListener("afteranylayoutstart", Function);
        });
    }

    // 更新函数，用于在 "tick" 事件触发时执行指定的回调函数。
    // 该事件在每一帧渲染时触发，通常用于实现游戏逻辑的更新。
    // 参数 `Function` 是一个回调函数，会在事件触发时执行。
    public static gl$_ubu_update = (Function: () => void) => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
            runtime.addEventListener("tick", Function);
        });
    };

    // 通用事件处理函数，用于监听指定的事件并执行回调函数。
    // 参数 `EventName` 是要监听的事件名称。
    // 参数 `func` 是事件触发时执行的回调函数。
    // 注意：该函数使用了 `@ts-ignore` 来忽略类型检查，因为 `addEventListener` 的类型可能不明确。
    public static async gl$_call_eventhandle_(EventName: string, func: any) {
        // @ts-ignore
        await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener as any)(EventName, async () => {
            if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE == null) return;
            func();
        });
    }

    // 初始化函数，专门用于游戏类型为 "Level" 的场景。
    // 在 "afteranylayoutstart" 事件触发时，检查当前游戏类型是否为 "Level"，如果是则执行回调函数。
    // 参数 `Function` 是一个回调函数，会在条件满足时执行。
    public static gl_ubu_init_$$LEVEL = (Function: () => void) => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
            runtime.addEventListener("afteranylayoutstart", () => {
                if (runtime.globalVars.GameType === "Level") Function();
            });
        });
    }

    // 更新函数，专门用于游戏类型为 "Level" 的场景。
    // 在 "tick" 事件触发时，检查当前游戏类型是否为 "Level"，如果是则执行回调函数。
    // 参数 `Function` 是一个回调函数，会在条件满足时执行。
    public static gl_ubu_update$$LEVEL = (Function: () => void) => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
            runtime.addEventListener("tick", () => {
                if (runtime.globalVars.GameType === "Level") Function();
            });
        });
    };

    // 客户端帧绘制相关的工具对象，包含初始化和更新函数。
    // 这些函数用于在特定事件触发时执行回调函数，通常用于处理与渲染相关的逻辑。
    public static UBU_CLIENT_DRAW_FRAME = {
        // 初始化函数，用于在 "afteranylayoutstart" 事件触发时执行回调函数。
        gl$_ubu_init: (Fcuntion: () => void) => {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
                runtime.addEventListener("afteranylayoutstart", Fcuntion);
            });
        },
        // 更新函数，用于在 "tick" 事件触发时执行回调函数。
        gl$_ubu_update: (Function: () => void) => {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
                runtime.addEventListener("tick", Function);
            });
        },
    };

    // 数学工具函数

    // 线性插值函数，用于在两个值之间进行插值计算。
    // 参数 `start` 是起始值。
    // 参数 `end` 是结束值。
    // 参数 `t` 是插值系数，范围通常为 [0, 1]。
    // 返回值是插值结果。
    public static Justlerp = (start: number, end: number, t: number): number => (1 - t) * start + t * end;

    // 计算两点之间距离的函数。
    // 参数 `x1`, `y1` 是第一个点的坐标。
    // 参数 `x2`, `y2` 是第二个点的坐标。
    // 返回值是两点之间的欧几里得距离。
    public static CalculateDistancehahaShitCode = (x1: number, y1: number, x2: number, y2: number): number => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    // 尝试重新获取事件处理器实例的函数。
    // 该函数用于在事件处理器实例丢失或未初始化时重新获取它。
    public static TryGetHandlerAgainFuckThisHandler() {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EventHandler.getFirstInstance();
    }
}

// Engine here

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CONSTRUCT3_ENGINE_ENTRY_POINT(async runtime => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_ = runtime;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.TryGetHandlerAgainFuckThisHandler();
});

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    //@ts-ignore
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE)
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE == null) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler")
    }
});





