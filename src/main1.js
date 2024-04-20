// @ts-check

import Phaser from "./lib/phaser.js";
import BootScene from "./scenes/BootScene.js";
import PreloadScene from "./scenes/PreloadScene.js";
import StartScene from "./scenes/StartScene.js";
import GameScene from "./scenes/GameScene.js";


class MyApp {
    
    game;
    sizeCard;
    
    constructor() {
        this.init();
    }

    get sizeScreenOrigin() {
        return {width: window.innerWidth, height: window.innerHeight};
    }

    init() {

        this.sizeCard = {width: 112, height: 172}

        window.addEventListener('load', () => {

            const sizeScreen = this.sizeScreenOrigin;

            const w = window.innerWidth;
            const h = window.innerHeight;

            let myWith = w > h ? 12 * 112 : 7 * 112;
            let myHeight = Math.round(myWith * (sizeScreen.height / sizeScreen.width));

            this.game = new Phaser.Game({
                type: Phaser.AUTO,
                parent: 'phaser-example',
                width: myWith,
                height: myHeight,
                scene: [BootScene, PreloadScene, StartScene, GameScene],
                scale: {
                    mode: Phaser.Scale.FIT,
                    autoCenter: Phaser.Scale.CENTER_BOTH,
                },
            });
        
            const resizeCanvas = () => {
                
                const w = window.innerWidth;
                const h = window.innerHeight;
                const aspectRatio = h / w;
        
                const newWidth = 12 * this.sizeCard.width;
                const newHeight = Math.round(newWidth * aspectRatio);
        
                this.game.scale.resize(newWidth, newHeight);
                //game.cameras.resize(screenWidth, screenHeight);
                this.game.scale.setGameSize(newWidth, newHeight);

                console.log('resizeCanvas');
        
            };
            //window.addEventListener('resize', resizeCanvas);
        
        });
    }

};
const myApp = new MyApp();
export default myApp;






