document.addEventListener('DOMContentLoaded', function() {
    
    let touch = 0;
    const points = document.getElementById('points');
    
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.querySelector('.close-button');
    const infoBlock = document.querySelector('.info-block');
    const buttonPanel = document.querySelector('.button-panel');

    // Function to open the modal
    openModalButton.onclick = function() {
        modal.style.display = 'block';
        //infoBlock.classList.add('move-up');

        buttonPanel.classList.add('button-panel-hidden');
    };

    // Function to close the modal
    closeModalButton.onclick = function() {
        modal.style.display = 'none';
        //infoBlock.classList.remove('move-up');

        buttonPanel.classList.remove('button-panel-hidden');
    };

    // Click outside the modal content to also close the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            //infoBlock.classList.remove('move-up');

            buttonPanel.classList.remove('button-panel-hidden');
        }
    };

    window.addEventListener("touchstart", touchHandler, false);

    function touchHandler(event){
        
        touch++;

        points.textContent = touch;

        //if(event.touches.length > 1){
            //the event is multi-touch
            //you can then prevent the behavior
            event.preventDefault()
        //}
    }


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

    // const canvas = document.getElementById('canvas');
    // const context = canvas.getContext('2d');
    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;
    // const radius = 70;

    // context.beginPath();
    // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    // context.fillStyle = 'green';
    // context.fill();
    // context.lineWidth = 5;
    // context.strokeStyle = '#003300';
    // context.stroke();



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