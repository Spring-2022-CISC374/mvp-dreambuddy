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
    this.ship = this.add.sprite(config.width / 2 - 70, config.height / 2, "ship");
    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship);
    this.ship.setInteractive();
    this.physics.add.overlap(this.player1, this.enemies, this.collectItem, null, this);
    this.physics.add.collider(this.enemies, this.players, function(enemy, player) {
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

    this.moveShip(this.ship, 2);

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

  moveShip(ship, speed) {
    ship.y += speed;
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
