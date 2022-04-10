class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    //escape keyboard input
    this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    // placement of player
    this.player1 = this.physics.add.sprite(config.width / 2 - 70, config.height / 10 * 9, "player-left");

    this.anims.create({
      key: "player_left_anim",
      frames: this.anims.generateFrameNumbers("player-left"),
      frameRate: 16, // speed of animation
      repeat: -1
    });

    this.anims.create({
      key: "player_right_anim",
      frames: this.anims.generateFrameNumbers("player-right"),
      frameRate: 16, // speed of animation
      repeat: -1
    });

    this.player1.play("player_left_anim");
    // this.player1.play("player_right_anim");

    this.players = this.physics.add.group();
    this.players.add(this.player1);
    this.physics.world.setBoundsCollision();
    
    this.bed = this.add.sprite(Math.random() * (1000 - 200), 0, "bed");
    this.book = this.add.sprite(Math.random() * (1000 - 200), 0, "book");
    this.milk = this.add.sprite(Math.random() * (1000 - 200), 0, "milk");
    this.pillow = this.add.sprite(Math.random() * (1000 - 200), 0, "pillow");
    this.toothbrush = this.add.sprite(Math.random() * (1000 - 200), 0, "toothbrush");
    
    this.goodItems = this.physics.add.group();
    this.goodItems.add(this.bed);
    this.goodItems.add(this.book);
    this.goodItems.add(this.milk);
    this.goodItems.add(this.pillow);
    this.goodItems.add(this.toothbrush);
    
    this.bed.setInteractive();
    this.book.setInteractive();
    this.milk.setInteractive();
    this.pillow.setInteractive();
    this.toothbrush.setInteractive();
   
    this.physics.add.overlap(this.player1, this.goodItems, this.collectItem, null, this);
    this.physics.add.collider(this.goodItems, this.players, function(enemy, player) {
      enemy.destroy();
    });

    this.score = 0;
    this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE ", 75);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    
    //this.players.get("player-left").setInteractive();
    //this.players.get("player-left").setCollideWorldBounds(true);

    this.posFeedbackText = this.add.text(400, 400, "You did it! You collected a good object!", {fontSize: '32px', fill: '#000'});
    this.posFeedbackText.setOrigin(0.5);
    this.posFeedbackText.visible = false;

    this.closeButton = this.add.image(400, 600, "close").setDepth(1);
    this.closeButton.setScale(0.3);
    this.closeButton.setInteractive();
    this.closeButton.on("pointerup", () =>{
      this.posFeedbackText.visible = false;
      this.closeButton.visible = false;
    });
    this.closeButton.visible = false;
  }

  update() {
    if (Phaser.Input.Keyboard.JustUp(this.escKey)) {
      this.scene.start("mainMenu");
    }

    this.moveBed(this.bed, 5);
    this.moveBook(this.book, 5);
    this.moveMilk(this.milk, 5);
    this.movePillow(this.pillow, 5);
    this.moveToothbrush(this.toothbrush, 5);

    this.movePlayerManager();
    
  }

  collectGoodItem() {
    console.log("collected good item");
    this.score += 10;
    this.scoreLabel.text = "SCORE " + this.score;
    
  }

  collectItem() {
    //this.physics.pause();
    
    this.closeButton.visible = true;
    // Later: if good call this, else call opposite (2 different feedback messages)
    this.posFeedbackText.visible = true;
    this.collectGoodItem();
  }

  moveBed(bed, speed) {
    if (bed.y > config.height) {
      bed.y = 0;
      bed.x = Math.random() * (1000 - 200);
    }
    bed.y += speed;
  }

  moveBook(book, speed) {
    if (book.y > config.height) {
      book.y = 0;
      book.x = Math.random() * (1000 - 200);
    }
    book.y += speed;
  }

  moveMilk(milk, speed) {
    if (milk.y > config.height) {
      milk.y = 0;
      milk.x = Math.random() * (1000 - 200);
    }
    milk.y += speed;
  }

  movePillow(pillow, speed) {
    if (pillow.y > config.height) {
      pillow.y = 0;
      pillow.x = Math.random() * (1000 - 200);
    }
    pillow.y += speed;
  }

  moveToothbrush(toothbrush, speed) {
    if (toothbrush.y > config.height) {
      toothbrush.y = 0;
      toothbrush.x = Math.random() * (1000 - 200);
    }
    toothbrush.y += speed;
  }

  movePlayerManager(){

    if(this.cursorKeys.left.isDown)
      this.players.setVelocityX(-300);
    else if(this.cursorKeys.right.isDown)
      this.players.setVelocityX(300);
    else{
      this.players.setVelocityX(0);
    }
      
  }

}
