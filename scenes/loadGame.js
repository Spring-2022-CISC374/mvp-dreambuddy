class loadGame extends Phaser.Scene{
    constructor(){
        super("loadGame");
    }

    preload(){
        //load all sprites and assets here
        this.load.image("logo", "./assets/images/logo.png");

        this.load.image("play_button", "./assets/images/play_button.png");

        this.load.image("menu_button", "./assets/images/menu_button.png");

    }

    create(){
        this.scene.start("mainMenu");
    }
}