// NOTE: this file is auto-generated by Construct
declare namespace InstanceType {
	class Browser extends IInstance {
	}
	class Audio extends IInstance {
	}
	class AJAX extends IInstance {
	}
	class DialogueCommands extends IDictionaryInstance {
	}
	class DialogueData extends IArrayInstance {
	}
	class DialogueDictionary extends IDictionaryInstance {
	}
	class GameVariables extends IDictionaryInstance {
	}
	class Touch extends IInstance {
	}
	class ChoiceSelector extends IWorldInstance {
		instVars: {
			callback: string,
			params: string
		};
	}
	class ContinueIndicator extends ISpriteInstance {
	}
	class __doorBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class door extends IWorldInstance {
		behaviors: __doorBehaviors<this>;
	}
	class DownArrow extends ISpriteInstance {
	}
	class PortraitSprite extends ISpriteInstance {
	}
	class SpriteFont extends ISpriteFontInstance {
		instVars: {
			ID: string,
			choiceFork: string
		};
	}
	class UpArrow extends ISpriteInstance {
	}
	class WindowFrame extends IWorldInstance {
		instVars: {
			ID: string
		};
	}
	class FuntionWinodow9 extends IWorldInstance {
		instVars: {
			ID: string
		};
	}
	class __AnykeyBehaviors<InstType> {
		正弦运动: ISineBehaviorInstance<InstType>;
	}
	class Anykey extends ITextInstance {
		behaviors: __AnykeyBehaviors<this>;
	}
	class EndTitle extends ITextInstance {
	}
	class FunctionOPT extends ITextInstance {
		instVars: {
			id: number,
			name: string,
			isSelected: boolean,
			isEnable: boolean
		};
	}
	class SpriteFont2 extends ITextInstance {
		instVars: {
			ID: number,
			choiceFork: string
		};
	}
	class Cursor extends ISpriteInstance {
	}
	class UIPanel extends IWorldInstance {
	}
	class UIPanelInventory extends IWorldInstance {
	}
	class CharacterGrid extends IWorldInstance {
	}
	class InventoryGrid extends IWorldInstance {
	}
	class MoveTypeButton extends ISpriteInstance {
	}
	class DetailsTypeButton extends ISpriteInstance {
	}
	class __AirventsBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class Airvents extends IWorldInstance {
		behaviors: __AirventsBehaviors<this>;
	}
	class __AmericanBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class American extends IWorldInstance {
		behaviors: __AmericanBehaviors<this>;
	}
	class __bedBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class bed extends IWorldInstance {
		behaviors: __bedBehaviors<this>;
	}
	class __boardBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class board extends IWorldInstance {
		behaviors: __boardBehaviors<this>;
	}
	class __camera_coverBehaviors<InstType> {
		Orbit: IOrbitBehaviorInstance<InstType>;
		Pin: IBehaviorInstance<InstType>;
	}
	class camera_cover extends ISpriteInstance {
		behaviors: __camera_coverBehaviors<this>;
	}
	class CameraMain extends IInstance {
	}
	class EndingBackGround extends ISpriteInstance {
	}
	class EventHandler extends ISpriteInstance {
	}
	class __FadeSpriteBehaviors<InstType> {
		Fading: IFadeBehaviorInstance<InstType>;
	}
	class FadeSprite extends ISpriteInstance {
		behaviors: __FadeSpriteBehaviors<this>;
	}
	class FunctionWindow extends ISpriteInstance {
		instVars: {
			id: number
		};
	}
	class ground extends ITiledBackgroundInstance {
	}
	class __guardBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class guard extends IWorldInstance {
		behaviors: __guardBehaviors<this>;
	}
	class __guardbutfakeBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class guardbutfake extends IWorldInstance {
		behaviors: __guardbutfakeBehaviors<this>;
	}
	class IntractBehaviorZone extends ISpriteInstance {
		instVars: {
			isTouceOnce: boolean,
			TouceTimes: number,
			Type: string,
			DialogueKeyName: string,
			functionName: string,
			isConnectNPC: boolean,
			NPCUid: number,
			isTouching: boolean,
			DistancefromPlayer: number,
			parameters1: string,
			parameters2: string,
			parameters3: string,
			parameters4: string,
			parameters5: string
		};
	}
	class Keyboard extends IInstance {
	}
	class MenuBackground extends ISpriteInstance {
	}
	class __NudePoliceBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class NudePolice extends IWorldInstance {
		behaviors: __NudePoliceBehaviors<this>;
	}
	class Object3D extends IWorldInstance {
	}
	class prisoner3dobject extends IWorldInstance {
	}
	class __prisonerMainBehaviors<InstType> {
		"8Direction": I8DirectionBehaviorInstance<InstType>;
		Pathfinding: IPathfindingBehaviorInstance<InstType>;
	}
	class prisonerMain extends ISpriteInstance {
		behaviors: __prisonerMainBehaviors<this>;
	}
	class Prisonerother extends IWorldInstance {
	}
	class __StrawgroundBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class Strawground extends IWorldInstance {
		behaviors: __StrawgroundBehaviors<this>;
	}
	class __SuitcaseBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class Suitcase extends IWorldInstance {
		behaviors: __SuitcaseBehaviors<this>;
	}
	class __toiletBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class toilet extends IWorldInstance {
		behaviors: __toiletBehaviors<this>;
	}
	class TouchBehaviorZone extends ISpriteInstance {
		instVars: {
			isTouchOnce: boolean,
			Type: string,
			FunctionName: string,
			ID: number,
			TouchTimes: number,
			isTestOverLapDoing: boolean
		};
	}
	class __TunnelentranceBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class Tunnelentrance extends IWorldInstance {
		behaviors: __TunnelentranceBehaviors<this>;
	}
	class __wallBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class wall extends I3DShapeInstance {
		behaviors: __wallBehaviors<this>;
	}
	class __washBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class wash extends IWorldInstance {
		behaviors: __washBehaviors<this>;
	}
	class GroundGrid extends ITiledBackgroundInstance {
	}
	class Mouse extends IInstance {
	}
	class InGameConsole extends C3.Plugins.MixonGames_EasyInGameConsole.Instance {
	}
	class __f_3d_solidBehaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class f_3d_solid extends I3DShapeInstance {
		behaviors: __f_3d_solidBehaviors<this>;
	}
	class __f_3d_solid2Behaviors<InstType> {
		Solid: ISolidBehaviorInstance<InstType>;
	}
	class f_3d_solid2 extends IWorldInstance {
		behaviors: __f_3d_solid2Behaviors<this>;
	}
	class f_3d extends IWorldInstance {
	}
	class f_ground extends ITiledBackgroundInstance {
	}

}