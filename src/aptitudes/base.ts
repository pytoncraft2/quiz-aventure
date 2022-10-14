import TJoueur from "../types/Joueur";

export interface Touches {
    [personnage: string]: {
        StatsSupplementaire?: (joueur: TJoueur, Aptitudes: Touches) => void,
        /** Activation fonction correspondant à la touche **A** */
        A?: (joueur: Phaser.Physics.Arcade.Sprite, input: any) => void;
        /** Activation fonction correspondant à la touche **Z** */
        Z?: (joueur: Phaser.Physics.Arcade.Sprite, input: any) => void;
        /** Activation fonction correspondant à la touche **E** */
        E?: (joueur: Phaser.Physics.Arcade.Sprite, input: any) => void;
        /** Activation fonction correspondant à la touche **R** */
        R?: (joueur: Phaser.Physics.Arcade.Sprite, input: any) => void;
        /** Activation fonction correspondant à la **TAB** */
        TAB?: (joueur: Phaser.Physics.Arcade.Sprite, input: any) => void;
        toucheGauche?: (joueur: TJoueur, input: any) => void;
        toucheDroite?: (joueur: TJoueur, input: any) => void;
        toucheHaut?: (joueur: TJoueur, input: any) => void;
        toucheBas?: (joueur: TJoueur, input: any) => void;
        toucheEspace?: (joueur: TJoueur, input: any) => void;
        deplacement?: (joueur: TJoueur, input: any) => void;
        auto?(joueur: TJoueur, input: any, Aptitudes?: any): void;
    }
}

const Aptitudes: Touches = {};

Aptitudes['boy_atlas'] = {
    StatsSupplementaire: (_joueur: TJoueur, _Aptitudes: Touches) => {},
    A: (_params: Phaser.Physics.Arcade.Sprite) => {},
    toucheGauche: (_joueur: TJoueur, _input: any) => {},
    toucheDroite: (_joueur: TJoueur, _input: any) => {},
    toucheHaut: (_joueur: TJoueur, _input: any) => {},
    toucheBas: (_joueur: TJoueur, _input: any) => {},
    toucheEspace: (_joueur: TJoueur, _input: any) => {},
    deplacement: (_joueur: TJoueur, _input: any) => {}
}

Aptitudes['girl_atlas'] = {
    StatsSupplementaire: (_joueur: TJoueur, _Aptitudes: Touches) => {},
    A: (_params: Phaser.Physics.Arcade.Sprite) => {},
    toucheGauche: (_joueur: TJoueur, _input: any) => {},
    toucheDroite: (_joueur: TJoueur, _input: any) => {},
    toucheHaut: (_joueur: TJoueur, _input: any) => {},
    toucheBas: (_joueur: TJoueur, _input: any) => {},
    toucheEspace: (_joueur: TJoueur, _input: any) => {},
    deplacement: (_joueur: TJoueur, _input: any) => {}
}

export default Aptitudes;