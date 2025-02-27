import { GetChunchunFuckWayfarerccSDK } from "../engine.js";
import { ConfigExecutor } from "./GLEvent.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
import { CommandPlatform } from "./GLConsole.js";
//-----------------------------------------------------------------------------
// LevelInit
//
// 
// 
// Fade 
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    LayoutTransitionScreenEffect.BlackToEmptyEffect(2, 2);
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    console.log("[Level Layout] Level Init Now");
});
// Fog
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "Level")
        return;
    var LevelLayer = GetChunchunFuckWayfarerccSDK.Runtime.layout.getLayer("level");
    if (LevelLayer == null)
        return;
    // @ts-ignore
    var FogexponentialEffect = LevelLayer.effects[0];
    console.log(FogexponentialEffect);
    FogexponentialEffect?.setParameter(2, 1800);
    FogexponentialEffect?.setParameter(0, [0 / 255, 0 / 255, 0 / 255]);
    CommandPlatform.Print("[Fogexponential] 重新设置场景雾距离参数");
    CommandPlatform.Print(String(FogexponentialEffect?.getParameter(2)));
});
//-----------------------------------------------------------------------------
// Player
//
// 
// 
export var PlayerMainInstance; // player
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    PlayerMainInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.PlayerRoleInstanceMain.getFirstInstance();
});
//-----------------------------------------------------------------------------
// Save & Load
//
// 
// 
var Save_Load_key = "game_save_key_default";
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(async () => {
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_number0_keydown", () => {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("SaveGame", Save_Load_key);
        console.log("[Load] Game already save");
    });
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(async () => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Load_is_LoadingState) {
        GetChunchunFuckWayfarerccSDK.Runtime.callFunction("LoadGame", Save_Load_key);
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Load_is_LoadingState = false;
        console.log("[Load] Game already load");
    }
});
// for debug
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(async () => {
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_z_keydown", () => {
    //     ENGINE_MUST.CORE.goToLayout("Menu")
    // })
});
//-----------------------------------------------------------------------------
// Dialogue 
//
// Dialogue 
//
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Dialogue_IsRunning = false;
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(async () => {
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_space_keydown", () => {
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Dialogue_IsRunning) {
            if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Dialogue_WaitForInput == 1) {
                GetChunchunFuckWayfarerccSDK.Runtime.callFunction("Dialogue_Continue");
            }
            else {
                if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Dialogue_WaitForChoice == 1) {
                    GetChunchunFuckWayfarerccSDK.Runtime.callFunction("Dialogue_ChoiceSelect", -1);
                }
                else {
                    GetChunchunFuckWayfarerccSDK.Runtime.callFunction("Dialogue_SkipSequence");
                }
            }
        }
    });
});
export async function StartDialogue(key, npc_uid) {
    await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(1);
    GetChunchunFuckWayfarerccSDK.Runtime.callFunction("Dialogue_StartDialogue", key);
}
//-----------------------------------------------------------------------------
// Camera 3D
//
// 
// 
var CAMERA_X_OFFSET;
var CAMERA_Y_OFFSET;
var CAMERA_Z;
var CAMERA_ANGEL;
GetChunchunFuckWayfarerccSDK.OnLevelLayoutEveryTickFrame(() => {
    CAMERA_Z = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z;
    CAMERA_Y_OFFSET = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest;
    CAMERA_X_OFFSET = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest;
    CAMERA_ANGEL = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Angel;
    var CameraMain = GetChunchunFuckWayfarerccSDK.Runtime.objects.CameraMain;
    if (PlayerMainInstance == null)
        return;
    var CameraOver = GetChunchunFuckWayfarerccSDK.Runtime.objects.camera_cover.getFirstInstance();
    if (CameraMain) {
        //console.log("camera tick")
        CameraMain.lookAtPosition(PlayerMainInstance.x + CAMERA_X_OFFSET, PlayerMainInstance.y + CAMERA_Y_OFFSET, CAMERA_Z, PlayerMainInstance.x, PlayerMainInstance.y, 50, 0, 0, 1);
    }
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    // 记录相机默认参数
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Angel_De = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Angel;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest_De = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest_De = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z_De = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z;
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(async () => {
    // debug 
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_q_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Angel -= 100;
    //     console.log("-")
    // })
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_e_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Angel += 100;
    //     console.log("+")
    // })
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_up_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Y_Offest += 10
    // })
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_down_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Y_Offest -= 10
    // })
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_8_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Z += 10
    // })
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_2_keydown", () => {
    //     ENGINE_MUST.CORE.globalVars.Camera_Z -= 10
    // })
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(async () => {
    // 一个DEBUG窗口 用于相机的参数设置
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_q_keydown", () => {
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID == 999) {
            CloseFunctionWindow();
        }
        else {
            var CameraDebugWindowOPT = CreatFunctionWindow(800, 600, 999);
            //@ts-ignoreleta
            var OPT1 = CameraDebugWindowOPT[1];
            //@ts-ignoreleta
            var OPT2 = CameraDebugWindowOPT[2];
            //@ts-ignoreleta
            var OPT3 = CameraDebugWindowOPT[3];
            //@ts-ignoreleta
            var OPT4 = CameraDebugWindowOPT[4];
            //@ts-ignoreleta
            var OPT5 = CameraDebugWindowOPT[5];
            OPT1.text = "SET CAMERA_X  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest;
            OPT2.text = "SET CAMERA_Y  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest;
            OPT3.text = "SET CAMERA_Z  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z;
            OPT4.instVars.isEnable = false;
            OPT5.instVars.isEnable = false;
            CheckOPTCount();
        }
    });
    var Scale = 60;
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_a_keydown", () => {
        var ChooseID = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID;
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID == 999) {
            if (ChooseID == 1) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest -= Scale;
            }
            if (ChooseID == 2) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest -= Scale;
            }
            if (ChooseID == 3) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z -= Scale;
            }
            for (var Lables of GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest;
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z;
                }
            }
        }
    });
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_d_keydown", () => {
        var ChooseID = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID;
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID == 999) {
            if (ChooseID == 1) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest += Scale;
            }
            if (ChooseID == 2) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest += Scale;
            }
            if (ChooseID == 3) {
                GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z += Scale;
            }
            for (var Lables of GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Y_Offest;
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Camera_Z;
                }
            }
        }
    });
});
// ENGINE_MUST.LEVEL_TICK(() => {
//     CAMERA_Z = ENGINE_MUST.CORE.globalVars.Camera_Z;
//     CAMERA_Y_OFFSET = ENGINE_MUST.CORE.globalVars.Camera_Y_Offest;
//     CAMERA_X_OFFSET = ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
//     CAMERA_ANGEL = ENGINE_MUST.CORE.globalVars.Camera_Angel;
//     var CameraMain = ENGINE_MUST.CORE.objects.CameraMain;
//     if (PrisonerMain == null) return;
//     var cameraAngleRadians = ENGINE_MUST.CORE.globalVars.Camera_Angel * (Math.PI / 180);
//     if (CameraMain) {
//         // 使相机的y坐标与玩家的y坐标一致（也可以根据需要添加偏移）
//         var cameraY = PrisonerMain.y + CAMERA_Y_OFFSET // 假定CAMERA_Y_OFFSET是你希望加到玩家y坐标上的偏移
//         CameraMain.lookAtPosition(
//             PrisonerMain.x + radius * Math.cos(cameraAngleRadians), // x坐标
//             cameraY + radius, // y坐标
//             CAMERA_Z + radius * Math.sin(cameraAngleRadians), // z坐标
//             PrisonerMain.x,
//             PrisonerMain.y,
//             PrisonerMain.zIndex, // 将相机的朝向位置设置为玩家的z坐标
//             0,
//             1,
//             0
//         );
//     }
// })
// ENGINE_MUST.LEVEL_TICK(() => {
//     if (ENGINE_MUST.CORE.globalVars.Camera_Angel < 0) {
//         ENGINE_MUST.CORE.globalVars.Camera_Angel += 360;
//     }
//     else if (ENGINE_MUST.CORE.globalVars.Camera_Angel >= 360) {
//         ENGINE_MUST.CORE.globalVars.Camera_Angel -= 360;
//     }
// })
// var CAMERA_COVER_INSTANCE: InstanceType.camera_cover;
// ENGINE_MUST.LEVEL_INIT(() => {
//     CAMERA_COVER_INSTANCE = ENGINE_MUST.CORE.objects.camera_cover.getFirstInstance()!;
// })
// ENGINE_MUST.LEVEL_TICK(() => {
//     var CameraMain = ENGINE_MUST.CORE.objects.CameraMain;
//     if (CAMERA_COVER_INSTANCE == null) return;
//     CameraMain.lookAtPosition(CAMERA_COVER_INSTANCE.x, CAMERA_COVER_INSTANCE.y, CAMERA_COVER_INSTANCE.zElevation, PrisonerMain.x, PrisonerMain.y, PrisonerMain.zElevation + 100, 0, 0, 1)
// })
// ENGINE_MUST.LEVEL_INIT(async () => {
//     var Orbit = CAMERA_COVER_INSTANCE.behaviors.Orbit;
//     await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_q_keydown", () => {
//         Orbit.offsetAngle -= 1
//     })
//     await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_e_keydown", () => {
//         Orbit.offsetAngle += 1
//     })
//     await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_up_keydown", () => {
//         CAMERA_COVER_INSTANCE.zElevation += 10
//     })
//     await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_down_keydown", () => {
//         CAMERA_COVER_INSTANCE.zElevation -= 10
//     })
// })
//-----------------------------------------------------------------------------
// FunctionWindow
// 
// 
//
var FunctionWindow_LABLES;
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    CloseFunctionWindow();
    // 创建窗口范例
    // var FuncOPTS = CreatFunctionWindow(652, 200, 1);
    // //@ts-ignoreleta
    // var OPT1: InstanceType.FunctionOPT = FuncOPTS[1];
    // //@ts-ignoreleta
    // var OPT2: InstanceType.FunctionOPT = FuncOPTS[2];
    // //@ts-ignoreleta
    // var OPT3: InstanceType.FunctionOPT = FuncOPTS[3];
    // //@ts-ignoreleta
    // var OPT4: InstanceType.FunctionOPT = FuncOPTS[4];
    // //@ts-ignoreleta
    // var OPT5: InstanceType.FunctionOPT = FuncOPTS[5];
    // OPT1.text = "Use"
    // OPT2.text = "Level"
    // OPT3.instVars.isEnable = false;
    // OPT4.instVars.isEnable = false;
    // OPT5.instVars.isEnable = false;
});
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(async () => {
    FunctionWindow_LABLES = [];
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_w_keydown", () => {
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID == 0)
            return;
        if (!GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowEnable)
            return;
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID > 1) {
            GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID -= 1;
        }
        else {
            GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID = GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_OPT_Count;
        }
    });
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_s_keydown", () => {
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID == 0)
            return;
        if (!GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowEnable)
            return;
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID < GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_OPT_Count) {
            GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID += 1;
        }
        else {
            GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID = 1;
        }
    });
});
GetChunchunFuckWayfarerccSDK.OntheFuckEverTickFrame(() => {
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_OPT_Count = FunctionWindow_LABLES.length;
    for (var Lables of GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionOPT.instances()) {
        if (Lables.instVars.isEnable) {
            Lables.isVisible = true;
        }
        else {
            Lables.isVisible = false;
        }
        if (Lables.instVars.id == GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID) {
            Lables.fontColor = [241 / 256, 254 / 256, 52 / 256];
        }
        else {
            Lables.fontColor = [1, 1, 1];
        }
    }
});
function CreatFunctionWindow(pox, poy, windowID) {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowEnable)
        return;
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Dialogue_IsRunning)
        return;
    var FunctionWindow = GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionWindow.createInstance("FunctionWindow", pox, poy, true, "mob");
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowEnable = true;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID = windowID;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID = 1;
    console.log(FunctionWindow);
    console.log(FunctionWindow.getChildAt(0)?.uid);
    //@ts-ignoreleta
    var opts = [FunctionWindow,
        //@ts-ignoreleta
        GTBUID(FunctionWindow?.getChildAt(0).uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow?.getChildAt(1).uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow?.getChildAt(2).uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow?.getChildAt(3).uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow?.getChildAt(4).uid)];
    return opts;
}
function GTBUID(UID) {
    if (!isFinite(UID)) {
        throw new TypeError("expected finite number");
    }
    console.log(UID);
    //@ts-ignore
    return GetChunchunFuckWayfarerccSDK.Runtime.getInstanceByUid(UID);
}
function CloseFunctionWindow() {
    var FunctionWindow = GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionWindow.getFirstInstance();
    FunctionWindow?.destroy();
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowEnable = false;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_WindowID = 0;
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Function_ID = 0;
    if (FunctionWindow_LABLES) {
        FunctionWindow_LABLES.length = 0;
    }
}
function CheckOPTCount() {
    for (var Lables of GetChunchunFuckWayfarerccSDK.Runtime.objects.FunctionOPT.instances()) {
        if (Lables.instVars.isEnable) {
            FunctionWindow_LABLES.push(Lables);
        }
        else {
            if (FunctionWindow_LABLES.indexOf(Lables) != -1) {
                FunctionWindow_LABLES.splice(FunctionWindow_LABLES.indexOf(Lables));
            }
        }
    }
}
//-----------------------------------------------------------------------------
// End
//
// 
//
var GameVariblesInstance;
GetChunchunFuckWayfarerccSDK.OnLevelLayoutFirstFrame(() => {
    GameVariblesInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.GameVariables.getFirstInstance();
});
GetChunchunFuckWayfarerccSDK.OnLevelLayoutEveryTickFrame(async () => {
    if (GameVariblesInstance == null)
        return;
    var map = GameVariblesInstance.getDataMap();
    if (map.get("EndingIndex") == 0) {
        return;
    }
    else {
        if (!GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_TriggerEnd) {
            GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_TriggerEnd = true;
            LayoutTransitionScreenEffect.EmptyToBlackEffect(2, 3);
            await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(3500);
            GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("End");
        }
    }
});
// End Layout
var EndingTitleTextInstance;
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_TriggerEnd = false;
});
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "End")
        return;
    //@ts-ignoreleta
    EndingTitleTextInstance = GetChunchunFuckWayfarerccSDK.Runtime.objects.EndTitle.getFirstPickedInstance();
    if (GameVariblesInstance == null)
        return;
    var map = GameVariblesInstance.getDataMap();
    var endindex = map.get("EndingIndex");
    if (endindex != 0) {
        if (endindex == 1) {
            EndingTitleTextInstance.typewriterText(GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_Des_Text1, 8);
        }
        if (endindex == 2) {
            EndingTitleTextInstance.typewriterText(GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_Des_Text2, 12);
        }
        if (endindex == 3) {
            EndingTitleTextInstance.typewriterText(GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_Des_Text3, 8);
        }
        if (endindex == 4) {
            EndingTitleTextInstance.typewriterText(GetChunchunFuckWayfarerccSDK.Runtime.globalVars.End_Des_Text4, 8);
        }
    }
});
GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(async () => {
    if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "End")
        return;
    //console.log(ENGINE_MUST.EVENT_HANDLER)
    await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(2000);
    // @ts-ignore
    await GetChunchunFuckWayfarerccSDK.GetConstruct3EventHandlerInstance.addEventListener("input_anykey_keydown", async () => {
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.GameType != "End")
            return;
        if (GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Fade_is_Fading)
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await GetChunchunFuckWayfarerccSDK.HaaWaitSomeTime(3000);
        GetChunchunFuckWayfarerccSDK.Runtime.goToLayout("MENU");
    });
});
