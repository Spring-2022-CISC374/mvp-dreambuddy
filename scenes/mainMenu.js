class mainMenu extends Phaser.Scene{
    constructor(){
        super("mainMenu");
    }

    create(){
        //background image
        this.background = this.add.image(0, 0, "menu_bg");
        this.background.setOrigin(0, 0);

        //audio
       
        //game title
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, "logo").setDepth(1);

        //navigation buttons
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);
        let menuButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "menu_button").setDepth(1);

        playButton.setInteractive();
        menuButton.setInteractive();

        playButton.on("pointerup", () =>{
            this.scene.start("bootGame");
        });

        menuButton.on("pointerup", () =>{
            this.scene.start("menu");
        });
    }
}