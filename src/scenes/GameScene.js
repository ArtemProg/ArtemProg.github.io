// @ts-check

export default class GameScene extends Phaser.Scene {

    positionsMobilePortrait;

    constructor() {
        super('Game');
    }

    init() { 
        this.my_orientationchange();

        this.scale.on('orientationchange', function(orientation) {
            this.my_orientationchange();
        });

    }

    my_orientationchange() {

        const aspectRatio = this.scale.parentSize.aspectRatio;

        let text = `orientation: ${this.scale.orientation};\nq: ${aspectRatio}`;

        // @ts-ignore
        if (this.scale.orientation == Phaser.Scale.LANDSCAPE) {
            text = `orientation --> LANDSCAPE;\nq: ${aspectRatio}`;
        // @ts-ignore
        } else if (this.scale.orientation == Phaser.Scale.PORTRAIT) {
            text = `orientation --> PORTRAIT;\nq: ${aspectRatio}`;
        }

        this.labelDebug = this.make.text({
            x: 200,
            y: 500,
            //origin: {x: 0.5 , y: -0.5},
            text: text,
            style: {
                font: 'bold 54px Arial',
                color: '#444444',
            }
        });
        
    }

    create() {

        this.cameras.main.setBackgroundColor(0xA9D4C9);

    }


}