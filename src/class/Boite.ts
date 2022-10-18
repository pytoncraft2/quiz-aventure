import Jeu from "../scenes/Jeu";

export default class Boite extends Phaser.GameObjects.Rectangle {
    rect!: Phaser.GameObjects.Rectangle
    point_interrogation!: Phaser.GameObjects.Text

    constructor(scene: Jeu, x: number, y: number, width: number, height: number, fillColor: any) {
        super(scene, x, y, width, height, fillColor);

        // const animationRect = scene.add.rectangle(x, y, width + 60, height + 60);
		// animationRect.scaleX = 0.50013023026658265;
		// animationRect.scaleY = 0.50013023026658265;
		// animationRect.isFilled = true;
		// animationRect.setAlpha(0.1);
        // this.rect = animationRect
        scene.add.existing(this);

		const point_interrogation = scene.add.text(x, y, "", {});
		point_interrogation.scaleX = 1.8887616340344677;
		point_interrogation.scaleY = 1.8887616340344677;
		point_interrogation.setOrigin(0.5, 0.5);
		point_interrogation.text = "?";
        this.point_interrogation = point_interrogation


        // scene.add.tween({
            // targets: animationRect,
            // scale: "+=0.04",
            // alpha: 0.2,
            // yoyo: true,
            // ease: "Bounce.easeIn",
            // repeat: -1
        // })


    }

        toucher() {
            this.scene.tweens.add({
                targets: this,
                scale: 29,
                duration: 1000
            })

            this.scene.tweens.add({
                targets: (this.scene as any).question,
                alpha: 1,
                duration: 1000
            })

            //@ts-ignore
            this.scene.question.setVisible(true)
            //@ts-ignore
            this.scene.question.setDepth(100)
            console.log(this.point_interrogation);
            
            this.point_interrogation.setText("OUIiiiiiiiiiiii")
            // this.rect.setAlpha(0)
        }


    // preUpdate(time, delta) {}
}