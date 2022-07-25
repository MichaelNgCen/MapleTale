

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;
const standingLeft = new Image();
standingLeft.src = './src/media/sprite/standLeft.png'

const standingRight = new Image();
standingRight.src = './src/media/sprite/standRight.png'

const walkingLeft = new Image();
walkingLeft.src = './src/media/sprite/walkLeft.png'

const walkingRight = new Image();
walkingRight.src = './src/media/sprite/walkRight.png'

const jumpRight = new Image();
jumpRight.src = './src/media/sprite/jumpRight.png'

const proneRight = new Image();
proneRight.src = './src/media/sprite/proneRight.png'

const proneLeft = new Image();
proneLeft.src = './src/media/sprite/proneLeft.png'

const attackRight = new Image();
attackRight.src = './src/media/sprite/attackRight.png'

class Player{
    constructor() {
        this.postion = {
            x: 30,
            y: 610
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 60.5;
        this.height = 86

        this.image = standingLeft
        this.frames = 1
        this.sprites = {
            stand: {
                left: standingLeft, cropWidth: 60, width: 60, height: 86,
                right: standingRight, cropWidth: 60, width: 60, height: 86
            },
            walk: {
                left: walkingLeft, cropWidth: 61.8, width: 61.8, height: 86,
                right: walkingRight, cropWidth: 61.8, width: 61.8, height: 86
            },
            jump: {
                right: jumpRight, cropWidth: 55, width: 55, height: 86,  
            },
            prone: {
                right: proneRight, cropWidth: 82, width: 41, height: 40,  
                left: proneLeft, cropWidth: 82, width: 41, height: 40
            },
            attackRight: {
                right: attackRight, cropWidth: 67.3, width: 67.3, height: 80  
            }
            
        }
        this.currentSprite = this.sprites.stand.left
        this.currentCropWidth = 60.8
    }
    draw() {
        // ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
        ctx.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, this.currentSprite.height,
            this.postion.x, this.postion.y, this.width, this.height);
    }

    update() {
        (this.frames <= 10) ? this.frames++ : this.frames = 1; // not working
        this.draw();
        this.postion.x += this.velocity.x;
        this.postion.y += this.velocity.y;
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
            player.currentSprite = player.sprites.walk.left;
            player.currentCropWidth = player.sprites.walk.cropWidth 
            player.width = player.sprites.walk.width;
            console.log(player.width);
            break;
        case "d":
            // console.log('right');
            keys.right.pressed = true;
            player.currentSprite = player.sprites.walk.right;
            player.currentCropWidth = player.sprites.walk.cropWidth
            player.width = player.sprites.walk.width
            console.log(player.width);
            break;
        case "w":
            // console.log('up');
            player.velocity.y = -15;
            player.currentSprite = player.sprites.jump.right;
            player.currentCropWidth = player.sprites.jump.cropWidth
            player.width = player.sprites.jump.width
            break;
        case "s":
            player.currentSprite = player.sprites.prone.right;
            player.currentCropWidth = player.sprites.prone.cropWidth
            player.width = player.sprites.prone.width
            break;
        case "j":
            // console.log('attack');
            player.currentSprite = player.sprites.attackRight.right;
            player.currentCropWidth = player.sprites.attackRight.cropWidth
            player.width = player.sprites.attackRight.width
            
            break;
    }
}) 

addEventListener('keyup', ({key}) => {
    switch (key) {
        case "a":
            // console.log('left');
            keys.left.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "d":
            // console.log('right');
            keys.right.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "w":
            player.velocity.y = 0;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "s":
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            // console.log('down');
            break;
        case "j":
            // console.log('attack');
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
    }
}) 

class Monster {
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
const monsters = [new Monster({x:100, y: 100, width: 100, height: 100}),
    new Monster({x:200, y: 200, width: 100, height: 100}),
    new Monster({x:300, y: 300, width: 100, height: 100}),
    new Monster({x:400, y: 400, width: 100, height: 100}),
    new Monster({x:500, y: 500, width: 100, height: 100}),]

monsters.forEach(monster => {
    monster.draw();
}
)
