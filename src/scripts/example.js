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

const golem = new Image();
golem.src = './src/media/sprite/golem0.png'

const metal = new Image();
metal.src = './src/media/sprite/metalGolem0.png'

const barlog = new Image();
barlog.src = './src/media/sprite/barlog0.png'

const pinkBean = new Image();
pinkBean.src = './src/media/sprite/pinkBean0.png'

const slimeDead = new Image();
slimeDead.src = './src/media/sprite/slimeDead.png'

const pigDead = new Image();
pigDead.src = './src/media/sprite/pigDead.png'

const omDead = new Image();
omDead.src = './src/media/sprite/omDead.png'

const bmDead = new Image();
bmDead.src = './src/media/sprite/bmDead.png'

const gmDead = new Image();
gmDead.src = './src/media/sprite/gmDead.png'

const pbDead = new Image();
pbDead.src = './src/media/sprite/pbDead.png'

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
                right: proneRight, cropWidth: 82, width: 10, height: 0,  
                left: proneLeft, cropWidth: 82, width: 45, height: 0
            },
            attack: {
                right: attackRight, cropWidth: 73.3, width: 67.3, height: 80, 
                left: attackLeft, cropWidth: 73.3, width: 67.3, height: 80 
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

class Monster1 { // pig
    constructor() {
        this.image = pigIdleLeft
        this.frames = 0
        this.sprites = {
            pig: {
                left: pigIdleLeft, cropWidth: 25, width: 6, height: 6,
                dead: pigDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.pig.left
        this.currentCropWidth = 85
    }
    draw() {
        ctx.drawImage(this.currentSprite, 950, 570, this.currentCropWidth, this.currentSprite.height);
    }
    update() {
        this.draw();
    }
}

class Monster2 { // slime
    constructor() {
        this.image = slime
        this.frames = 0
        this.sprites = {
            slime: {
                left: slime, cropWidth: 25, width: 6, height: 6,
                dead: slimeDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.slime.left
        this.currentCropWidth = 70
    }
    draw() {
        ctx.drawImage(this.currentSprite, 400, 540, this.currentCropWidth, this.currentSprite.height+25); 
    }
    update() {
        // this.currentSprite ==
        this.draw();
    }
}
class Monster3 { // blue mushroom
    constructor() {
        this.image = golem
        this.frames = 0
        this.sprites = {
            golem: {
                left: golem, cropWidth: 25, width: 6, height: 6,
                dead: bmDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.golem.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 1000, 290, this.currentCropWidth, this.currentSprite.height+20);
    }
    update() {
        this.draw();
    }
}
class Monster4 { // Green mushroom
    constructor() {
        this.image = metal
        this.frames = 0
        this.sprites = {
            metal: {
                left: metal, cropWidth: 25, width: 6, height: 6,
                dead: gmDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.metal.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 520, 70, this.currentCropWidth, this.currentSprite.height+10); 
    }
    update() {
        this.draw();
    }
}
class Monster5 { // Orange mushroom
    constructor() {
        this.image = barlog
        this.frames = 0
        this.sprites = {
            barlog: {
                left: barlog, cropWidth: 25, width: 6, height: 6,
                dead: omDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.barlog.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 580, 290, this.currentCropWidth, this.currentSprite.height+20); // middle slime
    }
    update() {
        this.draw();
    }
}
class Monster6 { // Pink bean
    constructor() {
        this.image = pinkBean
        this.frames = 0
        this.sprites = {
            pinkBean: {
                left: pinkBean, cropWidth: 25, width: 6, height: 6,
                dead: pbDead, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.pinkBean.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 1000, 40, this.currentCropWidth, this.currentSprite.height); // middle slime
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

const monsters1 = new Monster1(), monsters2 = new Monster2(), monsters3 = new Monster3(), monsters4 = new Monster4(), monsters5 = new Monster5(), monsters6 = new Monster6();

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    attackj: {
        pressed: false,
    },
    attackk: { 
        pressed: false,
    },
}

const life = {
    slime: {
        dead: false, 
    },
    pig: {
        dead: false,
    },
    orangeMushroom: {
        dead: false,
    },
    greenMushroom: {
        dead: false,
    },
    blueMushroom: {
        dead: false,
    },
    pinkBean: {
        dead: false,
    },
}

var slimeHealth = 100, pigHealth = 100, orangeMushroomHealth = 100, greenMushroomHealth = 100, blueMushroomHealth = 100, pinkBeanHealth = 100, health = 100;

const edges = [new Edge({x:0, y: 0, width: 0, height: 615}), new Edge({x:1270, y: 0, width: 0, height: 615})];

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    monsters1.draw();
    monsters2.draw();
    monsters3.draw();
    monsters4.draw();
    monsters5.draw();
    monsters6.draw();
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
    // console.log(pinkBeanHealth);

    // Attack
    // slime
    if (player.postion.x >= 345 && keys.attackj.pressed === true && player.postion.y >= 525 && player.postion.y <= 530 && player.postion.x <= 425) slimeHealth -= 5;
    if (player.postion.x >= 435 && keys.attackk.pressed === true && player.postion.y >= 525 && player.postion.y <= 530 && player.postion.x <= 455) slimeHealth -= 5;
    // pig
    if (player.postion.x >= 535 && keys.attackj.pressed === true && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x <= 590) orangeMushroomHealth -= 3;
    if (player.postion.x >= 600 && keys.attackk.pressed === true && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x <= 650) orangeMushroomHealth -= 3;
    // orange mushroom
    if (player.postion.x >= 945 && keys.attackj.pressed === true && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x <= 1000) blueMushroomHealth -= 2;
    if (player.postion.x >= 1010 && keys.attackk.pressed === true && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x <= 1090) blueMushroomHealth -= 2;
    // blue mushroom
    if (player.postion.x >= 890 && keys.attackj.pressed === true && player.postion.y >= 525.5 && player.postion.y <= 530.5 && player.postion.x <= 930) pigHealth -= 5;
    if (player.postion.x <= 1010 && keys.attackk.pressed === true && player.postion.y >= 525.5 && player.postion.y <= 530.5 && player.postion.x >= 990) pigHealth -= 5;
    // pink bean
    if (player.postion.x >= 475 && keys.attackj.pressed === true && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x <= 530) greenMushroomHealth -= 2;
    if (player.postion.x >= 540 && keys.attackk.pressed === true && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x <= 610) greenMushroomHealth -= 2;
    // green mushroom
    if (player.postion.x >= 950 && keys.attackj.pressed === true && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x <= 1000) pinkBeanHealth -= .5;
    if (player.postion.x >= 1010 && keys.attackk.pressed === true && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x <= 1065) pinkBeanHealth -= .5;
    // End of attack

    // Player Hurt
    // slime    
    if (player.postion.x === 375 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y === 527.5 && player.postion.y <= 528.5 && life.slime.dead === false) {  // slime left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 527.5 && player.postion.y <= 528.5 && player.postion.x === 420 && life.slime.dead === false) { // slime right side
        health -= 10;
        player.postion.x += 100;
    }
    // pig
    if (player.postion.x === 935 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 527.5 && player.postion.y <= 528.5 && life.pig.dead === false) { // pig left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 527.5 && player.postion.y <= 528.5 && player.postion.x === 990 && life.pig.dead === false) {  // pig right side
        health -= 10;
        player.postion.x += 100;
    }
    // orange mushroom
    if (player.postion.x === 580 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 280 && player.postion.y <= 285 && life.orangeMushroom.dead === false) { // pig left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x === 640 && life.orangeMushroom.dead === false) {  // pig right side
        health -= 10;
        player.postion.x += 100;
    }
    // blue mushroom
    if (player.postion.x === 985 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 280 && player.postion.y <= 285 && life.blueMushroom.dead === false) { // pig left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 280 && player.postion.y <= 285 && player.postion.x === 1050 && life.blueMushroom.dead === false) {  // pig right side
        health -= 10;
        player.postion.x += 100;
    }
    // green mushroom
    if (player.postion.x === 500 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 40 && player.postion.y <= 45 && life.greenMushroom.dead === false) { // pig left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x === 580 && life.greenMushroom.dead === false) {  // pig right side
        health -= 10;
        player.postion.x += 100;
    }
    // pink bean
    if (player.postion.x === 980 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 40 && player.postion.y <= 45 && life.pinkBean.dead === false) { // pig left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 40 && player.postion.y <= 45 && player.postion.x === 1050 && life.pinkBean.dead === false) {  // pig right side
        health -= 10;
        player.postion.x += 100;
    }
    // End of Player Hurt

    // Monster Death
    if (slimeHealth <= 0) {
        life.slime.dead = true;
        monsters2.currentSprite = monsters2.sprites.slime.dead;
        monsters2.currentCropWidth = 70;
        monsters2.currentSprite.height = 50;
    }

    if (pigHealth <= 0) {
        life.pig.dead = true;
        monsters1.currentSprite = monsters1.sprites.pig.dead;
        monsters1.currentCropWidth = 80;
        monsters1.currentSprite.height = 40;
    }

    if (orangeMushroomHealth <= 0) {
        life.orangeMushroom.dead = true;
        monsters5.currentSprite = monsters5.sprites.barlog.dead;
        monsters5.currentCropWidth = 70;
        monsters5.currentSprite.height = 60;
    }

    if (blueMushroomHealth <= 0) {
        life.blueMushroom.dead = true;
        monsters3.currentSprite = monsters3.sprites.golem.dead;
        monsters3.currentCropWidth = 70;
        monsters3.currentSprite.height = 60;
    }

    if (greenMushroomHealth <= 0) {
        life.greenMushroom.dead = true;
        monsters4.currentSprite = monsters4.sprites.metal.dead;
        monsters4.currentCropWidth = 70;
        monsters4.currentSprite.height = 50;
    }

    if (pinkBeanHealth <= 0) {
        life.pinkBean.dead = true;
        monsters6.currentSprite = monsters6.sprites.pinkBean.dead;
        monsters6.currentCropWidth = 100;
        monsters6.currentSprite.height = 90;
    }
    // End of Monster Death

    // Player Death
    if (health === 0) {
        location.reload(true);
        alert("You died");
    }
    // End of Player Death
    if (life.blueMushroom.dead === true && life.greenMushroom.dead === true && life.orangeMushroom.dead === true && life.pinkBean.dead === true && life.pig.dead === true && life.slime.dead === true) {
        location.reload(true);
        alert("You win");
    }        
}

animate();

addEventListener('keydown', ({key}) => {
    switch (key) {
        case "a":
            keys.left.pressed = true;
            player.currentSprite = player.sprites.walk.left;
            player.currentCropWidth = player.sprites.walk.cropWidth 
            player.width = player.sprites.walk.width;
            break;
        case "d":
            keys.right.pressed = true;
            player.currentSprite = player.sprites.walk.right;
            player.currentCropWidth = player.sprites.walk.cropWidth
            player.width = player.sprites.walk.width
            break;
        case "w":
            if (player.velocity.y === 0)player.velocity.y = -20;
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
            keys.attackj.pressed = true;
            player.currentSprite = player.sprites.attack.right;
            player.currentCropWidth = player.sprites.attack.cropWidth
            player.width = player.sprites.attack.width
            break;
        case "k":
            keys.attackk.pressed = true;
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
            keys.attackj.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
        case "k":
            keys.attackk.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break;
    }
}) 