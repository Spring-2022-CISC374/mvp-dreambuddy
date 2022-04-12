class gameOver1 extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }
  
    
    create() {
      //background image
      this.background = this.add.image(0, 0, "menu_bg");
      this.background.setOrigin(0, 0);
  
      this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.25, "Game Over!", {fontSize: '32px'});
      this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.50, "You ran out of lives!", 
      {fontSize: '25px', fill: '#FFF', align: 'center'});
  
      let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.75, "play_button").setDepth(1);
      let menuButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 100, "menu_button").setDepth(1);
  
      playButton.setInteractive();
      menuButton.setInteractive();

      playButton.on("pointerup", () =>{
        this.scene.start("playGame");
      });

      menuButton.on("pointerup", () =>{
          this.scene.start("mainMenu");
      });
    }
  }