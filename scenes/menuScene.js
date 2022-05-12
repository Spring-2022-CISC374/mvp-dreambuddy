class menuScene extends Phaser.Scene{
    constructor(){
        super("menu");
    }

    create(){

        this.background = this.add.image(0, 0, "menu_bg");
        this.background.setOrigin(0, 0);

        this.add.text(20, 20, "Press ESC to exit");

        this.add.text(this.game.renderer.width / 2 - 50, this.game.renderer.height / 2, "COMING SOON");

        //escape keyboard input
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    }

    update(){
        if(Phaser.Input.Keyboard.JustUp(this.escKey)){
            this.scene.start("finalWinScreen");
        }
    }  
}