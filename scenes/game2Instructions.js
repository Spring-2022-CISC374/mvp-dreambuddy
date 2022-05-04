

  class game2instructions extends Phaser.Scene{
    constructor(){
        super("game2instruction");
    }
    
    preload(){
        this.load.image("background", "assets/images/background.png");
    }

    create() {
        //background image
        this.background = this.add.image(0, 0, "menu_bg");
        this.background.setOrigin(0, 0);
    
        this.add.text(this.game.renderer.width / 4, this.game.renderer.height * 0.25, "Welcome to Game 2 of 2", {fontSize: '32px'});
        this.add.text(this.game.renderer.width * 0.05, this.game.renderer.height * 0.50, "Simple matching game. Click to match the image\nwith its definition.If you are right, \nthey will stay showing. If you are wrong,\n they will hide again.", 
        {fontSize: '25px', fill: '#FFF', align: 'center'});
    
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.75, "play_button").setDepth(1);
    
        playButton.setInteractive();
    
        playButton.on("pointerup", () =>{
          this.scene.start("game2");
        });
    
      }
}