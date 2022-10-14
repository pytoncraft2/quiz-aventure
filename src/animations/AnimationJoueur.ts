export function AnimationJoueur(anim: Phaser.Animations.AnimationState){
  anim.create({
    key: 'deplacement_boy_atlas',
    frames: anim.generateFrameNames('boy_atlas', { prefix: 'walk', start: 1, end: 15 }),
    frameRate: 33,
    repeat: 0
  });
  anim.create({
    key: 'inactif_boy_atlas',
    frames: anim.generateFrameNames('boy_atlas', { prefix: 'idle', start: 1, end: 15 }),
    frameRate: 15,
    repeat: 0
  });

    anim.create({
    key: 'deplacement_girl_atlas',
    frames: anim.generateFrameNames('girl_atlas', { prefix: 'run', start: 1, end: 8 }),
    frameRate: 22,
    repeat: 0
  });
  anim.create({
    key: 'inactif_girl_atlas',
    frames: anim.generateFrameNames('girl_atlas', { prefix: 'idle', start: 1, end: 10 }),
    frameRate: 15,
    repeat: 0
  });
}

export const setAnimation = (sprite: Phaser.GameObjects.Sprite, animation: string = 'idle') => {
  if (!sprite.anims.isPlaying) sprite.play(animation)
  else if (sprite.anims.isPlaying && sprite.anims.getName() !== animation) sprite.play(animation)
}
