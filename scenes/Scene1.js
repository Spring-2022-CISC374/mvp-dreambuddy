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

    // Load bed
    this.load.spritesheet("bed", "assets/images/good-items/bed.png", {
      frameWidth: 150,
      frameHeight: 85
    });

    // Load book
    this.load.spritesheet("book", "assets/images/good-items/book.png", {
      frameWidth: 155,
      frameHeight: 82
    });

    // Load milk
    this.load.spritesheet("milk", "assets/images/good-items/milk.png", {
      frameWidth: 120,
      frameHeight: 120
    });

    // Load pillow
    this.load.spritesheet("pillow", "assets/images/good-items/pillow.png", {
      frameWidth: 113,
      frameHeight: 78
    });

    // Load toothbrush
    this.load.spritesheet("toothbrush", "assets/images/good-items/toothbrush.png", {
      frameWidth: 162,
      frameHeight: 78
    });

    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    // Images for feedback pop-ups
    this.load.image("close", "assets/images/close-button.png");
    this.load.image("background", "assets/images/box-back.png");
  }

  create() {

  }

  update() {

    this.scene.start("playGame");

  }
}