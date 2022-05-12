let maxImageWidth = 256 / 2;
let maxImageHeight = 320 / 2;
let offsetX = 10;
let x = 100;
let y = 175;

class game2Scene extends Phaser.Scene {
    constructor() {
        super("game2");
    }

    preload() {
        this.load.image('cardBack', 'assets/images/cardBack.png');

        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

        // Load key cards
        this.load.image("kingCKey1", "assets/images/card-images/cards-key-img/king-cloves-key.png");
        this.load.image("kingDKey2", "assets/images/card-images/cards-key-img/king-diamonds-key.png");
        this.load.image("kingHKey3", "assets/images/card-images/cards-key-img/king-hearts-key.png");
        this.load.image("kingSKey4", "assets/images/card-images/cards-key-img/king-spades-key.png");
        this.load.image("queenCKey5", "assets/images/card-images/cards-key-img/queen-cloves-key.png");
        this.load.image("queenDKey6", "assets/images/card-images/cards-key-img/queen-diamonds-key.png");
        this.load.image("queenHKey7", "assets/images/card-images/cards-key-img/queen-hearts-key.png");
        this.load.image("queenSKey8", "assets/images/card-images/cards-key-img/queen-spades-key.png");

        // Load definition cards
        this.load.image("kingCDef1", "assets/images/card-images/cards-def-img/king-cloves-def.png");
        this.load.image("kingDDef2", "assets/images/card-images/cards-def-img/king-diamonds-def.png");
        this.load.image("kingHDef3", "assets/images/card-images/cards-def-img/king-hearts-def.png");
        this.load.image("kingSDef4", "assets/images/card-images/cards-def-img/king-spades-def.png");
        this.load.image("queenCDef5", "assets/images/card-images/cards-def-img/queen-cloves-def.png");
        this.load.image("queenDDef6", "assets/images/card-images/cards-def-img/queen-diamonds-def.png");
        this.load.image("queenHDef7", "assets/images/card-images/cards-def-img/queen-hearts-def.png");
        this.load.image("queenSDef8", "assets/images/card-images/cards-def-img/queen-spades-def.png");

    }

    create() {
        //escape keyboard input
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        let cardSet = new Map();
        let count = 0;
        let numOfPairs = 0;
        let selectedPair = [];
        
        // Create a array of the images on the front of the card
        let cardFronts = [];
        cardFronts.push('kingCKey1');
        cardFronts.push('kingDKey2');
        cardFronts.push('kingHKey3');
        cardFronts.push('kingSKey4');
        cardFronts.push('queenCKey5');
        cardFronts.push('queenDKey6');
        cardFronts.push('queenHKey7');
        cardFronts.push('queenSKey8');

        cardFronts.push('kingCDef1');
        cardFronts.push('kingDDef2');
        cardFronts.push('kingHDef3');
        cardFronts.push('kingSDef4');
        cardFronts.push('queenCDef5');
        cardFronts.push('queenDDef6');
        cardFronts.push('queenHDef7');
        cardFronts.push('queenSDef8');

        this.matchesLeft = 8;
        this.matchesLeftLabel = this.add.bitmapText(10, 5, "pixelFont", "MATCHES LEFT: 8", 50);

        this.matchesFound = 0;
        this.matchesFoundLabel = this.add.bitmapText(475, 5, "pixelFont", "MATCHES FOUND: 0", 50);


        let posString = '';
        this.boardArray = [];
        // Create a temporary array to duplicate the cardFronts array
        let tempDeck = [];
        Phaser.Utils.Array.AddAt(tempDeck, cardFronts, 0);
        for (let row = 0; row < 4; row++) {
            this.boardArray[row] = [];
            for (let col = 0; col < 4; col++) {
                x = offsetX + (maxImageWidth * col) + (maxImageWidth / 2) + 120;
                // Load the image of a randomly chosen card ad remove chosen card from temp
                let randomSprite = Phaser.Utils.Array.GetRandom(tempDeck);
                let cardFront = this.add.image(x, y, randomSprite);
                posString = x + ", " + y;
                cardSet.set(posString, randomSprite.toString());
                posString = '';
                Phaser.Utils.Array.Remove(tempDeck, randomSprite);
                cardFront.setScale(0.45);
                cardFront.alpha = 1;
                cardFront.depth = 20;

                // Hide front of card with back of card
                let cardBack = this.add.image(x, y, 'cardBack');
                // Logic for matching
                cardBack.setInteractive();
                cardBack.on("pointerup", () => {
                    cardBack.visible = false;
                    posString = cardBack.x + ", " + cardBack.y;
                    //Save front and back of card
                    selectedPair[count] = cardSet.get(posString);
                    selectedPair[count+2] = cardBack;
                    count++;
                    posString = '';

                    if (count == 2) {
                        const card1 = selectedPair[0];
//                        console.log(card1);
                        const card2 = selectedPair[1];
//                        console.log(card2);
//                        console.log(card1.substring(card1.length - 1));
//                        console.log(card2.substring(card2.length - 1));
                        if (card1.substring(card1.length - 1) != card2.substring(card2.length - 1)) {
//                            //console.log("not a match");
                            this.input.mouse.enabled = false;
                            this.time.addEvent({
                                delay: 2000,
                                callback: () => {
                                    selectedPair[2].visible = true;
                                    selectedPair[3].visible = true;
                                    this.input.mouse.enabled = true;
                                },
                            })                            
                        } else {
                            numOfPairs++;
                            this.matchesFound++;
                            this.matchesLeft--;
                            this.matchesFoundLabel.text = "MATCHES FOUND: " + this.matchesFound;
                            this.matchesLeftLabel.text = "MATCHES LEFT: " + this.matchesLeft;
                        }
                        count = 0;
                        if (numOfPairs==8) {
                            this.scene.start("finalWinScreen");
                            

                        }
                    }                    
                });
                cardBack.setScale(0.5);
                cardBack.alpha = 1;
                cardBack.depth = 20;
            }
            y += maxImageHeight;
        }



    }

    update() {
        if (Phaser.Input.Keyboard.JustUp(this.escKey)) {
            this.scene.start("mainMenu");
        }
    }
}