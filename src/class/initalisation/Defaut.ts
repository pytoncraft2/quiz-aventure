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
       }
       else {
           personnage.setVelocityX(0);
           personnage.anims.play(`inactif_${personnage.sprite}`, true);
       }
  }
}