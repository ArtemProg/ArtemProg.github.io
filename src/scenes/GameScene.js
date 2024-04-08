// @ts-check

export default class GameScene extends Phaser.Scene {

    positionsMobilePortrait;

    constructor() {
        super('Game');
    }

    init() { 

        // https://newdocs.phaser.io/docs/3.80.0/Phaser.Scale.ScaleManager

        this.my_orientationchange();

        this.scale.on('orientationchange', function(orientation) {
            this.my_orientationchange();
        });

    }

    my_orientationchange() {

        const aspectRatio = this.scale.parentSize.aspectRatio;

        let text = `orientation: ${this.scale.orientation};\nq: ${aspectRatio}`;

        if (this.scale.isLandscape) {
            text = `orientation --> LANDSCAPE;\nq: ${aspectRatio}`;
        } else if (this.scale.isPortrait) {
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