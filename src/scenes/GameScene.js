// @ts-check
import {sizeScreenOrigin, sizeScreenGame, scaleGame} from './Utils.js';

export default class GameScene extends Phaser.Scene {

    positionsMobilePortrait;
    textMoves;
    
    constructor() {
        super('Game');
    }

    init() { 

        // this.labelDebug = this.add.text({
        //     x: 200,
        //     y: 500,
        //     //origin: {x: 0.5 , y: -0.5},
        //     text: '',
        //     style: {
        //         font: 'bold 54px Arial',
        //         color: '#444444',
        //     }
        // });
        
        this.textMoves = this.add.text(10, 10, 'Moves: 0', { font: '48px Arial', /*fill: '#000000'*/ });

        // https://newdocs.phaser.io/docs/3.80.0/Phaser.Scale.ScaleManager

        this.my_orientationchange();

        this.scale.on('orientationchange', (orientation) => {
           // this.my_orientationchange();
        });

        this.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {
            //console.log('resize');

        });

        const resizeCanvas = () => {
                
            const w = window.innerWidth;
            const h = window.innerHeight;
            const aspectRatio = h / w;
    
            const newWidth = w > h ? 12 * 112 : 7 * 112;
            const newHeight = Math.round(newWidth * aspectRatio);
    
            this.game.scale.resize(newWidth, newHeight);
            //game.cameras.resize(screenWidth, screenHeight);
            this.game.scale.setGameSize(newWidth, newHeight);

            console.log('resizeCanvas');

            this.my_orientationchange();
    
        };

        window.addEventListener('resize', resizeCanvas);

    }

    my_orientationchange() {

        console.log('my_orientationchange');

        const aspectRatio = this.scale.parentSize.aspectRatio;

        let text = `orientation: ${this.scale.orientation};\nq: ${aspectRatio}`;

        if (this.scale.isLandscape) {
            text = `orientation --> LANDSCAPE;\nq: ${aspectRatio}`;
        } else if (this.scale.isPortrait) {
            text = `orientation --> PORTRAIT;\nq: ${aspectRatio}`;
        } else if (this.scale.isGameLandscape) {
            text = `orientation --> isGameLandscape;\nq: ${aspectRatio}`;
        } else if (this.scale.isGamePortrait) {
            text = `orientation --> isGamePortrait;\nq: ${aspectRatio}`;
        }

        const sizeOrigin = sizeScreenOrigin();
        const sizeGame = sizeScreenGame(this);
        const myScale = scaleGame(this);

        let textFontSize = 14;
        if (sizeOrigin.height > 1000 || sizeOrigin.width > 1000) {
            //textFontSize = 16;
        }
        
        let myFontSize;

        if (sizeGame.height > sizeGame.width) {
            myFontSize = textFontSize * sizeGame.height / sizeGame.width;
        } else {
            myFontSize = textFontSize;
        }

        if (myScale.scaleWith > 1)
        {
            this.textMoves.setFontSize(textFontSize * 1);
        } else {
            this.textMoves.setFontSize(textFontSize / myScale.scaleWith);
        }

        
        this.textMoves.setText(text);
        
    }

    create() {

        this.cameras.main.setBackgroundColor(0xA9D4C9);

    }


}