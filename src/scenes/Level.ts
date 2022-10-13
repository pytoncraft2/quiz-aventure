// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// jouer
		const jouer = this.add.text(400, 300, "", {});
		jouer.setOrigin(0.5, 0.5);
		jouer.text = "Jouer";
		jouer.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		this.jouer = jouer;

		this.events.emit("scene-awake");
	}

	public jouer!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	preload()
	{
		//this.load.image("FufuSuperDino", '../../static/assets/FufuSuperDino.png')
	}

	create() {
		const self = this;
		this.editorCreate();
		this.jouer.setInteractive().on('pointerdown', function(){
			self.scene.start('Jeu')
		}, this);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here