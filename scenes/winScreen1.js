class winScreen1 extends Phaser.Scene {
    constructor() {
      super("winScreen");
    }
  
    
    create() {
      //background image
      this.background = this.add.image(0, 0, "menu_bg");
      this.background.setOrigin(0, 0);
  
      this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.25, "Congrats!", {fontSize: '32px'});
      this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.50, "You caught the good objects!", 
      {fontSize: '25px', fill: '#FFF', align: 'center'});
  
      let menuButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 100, "menu_button").setDepth(1);
      menuButton.setInteractive();
      menuButton.on("pointerup", () =>{
          this.scene.start("mainMenu");
      });

    }
  }