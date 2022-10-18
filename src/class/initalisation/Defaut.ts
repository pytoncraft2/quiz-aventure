export const DefautStats = (personnage?: any) => {
      personnage.vie = 10;
      personnage.degat = 1;
}

export const DefautDirection = (Aptitudes: any, personnage: any) => {
  Aptitudes[personnage.sprite].deplacement = (personnage: any, _input: any) => {
       if (personnage.commande.left.isDown) {
           personnage && personnage.setVelocityX(-180);
           personnage.anims.play(`deplacement_${personnage.sprite}`, true);
       }
       else if (personnage.commande.right.isDown) {
           personnage && personnage.setVelocityX(180);
           personnage.anims.play(`deplacement_${personnage.sprite}`, true);
       } else if (Phaser.Input.Keyboard.JustDown(personnage.commande.space)) {
        personnage.setVelocityY(-500)
        personnage.anims.play(`saut_${personnage.sprite}`)
      }

       else {
           personnage.body?.touching.down && (personnage.anims.play(`inactif_${personnage.sprite}`, true), personnage.setVelocityX(0))
       }

        }
}