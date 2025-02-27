// Engine here

export class GetChunchunFuckWayfarerccSDK {

    public static Runtime: IRuntime;
    public static GetConstruct3EventHandlerInstance: InstanceType.EventHandler | null;
    public static HaaWaitSomeTime = (ms: number) => new Promise(res => setTimeout(res, ms));

    public static OntheFuckFirstFrame = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("afteranylayoutstart", func);
        });
    }

    public static OntheFuckEverTickFrame = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("tick", func);
        });
    };

    public static OnLevelLayoutFirstFrame = (func: () => void) => {


        runOnStartup(async runtime => {
            runtime.addEventListener("afteranylayoutstart", () => {
                if (runtime.globalVars.GameType === "Level") func();
            });
        });
    }

    public static OnLevelLayoutEveryTickFrame = (func: () => void) => {
        runOnStartup(async runtime => {
            runtime.addEventListener("tick", () => {
                if (runtime.globalVars.GameType === "Level") func();
            });
        });
    };

    // Math

    public static Justlerp = (start: number, end: number, t: number): number => (1 - t) * start + t * end;

    public static CalculateDistancehahaShitCode = (x1: number, y1: number, x2: number, y2: number): number => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }


    // 手动重新获取Handler

    public static TryGetHandlerAgainFuckThisHandler() {
        GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EventHandler.getFirstInstance();
    }
}

runOnStartup(async runtime => {
    GetChunchunFuckWayfarerccSDK.Runtime = runtime;
    GetChunchunFuckWayfarerccSDK.TryGetHandlerAgainFuckThisHandler();

});

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    //@ts-ignore
    GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EventHandler.getFirstInstance();
    console.log("[engine] handler" + GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance)
    if (GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance == null) {
        GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EventHandler.getFirstInstance();
        console.log("[engine] try agagin get handler")
    }
});