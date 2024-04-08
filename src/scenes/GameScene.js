// @ts-check

export default class GameScene extends Phaser.Scene {

    positionsMobilePortrait;

    constructor() {
        super('Game');
    }

    init() { 

        this.labelDebug = this.make.text({
            x: 200,
            y: 500,
            //origin: {x: 0.5 , y: -0.5},
            text: String(this.scale.orientation),
            style: {
                font: 'bold 72px Arial',
                color: '#444444',
            }
        });
        
    }

    create() {

        this.cameras.main.setBackgroundColor(0xA9D4C9);

    }


}