export const DefautStats = (personnage?: any) => {
      personnage.vie = 10;
      personnage.degat = 1;
}

export const DefautDirection = (Aptitudes: any, personnage: any) => {

      //  if (personnage.commande.left.isDown) {
          //  personnage && personnage.setVelocityX(-160);
          //  personnage.anims.play('marche', true);
      //  }
      //  else if (personnage.commande.right.isDown) {
          //  personnage && personnage.setVelocityX(160);
          //  personnage.anims.play('marche', true);
      //  }
      //  else {
          //  personnage.setVelocityX(0);
          //  personnage.anims.play('inactif', true);
      //  }

  Aptitudes[personnage.sprite].toucheDroite = (personnage: any, input: any) => {
    personnage.body.setVelocityX(190)
  }
  // Aptitudes[personnage.sprite].toucheGauche = (personnage: any, input: any) => {
  //   personnage.body.setVelocityX(-190)
  // }
  // Aptitudes[personnage.sprite].toucheEspace = (personnage: Phaser.Physics.Arcade.Sprite, _input: any) => {
  // }
  // Aptitudes[personnage.sprite].toucheHaut = (personnage: any, input: any) => {
  // }
  // Aptitudes[personnage.sprite].toucheBas = (personnage: any, input: any) => {
  // }
}