

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;
const standingLeft = new Image();
standingLeft.src = './src/media/sprite/standRight.png'

const walkingLeft = new Image();
walkingLeft.src = './src/media/sprite/walkLeft.png'

const walkingRight = new Image();
walkingRight.src = './src/media/sprite/walkRight.png'

const jumpRight = new Image();
jumpRight.src = './src/media/sprite/jumpRight.png'

const proneRight = new Image();
proneRight.src = './src/media/sprite/proneRight.png'

const attackRight = new Image();
attackRight.src = './src/media/sprite/attackRight.png'

class Player{
    constructor() {
        this.postion = {
            x: 30,
            y: 590
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 61.5;
        this.height = 86

        this.image = standingLeft
        this.frames = 1
        this.sprites = {
            stand: {
                left: standingLeft, cropWidth: 62.5, width: 67.5, height: 86
            },
            walkLeft: {
                left: walkingLeft, cropWidth: 61.8, width: 67.5, height: 86
            },
            walkRight: {
                right: walkingRight, cropWidth: 61.8, width: 67.5, height: 86
            },
            jumpRight: {
                right: jumpRight, cropWidth: 55, width: 67.5, height: 86  
            },
            proneRight: {
                right: proneRight, cropWidth: 82, width: 50, height: 40  
            },
            attackRight: {
                right: attackRight, cropWidth: 72, width: 67.5, height: 80  
            }
            
        }
        this.currentSprite = this.sprites.stand.left
        this.currentCropWidth = 61.5
    }
    draw() {
        // ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
        ctx.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, this.currentSprite.height,
            this.postion.x, this.postion.y, this.width, this.height);
    }

    update() {
        this.frames++
        if (this.frames > 9) this.frames = 1;
        this.postion.y += this.velocity.y;
        this.draw();
        if (this.postion.y + this.height + this.velocity.y <= canvas.height - 140) this.velocity.y += gravity;
        else this.velocity.y = 0;
    }
}

class Platform {
    constructor({x, y, width, height}) {
        this.position = {
            x,
            y

        }
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillStyle = '';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();
const platforms = [new Platform({x:285, y: 620, width: 100, height: 0}), // first haystack
    new Platform({x:100, y: 550, width: 140, height: 0}), // first edge platform 
    new Platform({x:100, y: 480, width: 140, height: 0}), // second edge platform
    new Platform({x:290, y: 410, width: 1200, height: 0}), // second floor?
    new Platform({x:370, y: 345, width: 100, height: 0}), // second haystack
    new Platform({x:200, y: 275, width: 140, height: 0}), // third edge platform 
    new Platform({x:200, y: 205, width: 140, height: 0}), // fourth edge platform
    new Platform({x:390, y: 135, width: 1200, height: 0}), // third floor?
    new Platform({x:460, y: 65, width: 100, height: 0}), // third haystack
    new Platform({x:300, y: 0, width: 140, height: 0}), // fifth edge platform
    new Platform({x:1400, y: 65, width: 100, height: 0}) // fourth haystack?
]; 

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
}
// player.update();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach(platform => platform.draw());
    if (keys.right.pressed) player.postion.x += 5;
    if (keys.left.pressed) player.postion.x -= 5;
    platforms.forEach(platform => {
    if (player.postion.y + player.height <= platform.position.y && player.postion.y + player.height+player.velocity.y >= platform.position.y && player.postion.x + player.width >= platform.position.x && player.postion.x <= platform.position.x + platform.width) player.velocity.y = 0;
    })
}


animate();

addEventListener('keydown', ({key}) => {
    switch (key) {
        case "a":
            // console.log('left');
            keys.left.pressed = true;
            player.currentSprite = player.sprites.walkLeft.left;
            player.currentCropWidth = player.sprites.walkLeft.cropWidth 
            player.width = player.sprites.walkLeft.width;
            break;
        case "d":
            // console.log('right');
            keys.right.pressed = true;
            player.currentSprite = player.sprites.walkRight.right;
            player.currentCropWidth = player.sprites.walkRight.cropWidth
            player.width = player.sprites.walkRight.width
            break;
        case "w":
            // console.log('up');
            player.velocity.y = -20;
            player.currentSprite = player.sprites.jumpRight.right;
            player.currentCropWidth = player.sprites.jumpRight.cropWidth
            player.width = player.sprites.jumpRight.width
            break;
        case "s":
            player.currentSprite = player.sprites.proneRight.right;
            player.currentCropWidth = player.sprites.proneRight.cropWidth
            player.width = player.sprites.proneRight.width
            break;
        case "j":
            console.log('attack');
            player.currentSprite = player.sprites.attackRight.right;
            player.currentCropWidth = player.sprites.attackRight.cropWidth
            player.width = player.sprites.attackRight.width
            break;
    }
}) 

addEventListener('keyup', ({key}) => {
    switch (key) {
        case "a":
            console.log('left');
            keys.left.pressed = false;
            break;
        case "d":
            console.log('right');
            keys.right.pressed = false;
            break;
        case "w":
            console.log('up');
            player.velocity.y = 0;
            break;
        case "s":
            console.log('down');
            break;
    }
}) 