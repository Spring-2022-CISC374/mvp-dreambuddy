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

        // Load key cards
        this.load.image("kingCKey", "assets/images/card-images/cards-key-img/king-cloves-key.png");
        this.load.image("kingDKey", "assets/images/card-images/cards-key-img/king-diamonds-key.png");
        this.load.image("kingHKey", "assets/images/card-images/cards-key-img/king-hearts-key.png");
        this.load.image("kingSKey", "assets/images/card-images/cards-key-img/king-spades-key.png");
        this.load.image("queenCKey", "assets/images/card-images/cards-key-img/queen-cloves-key.png");
        this.load.image("queenDKey", "assets/images/card-images/cards-key-img/queen-diamonds-key.png");
        this.load.image("queenHKey", "assets/images/card-images/cards-key-img/queen-hearts-key.png");
        this.load.image("queenSKey", "assets/images/card-images/cards-key-img/queen-spades-key.png");

        // Load definition cards
        this.load.image("kingCDef", "assets/images/card-images/cards-def-img/king-cloves-def.png");
        this.load.image("kingDDef", "assets/images/card-images/cards-def-img/king-diamonds-def.png");
        this.load.image("kingHDef", "assets/images/card-images/cards-def-img/king-hearts-def.png");
        this.load.image("kingSDef", "assets/images/card-images/cards-def-img/king-spades-def.png");
        this.load.image("queenCDef", "assets/images/card-images/cards-def-img/queen-cloves-def.png");
        this.load.image("queenDDef", "assets/images/card-images/cards-def-img/queen-diamonds-def.png");
        this.load.image("queenHDef", "assets/images/card-images/cards-def-img/queen-hearts-def.png");
        this.load.image("queenSDef", "assets/images/card-images/cards-def-img/queen-spades-def.png");
        
    }

    create(){
        //this.cardFronts = this.physics.add.group();

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