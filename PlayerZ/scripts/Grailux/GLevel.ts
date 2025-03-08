import {pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit} from "../engine.js";
import {ConfigExecutor} from "./GLEvent.js";
import {LayoutTransitionScreenEffect} from "./GLFade.js"
import {GL_COMMAND_} from "./GLConsole.js";


//-----------------------------------------------------------------------------
// LevelInit
//
// 
// 

// Fade 
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    LayoutTransitionScreenEffect.BlackToEmptyEffect(2, 2);
})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {

    console.log("[Level Layout] Level Init Now")

})



pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(()=>{
    
})



// VFX

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {


    /** FOG **/

    var RGB_DAY = [255 / 255, 255 / 255, 255 / 255];
    var RGB_NIGHT = [0 / 255, 0 / 255, 0 / 255];
    var RGB_Cyberpunk = [255 / 255, 255 / 2555, 255 / 255];


    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "Level") return;

    var LevelLayer = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.layout.getLayer("level");
    if (LevelLayer == null) return;
    // @ts-ignore
    var ExponentialEffect: IEffectInstance | undefined = LevelLayer.effects[0];
    console.log(ExponentialEffect);
    ExponentialEffect?.setParameter(2, 1800);
    ExponentialEffect?.setParameter(0, RGB_DAY)

    GL_COMMAND_._draw("[Fog exponential] 重新设置场景雾距离参数")
    GL_COMMAND_._draw(String(ExponentialEffect?.getParameter(2)));




    /** VIGNETTE **/

    var RGB_NIGHT_FORVIGNETTE = [69 / 255, 69 / 255, 69 / 255];

    var vignetteLayer = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.layout.getLayer("vignette");
    if (vignetteLayer == null) return;
// @ts-ignore
    var VignetteEffect: IEffectInstance | undefined = vignetteLayer.effects[0];
    vignetteLayer.backgroundColor = RGB_DAY;


})


//-----------------------------------------------------------------------------
// Player
//
// 
// 
export var PlayerMainInstance: InstanceType.PlayerRoleInstanceMain; // player

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    PlayerMainInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.PlayerRoleInstanceMain.getFirstInstance()!;
})


//-----------------------------------------------------------------------------
// Save & Load
//
// 
// 

var Save_Load_key = "game_save_key_default"

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_number0_keydown", () => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("SaveGame", Save_Load_key)
        console.log("[Load] Game already save")
    })
})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {

    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Load_is_LoadingState) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("LoadGame", Save_Load_key)
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Load_is_LoadingState = false;
        console.log("[Load] Game already load")

    }
})


// for debug

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_z_keydown", () => {
    //     ENGINE_MUST.CORE.goToLayout("Menu")
    // })
})


//-----------------------------------------------------------------------------
// Dialogue 
//
// Dialogue 
//


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_IsRunning = false;
})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_space_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_IsRunning) {
            if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_WaitForInput == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("Dialogue_Continue");
            } else {
                if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_WaitForChoice == 1) {
                    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("Dialogue_ChoiceSelect", -1);
                } else {
                    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("Dialogue_SkipSequence")

                }

            }
        }
    })


})

export async function StartDialogue(key: string, npc_uid: number) {

    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(1);
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.callFunction("Dialogue_StartDialogue", key);

}


//-----------------------------------------------------------------------------
// Camera 3D
//
// 
//

var CAMERA_X_OFFSET;
var CAMERA_Y_OFFSET;
var CAMERA_Z;

export class GL3DCameraManager {
    public static JsutHookCameraAngelSettingForFun(X: number, Y: number, Z: number) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest = X
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest = Y
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z = Z
    }

    public static CameraFocusPlayerWithDistanceAndAngle() {
        CAMERA_Z = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z;
        CAMERA_Y_OFFSET = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest;
        CAMERA_X_OFFSET = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest;

        var CameraMain = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.CameraMain;
        if (PlayerMainInstance == null) return;

        var CameraOver = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.camera_cover.getFirstInstance()!;

        if (CameraMain) {
            //console.log("camera tick")
            CameraMain.lookAtPosition(PlayerMainInstance.x + CAMERA_X_OFFSET, PlayerMainInstance.y + CAMERA_Y_OFFSET, CAMERA_Z, PlayerMainInstance.x, PlayerMainInstance.y, 50, 0, 0, 1)

        }
    }
}


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.fl_ubu_update$$LEVEL(() => {
    GL3DCameraManager.CameraFocusPlayerWithDistanceAndAngle();
})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    /** 注入自定义相机参数 **/

    var CAMERA_SETTING_SUPPER_LOW_FOV = [0, 480, 230]
    var CAMERA_SETTING_SUPPER_LOW_FOV_ANGEL = [180, 480, 230]
    var CAMERA_SETTING_MIDDLE_FOV = [0, 780, 530]
    var CAMERA_SETTING_TOP_VIEW_FOV = [0, 780, 1070]
    var CAMERA_SETTING_TOP_DOWN_VIEW_FOV = [0, 60, 1490]

    GL3DCameraManager.JsutHookCameraAngelSettingForFun(CAMERA_SETTING_SUPPER_LOW_FOV[0], CAMERA_SETTING_SUPPER_LOW_FOV[1], CAMERA_SETTING_MIDDLE_FOV[2])
    

})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {

    // 记录相机默认参数
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Angel_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Angel;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z;
})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
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

})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    // 一个DEBUG窗口 用于相机的参数设置
    // @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_q_keydown", () => {


        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID == 999) {
            CloseFunctionWindow();
        } else {


            var CameraDebugWindowOPT = CreatFunctionWindow(800, 600, 999);

            //@ts-ignoreleta
            var OPT1: InstanceType.FunctionOPT = CameraDebugWindowOPT[1];
            //@ts-ignoreleta
            var OPT2: InstanceType.FunctionOPT = CameraDebugWindowOPT[2];
            //@ts-ignoreleta
            var OPT3: InstanceType.FunctionOPT = CameraDebugWindowOPT[3];
            //@ts-ignoreleta
            var OPT4: InstanceType.FunctionOPT = CameraDebugWindowOPT[4];
            //@ts-ignoreleta
            var OPT5: InstanceType.FunctionOPT = CameraDebugWindowOPT[5];
            OPT1.text = "SET CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest;
            OPT2.text = "SET CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest
            OPT3.text = "SET CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z
            OPT4.instVars.isEnable = false;
            OPT5.instVars.isEnable = false;

            CheckOPTCount();
        }


    })


    var Scale = 60
// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_a_keydown", () => {

        var ChooseID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID;


        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID == 999) {

            if (ChooseID == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest -= Scale

            }
            if (ChooseID == 2) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest -= Scale
            }
            if (ChooseID == 3) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z -= Scale;
            }

            for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z
                }
            }
        }

    })
// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_d_keydown", () => {
        var ChooseID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID;

        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID == 999) {

            if (ChooseID == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest += Scale
            }
            if (ChooseID == 2) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest += Scale
            }
            if (ChooseID == 3) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z += Scale;
            }

            for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Y_Offest
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Camera_Z
                }
            }
        }


    })

})


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

var FunctionWindow_LABLES: InstanceType.FunctionOPT[];


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
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


})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {

    FunctionWindow_LABLES = [];

// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_w_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID == 0) return;
        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowEnable) return;

        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID > 1) {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID -= 1;

        } else {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_OPT_Count
        }


    })
    // @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_s_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID == 0) return;
        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowEnable) return;

        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID < pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_OPT_Count) {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID += 1;

        } else {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID = 1;
        }

    })


})


pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update(() => {

    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_OPT_Count = FunctionWindow_LABLES.length;

    for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionOPT.instances()) {

        if (Lables.instVars.isEnable) {
            Lables.isVisible = true;
        } else {
            Lables.isVisible = false;
        }


        if (Lables.instVars.id == pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID) {
            Lables.fontColor = [241 / 256, 254 / 256, 52 / 256]
        } else {
            Lables.fontColor = [1, 1, 1]
        }

    }


})

function CreatFunctionWindow(pox: number, poy: number, windowID: number) {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowEnable) return;
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Dialogue_IsRunning) return;


    var FunctionWindow = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionWindow.createInstance("FunctionWindow", pox, poy, true, "mob")

    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowEnable = true;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID = windowID;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID = 1;

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
        GTBUID(FunctionWindow?.getChildAt(4).uid)]

    return opts


}

function GTBUID(UID: number): InstanceType.FunctionOPT {
    if (!isFinite(UID)) {
        throw new TypeError("expected finite number");
    }

    console.log(UID);
    //@ts-ignore
    return pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.getInstanceByUid(UID);
}


function CloseFunctionWindow() {
    var FunctionWindow = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionWindow.getFirstInstance();
    FunctionWindow?.destroy();

    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowEnable = false;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_WindowID = 0;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Function_ID = 0;
    if (FunctionWindow_LABLES) {
        FunctionWindow_LABLES.length = 0;
    }


}

function CheckOPTCount() {

    for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FunctionOPT.instances()) {

        if (Lables.instVars.isEnable) {
            FunctionWindow_LABLES.push(Lables);
        } else {
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
var GameVariblesInstance: InstanceType.GameVariables;

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    GameVariblesInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.GameVariables.getFirstInstance()!;

})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.fl_ubu_update$$LEVEL(async () => {

    if (GameVariblesInstance == null) return;
    var map = GameVariblesInstance.getDataMap();
    if (map.get("EndingIndex") == 0) {
        return
    } else {

        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_TriggerEnd) {

            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_TriggerEnd = true;
            LayoutTransitionScreenEffect.EmptyToBlackEffect(2, 3)
            await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(3500)
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.goToLayout("End");

        }


    }


})

// End Layout

var EndingTitleTextInstance: InstanceType.EndTitle;

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {

    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_TriggerEnd = false;
})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "End") return;

    //@ts-ignoreleta
    EndingTitleTextInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.EndTitle.getFirstPickedInstance();

    if (GameVariblesInstance == null) return;
    var map = GameVariblesInstance.getDataMap();
    var endindex = map.get("EndingIndex");


    if (endindex != 0) {
        if (endindex == 1) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_Des_Text1, 8)
        }

        if (endindex == 2) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_Des_Text2, 12)
        }

        if (endindex == 3) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_Des_Text3, 8)
        }
        if (endindex == 4) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.End_Des_Text4, 8)
        }
    }

})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {

    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "End") return;
    //console.log(ENGINE_MUST.EVENT_HANDLER)
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(2000);

// @ts-ignore
    await (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GetConstruct3EventHandlerInstance.addEventListener as any)("input_anykey_keydown", async () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.GameType != "End") return;

        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Fade_is_Fading) return;

        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.HaaWaitSomeTime(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.goToLayout("MENU");

    })

})









