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

    // Load donut
    this.load.spritesheet("donut", "assets/images/bad-items/donut.png", {
      frameWidth: 122,
      frameHeight: 116
    });

    // Load icecream
    this.load.spritesheet("icecream", "assets/images/bad-items/ice-cream.png", {
      frameWidth: 90,
      frameHeight: 120
    });

    // Load juice
    this.load.spritesheet("juice", "assets/images/bad-items/juice.png", {
      frameWidth: 92,
      frameHeight: 138
    });

    // Load phone
    this.load.spritesheet("phone", "assets/images/bad-items/phone.png", {
      frameWidth: 134,
      frameHeight: 94
    });

    // Load tv
    this.load.spritesheet("tv", "assets/images/bad-items/tv.png", {
      frameWidth: 113,
      frameHeight: 113
    });

    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    // Images for feedback pop-ups
    this.load.image("close", "assets/images/close-button.png");
    this.load.image("background", "assets/images/box-back.png");
  }

  create() {
    //background image
    this.background = this.add.image(0, 0, "menu_bg");
    this.background.setOrigin(0, 0);

    this.add.text(this.game.renderer.width / 4, this.game.renderer.height * 0.25, "Welcome to Game 1 of 2", {fontSize: '32px'});
    this.add.text(this.game.renderer.width / 9, this.game.renderer.height * 0.50, "Use the left and right arrow keys to move.\nCollect the objects that are beneficial to\na healthy sleeping routine.\nAvoid the harmful ones!", 
    {fontSize: '25px', fill: '#FFF', align: 'center'});

    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.75, "play_button").setDepth(1);

    playButton.setInteractive();

    playButton.on("pointerup", () =>{
      this.scene.start("playGame");
    });

  }
}