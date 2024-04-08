// @ts-check

export default class StartScene extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    create() {
        this.scene.start('Game');
    }
}