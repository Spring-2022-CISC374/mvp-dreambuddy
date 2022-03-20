class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
      this.load.image("background", "assets/images/background.png");

     this.load.spritesheet('player-left', 'assets/images/player-one-left.png', {
        frameWidth: 67,  // 268/4
        frameHeight: 100 // 400/4
      }); 


     this.load.spritesheet('player-right', 'assets/images/player-one-right.png', {
      frameWidth: 67, // 268/4
      frameHeight: 100 // 400/4
    }); 

    }
  
    create() {
      this.scene.start("playGame");        

    }
  }