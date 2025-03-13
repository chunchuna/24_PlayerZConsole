import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";
import { ConfigExecutor } from "./GLEvent.js";
import { LayoutTransitionScreenEffect } from "./GLFade.js";
import { GL_COMMAND_ } from "./GLConsole.js";
//-----------------------------------------------------------------------------
// LevelInit
//
// 
// 
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    console.log("[Level Layout] Level Init Now");
});
// Fade 
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    LayoutTransitionScreenEffect.BlackToEmptyEffect(2, 2);
});
// 做实验
// pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(async () => {
//     // @ts-ignore
//     //console.log(self.c3._runtime);
//     // @ts-ignore
//     console.log(C3.Plugins.MixonGames_EasyInGameConsole.Instance)
//     // @ts-ignore
//     console.log(self.C3.Plugins.Mikal_3DObject);
//     var BigHouse13dObjectInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.BigHouse1.getFirstInstance()?.objectType;
//     // @ts-ignore
//     var BackPackNudeMan3DObkectInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.getInstanceByUid(194)
//     var IdleMan3DObjectInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.getInstanceByUid(20);
//     // @ts-ignore
//     console.log(BackPackNudeMan3DObkectInstance)
//     // @ts-ignore
//     console.log(BackPackNudeMan3DObkectInstance.layer)
//     // @ts-ignore
//     console.log(BackPackNudeMan3DObkectInstance.gltfPath)
//     // @ts-ignore
//     BackPackNudeMan3DObkectInstance.wireframe = true;
//     // @ts-ignore
//     GL_COMMAND_._draw("[3D OBJECT TEST]" + IdleMan3DObjectInstance.animationPlay)
//     // @ts-ignore
//     console.log("[3D OBJECT TEST]" + IdleMan3DObjectInstance.animationPlay)
//     // @ts-ignore
//     console.log("[3D OBJECT TEST]" + IdleMan3DObjectInstance.animationSpeed)
//     // @ts-ignore
//     IdleMan3DObjectInstance.debug = true;
//     // @ts-ignore
//     pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(5000).then(() => {
//         // @ts-ignore
//         IdleMan3DObjectInstance.animationName = "idle"
//         // @ts-ignore
//         console.log(IdleMan3DObjectInstance.getAnimationNames())
//         // @ts-ignore
//         IdleMan3DObjectInstance.wireframe = true;
//         alert("延迟执行")
//     })
//     var Player3DObjectInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.getInstanceByUid(2);
//     pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(10000).then(() => {
//         // @ts-ignore
//         //Player3DObjectInstance.animationName = "walk"
//         // @ts-ignore
//         console.log(Player3DObjectInstance.animationName)
//         alert("延迟执行")
//     })
//     // @ts-ignore
//     //self.C3.Plugins.Mikal_3DObject.Acts.SetZElevation0.call(BigHouse13dObjectInstanceTest2, 20)
//     //console.log(BigHouse13dObjectInstance._sdkInst)
// })
// @ts-ignore
/*var InGameConsoleAddonInstance

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    InGameConsoleAddonInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.InGameConsole.getFirstInstance();
    console.log(InGameConsoleAddonInstance);
    if (InGameConsoleAddonInstance._lastAction == "m_setting") {
        alert("on action")
    }
    // @ts-ignore
    InGameConsoleAddonInstance.OnAction("m_setting", (actionData) => {
        alert("Action triggered:" + actionData);
    })

})


var lastAction = ""

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_update(() => {
    // @ts-ignore
    if (InGameConsoleAddonInstance._lastAction == "m_setting" && lastAction != "m_setting") {
        alert("on action")
        lastAction = "m_setting"
    }
    // @ts-ignore
    if (InGameConsoleAddonInstance._lastAction == "m_start" && lastAction != "m_start") {
        alert("on action start")
        lastAction = "m_start"
    }
})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
    var Camera3dInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.CameraMain.getFirstInstance();
    console.log(Camera3dInstance);
})

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.UBU_CLIENT_DRAW_FRAME.gl$_ubu_init(() => {
     GL_COMMAND_._draw("[Eclipse ] Hello Jave")
})
*/
// VFX
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    /** FOG **/
    var RGB_DAY = [255 / 255, 255 / 255, 255 / 255];
    var RGB_NIGHT = [0 / 255, 0 / 255, 0 / 255];
    var RGB_Cyberpunk = [255 / 255, 255 / 2555, 255 / 255];
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "Level")
        return;
    var LevelLayer = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.layout.getLayer("level");
    if (LevelLayer == null)
        return;
    // @ts-ignore
    var ExponentialEffect = LevelLayer.effects[0];
    console.log(ExponentialEffect);
    ExponentialEffect?.setParameter(2, 1800);
    ExponentialEffect?.setParameter(0, RGB_DAY);
    GL_COMMAND_._draw("[Fog exponential] 重新设置场景雾距离参数");
    GL_COMMAND_._draw(String(ExponentialEffect?.getParameter(2)));
    /** VIGNETTE **/
    var RGB_NIGHT_FORVIGNETTE = [69 / 255, 69 / 255, 69 / 255];
    var vignetteLayer = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.layout.getLayer("vignette");
    if (vignetteLayer == null)
        return;
    // @ts-ignore
    var VignetteEffect = vignetteLayer.effects[0];
    vignetteLayer.backgroundColor = RGB_DAY;
});
//-----------------------------------------------------------------------------
// Player
//
// 
// 
export var PlayerMainInstance; // player
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    PlayerMainInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.PlayerRoleInstanceMain.getFirstInstance();
});
//-----------------------------------------------------------------------------
// Save & Load
//
// 
// 
var Save_Load_key = "game_save_key_default";
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_number0_keydown", () => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("SaveGame", Save_Load_key);
        console.log("[Load] Game already save");
    });
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Load_is_LoadingState) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("LoadGame", Save_Load_key);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Load_is_LoadingState = false;
        console.log("[Load] Game already load");
    }
});
// for debug
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {
    // await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_z_keydown", () => {
    //     ENGINE_MUST.CORE.goToLayout("Menu")
    // })
});
//-----------------------------------------------------------------------------
// Dialogue 
//
// Dialogue 
//
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Dialogue_IsRunning = false;
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_space_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Dialogue_IsRunning) {
            if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Dialogue_WaitForInput == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("Dialogue_Continue");
            }
            else {
                if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Dialogue_WaitForChoice == 1) {
                    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("Dialogue_ChoiceSelect", -1);
                }
                else {
                    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("Dialogue_SkipSequence");
                }
            }
        }
    });
});
export async function StartDialogue(key, npc_uid) {
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(1);
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.callFunction("Dialogue_StartDialogue", key);
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
    static JsutHookCameraAngelSettingForFun(X, Y, Z) {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest = X;
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest = Y;
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z = Z;
    }
    static CameraFocusPlayerWithDistanceAndAngle() {
        CAMERA_Z = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z;
        CAMERA_Y_OFFSET = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest;
        CAMERA_X_OFFSET = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest;
        var CameraMain = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.CameraMain;
        if (PlayerMainInstance == null)
            return;
        var CameraOver = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.camera_cover.getFirstInstance();
        if (CameraMain) {
            //console.log("camera tick")
            CameraMain.lookAtPosition(PlayerMainInstance.x + CAMERA_X_OFFSET, PlayerMainInstance.y + CAMERA_Y_OFFSET, CAMERA_Z, PlayerMainInstance.x, PlayerMainInstance.y, 50, 0, 0, 1);
        }
    }
}
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_update$$LEVEL(() => {
    GL3DCameraManager.CameraFocusPlayerWithDistanceAndAngle();
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    /** 注入自定义相机参数 **/
    var CAMERA_SETTING_SUPPER_LOW_FOV = [0, 480, 230];
    var CAMERA_SETTING_SUPPER_LOW_FOV_ANGEL = [180, 480, 230];
    var CAMERA_SETTING_MIDDLE_FOV = [0, 780, 530];
    var CAMERA_SETTING_TOP_VIEW_FOV = [0, 780, 1070];
    var CAMERA_SETTING_TOP_DOWN_VIEW_FOV = [0, 60, 1490];
    GL3DCameraManager.JsutHookCameraAngelSettingForFun(CAMERA_SETTING_SUPPER_LOW_FOV[0], CAMERA_SETTING_SUPPER_LOW_FOV[1], CAMERA_SETTING_MIDDLE_FOV[2]);
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    // 记录相机默认参数
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Angel_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Angel;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z_De = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z;
});
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
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(async () => {
    // 一个DEBUG窗口 用于相机的参数设置
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_q_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID == 999) {
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
            OPT1.text = "SET CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest;
            OPT2.text = "SET CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest;
            OPT3.text = "SET CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z;
            OPT4.instVars.isEnable = false;
            OPT5.instVars.isEnable = false;
            CheckOPTCount();
        }
    });
    var Scale = 60;
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_a_keydown", () => {
        var ChooseID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID == 999) {
            if (ChooseID == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest -= Scale;
            }
            if (ChooseID == 2) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest -= Scale;
            }
            if (ChooseID == 3) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z -= Scale;
            }
            for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest;
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z;
                }
            }
        }
    });
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_d_keydown", () => {
        var ChooseID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID == 999) {
            if (ChooseID == 1) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest += Scale;
            }
            if (ChooseID == 2) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest += Scale;
            }
            if (ChooseID == 3) {
                pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z += Scale;
            }
            for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Y_Offest;
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Camera_Z;
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
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {
    FunctionWindow_LABLES = [];
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_w_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID == 0)
            return;
        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowEnable)
            return;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID > 1) {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID -= 1;
        }
        else {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_OPT_Count;
        }
    });
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_s_keydown", () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID == 0)
            return;
        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowEnable)
            return;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID < pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_OPT_Count) {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID += 1;
        }
        else {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID = 1;
        }
    });
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_update(() => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_OPT_Count = FunctionWindow_LABLES.length;
    for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionOPT.instances()) {
        if (Lables.instVars.isEnable) {
            Lables.isVisible = true;
        }
        else {
            Lables.isVisible = false;
        }
        if (Lables.instVars.id == pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID) {
            Lables.fontColor = [241 / 256, 254 / 256, 52 / 256];
        }
        else {
            Lables.fontColor = [1, 1, 1];
        }
    }
});
function CreatFunctionWindow(pox, poy, windowID) {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowEnable)
        return;
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Dialogue_IsRunning)
        return;
    var FunctionWindow = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionWindow.createInstance("FunctionWindow", pox, poy, true, "mob");
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowEnable = true;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID = windowID;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID = 1;
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
    return pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.getInstanceByUid(UID);
}
function CloseFunctionWindow() {
    var FunctionWindow = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionWindow.getFirstInstance();
    FunctionWindow?.destroy();
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowEnable = false;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_WindowID = 0;
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Function_ID = 0;
    if (FunctionWindow_LABLES) {
        FunctionWindow_LABLES.length = 0;
    }
}
function CheckOPTCount() {
    for (var Lables of pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.FunctionOPT.instances()) {
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
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_init_$$LEVEL(() => {
    GameVariblesInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.GameVariables.getFirstInstance();
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl_ubu_update$$LEVEL(async () => {
    if (GameVariblesInstance == null)
        return;
    var map = GameVariblesInstance.getDataMap();
    if (map.get("EndingIndex") == 0) {
        return;
    }
    else {
        if (!pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_TriggerEnd) {
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_TriggerEnd = true;
            LayoutTransitionScreenEffect.EmptyToBlackEffect(2, 3);
            await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(3500);
            pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.goToLayout("End");
        }
    }
});
// End Layout
var EndingTitleTextInstance;
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_TriggerEnd = false;
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "End")
        return;
    //@ts-ignoreleta
    EndingTitleTextInstance = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.objects.EndTitle.getFirstPickedInstance();
    if (GameVariblesInstance == null)
        return;
    var map = GameVariblesInstance.getDataMap();
    var endindex = map.get("EndingIndex");
    if (endindex != 0) {
        if (endindex == 1) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_Des_Text1, 8);
        }
        if (endindex == 2) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_Des_Text2, 12);
        }
        if (endindex == 3) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_Des_Text3, 8);
        }
        if (endindex == 4) {
            EndingTitleTextInstance.typewriterText(pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.End_Des_Text4, 8);
        }
    }
});
pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(async () => {
    if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "End")
        return;
    //console.log(ENGINE_MUST.EVENT_HANDLER)
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(2000);
    // @ts-ignore
    await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.GET_CONSTRUCT3_EVENTHANDL_INSTANCE.addEventListener("input_anykey_keydown", async () => {
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.GameType != "End")
            return;
        if (pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.globalVars.Fade_is_Fading)
            return;
        LayoutTransitionScreenEffect.EmptyToBlackEffect(1, 3);
        await pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.WAIT_TIME_FORM_PROMISE(3000);
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.RUN_TIME_.goToLayout("MENU");
    });
});
