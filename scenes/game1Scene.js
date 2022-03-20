class game1Scene extends Phaser.Scene{
    constructor(){
        super("game1");
    }

    create(){
        this.add.text(20, 20, "this is game 1");

        //escape keyboard input
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update(){
        if(Phaser.Input.Keyboard.JustUp(this.escKey)){
            this.scene.start("mainMenu");
        }
    }    
}