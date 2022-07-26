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

const attackLeft = new Image();
attackLeft.src = './src/media/sprite/attackLeft.png'

const pigIdleLeft = new Image();
pigIdleLeft.src = './src/media/sprite/pig1.png'

const slime = new Image();
slime.src = './src/media/sprite/slimeIdle.png'

class Player{
    constructor() {
        this.postion = {
            x: 30,
            y: 520
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 60.5;
        this.height = 86

        this.image = standingLeft
        this.frames = 0
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
            attack: {
                right: attackRight, cropWidth: 67.3, width: 67.3, height: 80, 
                left: attackLeft, cropWidth: 67.3, width: 67.3, height: 80 
            }
            
        }
        this.currentSprite = this.sprites.stand.left
        this.currentCropWidth = 60.8
    }
    draw() {
        ctx.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, this.currentSprite.height,
            this.postion.x, this.postion.y, this.width, this.height);
    }

    update() {
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
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Monster1 {
    constructor() {
        this.image = pigIdleLeft
        this.frames = 0
        this.sprites = {
            pig: {
                left: pigIdleLeft, cropWidth: 25, width: 6, height: 6,
            }
        }
        this.currentSprite = this.sprites.pig.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 600, 305, this.currentCropWidth, this.currentSprite.height); // middle pig
        ctx.drawImage(this.currentSprite, 950, 550, this.currentCropWidth, this.currentSprite.height); // bottom pig
        ctx.drawImage(this.currentSprite, 800, 65, this.currentCropWidth, this.currentSprite.height); // top pig
    }

    update() {
        this.draw();
    }
}

class Monster2 {
    constructor() {
        this.image = slime
        this.frames = 0
        this.sprites = {
            slime: {
                left: slime, cropWidth: 25, width: 6, height: 6,
            }
        }
        this.currentSprite = this.sprites.slime.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 1000, 230, this.currentCropWidth, this.currentSprite.height - 100); // middle slime
        ctx.drawImage(this.currentSprite, 400, 470, this.currentCropWidth, this.currentSprite.height - 100); // bottom slime
        ctx.drawImage(this.currentSprite, 500, -20, this.currentCropWidth, this.currentSprite.height - 100); // top slime
    }

    update() {
        this.draw();
    }
}

class Edge {
    constructor({x, y, width, height}) {
        this.position = {
            x,
            y
        }
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

// const hitbox = new Hitbox({x: 10, y: 10, width: 10, height: 10})
const player = new Player();
const platforms = [new Platform({x:250, y: 550, width: 100, height: 0}), // first haystack
    new Platform({x:80, y: 490, width: 140, height: 0}), // first edge platform 
    new Platform({x:80, y: 430, width: 140, height: 0}), // second edge platform
    new Platform({x:260, y: 370, width: 1020, height: 0}), // second floor?
    new Platform({x:330, y: 310, width: 100, height: 0}), // second haystack
    new Platform({x:175, y: 255, width: 140, height: 0}), // third edge platform 
    new Platform({x:175, y: 190, width: 140, height: 0}), // fourth edge platform
    new Platform({x:350, y: 130, width: 1200, height: 0}), // third floor?
    new Platform({x:400, y: 65, width: 100, height: 0}), // third haystack
    new Platform({x:260, y: 12, width: 140, height: 0}), // fifth edge platform
    new Platform({x:1250, y: 65, width: 100, height: 0}), // fourth haystack?
    new Platform({x:0, y: 615, width: 1300, height: 0}), // floor?
]; 

const monsters1 = new Monster1();
const monsters2 = new Monster2();

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    attack: {
        pressed: false,
    },
}

const edges = [new Edge({x:0, y: 0, width: 0, height: 615}), // floor
    new Edge({x:1270, y: 0, width: 0, height: 615}), // top
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    monsters1.update();
    monsters2.update();
    platforms.forEach(platform => platform.draw());
    edges.forEach(edge => edge.draw());
    if (keys.right.pressed) player.postion.x += 5;
    if (keys.left.pressed) player.postion.x -= 5;
    platforms.forEach(platform => {
    if (player.postion.y + player.height-10 <= platform.position.y && player.postion.y + player.height+player.velocity.y >= platform.position.y && player.postion.x + player.width >= platform.position.x && player.postion.x <= platform.position.x + platform.width) player.velocity.y = 0;
    })
    edges.forEach(edge => {
    if (player.postion.x < 0) player.postion.x = 5;
    if (player.postion.x > 1220) player.postion.x = 1215;
    })
    console.log(player.postion.x);
    if (player.postion.x >= 345 && keys.attack.pressed === true && player.postion.y === 527.5 && player.postion.x <= 465) console.log("hit first slime"); 
    if (player.postion.x >= 945 && keys.attack.pressed === true && player.postion.y === 283 && player.postion.x <= 1065) console.log("hit second slime"); 
    if (player.postion.x >= 445 && keys.attack.pressed === true && player.postion.y === 43 && player.postion.x <= 555) console.log("hit third slime"); 
    if (player.postion.x >= 914 && keys.attack.pressed === true && player.postion.y === 527.5 && player.postion.x <= 1030) console.log("hit first pig"); 
    if (player.postion.x >= 560 && keys.attack.pressed === true && player.postion.y === 283 && player.postion.x <= 680) console.log("hit second pig"); 
    if (player.postion.x >= 760 && keys.attack.pressed === true && player.postion.y === 43 && player.postion.x <= 880) console.log("hit third pig"); 



}

animate();

addEventListener('keydown', ({key}) => {
    switch (key) {
        case "a":
            keys.left.pressed = true;
            player.currentSprite = player.sprites.walk.left;
            player.currentCropWidth = player.sprites.walk.cropWidth 
            player.width = player.sprites.walk.width;
            // console.log(player.width);
            break;
        case "d":
            keys.right.pressed = true;
            player.currentSprite = player.sprites.walk.right;
            player.currentCropWidth = player.sprites.walk.cropWidth
            player.width = player.sprites.walk.width
            // console.log(player.width);
            break;
        case "w":
            if (player.velocity.y === 0)player.velocity.y = -18;
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
            keys.attack.pressed = true;
            player.currentSprite = player.sprites.attack.right;
            player.currentCropWidth = player.sprites.attack.cropWidth
            player.width = player.sprites.attack.width
            break;
        case "k":
            keys.attack.pressed = true;
            player.currentSprite = player.sprites.attack.left;
            player.currentCropWidth = player.sprites.attack.cropWidth
            player.width = player.sprites.attack.width
            break;
    }
}) 

addEventListener('keyup', ({key}) => {
    switch (key) {
        case "a":
            keys.left.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "d":
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
            break;
        case "j":
            keys.attack.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "k":
            keys.attack.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
    }
}) 