
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

		// nuage_premier_plan
		const nuage_premier_plan = this.add.container(509.1020812988281, 15.979729652404785);

		// ellipse_3
		const ellipse_3 = this.add.ellipse(1063.8979187011719, 34.020270347595215, 128, 128);
		ellipse_3.scaleX = 1.55009444467926;
		ellipse_3.scaleY = 0.5471583642430621;
		ellipse_3.isFilled = true;
		ellipse_3.fillColor = 15790320;
		nuage_premier_plan.add(ellipse_3);

		// ellipse_12
		const ellipse_12 = this.add.ellipse(176, 179, 128, 128);
		ellipse_12.scaleX = 0.9802067329790795;
		ellipse_12.scaleY = 0.3114300211895095;
		ellipse_12.isFilled = true;
		ellipse_12.fillColor = 15790320;
		ellipse_12.fillAlpha = 0.3;
		nuage_premier_plan.add(ellipse_12);

		// ellipse_13
		const ellipse_13 = this.add.ellipse(369, 158, 128, 128);
		ellipse_13.scaleX = 0.9891390471466819;
		ellipse_13.scaleY = 0.34498158682333724;
		ellipse_13.isFilled = true;
		ellipse_13.fillColor = 15790320;
		ellipse_13.fillAlpha = 0.5;
		nuage_premier_plan.add(ellipse_13);

		// ellipse_14
		const ellipse_14 = this.add.ellipse(-118, 172, 128, 128);
		ellipse_14.scaleX = 0.5970009334157442;
		ellipse_14.scaleY = 0.24049550712169382;
		ellipse_14.isFilled = true;
		ellipse_14.fillColor = 15790320;
		ellipse_14.fillAlpha = 0.6;
		nuage_premier_plan.add(ellipse_14);

		// ellipse_11
		const ellipse_11 = this.add.ellipse(777, 520, 128, 128);
		ellipse_11.scaleX = 2.500652874464774;
		ellipse_11.scaleY = 0.3753333900772714;
		ellipse_11.isFilled = true;
		ellipse_11.fillColor = 8575955;

		// ombre
		const ombre = this.add.ellipse(246, 519, 128, 128);
		ombre.scaleX = 0.3703794683909353;
		ombre.scaleY = 0.11369542430293023;
		ombre.isFilled = true;
		ombre.fillColor = 0;
		ombre.fillAlpha = 0.3;

		// montagnes
		const montagnes = this.add.container(209, 286);

		// triangle
		const triangle = this.add.triangle(150, 3, 0, 128, 64, 0, 128, 128);
		triangle.scaleX = 2.353493048152178;
		triangle.scaleY = 2.282151254720174;
		triangle.isFilled = true;
		triangle.fillColor = 5472080;
		montagnes.add(triangle);

		// triangle_1
		const triangle_1 = this.add.triangle(0, 36, 0, 128, 64, 0, 128, 128);
		triangle_1.scaleX = 1.8242469745484022;
		triangle_1.scaleY = 1.767888400118169;
		triangle_1.isFilled = true;
		triangle_1.fillColor = 5876308;
		montagnes.add(triangle_1);

		// triangle_2
		const triangle_2 = this.add.triangle(615, 0, 0, 128, 64, 0, 128, 128);
		triangle_2.scaleX = 2.353493048152178;
		triangle_2.scaleY = 2.282151254720174;
		triangle_2.isFilled = true;
		triangle_2.fillColor = 5472080;
		montagnes.add(triangle_2);

		// triangle_3
		const triangle_3 = this.add.triangle(828, 30, 0, 128, 64, 0, 128, 128);
		triangle_3.scaleX = 2.353493048152178;
		triangle_3.scaleY = 2.282151254720174;
		triangle_3.isFilled = true;
		triangle_3.fillColor = 8953734;
		montagnes.add(triangle_3);

		// nuages
		const nuages = this.add.container(154, 27.756610870361328);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(118, 27, 128, 128);
		ellipse_1.scaleX = 1.5431337769345972;
		ellipse_1.scaleY = 0.42072301230973946;
		ellipse_1.isFilled = true;
		ellipse_1.fillAlpha = 0.9;
		nuages.add(ellipse_1);

		// ellipse_2
		const ellipse_2 = this.add.ellipse(846, 36.24338912963867, 128, 128);
		ellipse_2.scaleX = 1.2849814609962906;
		ellipse_2.scaleY = 0.4097457524219835;
		ellipse_2.isFilled = true;
		ellipse_2.fillAlpha = 0.9;
		nuages.add(ellipse_2);

		// ellipse_4
		const ellipse_4 = this.add.ellipse(770, 20, 128, 128);
		ellipse_4.scaleX = 1.2849814609962906;
		ellipse_4.scaleY = 0.4097457524219835;
		ellipse_4.isFilled = true;
		ellipse_4.fillAlpha = 0.7;
		nuages.add(ellipse_4);

		// ellipse_5
		const ellipse_5 = this.add.ellipse(467, 36, 128, 128);
		ellipse_5.scaleX = 1.2849814609962906;
		ellipse_5.scaleY = 0.4097457524219835;
		ellipse_5.isFilled = true;
		ellipse_5.fillAlpha = 0.7;
		nuages.add(ellipse_5);

		// ellipse
		const ellipse = this.add.ellipse(952.5316162109375, 27.763164520263672, 128, 128);
		ellipse.scaleX = 1.2849814609962906;
		ellipse.scaleY = 0.4097457524219835;
		ellipse.isFilled = true;
		ellipse.fillAlpha = 0.7;
		nuages.add(ellipse);

		// ellipse_6
		const ellipse_6 = this.add.ellipse(69, 53, 128, 128);
		ellipse_6.scaleX = 1.1128570730399714;
		ellipse_6.scaleY = 0.4472654549694031;
		ellipse_6.isFilled = true;
		ellipse_6.fillAlpha = 0.7;
		nuages.add(ellipse_6);

		// arbre
		const arbre = this.add.container(532, 341);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(36, 82, 128, 128);
		rectangle_2.scaleX = 0.17339421603991745;
		rectangle_2.scaleY = 0.8446000867118206;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 6306819;
		arbre.add(rectangle_2);

		// ellipse_8
		const ellipse_8 = this.add.ellipse(28, 5, 128, 128);
		ellipse_8.scaleX = 0.6085671039031112;
		ellipse_8.scaleY = 0.6085671039031112;
		ellipse_8.isFilled = true;
		ellipse_8.fillColor = 1293371;
		ellipse_8.isStroked = true;
		arbre.add(ellipse_8);

		// ellipse_9
		const ellipse_9 = this.add.ellipse(57, 0, 128, 128);
		ellipse_9.scaleX = 0.6085671039031112;
		ellipse_9.scaleY = 0.6085671039031112;
		ellipse_9.isFilled = true;
		ellipse_9.fillColor = 1159479;
		ellipse_9.isStroked = true;
		arbre.add(ellipse_9);

		// ellipse_7
		const ellipse_7 = this.add.ellipse(45, 15, 128, 128);
		ellipse_7.scaleX = 0.6085671039031112;
		ellipse_7.scaleY = 0.6085671039031112;
		ellipse_7.isFilled = true;
		ellipse_7.fillColor = 1232190;
		ellipse_7.isStroked = true;
		arbre.add(ellipse_7);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(19, 79, 128, 128);
		rectangle_3.scaleX = 0.07874256901916143;
		rectangle_3.scaleY = 0.4148767777757858;
		rectangle_3.angle = -48.00000000000006;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 6306819;
		arbre.add(rectangle_3);

		// ellipse_10
		const ellipse_10 = this.add.ellipse(0, 65, 128, 128);
		ellipse_10.scaleX = 0.2478468817603896;
		ellipse_10.scaleY = 0.2478468817603896;
		ellipse_10.isFilled = true;
		ellipse_10.fillColor = 1232190;
		arbre.add(ellipse_10);

		this.nuage_premier_plan = nuage_premier_plan;
		this.ombre = ombre;
		this.montagnes = montagnes;
		this.nuages = nuages;

		this.events.emit("scene-awake");
	}

	public nuage_premier_plan!: Phaser.GameObjects.Container;
	public ombre!: Phaser.GameObjects.Ellipse;
	public montagnes!: Phaser.GameObjects.Container;
	public nuages!: Phaser.GameObjects.Container;

	/* START-USER-CODE */
	joueurs!: Phaser.GameObjects.Group

	// Write your code here

	create() {
		this.editorCreate();
		this.montagnes.setScrollFactor(0.3)
		this.nuages.setScrollFactor(0.4)
		this.nuage_premier_plan.setScrollFactor(0.2)

		this.joueurs = this.physics.add.group({
			runChildUpdate: true,
			collideWorldBounds: false
		})

		const width = this.scale.width
		const height = this.scale.height

		const totalWidth = width * 20


		const joueur = this.creationJoueur('boy_atlas', 'idle1', 'id')
		this.cameras.main.setBounds(0, 0, width * 20, height)
		this.cameras.main.startFollow(joueur, false, 1, 1, 0);

	}

	creationJoueur(atlas: any, frame: string, ClientId: string, x = 287, y = 464) {
		const joueur = this.add.existing(new Joueur(this, x, y, atlas, ClientId, frame, false))
		joueur
			.setScale(0.3)
			.setDepth(10)
			.setData({ClientId})
			this.joueurs.add(joueur)
			return joueur;
	}

	suppressionJoueur(_ClientId: any) {
		this.joueurs.getMatching('ClientID',_ClientId)[0]?.destroy();
	}


	update(_time: number, _delta: number): void {}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
