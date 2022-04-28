var config = {
    width: 800,
    height: 800,
    backgroundColor: 0x000000,
    color: 0xFFFFFF,
    scene: [loadGame, mainMenu, menuScene, Scene1, Scene2, gameOver1, winScreen1, game2Scene],

    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            debugShowVelocity: false
        }
    }
    
}

var gameSettings = {
    playerSpeed: 300,
  }

//window.onload = function() {
    var game = new Phaser.Game(config);
//}