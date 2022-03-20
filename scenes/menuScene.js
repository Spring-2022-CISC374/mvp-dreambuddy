class menuScene extends Phaser.Scene{
    constructor(){
        super("menu");
    }

    create(){
        this.add.text(20, 20, "this is the menu");

        //escape keyboard input
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    }

    update(){
        if(Phaser.Input.Keyboard.JustUp(this.escKey)){
            this.scene.start("mainMenu");
        }
    }  
}