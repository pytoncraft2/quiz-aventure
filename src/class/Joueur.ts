import { AnimationJoueur } from "../animations/AnimationJoueur"
import Aptitudes from "../aptitudes/base"
import { DefautDirection } from "./initalisation/Defaut"

/**
 * Joueur et interaction
 */

//  export default class PlayerClass extends Phaser.Physics.Arcade.Sprite {
//    ClientID: any
//    sprite?: string
//    bossControllable?: Phaser.GameObjects.Group
//    aObtenuUnBoss: boolean = false
//    gfx?: Phaser.GameObjects.Graphics
//    vel: number = 600
//    pieceCourante: string = 'hall'
//    fusionner?: boolean
//    suivre?: boolean
//    cible_courante: string = "enemies"
//    compteurSaut: number = 0
//    iconSuitJoueur: boolean = false
//    tweenIcon?: Phaser.Tweens.Tween
//    canMove: boolean = true
//    attaque: boolean = false
//    action: any
//    zoneInteraction: any
//    blesse_opposant: boolean = false
//    soigne: boolean = false
//    groupeBoules: any
//    currentTarget: any
//    me: any
//    son?: string

//    survole: boolean = false

//    vie: number = 10
//    degat: number = 1
//    vole: boolean = false;
//    constructor(
//      scene: Phaser.Scene,
//      x: number,
//      y: number,
//      atlas: string,
//      ClientID: string,
//      sprite: string,
//      auto: boolean
//    ) {
//      super(scene, x, y, atlas, sprite)

//      this.init(scene, ClientID, sprite, auto)
//    }

//    init(scene: Phaser.Scene, ClientID: string, sprite: string, auto: boolean) {
//      this.scene = scene
//      this.ClientID = ClientID
//      this.sprite = sprite

//      //initialisation de l'etat du joueur
//      new AnimationJoueur(this.anims)
//      const self = this;
//      DefautDirection(Aptitudes, this)
//      Aptitudes[this.sprite].StatsSupplementaire.call(self, self, Aptitudes)
//      if (!(this.scene as any).room.boss[`${this.sprite}`]) {
//        this.scene.time.delayedCall(100, () => {
//          this.changeInterfaceClient(this.sprite);
//        }, undefined, this);
//      }


//      this.currentTarget = this
//      this.me = this

//      this.bossControllable = this.scene.add.group();


//      this.zoneInteraction = this.scene.add.rectangle(0, 0, 32, 64, 0xffffff, 0) as unknown as Phaser.Types.Physics.Arcade.ImageWithDynamicBody

//      //ACTIVER GRACE À LA FONCTION OVERLAP DE PHASER #hall.ts
//      this.zoneInteraction.action = (_e: any) => {

//        if (this.blesse_opposant) {
//          this.blesse_opposant = false
//          if (typeof _e.dommage === "function" && _e.sprite != this.sprite) {
//            if (_e.vie <= 0) {
//              _e.vie = 10
//              if (_e.cible_courante == "enemies") _e.son = 'game-over';
//            }
//            else
//            {
//            _e.dommage(this.degat)
//            }
//          }
//        }

//        if (this.soigne) {
//          _e.vie += 0.01
//        }
//      };
//      this.scene.physics.add.existing(this.zoneInteraction);
//      this.zoneInteraction.body.enable = false;
//      if (this.scene) (this.scene as any).playersAttackZone.add(this.zoneInteraction);

//      if (auto) {
//        if (Aptitudes[this.sprite].auto) Aptitudes[this.sprite].auto((this as any), {}, Aptitudes[this.sprite]);
//      }

//    }
//    preUpdate(time: number, delta: number) {
//      super.preUpdate(time, delta);

//      const input = (this.scene as any).room.donnes[this.ClientID].clavier
//      let { right, left, space, a, z, e, r, up, down, a_fin, left_fin, right_fin, space_fin, z_fin, left_debut, right_debut, tab, tab_fin } = input
//      let animationName = this.anims.getFrameName()


//      if (this.canMove) {
//        this.zoneInteraction.setPosition(this.x + (this.flipX ? -150 : 150), this.y);

//        if (a || a_fin) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].A === "function" && Aptitudes[this.currentTarget.sprite].A(this.currentTarget, input);
//        if (z || z_fin) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].Z === "function" && Aptitudes[this.currentTarget.sprite].Z(this.currentTarget, input);
//        if (e) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].E === "function" && Aptitudes[this.currentTarget.sprite].E(this.currentTarget, input);
//        if (r) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].R === "function" && Aptitudes[this.currentTarget.sprite].R(this.currentTarget, input);
//        if (tab || tab_fin) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].TAB === "function" && Aptitudes[this.currentTarget.sprite].TAB(this.currentTarget, input);
//        if (left || left_fin) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].toucheGauche === "function" && Aptitudes[this.currentTarget.sprite].toucheGauche(this.currentTarget, input)
//        if (right || right_fin) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].toucheDroite === "function" && Aptitudes[this.currentTarget.sprite].toucheDroite(this.currentTarget, input)
//        if (up) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].toucheHaut === "function" && Aptitudes[this.currentTarget.sprite].toucheHaut(this.currentTarget, input)
//        if (down) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].toucheBas === "function" && Aptitudes[this.currentTarget.sprite].toucheBas(this.currentTarget, input)
//        if (space) this.currentTarget.sprite in Aptitudes && typeof Aptitudes[this.currentTarget.sprite].toucheEspace === "function" && Aptitudes[this.currentTarget.sprite].toucheEspace(this.currentTarget, input);

//        if (left_fin) input.left_fin = false;
//        if (z_fin) input.z_fin = false;
//        if (right_fin) input.right_fin = false;
//        if (space_fin) input.space_fin = false;
//        if (right_debut) input.right_debut = false
//        if (left_debut) input.left_debut = false;
//        if (tab_fin) input.tab_fin = false;
//      }

//      if (this.suivre) {
//         this.setPosition(this.currentTarget.getTopCenter().x, this.currentTarget.getTopCenter().y - 70)
//      }

//      if (this.vie <= 0) {
//        this.vie = 10;
//        if (this.cible_courante == "players") this.animationBossVaincu()
//        else this.respawn()
//      }

//    }

//    dommage(puissance: number) {
//      if (this.scene) {
//      this.setTint(0xff0000)
//        this.scene.time.delayedCall(100, () => {
//          this.clearTint()
//        }, undefined, this);
//        if (puissance >= 0) {
//          this.vie -= puissance
//        }
//      }
//    }

//    changeInterfaceClient(sprite: string, icon: boolean = false) {
//     //    (this.scene as any).room.state.presences.set(
//     //      this.ClientID,
//     //      new Player( icon ? {
//     //        sprite_fusion: sprite,
//     //        commandes: new Commandes(Aptitudes[sprite]["commandes"])
//     //      } : {
//     //        commandes: new Commandes(Aptitudes[sprite]["commandes"])
//     //      })
//     //    );
//    }


//    respawn() {
//      this.scene.tweens.add({
//        targets: this,
//        // alpha: 0.2,
//        duration: 200,
//        repeat: 3,
//        yoyo: true
//      });
//      this.scene.tweens.add({
//        targets: this,
//        x: 2830,
//        y: 755,
//        duration: 500,
//        onComplete: function() {
//          if (arguments[1][0].scene){
//            arguments[1][0].scene.players.add(arguments[1][0])
//          }
//        }
//      });
//    }

//    animationBossVaincu() {
//      this.setScale(0.5);
//      (this.body as any).setAllowGravity(false);
//      this.setVelocity(0)
//      this.setPushable(false);
//    }
//  }


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

   init(scene: Phaser.Scene, ClientID: string, sprite: string, atlas: string, _auto: boolean) {
     this.scene = scene
     this.ClientID = ClientID
     this.sprite = atlas
     this.currentTarget = this
     
    new(AnimationJoueur as any)(this.anims)
    console.log(Aptitudes);
    const self = this;
    
    DefautDirection(Aptitudes, this);
     (Aptitudes as any)[this.sprite].StatsSupplementaire.call(self, self, Aptitudes)

     //@ts-ignore
    this.commande = this.scene.input.keyboard.createCursorKeys();

   }
   preUpdate(time: number, delta: number) {
     super.preUpdate(time, delta);
     
       if (this.commande.left.isDown) {
           this.setVelocityX(-this.vel);

           this.anims.play(`deplacement_${this.sprite}`, true);
       }
       else if (this.commande.right.isDown) {
           this.setVelocityX(this.vel);

           this.anims.play(`deplacement_${this.sprite}`, true);
       }
       else {
           this.setVelocityX(0);
           this.anims.play(`inactif_${this.sprite}`, true);
       }
   }
 }