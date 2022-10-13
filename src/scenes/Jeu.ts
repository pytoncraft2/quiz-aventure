
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

		// rectangle
		const rectangle = this.add.rectangle(1209, 165, 128, 128);
		rectangle.scaleX = 18.88366025235117;
		rectangle.scaleY = 2.521640189639836;
		rectangle.isFilled = true;
		rectangle.fillColor = 8046835;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(154, 53, 128, 128);
		ellipse_1.scaleX = 1.706648128197417;
		ellipse_1.scaleY = 0.5204828671203658;
		ellipse_1.isFilled = true;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(1000, 64, 128, 128);
		ellipse_2.scaleX = 1.2849814609962906;
		ellipse_2.scaleY = 0.4097457524219835;
		ellipse_2.isFilled = true;

		// ellipse_3
		const ellipse_3 = this.add.ellipse(1573, 50, 128, 128);
		ellipse_3.scaleX = 1.55009444467926;
		ellipse_3.scaleY = 0.5471583642430621;
		ellipse_3.isFilled = true;
		ellipse_3.fillColor = 15790320;

		// ellipse_4
		const ellipse_4 = this.add.ellipse(759.4920462544277, 83.2829390678196, 128, 128);
		ellipse_4.scaleX = 1.2849814609962906;
		ellipse_4.scaleY = 0.4097457524219835;
		ellipse_4.isFilled = true;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(530.445940563348, 27.756610415436658, 128, 128);
		ellipse_5.scaleX = 1.2849814609962906;
		ellipse_5.scaleY = 0.4097457524219835;
		ellipse_5.isFilled = true;
		ellipse_5.fillAlpha = 0.7;

		// ellipse
		const ellipse = this.add.ellipse(1106.5316003318212, 55.519774741628126, 128, 128);
		ellipse.scaleX = 1.2849814609962906;
		ellipse.scaleY = 0.4097457524219835;
		ellipse.isFilled = true;
		ellipse.fillAlpha = 0.7;

		// ellipse_6
		const ellipse_6 = this.add.ellipse(330.8981969688468, 58.99017028240206, 128, 128);
		ellipse_6.scaleX = 1.2849814609962906;
		ellipse_6.scaleY = 0.4097457524219835;
		ellipse_6.isFilled = true;
		ellipse_6.fillAlpha = 0.7;

		// triangle
		const triangle = this.add.triangle(359, 289, 0, 128, 64, 0, 128, 128);
		triangle.scaleX = 2.353493048152178;
		triangle.scaleY = 2.282151254720174;
		triangle.isFilled = true;
		triangle.fillColor = 5472080;

		// triangle_1
		const triangle_1 = this.add.triangle(209, 322, 0, 128, 64, 0, 128, 128);
		triangle_1.scaleX = 1.8242469745484022;
		triangle_1.scaleY = 1.767888400118169;
		triangle_1.isFilled = true;
		triangle_1.fillColor = 5876308;

		// triangle_2
		const triangle_2 = this.add.triangle(824, 286, 0, 128, 64, 0, 128, 128);
		triangle_2.scaleX = 2.353493048152178;
		triangle_2.scaleY = 2.282151254720174;
		triangle_2.isFilled = true;
		triangle_2.fillColor = 5472080;

		// triangle_3
		const triangle_3 = this.add.triangle(1037, 316, 0, 128, 64, 0, 128, 128);
		triangle_3.scaleX = 2.353493048152178;
		triangle_3.scaleY = 2.282151254720174;
		triangle_3.isFilled = true;
		triangle_3.fillColor = 8953734;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(568, 423, 128, 128);
		rectangle_2.scaleX = 0.17339421603991745;
		rectangle_2.scaleY = 0.8446000867118206;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 6306819;

		// ellipse_8
		const ellipse_8 = this.add.ellipse(560, 346, 128, 128);
		ellipse_8.scaleX = 0.6085671039031112;
		ellipse_8.scaleY = 0.6085671039031112;
		ellipse_8.isFilled = true;
		ellipse_8.fillColor = 1293371;
		ellipse_8.isStroked = true;

		// ellipse_9
		const ellipse_9 = this.add.ellipse(589, 341, 128, 128);
		ellipse_9.scaleX = 0.6085671039031112;
		ellipse_9.scaleY = 0.6085671039031112;
		ellipse_9.isFilled = true;
		ellipse_9.fillColor = 1159479;
		ellipse_9.isStroked = true;

		// ellipse_7
		const ellipse_7 = this.add.ellipse(577, 356, 128, 128);
		ellipse_7.scaleX = 0.6085671039031112;
		ellipse_7.scaleY = 0.6085671039031112;
		ellipse_7.isFilled = true;
		ellipse_7.fillColor = 1232190;
		ellipse_7.isStroked = true;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(551, 420, 128, 128);
		rectangle_3.scaleX = 0.07874256901916143;
		rectangle_3.scaleY = 0.4148767777757858;
		rectangle_3.angle = -48.00000000000006;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 6306819;

		// ellipse_10
		const ellipse_10 = this.add.ellipse(532, 406, 128, 128);
		ellipse_10.scaleX = 0.2478468817603896;
		ellipse_10.scaleY = 0.2478468817603896;
		ellipse_10.isFilled = true;
		ellipse_10.fillColor = 1232190;

		// ellipse_11
		const ellipse_11 = this.add.ellipse(777, 520, 128, 128);
		ellipse_11.scaleX = 2.500652874464774;
		ellipse_11.scaleY = 0.3753333900772714;
		ellipse_11.isFilled = true;
		ellipse_11.fillColor = 8575955;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	joueurs!: Phaser.GameObjects.Group

	// Write your code here

	create() {
		this.joueurs = this.physics.add.group({
			runChildUpdate: true,
			collideWorldBounds: true
		})
		this.creationJoueur('boy_atlas', 'idle1', 'id')

		this.editorCreate();
	}

	creationJoueur(atlas: any, frame: string, ClientId: string, x = 287, y = 464) {
		const joueur = this.add.existing(new Joueur(this, x, y, atlas, ClientId, frame, false))
		joueur
			.setScale(0.3)
			.setDepth(1)
			this.joueurs.add(joueur)
			// this.playersRef[ClientId] = player
		// return this.getPresence()
	}

	suppressionJoueur(_ClientId: any) {
		// this.playersRef[ClientId].destroy(true)
		// delete this.playersRef[ClientId]
		// return this.getPresence()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
