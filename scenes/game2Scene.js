let maxImageWidth = 256/2;
let maxImageHeight = 320/2;
let offsetX = 10;
let x = 100;
let y = 175;

class game2Scene extends Phaser.Scene{
    constructor(){
        super("game2");
    }

    preload() {
        this.load.image('cardBack', 'assets/images/cardBack.png');
    }

    create(){
		this.boardArray = [];
        for (let row = 0; row < 4; row++) {
			this.boardArray[row] = [];
			for (let col = 0; col < 5; col++) {
				x = offsetX + (maxImageWidth * col) + (maxImageWidth / 2);

				let cardBack = this.add.image(x, y, 'cardBack');
				cardBack.setScale(0.5);
				cardBack.alpha = 1;
				cardBack.depth = 20;
			}
			y += maxImageHeight;
		}
    }

    update(){

    }
}