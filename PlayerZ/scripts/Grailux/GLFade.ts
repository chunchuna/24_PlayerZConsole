import { pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit } from "../engine.js";

var FadeSprite

pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.gl$_ubu_init(() => {
    FadeSprite = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FadeSprite.getFirstInstance();
    if (FadeSprite == null) return;
    FadeSprite?.behaviors.Fading.addEventListener("fadeinend", () => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Fade_is_Fading = false;
        console.log("[LayoutTransitionScreenEffect] Fadein is end")

    })

    FadeSprite?.behaviors.Fading.addEventListener("fadeoutend", () => {
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Fade_is_Fading = false;
        console.log("[LayoutTransitionScreenEffect] Fade out is end")

    })

})


export class LayoutTransitionScreenEffect {

    static BlackToEmptyEffect(time: number, waittime: number) {
        FadeSprite = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FadeSprite.getFirstInstance();
        if (FadeSprite == null) {
            console.log("[LayoutTransitionScreenEffect] FadeSprite not found");
            return
        }

        FadeSprite.behaviors.Fading.fadeOutTime = time;
        if (waittime != 0) {
            FadeSprite.behaviors.Fading.waitTime = waittime;
        }
        FadeSprite.opacity = 100;
        FadeSprite.behaviors.Fading.restartFade();
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Fade_is_Fading = true;
    }

    static EmptyToBlackEffect(time: number, waittime: number) {

        FadeSprite = pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.objects.FadeSprite.getFirstInstance();
        if (FadeSprite == null) {
            console.log("[LayoutTransitionScreenEffect] FadeSprite not found");
            return
        }

        FadeSprite.behaviors.Fading.fadeInTime = time
        if (waittime != 0) {
            FadeSprite.behaviors.Fading.waitTime = waittime;
        }

        FadeSprite.opacity = 0;

        FadeSprite.behaviors.Fading.restartFade();
        pmlsdk$ProceduralStorytellingSandboxRPGDevelopmentToolkit.runtime.globalVars.Fade_is_Fading = true;
    }

}
