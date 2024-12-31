import { ENGINE_MUST } from "../engine.js";
import { ConfigExecutor } from "./event.js";
import { Fade } from "./fade.js"




//-----------------------------------------------------------------------------
// LevelInit
//
// 
// 

// Fade 
ENGINE_MUST.init(() => {
    Fade.Fade_black_to_empty(2, 2);
})

ENGINE_MUST.LEVEL_INIT(() => {

    console.log("Level Init Now")

})

//-----------------------------------------------------------------------------
// Playr
//
// 
// 
export var PrisonerMain: InstanceType.prisonerMain; // player

ENGINE_MUST.LEVEL_INIT(() => {
    PrisonerMain = ENGINE_MUST.CORE.objects.prisonerMain.getFirstInstance()!;
})


//-----------------------------------------------------------------------------
// Save & Load
//
// 
// 

var Save_Load_key = "game_save_key_default"

ENGINE_MUST.LEVEL_INIT(async () => {

    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_number0_keydown", () => {
        ENGINE_MUST.CORE.callFunction("SaveGame", Save_Load_key)
        console.log("Game already save")
    })
})


ENGINE_MUST.LEVEL_INIT(async () => {

    if (ENGINE_MUST.CORE.globalVars.Load_is_LoadingState) {
        ENGINE_MUST.CORE.callFunction("LoadGame", Save_Load_key)
        ENGINE_MUST.CORE.globalVars.Load_is_LoadingState = false;
        console.log("Game already load")

    }
})


// for debug

ENGINE_MUST.init(async () => {
    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_z_keydown", () => {
        ENGINE_MUST.CORE.goToLayout("Menu")
    })
})


//-----------------------------------------------------------------------------
// Dialogue 
//
// Dialogue 
//


ENGINE_MUST.LEVEL_INIT(() => {
    ENGINE_MUST.CORE.globalVars.Dialogue_IsRunning = false;
})


ENGINE_MUST.LEVEL_INIT(async () => {

    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_space_keydown", () => {
        if (ENGINE_MUST.CORE.globalVars.Dialogue_IsRunning) {
            if (ENGINE_MUST.CORE.globalVars.Dialogue_WaitForInput == 1) {
                ENGINE_MUST.CORE.callFunction("Dialogue_Continue");
            } else {
                if (ENGINE_MUST.CORE.globalVars.Dialogue_WaitForChoice == 1) {
                    ENGINE_MUST.CORE.callFunction("Dialogue_ChoiceSelect", -1);
                } else {
                    ENGINE_MUST.CORE.callFunction("Dialogue_SkipSequence")

                }

            }
        }
    })


})

export async function StartDialogue(key: string, npc_uid: number) {

    await ENGINE_MUST.waitTime(1);
    ENGINE_MUST.CORE.callFunction("Dialogue_StartDialogue", key);

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

ENGINE_MUST.LEVEL_TICK(() => {

    CAMERA_Z = ENGINE_MUST.CORE.globalVars.Camera_Z;
    CAMERA_Y_OFFSET = ENGINE_MUST.CORE.globalVars.Camera_Y_Offest;
    CAMERA_X_OFFSET = ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
    CAMERA_ANGEL = ENGINE_MUST.CORE.globalVars.Camera_Angel;

    var CameraMain = ENGINE_MUST.CORE.objects.CameraMain;
    if (PrisonerMain == null) return;

    var CameraOver = ENGINE_MUST.CORE.objects.camera_cover.getFirstInstance()!;

    if (CameraMain) {
        //console.log("camera tick")
        CameraMain.lookAtPosition(PrisonerMain.x + CAMERA_X_OFFSET, PrisonerMain.y + CAMERA_Y_OFFSET, CAMERA_Z, PrisonerMain.x, PrisonerMain.y, 50, 0, 0, 1)

    }

})



ENGINE_MUST.LEVEL_INIT(() => {

    // 记录相机默认参数
    ENGINE_MUST.CORE.globalVars.Camera_Angel_De = ENGINE_MUST.CORE.globalVars.Camera_Angel;
    ENGINE_MUST.CORE.globalVars.Camera_X_Offest_De = ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
    ENGINE_MUST.CORE.globalVars.Camera_Y_Offest_De = ENGINE_MUST.CORE.globalVars.Camera_Y_Offest;
    ENGINE_MUST.CORE.globalVars.Camera_Z_De = ENGINE_MUST.CORE.globalVars.Camera_Z;
})


ENGINE_MUST.LEVEL_INIT(async () => {
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



ENGINE_MUST.LEVEL_INIT(async () => {
    // 一个DEBUG窗口 用于相机的参数设置
    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_q_keydown", () => {


        if (ENGINE_MUST.CORE.globalVars.Function_WindowID == 999) {
            CloseFunctionWindow();
        } else {


            var CameraDebugWindowOPT = CreatFunctionWindow(652, 200, 999);

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
            OPT1.text = "SET CAMERA_X  " + ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
            OPT2.text = "SET CAMERA_Y  " + ENGINE_MUST.CORE.globalVars.Camera_Y_Offest
            OPT3.text = "SET CAMERA_Z  " + ENGINE_MUST.CORE.globalVars.Camera_Z
            OPT4.instVars.isEnable = false;
            OPT5.instVars.isEnable = false;

            CheckOPTCount();
        }


    })


    var Scale = 60

    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_a_keydown", () => {

        var ChooseID = ENGINE_MUST.CORE.globalVars.Function_ID;


        if (ENGINE_MUST.CORE.globalVars.Function_WindowID == 999) {

            if (ChooseID == 1) {
                ENGINE_MUST.CORE.globalVars.Camera_X_Offest -= Scale

            }
            if (ChooseID == 2) {
                ENGINE_MUST.CORE.globalVars.Camera_Y_Offest -= Scale
            }
            if (ChooseID == 3) {
                ENGINE_MUST.CORE.globalVars.Camera_Z -= Scale;
            }

            for (var Lables of ENGINE_MUST.CORE.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + ENGINE_MUST.CORE.globalVars.Camera_Y_Offest
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + ENGINE_MUST.CORE.globalVars.Camera_Z
                }
            }
        }

    })

    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_d_keydown", () => {
        var ChooseID = ENGINE_MUST.CORE.globalVars.Function_ID;

        if (ENGINE_MUST.CORE.globalVars.Function_WindowID == 999) {

            if (ChooseID == 1) {
                ENGINE_MUST.CORE.globalVars.Camera_X_Offest += Scale
            }
            if (ChooseID == 2) {
                ENGINE_MUST.CORE.globalVars.Camera_Y_Offest += Scale
            }
            if (ChooseID == 3) {
                ENGINE_MUST.CORE.globalVars.Camera_Z += Scale;
            }

            for (var Lables of ENGINE_MUST.CORE.objects.FunctionOPT.instances()) {
                if (Lables.instVars.id == 1) {
                    Lables.text = "Set CAMERA_X  " + ENGINE_MUST.CORE.globalVars.Camera_X_Offest;
                }
                if (Lables.instVars.id == 2) {
                    Lables.text = "Set CAMERA_Y  " + ENGINE_MUST.CORE.globalVars.Camera_Y_Offest
                }
                if (Lables.instVars.id == 3) {
                    Lables.text = "Set CAMERA_Z  " + ENGINE_MUST.CORE.globalVars.Camera_Z
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


ENGINE_MUST.LEVEL_INIT(() => {
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


ENGINE_MUST.init(async () => {

    FunctionWindow_LABLES = [];


    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_w_keydown", () => {
        if (ENGINE_MUST.CORE.globalVars.Function_WindowID == 0) return;
        if (!ENGINE_MUST.CORE.globalVars.Function_WindowEnable) return;

        if (ENGINE_MUST.CORE.globalVars.Function_ID > 1) {
            ENGINE_MUST.CORE.globalVars.Function_ID -= 1;

        } else {
            ENGINE_MUST.CORE.globalVars.Function_ID = ENGINE_MUST.CORE.globalVars.Function_OPT_Count
        }


    })
    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_s_keydown", () => {
        if (ENGINE_MUST.CORE.globalVars.Function_WindowID == 0) return;
        if (!ENGINE_MUST.CORE.globalVars.Function_WindowEnable) return;

        if (ENGINE_MUST.CORE.globalVars.Function_ID < ENGINE_MUST.CORE.globalVars.Function_OPT_Count) {
            ENGINE_MUST.CORE.globalVars.Function_ID += 1;

        } else {
            ENGINE_MUST.CORE.globalVars.Function_ID = 1;
        }

    })



})



ENGINE_MUST.tick(() => {

    ENGINE_MUST.CORE.globalVars.Function_OPT_Count = FunctionWindow_LABLES.length;

    for (var Lables of ENGINE_MUST.CORE.objects.FunctionOPT.instances()) {

        if (Lables.instVars.isEnable) {
            Lables.isVisible = true;
        } else {
            Lables.isVisible = false;
        }


        if (Lables.instVars.id == ENGINE_MUST.CORE.globalVars.Function_ID) {
            Lables.fontColor = [241 / 256, 254 / 256, 52 / 256]
        } else {
            Lables.fontColor = [1, 1, 1]
        }

    }



})

function CreatFunctionWindow(pox: number, poy: number, windowID: number) {
    if (ENGINE_MUST.CORE.globalVars.Function_WindowEnable) return;
    if (ENGINE_MUST.CORE.globalVars.Dialogue_IsRunning) return;




    var FunctionWindow = ENGINE_MUST.CORE.objects.FunctionWindow.createInstance("FunctionWindow", pox, poy, true, "mob")

    ENGINE_MUST.CORE.globalVars.Function_WindowEnable = true;
    ENGINE_MUST.CORE.globalVars.Function_WindowID = windowID;
    ENGINE_MUST.CORE.globalVars.Function_ID = 1;



    //@ts-ignoreleta
    var opts = [FunctionWindow,
        //@ts-ignoreleta
        GTBUID(FunctionWindow.getChildAt(0)?.uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow.getChildAt(1)?.uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow.getChildAt(2)?.uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow.getChildAt(3)?.uid),
        //@ts-ignoreleta
        GTBUID(FunctionWindow.getChildAt(4)?.uid)]


    return opts


}

function GTBUID(UID: number): InstanceType.FunctionOPT {
    //@ts-ignoreleta
    return ENGINE_MUST.CORE.getInstanceByUid(UID);
}


function CloseFunctionWindow() {
    var FunctionWindow = ENGINE_MUST.CORE.objects.FunctionWindow.getFirstInstance();
    FunctionWindow?.destroy();

    ENGINE_MUST.CORE.globalVars.Function_WindowEnable = false;
    ENGINE_MUST.CORE.globalVars.Function_WindowID = 0;
    ENGINE_MUST.CORE.globalVars.Function_ID = 0;
    if (FunctionWindow_LABLES) {
        FunctionWindow_LABLES.length = 0;
    }


}

function CheckOPTCount() {

    for (var Lables of ENGINE_MUST.CORE.objects.FunctionOPT.instances()) {

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

ENGINE_MUST.LEVEL_INIT(() => {
    GameVariblesInstance = ENGINE_MUST.CORE.objects.GameVariables.getFirstInstance()!;

})

ENGINE_MUST.LEVEL_TICK(async () => {

    if (GameVariblesInstance == null) return;
    var map = GameVariblesInstance.getDataMap();
    if (map.get("EndingIndex") == 0) { return } else {

        if (!ENGINE_MUST.CORE.globalVars.End_TriggerEnd) {

            ENGINE_MUST.CORE.globalVars.End_TriggerEnd = true;
            Fade.Fade_Empty_to_black(2, 3)
            await ENGINE_MUST.waitTime(3500)
            ENGINE_MUST.CORE.goToLayout("End");

        }


    }



})

// End Layout

var EndingTitleTextInstance: InstanceType.EndTitle;

ENGINE_MUST.init(() => {

    ENGINE_MUST.CORE.globalVars.End_TriggerEnd = false;
})

ENGINE_MUST.init(() => {
    if (ENGINE_MUST.CORE.globalVars.GameType != "End") return;

    //@ts-ignoreleta
    EndingTitleTextInstance = ENGINE_MUST.CORE.objects.EndTitle.getFirstPickedInstance();

    if (GameVariblesInstance == null) return;
    var map = GameVariblesInstance.getDataMap();
    var endindex = map.get("EndingIndex");


    if (endindex != 0) {
        if (endindex == 1) {
            EndingTitleTextInstance.typewriterText(ENGINE_MUST.CORE.globalVars.End_Des_Text1, 8)
        }

        if (endindex == 2) {
            EndingTitleTextInstance.typewriterText(ENGINE_MUST.CORE.globalVars.End_Des_Text2, 12)
        }

        if (endindex == 3) {
            EndingTitleTextInstance.typewriterText(ENGINE_MUST.CORE.globalVars.End_Des_Text3, 8)
        }
        if (endindex == 4) {
            EndingTitleTextInstance.typewriterText(ENGINE_MUST.CORE.globalVars.End_Des_Text4, 8)
        }
    }

})

ENGINE_MUST.init(async () => {

    if (ENGINE_MUST.CORE.globalVars.GameType != "End") return;
    //console.log(ENGINE_MUST.EVENT_HANDLER)
    await ENGINE_MUST.waitTime(2000);


    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_anykey_keydown", async () => {
        if (ENGINE_MUST.CORE.globalVars.GameType != "End") return;

        if (ENGINE_MUST.CORE.globalVars.Fade_is_Fading) return;

        Fade.Fade_Empty_to_black(1, 3);
        await ENGINE_MUST.waitTime(3000);
        ENGINE_MUST.CORE.goToLayout("MENU");

    })

})


//-----------------------------------------------------------------------------
// Menu
//
// 
// 

// Menu Layout

ENGINE_MUST.init(async () => {

    if (ENGINE_MUST.CORE.globalVars.GameType != "Menu") return;

    console.log("Menu is Init")

    // set up menu windonw

    ENGINE_MUST.CORE.globalVars.Function_WindowEnable = true;
    ENGINE_MUST.CORE.globalVars.Function_WindowID = 1111; //menu window id
    ENGINE_MUST.CORE.globalVars.Function_ID = 1;
    await ENGINE_MUST.waitTime(1);
    CheckOPTCount();

    // bind opt event


    await (ENGINE_MUST.EVENT_HANDLER.addEventListener as any)("input_space_keydown", () => {

        if (ENGINE_MUST.CORE.globalVars.Fade_is_Fading) return;

        if (ENGINE_MUST.CORE.globalVars.GameType != "Menu") return;
        if (!ENGINE_MUST.CORE.globalVars.Function_WindowEnable || ENGINE_MUST.CORE.globalVars.Function_WindowID != 1111) return;

        var ChooseID = ENGINE_MUST.CORE.globalVars.Function_ID;

        if (ChooseID == 1) {
            CloseFunctionWindow();
            Fade.Fade_Empty_to_black(1, 3)
            ENGINE_MUST.waitTime(2500);
            ENGINE_MUST.CORE.goToLayout("Level")
        }
        if (ChooseID == 2) {
            CloseFunctionWindow();
            Fade.Fade_Empty_to_black(1, 3)
            ENGINE_MUST.waitTime(2500);
            ENGINE_MUST.CORE.globalVars.Load_is_LoadingState = true;
            ENGINE_MUST.CORE.goToLayout("Level")

        }
        if (ChooseID == 3) {
            alert("In development")
        }
        if (ChooseID == 4) {
            alert("In development")
        }
        if (ChooseID == 5) {
            alert("In development")
        }
    })

})








