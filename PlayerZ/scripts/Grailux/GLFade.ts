import { GetChunchunFuckWayfarerccSDK } from "../engine.js";

var FadeSprite

GetChunchunFuckWayfarerccSDK.OntheFuckFirstFrame(() => {
    FadeSprite = GetChunchunFuckWayfarerccSDK.Runtime.objects.FadeSprite.getFirstInstance();
    if (FadeSprite == null) return;
    FadeSprite?.behaviors.Fading.addEventListener("fadeinend", () => {
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Fade_is_Fading = false;
        console.log("Fadein is end")

    })

    FadeSprite?.behaviors.Fading.addEventListener("fadeoutend", () => {
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Fade_is_Fading = false;
        console.log("Fadeoutis end")

    })

})


export class Fade {

    static Fade_black_to_empty(time: number, waittime: number) {
        FadeSprite = GetChunchunFuckWayfarerccSDK.Runtime.objects.FadeSprite.getFirstInstance();
        if (FadeSprite == null) {
            console.log("FadeSprite not found");
            return
        }

        FadeSprite.behaviors.Fading.fadeOutTime = time;
        if (waittime != 0) {
            FadeSprite.behaviors.Fading.waitTime = waittime;
        }
        FadeSprite.opacity = 100;
        FadeSprite.behaviors.Fading.restartFade();
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Fade_is_Fading = true;
    }

    static Fade_Empty_to_black(time: number, waittime: number) {

        FadeSprite = GetChunchunFuckWayfarerccSDK.Runtime.objects.FadeSprite.getFirstInstance();
        if (FadeSprite == null) {
            console.log("FadeSprite not found");
            return
        }

        FadeSprite.behaviors.Fading.fadeInTime = time
        if (waittime != 0) {
            FadeSprite.behaviors.Fading.waitTime = waittime;
        }

        FadeSprite.opacity = 0;

        FadeSprite.behaviors.Fading.restartFade();
        GetChunchunFuckWayfarerccSDK.Runtime.globalVars.Fade_is_Fading = true;
    }

}
