class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {
        this.add.text(game.config.width / 2, game.config.height / 2, 'Thank you for playing!', {
            font: '40px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);  // 将文本居中

        this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'Click to play again', {
            font: '20px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);  // 提示再玩一次的文本

        this.input.once('pointerdown', () => {
            this.scene.start('ArrayBoom');  // 点击后重启游戏
        });
    }
}