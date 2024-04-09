// @ts-check

import Phaser from "./lib/phaser.js";
import BootScene from "./scenes/BootScene.js";
import PreloadScene from "./scenes/PreloadScene.js";
import StartScene from "./scenes/StartScene.js";
import GameScene from "./scenes/GameScene.js";

export default new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-example',
    // width: 1280,
    // height: 1024,

    //width: 1020,
    //height: 2208,

    scene: [BootScene, PreloadScene, StartScene, GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        //mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    
    // WIDTH_CONTROLS_HEIGHT
    // HEIGHT_CONTROLS_WIDTH
});