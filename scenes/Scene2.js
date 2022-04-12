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

    //this.player1.play("player_left_anim");
    // this.player1.play("player_right_anim");

    this.players = this.physics.add.group();
    this.players.add(this.player1);
    this.physics.world.setBoundsCollision();
    
    this.bed = this.add.sprite(Math.random() * (1000 - 200), 0, "bed");
    this.book = this.add.sprite(Math.random() * (1000 - 200), 0, "book");
    this.milk = this.add.sprite(Math.random() * (1000 - 200), 0, "milk");
    this.pillow = this.add.sprite(Math.random() * (1000 - 200), 0, "pillow");
    this.toothbrush = this.add.sprite(Math.random() * (1000 - 200), 0, "toothbrush");

    this.donut = this.add.sprite(Math.random() * (1000 - 200), 0, "donut");
    this.icecream = this.add.sprite(Math.random() * (1000 - 200), 0, "icecream");
    this.juice = this.add.sprite(Math.random() * (1000 - 200), 0, "juice");
    this.phone = this.add.sprite(Math.random() * (1000 - 200), 0, "phone");
    this.tv = this.add.sprite(Math.random() * (1000 - 200), 0, "tv");
    
    this.goodItems = this.physics.add.group();
    this.goodItems.add(this.bed);
    this.goodItems.add(this.book);
    this.goodItems.add(this.milk);
    this.goodItems.add(this.pillow);
    this.goodItems.add(this.toothbrush);

    this.badItems = this.physics.add.group();
    this.badItems.add(this.donut);
    this.badItems.add(this.icecream);
    this.badItems.add(this.juice);
    this.badItems.add(this.phone);
    this.badItems.add(this.tv);
    
    this.bed.setInteractive();
    this.book.setInteractive();
    this.milk.setInteractive();
    this.pillow.setInteractive();
    this.toothbrush.setInteractive();

    this.donut.setInteractive();
    this.icecream.setInteractive();
    this.juice.setInteractive();
    this.phone.setInteractive();
    this.tv.setInteractive();
   
    this.physics.add.overlap(this.player1, this.goodItems, this.collectGoodItem, null, this);
    this.physics.add.overlap(this.player1, this.badItems, this.collectBadItem, null, this);
    this.physics.add.collider(this.goodItems, this.players, function(enemy, player) {
      enemy.destroy();
    });
    this.physics.add.collider(this.badItems, this.players, function(enemy, player) {
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

    this.negFeedbackText = this.add.text(400, 400, "Oh no! You collected a bad object!", {fontSize: '32px', fill: '#000'});
    this.negFeedbackText.setOrigin(0.5);
    this.negFeedbackText.visible = false;

    this.closeButton = this.add.image(400, 600, "close").setDepth(1);
    this.closeButton.setScale(0.3);
    this.closeButton.setInteractive();
    this.closeButton.on("pointerup", () =>{
      this.posFeedbackText.visible = false;
      this.negFeedbackText.visible = false;
      this.closeButton.visible = false;
      this.physics.resume();
    });
    this.closeButton.visible = false;
  }

  update() {
    if (Phaser.Input.Keyboard.JustUp(this.escKey)) {
      this.scene.start("mainMenu");
    }

    this.moveObject(this.bed, 3.5);
    this.moveObject(this.book, 4.5);
    this.moveObject(this.milk, 3);
    this.moveObject(this.pillow, 5);
    this.moveObject(this.toothbrush, 5);

    this.moveObject(this.donut, 4.2);
    this.moveObject(this.icecream, 3);
    this.moveObject(this.juice, 2);
    this.moveObject(this.phone, 5);
    this.moveObject(this.tv, 1);

    this.movePlayerManager();
    
  }

  collectGoodItem() {
    console.log("collected good item");
    
    this.physics.pause();
    this.closeButton.visible = true;
    this.posFeedbackText.visible = true;

    this.score += 10;
    this.scoreLabel.text = "SCORE " + this.score;
  }

  collectBadItem() {
    console.log("collected bad item");

    this.physics.pause();
    this.closeButton.visible = true;
    this.negFeedbackText.visible = true; 

    this.score -= 10;
    this.scoreLabel.text = "SCORE " + this.score;
  }

  moveObject(object, speed) {
    if (object.y > config.height) {
      object.y = 0;
      object.x = Math.random() * (1000 - 200);
    }
    object.y += speed;
  }

  movePlayerManager(){

    //movement handling
    if(this.cursorKeys.left.isDown && !(this.player1.x <= 40))
      this.players.setVelocityX(-300);
    else if(this.cursorKeys.right.isDown && !(this.player1.x >= config.width - 30))
      this.players.setVelocityX(300);
    else{
      this.players.setVelocityX(0);
    }

    //animation handling
    //i seriously couldnt figure out a more efficient way...
    if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.left)){
      this.player1.play("player_left_anim");
    }else if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.right)){
      this.player1.play("player_right_anim");
    }else if(this.cursorKeys.left.isUp && this.cursorKeys.right.isUp){
      this.player1.stop();
      if(Phaser.Input.Keyboard.JustUp(this.cursorKeys.left))
        this.player1.setFrame(0);
      else if(Phaser.Input.Keyboard.JustUp(this.cursorKeys.right))
        this.player1.setFrame(1);
    }
  }

}
