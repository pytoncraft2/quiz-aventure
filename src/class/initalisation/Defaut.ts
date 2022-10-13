export const DefautStats = (personnage?: any) => {
      personnage.vie = 10;
      personnage.degat = 1;
}

export const DefautDirection = (Aptitudes: any, personnage: any) => {
  Aptitudes[personnage.sprite].toucheDroite = (personnage: any, input: any) => {
    personnage.body.setVelocityX(190)
  }
  Aptitudes[personnage.sprite].toucheGauche = (personnage: any, input: any) => {
    personnage.body.setVelocityX(-190)
  }
  Aptitudes[personnage.sprite].toucheEspace = (personnage: Phaser.Physics.Arcade.Sprite, _input: any) => {
  }
  Aptitudes[personnage.sprite].toucheHaut = (personnage: any, input: any) => {
  }
  Aptitudes[personnage.sprite].toucheBas = (personnage: any, input: any) => {
  }
}

function direction(debut: boolean, fin: boolean, personnage: any, _input: any, dir: boolean) {
  // if (debut) {
  //   personnage.setFlipX(!dir)
  //   personnage.play('walk', true)
  // }
  // else if (fin) {
  //   personnage.setVelocityX(0)
  //   personnage.play('idle_walk', true)
  // }
  // else personnage.setVelocityX(dir ? (personnage as any).vel : -(personnage as any).vel)
  console.log("DIRECTION");
  
}

function changementEtage(personnage: any, velocite: any, delai: any){
    personnage.body.checkCollision.none = true;
    personnage.setVelocityY(velocite);
    personnage.scene.time.delayedCall(delai, () => {
      personnage.body.checkCollision.none = false;
    }, null, personnage);
}
