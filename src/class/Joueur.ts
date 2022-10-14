import { AnimationJoueur } from "../animations/AnimationJoueur"
import Aptitudes from "../aptitudes/base"
import { DefautDirection } from "./initalisation/Defaut"

 export default class PlayerClass extends Phaser.Physics.Arcade.Sprite {
   ClientID: any
   sprite?: string
   currentTarget!: this
   keyboard!: Phaser.Input.Keyboard.Key
   commande: any
   vel: integer = 160
   constructor(
     scene: Phaser.Scene,
     x: number,
     y: number,
     atlas: string,
     ClientID: string,
     sprite: string,
     auto: boolean
   ) {
     super(scene, x, y, atlas, sprite)

     this.init(scene, ClientID, sprite, atlas, auto)
   }

   init(scene: Phaser.Scene, ClientID: string, _sprite: string, atlas: string, _auto: boolean) {
     this.scene = scene
     this.ClientID = ClientID
     this.sprite = atlas
     this.currentTarget = this
     
    new(AnimationJoueur as any)(this.anims)
    const self = this;
    
    DefautDirection(Aptitudes, this);
     (Aptitudes as any)[this.sprite].StatsSupplementaire.call(self, self, Aptitudes)
     
     //@ts-ignore
    this.commande = this.scene.input.keyboard.createCursorKeys();

   }
   preUpdate(time: number, delta: number) {
     super.preUpdate(time, delta);
     (Aptitudes as any)[(this as any).sprite].deplacement(this, {});
     (this.scene as any).ombre.y = this.getBottomCenter().y - 19;
     (this.scene as any).ombre.x = this.getLeftCenter().x + 41;
   }
 }