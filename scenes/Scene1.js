class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/background.png");

    this.load.spritesheet('player-left', 'assets/images/player-one-left.png', {
      frameWidth: 67,  // 268/4
      frameHeight: 100 // 400/4
    });


    this.load.spritesheet('player-right', 'assets/images/player-one-right.png', {
      frameWidth: 67, // 268/4
      frameHeight: 100 // 400/4
    });

    // Placeholder for sleep items
    this.load.spritesheet("ship", "assets/images/ship.png", {
      frameWidth: 32,
      frameHeight: 16
    });

    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    // Images for feedback pop-ups
    this.load.image("close", "assets/images/close-button.png");
    this.load.image("background", "assets/images/box-back.png");
  }

  create() {
    //escape keyboard input
    this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  }

  update() {
    if (Phaser.Input.Keyboard.JustUp(this.escKey)) {
      this.scene.start("mainMenu");
    }

    this.scene.start("playGame");

  }
}