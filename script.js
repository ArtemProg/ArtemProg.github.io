document.addEventListener('DOMContentLoaded', function() {
    
    
    const elInfoBlock = document.getElementsByClassName('info-block')?.[0];
    const elInfoScore = document.getElementById('info-score');
    const elInfoTime = document.getElementById('info-time');
    const elInfoMoves = document.getElementById('info-moves');

    const elBtnUndo = document.getElementById('btn-undo');

    
    const modalPlay = document.getElementById('modal-play');
    const openModalPlay = document.getElementById('btn-play');

    // const openModalButton = document.getElementById('btn-setting');
    // const closeModalButton = document.querySelector('.close-button');
    // const infoBlock = document.querySelector('.info-block');
    // const buttonPanel = document.querySelector('.button-panel');

    // Function to open the modal
    openModalPlay.onclick = function() {
        modalPlay.style.display = 'block';
        

        
    };

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





    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // Block multitouch gestures like pinch-to-zoom
        }
    }, { passive: false });
    
    document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault(); // Block CTRL+wheel zoom
        }
    }, { passive: false });
    
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();  // Disable gesture events like pinch-to-zoom
    });



    class Example extends Phaser.Scene
    {
        preload ()
        {
            this.load.setBaseURL('https://labs.phaser.io');

            this.load.image('sky', 'assets/skies/space3.png');
            this.load.image('logo', 'assets/sprites/phaser3-logo.png');
            this.load.image('red', 'assets/particles/red.png');
        }

        create ()
        {
            this.add.image(400, 300, 'sky');

            const particles = this.add.particles(0, 0, 'red', {
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            const logo = this.physics.add.image(400, 100, 'logo');

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);

            particles.startFollow(logo);
        }
    }

    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-game',
        width: 800,
        height: 600,
        scene: Example,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    const game = new Phaser.Game(config);

});