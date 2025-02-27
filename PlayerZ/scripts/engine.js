// Engine here
var _a;
export class GetChunchunFuckWayfarerccSDK {
    // 手动重新获取Handler
    static TryGetHandlerAgainFuckThisHandler() {
        _a.GetConstruct3EventHandlerInstance = _a.Runtime.objects.EventHandler.getFirstInstance();
    }
}
_a = GetChunchunFuckWayfarerccSDK;
GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime = (ms) => new Promise(res => setTimeout(res, ms));
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", func);
    });
};
GetChunchunFuckWayfarerccSDK.OntheFuckEverTickFrame = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("tick", func);
    });
};
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("afteranylayoutstart", () => {
            if (runtime.globalVars.GameType === "Level")
                func();
        });
    });
};
GetChunchunFuckWayfarerccSDK.OnLevelLayoutEveryTickFrame = (func) => {
    runOnStartup(async (runtime) => {
        runtime.addEventListener("tick", () => {
            if (runtime.globalVars.GameType === "Level")
                func();
        });
    });
};
// Math
GetChunchunFuckWayfarerccSDK.Justlerp = (start, end, t) => (1 - t) * start + t * end;
GetChunchunFuckWayfarerccSDK.CalculateDistancehahaShitCode = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};
runOnStartup(async (runtime) => {
    GetChunchunFuckWayfarerccSDK.Runtime = runtime;
    GetChunchunFuckWayfarerccSDK.TryGetHandlerAgainFuckThisHandler();
});
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    //@ts-ignore
    GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance);
    if (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance == null) {
        GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler");
    }
});
