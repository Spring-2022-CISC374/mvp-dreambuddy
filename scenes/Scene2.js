class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    // placement of player
    this.player1 = this.add.sprite(config.width / 2 - 70, config.height / 10 * 9, "player-left");

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
    this.physics.add.overlap(this.player1, this.enemies, this.collectGoodItem, null, this);
    this.physics.add.collider(this.enemies, this.players, function(enemy, player) {
      enemy.destroy();
    });
  }

  update() {
    this.moveShip(this.ship, 2);
  }

  moveShip(ship, speed) {
    ship.y += speed;
  }

}
