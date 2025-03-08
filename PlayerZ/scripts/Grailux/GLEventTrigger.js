import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { PlayerMainInstance } from "./GLevel.js";
import { ConfigExecutor } from "./GLEvent.js";
import { StartDialogue } from "./GLevel.js";
//-----------------------------------------------------------------------------
// TouchBehaviorZone
//
// 
// 
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.fl_ubu_update$$LEVEL(() => {
    if (PlayerMainInstance == null)
        return;
    for (var touchBehaviorZones of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.TouchBehaviorZone.instances()) {
        if (PlayerMainInstance.testOverlap(touchBehaviorZones)) {
            if (touchBehaviorZones.instVars.isTestOverLapDoing) {
                return;
            }
            else {
                touchBehaviorZones.instVars.isTestOverLapDoing = true;
                if (touchBehaviorZones.instVars.isTouchOnce) {
                    if (touchBehaviorZones.instVars.TouchTimes > 0) {
                        return;
                    }
                    if (touchBehaviorZones.instVars.TouchTimes == 0) {
                        TouchThisZone(touchBehaviorZones);
                    }
                }
                else {
                    TouchThisZone(touchBehaviorZones);
                }
            }
        }
    }
    for (var touchBehaviorZones of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.TouchBehaviorZone.instances()) {
        if (!PlayerMainInstance.testOverlap(touchBehaviorZones)) {
            touchBehaviorZones.instVars.isTestOverLapDoing = false;
        }
    }
});
function TouchThisZone(Zone) {
    console.log("Behavior: type: TouchBehaviorZone is run");
    Zone.instVars.TouchTimes += 1;
    if (Zone.instVars.Type == "function") {
        // ScriptExecutor.Run(Zone.instVars.FunctionName);
        ConfigExecutor(Zone.instVars.FunctionName);
    }
}
//-----------------------------------------------------------------------------
// IntractBehaviorZone
//
// 
// 
var IntractBehaviorZone_close_group;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    IntractBehaviorZone_close_group = [];
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.fl_ubu_update$$LEVEL(() => {
    if (PlayerMainInstance == null)
        return;
    // 实时计算与玩家的距离
    for (var behaviors of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.IntractBehaviorZone.instances()) {
        behaviors.instVars.DistancefromPlayer = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.CalculateDistancehahaShitCode(behaviors.x, behaviors.y, PlayerMainInstance.x, PlayerMainInstance.y);
    }
    // 把距离在触发范围内的互动物加入数组，大于触发范围内的移除数组
    for (var behaviors of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.IntractBehaviorZone.instances()) {
        if (behaviors.instVars.DistancefromPlayer <= 200) {
            IntractBehaviorZone_close_group.push(behaviors);
        }
        if (behaviors.instVars.DistancefromPlayer >= 200) {
            if (IntractBehaviorZone_close_group.indexOf(behaviors) != -1) {
                IntractBehaviorZone_close_group.splice(IntractBehaviorZone_close_group.indexOf(behaviors));
            }
        }
    }
    // 在数组内筛选离玩家最近的互动物体，并把互动物的UID上交
    let closeBehavior = IntractBehaviorZone_close_group.reduce((min, current) => {
        return (current.instVars.DistancefromPlayer < min.instVars.DistancefromPlayer) ? current : min;
    }, IntractBehaviorZone_close_group[0]);
    if (closeBehavior) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.BehaviorInstanceUid = closeBehavior.uid;
    }
    // 在数组没有互动物时，清空UID
    if (IntractBehaviorZone_close_group.length == 0) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.BehaviorInstanceUid = 0;
    }
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener("input_space_keydown", () => {
        //console.log("Press Space to Intruct")
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.BehaviorInstanceUid == 0)
            return;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_IsRunning)
            return;
        console.log("Behavior: type:IntractBehaviorZone is run");
        //@ts-ignoreleta
        var behaviorInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.getInstanceByUid(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.BehaviorInstanceUid);
        if (behaviorInstance == null)
            return;
        var is_touch_once = behaviorInstance.instVars.isTouceOnce;
        var touch_times = behaviorInstance.instVars.TouceTimes;
        var type = behaviorInstance.instVars.Type;
        var dialogue_name = behaviorInstance.instVars.DialogueKeyName;
        var function_name = behaviorInstance.instVars.functionName;
        var is_connect_npc = behaviorInstance.instVars.isConnectNPC;
        var npc_uid = behaviorInstance.instVars.NPCUid;
        var is_touching = behaviorInstance.instVars.isTouching;
        if (is_touch_once) {
            if (touch_times > 0) {
                return;
            }
            else {
                StartBehavior(type, dialogue_name, npc_uid, function_name);
                behaviorInstance.instVars.TouceTimes += 1;
            }
        }
        else {
            StartBehavior(type, dialogue_name, npc_uid, function_name);
            behaviorInstance.instVars.TouceTimes += 1;
        }
    });
    function StartBehavior(type, dialogue_name, npc_uid, function_name) {
        if (type == "dialogue") {
            if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_IsRunning)
                return;
            StartDialogue(dialogue_name, npc_uid);
        }
        if (type == "function") {
            // 执行自定义事件
            //ScriptExecutor.Run(function_name)
            ConfigExecutor(function_name);
            // if ((EVENTS as any)[function_name]) {
            //     (EVENTS as any)[function_name]();
            // } else {
            //     console.log("Function not found");
            // }
        }
    }
});
