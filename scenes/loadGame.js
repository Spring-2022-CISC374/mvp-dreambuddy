class loadGame extends Phaser.Scene{
    constructor(){
        super("loadGame");
    }

    preload(){
        //load all sprites and assets here
        this.load.image("logo", "./assets/images/logo.png");
        this.load.image("play_button", "./assets/images/play_button.png");
        this.load.image("menu_button", "./assets/images/menu_button.png");
        this.load.image("menu_bg", "./assets/images/mainMenuBG.jpg");

        //load audio/sfx
        this.load.audio("background_music", ["./assets/audio/music.mp3"]);

    }

    create(){
        this.music = this.sound.add("background_music", {loop: true});
        this.music.play();
        
        this.scene.start("mainMenu");
    }
}