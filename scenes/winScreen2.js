class winScreen2 extends Phaser.Scene {
    constructor() {
      super("finalWinScreen");
    }

    preload() {
      this.load.image("sleepPlayer", "assets/images/sleeping-sprite.png");
    }

    create() {
      this.background = this.add.image(0, 0, "menu_bg");
      this.background.setOrigin(0, 0);
  
      this.add.text(this.game.renderer.width * 0.4, this.game.renderer.height * 0.25, "Yay!", {fontSize: '48px'});
      this.add.image(this.game.renderer.width * 0.48, this.game.renderer.height * 0.4, "sleepPlayer");

      this.add.text(this.game.renderer.width * 0.1, this.game.renderer.height * 0.50, "You have completed the sleeping games! \n Now you know good sleeping habits :)", 
      {fontSize: '25px', fill: '#FFF', align: 'center'});

      this.add.text(this.game.renderer.width * 0.4, this.game.renderer.height * 0.65, "Goodnight!", 
      {fontSize: '25px', fill: '#FFF', align: 'center'});

      let menuButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 100, "menu_button").setDepth(1);
      menuButton.setInteractive();

      menuButton.on("pointerup", () =>{
          this.scene.start("mainMenu");
      });



    }
  }