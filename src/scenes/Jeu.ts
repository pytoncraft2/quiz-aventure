
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Joueur from "../class/Joueur"
/* END-USER-IMPORTS */

export default class Jeu extends Phaser.Scene {

	constructor() {
		super("Jeu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1210, 519, 128, 128);
		rectangle_1.scaleX = 18.88366025235117;
		rectangle_1.scaleY = 1.315980682445885;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3171472;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		const joueur = this.add.existing(new Joueur(this, 287, 464, "boy_atlas", '12345', "idle1", false))
		joueur
			.setScale(0.3)
			.setDepth(1)
		console.log(joueur);

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
