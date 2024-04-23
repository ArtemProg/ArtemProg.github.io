document.addEventListener('DOMContentLoaded', function () {


    const elInfoBlock = document.getElementsByClassName('info-block')?.[0];
    const elInfoScore = document.getElementById('info-score');
    const elInfoTime = document.getElementById('info-time');
    const elInfoMoves = document.getElementById('info-moves');

    const elBtnUndo = document.getElementById('btn-undo');


    initPlayModal();


    // const openModalButton = document.getElementById('btn-setting');
    // const closeModalButton = document.querySelector('.close-button');
    // const infoBlock = document.querySelector('.info-block');
    // const buttonPanel = document.querySelector('.button-panel');

    // Function to open the modal
    // openModalPlay.onclick = function () {
    //     modalPlay.style.display = 'block';



    // };

    // // Function to close the modal
    // closeModalButton.onclick = function() {
    //     modalPlay.style.display = 'none';
    //     //infoBlock.classList.remove('move-up');

    //     buttonPanel.classList.remove('button-panel-hidden');
    // };

    // // Click outside the modal content to also close the modal
    // window.onclick = function(event) {
    //     if (event.target === modal) {
    //         modalPlay.style.display = 'none';
    //         //infoBlock.classList.remove('move-up');

    //         buttonPanel.classList.remove('button-panel-hidden');
    //     }
    // };





    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // Block multitouch gestures like pinch-to-zoom
        }
    }, { passive: false });

    document.addEventListener('wheel', function (event) {
        if (event.ctrlKey) {
            event.preventDefault(); // Block CTRL+wheel zoom
        }
    }, { passive: false });

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();  // Disable gesture events like pinch-to-zoom
    });



    class Example extends Phaser.Scene
    {
        preload ()
        {
            this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
        }

        create ()
        {
            //  Create a stack of random cards

            const frames = this.textures.get('cards').getFrameNames();

            let x = 100;
            let y = 100;

            for (let i = 0; i < 64; i++)
            {
                this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();

                x += 4;
                y += 4;
            }

            this.input.on('gameobjectdown', function (pointer, gameObject)
            {

                //  Will contain the top-most Game Object (in the display list)
                this.tweens.add({
                    targets: gameObject,
                    x: { value: 1100, duration: 1500, ease: 'Power2' },
                    y: { value: 500, duration: 500, ease: 'Bounce.easeOut', delay: 150 }
                });

            }, this);
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-game',
        width: 800,
        height: 600,
        scene: Example,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    const game = new Phaser.Game(config);

});

function initPlayModal() {

    const modalForm = document.getElementById('modal-play');
    const modalContent = document.getElementById('modal-play-content');
    const btnOpen = document.getElementById('btn-play');

    const btnNewGame = document.getElementById('btn-new-game');
    const btnReplay = document.getElementById('btn-replay');
    const btnClose = document.getElementById('btn-close');

    const closeModal = () => { modalForm.style.display = 'none'; };

    btnOpen.addEventListener('click', function() {
        modalForm.style.display = 'block';
    });

    btnClose.addEventListener('click', function() {
        closeModal();
    });

    modalForm.addEventListener('click', function(event) {
        if (event.target === modalForm) {  // Checks if the modal background was directly clicked
            closeModal();
        }
    });

    modalContent.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevents click event from bubbling up to the modal background
    });

    btnNewGame.addEventListener('click', function() {
        closeModal();
    });

    btnReplay.addEventListener('click', function() {
        closeModal();
    });

}