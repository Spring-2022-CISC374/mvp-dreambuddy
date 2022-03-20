class menuScene extends Phaser.Scene{
    constructor(){
        super("menu");
    }

    create(){
        this.add.text(20, 20, "this is the menu");
    }
}