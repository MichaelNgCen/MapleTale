

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;
const standingLeft = new Image();
standingLeft.src = './src/media/sprite/sl.png'

class Player{
    constructor() {
        this.postion = {
            x: 40,
            y: 520
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66;
        this.height = 150;

        this.image = standingLeft
        this.frames = 0
    }
    draw() {
        // ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
        ctx.drawImage(this.image, 68 * this.frames, 0, 68, 81,
            this.postion.x, this.postion.y, this.width, this.height);
    }

    update() {
        this.frames++
        if (this.frames > 4) this.frames = 0;
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
            console.log('left');
            keys.left.pressed = true;
            break;
        case "d":
            console.log('right');
            keys.right.pressed = true;
            break;
        case "w":
            console.log('up');
            player.velocity.y = -20;
            break;
        case "s":
            console.log('down');
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