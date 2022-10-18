import Jeu from "../scenes/Jeu";

export default class Boite extends Phaser.GameObjects.Rectangle {
    constructor(scene: Jeu, x: number, y: number, width: number, height: number, fillColor: any) {
        super(scene, x, y, width, height, fillColor);

        const animationRect = scene.add.rectangle(x, y, width + 60, height + 60);
		animationRect.scaleX = 0.50013023026658265;
		animationRect.scaleY = 0.50013023026658265;
		animationRect.isFilled = true;
		animationRect.setAlpha(0.1);
        scene.add.existing(this);

		const text_4 = scene.add.text(x, y, "", {});
		text_4.scaleX = 1.8887616340344677;
		text_4.scaleY = 1.8887616340344677;
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "?";


        scene.add.tween({
            targets: animationRect,
            scale: "+=0.04",
            alpha: 0.2,
            yoyo: true,
            ease: "Bounce.easeIn",
            repeat: -1
        })


    }

        toucher() {
            this.scene.tweens.add({
                targets: this,
                scale: 29,
                duration: 1000
            })
        }


    // preUpdate(time, delta) {}
}