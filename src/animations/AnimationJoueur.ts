export function AnimationJoueur(anim: Phaser.Animations.AnimationState){
  anim.create({
    key: 'marche',
    frames: anim.generateFrameNames('boy_atlas', { prefix: 'walk', start: 1, end: 15 }),
    frameRate: 15,
    repeat: 0
  });
}

export function AnimationBombe(anim: Phaser.Animations.AnimationState){
  anim.create({
    key: 'akhizonah_bombe',
    frames: anim.generateFrameNames('atlas', { prefix: 'bombe', start: 0, end: 8 }),
    frameRate: 13,
    repeat: 0,
    delay: 1500
  });
}

export function AnimationOie(anim: Phaser.Animations.AnimationState) {
  anim.create({
    key: 'oie_tire',
    frames: anim.generateFrameNames('atlas', { prefix: 'attack', start: 0, end: 13 }),
    frameRate: 20,
    repeat: -1
  });
}

export const setAnimation = (sprite: Phaser.GameObjects.Sprite, animation: string = 'idle') => {
  if (!sprite.anims.isPlaying) sprite.play(animation)
  else if (sprite.anims.isPlaying && sprite.anims.getName() !== animation) sprite.play(animation)
}
