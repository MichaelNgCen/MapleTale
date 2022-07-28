const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;

// SPRITE
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

const hrt = new Image();
hrt.src = './src/media/sprite/heart.png'

const empty = new Image();
empty.src = './src/media/sprite/empty.png'

const s1 = new Image();
s1.src = './src/media/sprite/slime1.png'

const s2 = new Image();
s2.src = './src/media/sprite/slime2.png'

const p2 = new Image();
p2.src = './src/media/sprite/pig2.png'

const b1 = new Image();
b1.src = './src/media/sprite/blue1.png'

const b2 = new Image();
b2.src = './src/media/sprite/blue2.png'

const o1 = new Image();
o1.src = './src/media/sprite/orange1.png'

const o2 = new Image();
o2.src = './src/media/sprite/orange2.png'

const g1 = new Image();
g1.src = './src/media/sprite/g1.png'

const g2 = new Image();
g2.src = './src/media/sprite/g2.png'

const p1 = new Image();
p1.src = './src/media/sprite/p1.png'

const pp2 = new Image();
pp2.src = './src/media/sprite/pp2.png'

const p3 = new Image();
p3.src = './src/media/sprite/p3.png'

const p4 = new Image();
p4.src = './src/media/sprite/p4.png'

const p5 = new Image();
p5.src = './src/media/sprite/p5.png'

const pw1 = new Image();
pw1.src = './src/media/sprite/walkLeft2.png'

const pw2 = new Image();
pw2.src = './src/media/sprite/walkLeft3.png'

const pw3 = new Image();
pw3.src = './src/media/sprite/walkLeft4.png'

const pw4 = new Image();
pw4.src = './src/media/sprite/walkLeft5.png'

const pwr2 = new Image();
pwr2.src = './src/media/sprite/walkRight2.png'

const pwr3 = new Image();
pwr3.src = './src/media/sprite/walkRight3.png'

const pwr4 = new Image();
pwr4.src = './src/media/sprite/walkRight4.png'

const pwr5 = new Image();
pwr5.src = './src/media/sprite/walkRight5.png'

const al1 = new Image();
al1.src = './src/media/sprite/attackLeft0.png'

const al2 = new Image();
al2.src = './src/media/sprite/attackLeft1.png'

const al3 = new Image();
al3.src = './src/media/sprite/attackLeft2.png'

const al4 = new Image();
al4.src = './src/media/sprite/attackLeft3.png'

const ar1 = new Image();
ar1.src = './src/media/sprite/attackRight0.png'

const ar2 = new Image();
ar2.src = './src/media/sprite/attackRight1.png'

const ar3 = new Image();
ar3.src = './src/media/sprite/attackRight2.png'

const ar4 = new Image();
ar4.src = './src/media/sprite/attackRight3.png'


// SPRITE END

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
                pw1: pw1, cropWidth: 61.8, width: 61.8, height: 86,
                pw2: pw2, cropWidth: 61.8, width: 61.8, height: 86,
                pw3: pw3, cropWidth: 61.8, width: 61.8, height: 86,
                pw4: pw4, cropWidth: 61.8, width: 61.8, height: 86,
                right: walkingRight, cropWidth: 61.8, width: 61.8, height: 86,
                pwr2: pwr2, cropWidth: 61.8, width: 61.8, height: 86,
                pwr3: pwr3, cropWidth: 61.8, width: 61.8, height: 86,
                pwr4: pwr4, cropWidth: 61.8, width: 61.8, height: 86,
                pwr5: pwr5, cropWidth: 61.8, width: 61.8, height: 86
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
                left: attackLeft, cropWidth: 73.3, width: 67.3, height: 80,
                al1: al1, cropWidth: 73.3, width: 67.3, height: 80,
                al2: al2, cropWidth: 73.3, width: 67.3, height: 80,
                al3: al3, cropWidth: 73.3, width: 67.3, height: 80,
                al4: al4, cropWidth: 73.3, width: 67.3, height: 80,
                ar1: ar1, cropWidth: 73.3, width: 67.3, height: 80,
                ar2: ar2, cropWidth: 73.3, width: 67.3, height: 80,
                ar3: ar3, cropWidth: 73.3, width: 67.3, height: 80,
                ar4: ar4, cropWidth: 73.3, width: 67.3, height: 80

            }
            
        }
        this.currentSprite = this.sprites.stand.left
        this.currentCropWidth = 65.8
    }
    draw() {
        ctx.drawImage(this.currentSprite, this.currentCropWidth * 0, 0, this.currentCropWidth, this.currentSprite.height,
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
                dead: pigDead, cropWidth: 25, width: 6, height: 6,
                p2: p2, cropWidth: 25, width: 6, height: 6
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
                dead: slimeDead, cropWidth: 25, width: 6, height: 6,
                s1: s1, cropWidth: 25, width: 6, height: 6,
                s2: s2, cropWidth: 25, width: 6, height: 6
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
                dead: bmDead, cropWidth: 25, width: 6, height: 6,
                b1: b1, cropWidth: 25, width: 6, height: 6,
                b2: b2, cropWidth: 25, width: 6, height: 6

            }
        }
        this.currentSprite = this.sprites.golem.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 1000, 290, this.currentCropWidth, this.currentSprite.height+15);
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
                dead: gmDead, cropWidth: 25, width: 6, height: 6,
                g1: g1, cropWidth: 25, width: 6, height: 6,
                g2: g2, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.metal.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 520, 70, this.currentCropWidth, this.currentSprite.height+5); 
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
                dead: omDead, cropWidth: 25, width: 6, height: 6,
                o1: o1, cropWidth: 25, width: 6, height: 6,
                o2: o2, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.barlog.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 580, 290, this.currentCropWidth, this.currentSprite.height+15); // middle slime
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
                dead: pbDead, cropWidth: 25, width: 6, height: 6,
                p1: p1, cropWidth: 25, width: 6, height: 6,
                pp2: pp2, cropWidth: 25, width: 6, height: 6,
                p3: p3, cropWidth: 25, width: 6, height: 6,
                p4: p4, cropWidth: 25, width: 6, height: 6,
                p5: p5, cropWidth: 25, width: 6, height: 6
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

class Heart1 {  
    constructor() {
        this.image = hrt
        this.frames = 0
        this.sprites = {
            hrt: {
                left: hrt, cropWidth: 25, width: 6, height: 6,
                hurt: empty, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.hrt.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 40, 680, this.currentCropWidth, this.currentSprite.height - 550); 
    }
    update() {
        this.draw();
    }
}
class Heart2 {  
    constructor() {
        this.image = hrt
        this.frames = 0
        this.sprites = {
            hrt: {
                left: hrt, cropWidth: 25, width: 6, height: 6,
                hurt: empty, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.hrt.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 140, 680, this.currentCropWidth, this.currentSprite.height - 550); 
    }
    update() {
        this.draw();
    }
}
class Heart3 {  
    constructor() {
        this.image = hrt
        this.frames = 0
        this.sprites = {
            hrt: {
                left: hrt, cropWidth: 25, width: 6, height: 6,
                hurt: empty, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.hrt.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 240, 680, this.currentCropWidth, this.currentSprite.height - 550); 
    }
    update() {
        this.draw();
    }
}

class Heart4 {  
    constructor() {
        this.image = hrt
        this.frames = 0
        this.sprites = {
            hrt: {
                left: hrt, cropWidth: 25, width: 6, height: 6,
                hurt: empty, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.hrt.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 340, 680, this.currentCropWidth, this.currentSprite.height - 550); 
    }
    update() {
        this.draw();
    }
}

class Heart5 {  
    constructor() {
        this.image = hrt
        this.frames = 0
        this.sprites = {
            hrt: {
                left: hrt, cropWidth: 25, width: 6, height: 6,
                hurt: empty, cropWidth: 25, width: 6, height: 6
            }
        }
        this.currentSprite = this.sprites.hrt.left
        this.currentCropWidth = 100
    }
    draw() {
        ctx.drawImage(this.currentSprite, 440, 680, this.currentCropWidth, this.currentSprite.height - 550); 
    }
    update() {
        this.draw();
    }
}

const player = new Player();
const platforms = [new Platform({x:250, y: 550, width: 100, height: 0}), // first haystack
    new Platform({x:80, y: 490, width: 120, height: 0}), // first edge platform 
    new Platform({x:80, y: 430, width: 120, height: 0}), // second edge platform
    new Platform({x:260, y: 370, width: 1020, height: 0}), // second floor?
    new Platform({x:330, y: 310, width: 100, height: 0}), // second haystack
    new Platform({x:175, y: 255, width: 120, height: 0}), // third edge platform 
    new Platform({x:175, y: 190, width: 120, height: 0}), // fourth edge platform
    new Platform({x:350, y: 130, width: 1200, height: 0}), // third floor?
    new Platform({x:400, y: 65, width: 100, height: 0}), // third haystack
    new Platform({x:260, y: 12, width: 140, height: 0}), // fifth edge platform
    new Platform({x:1250, y: 65, width: 100, height: 0}), // fourth haystack?
    new Platform({x:0, y: 615, width: 1300, height: 0}), // floor?
]; 

const monsters1 = new Monster1(), monsters2 = new Monster2(), monsters3 = new Monster3(), monsters4 = new Monster4(), monsters5 = new Monster5(), monsters6 = new Monster6();
const heart1 = new Heart1(), heart2 = new Heart2(), heart3 = new Heart3(), heart4 = new Heart4(), heart5 = new Heart5();

const keys = {
    right: {pressed: false},
    left: {pressed: false},
    attackj: {pressed: false},
    attackk: {pressed: false},
}

const life = {
    slime: {dead: false},
    pig: {dead: false},
    orangeMushroom: {dead: false},
    greenMushroom: {dead: false},
    blueMushroom: {dead: false},
    pinkBean: {dead: false},
}

var slimeHealth = 100, pigHealth = 100, orangeMushroomHealth = 100, greenMushroomHealth = 100, blueMushroomHealth = 100, pinkBeanHealth = 100, health = 100;

const edges = [new Edge({x:0, y: 0, width: 0, height: 615}), new Edge({x:1270, y: 0, width: 0, height: 615})];

var monsterFrames = 0;
var playerFrames = 0;

function animate() {
    requestAnimationFrame(animate);
    monsterFrames += 4;
    playerFrames += 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(); monsters1.draw(); monsters2.draw(); monsters3.draw(); monsters4.draw(); monsters5.draw(); monsters6.draw(); heart1.draw(), heart2.draw(), heart3.draw(), heart4.draw(), heart5.draw();
    platforms.forEach(platform => platform.draw());
    edges.forEach(edge => edge.draw());
    if (keys.right.pressed) player.postion.x += 10;
    if (keys.left.pressed) player.postion.x -= 10;
    platforms.forEach(platform => {
    if (player.postion.y + player.height-10 <= platform.position.y && player.postion.y + player.height+player.velocity.y >= platform.position.y && player.postion.x + player.width >= platform.position.x && player.postion.x <= platform.position.x + platform.width) player.velocity.y = 0;})
    edges.forEach(edge => { if (player.postion.x < 0) player.postion.x = 5; if (player.postion.x > 1220) player.postion.x = 1215;})
    // Attack
    // slimed
    if (player.postion.x >= 345 && keys.attackj.pressed === true && player.postion.y >= 510 && player.postion.y <= 530 && player.postion.x <= 425) slimeHealth -= 5;
    if (player.postion.x >= 435 && keys.attackk.pressed === true && player.postion.y >= 510 && player.postion.y <= 530 && player.postion.x <= 455) slimeHealth -= 5;
    // pig
    if (player.postion.x >= 535 && keys.attackj.pressed === true && player.postion.y >= 270 && player.postion.y <= 285 && player.postion.x <= 590) orangeMushroomHealth -= 3;
    if (player.postion.x >= 600 && keys.attackk.pressed === true && player.postion.y >= 270 && player.postion.y <= 285 && player.postion.x <= 650) orangeMushroomHealth -= 3;
    // orange mushroom
    if (player.postion.x >= 945 && keys.attackj.pressed === true && player.postion.y >= 270 && player.postion.y <= 285 && player.postion.x <= 1000) blueMushroomHealth -= 2;
    if (player.postion.x >= 1010 && keys.attackk.pressed === true && player.postion.y >= 270 && player.postion.y <= 285 && player.postion.x <= 1090) blueMushroomHealth -= 2;
    // blue mushroom
    if (player.postion.x >= 890 && keys.attackj.pressed === true && player.postion.y >= 515.5 && player.postion.y <= 530.5 && player.postion.x <= 930) pigHealth -= 5;
    if (player.postion.x <= 1010 && keys.attackk.pressed === true && player.postion.y >= 515.5 && player.postion.y <= 530.5 && player.postion.x >= 990) pigHealth -= 5;
    // pink bean
    if (player.postion.x >= 475 && keys.attackj.pressed === true && player.postion.y >= 30 && player.postion.y <= 45 && player.postion.x <= 530) greenMushroomHealth -= 2;
    if (player.postion.x >= 540 && keys.attackk.pressed === true && player.postion.y >= 30 && player.postion.y <= 45 && player.postion.x <= 610) greenMushroomHealth -= 2;
    // green mushroom
    if (player.postion.x >= 950 && keys.attackj.pressed === true && player.postion.y >= 30 && player.postion.y <= 45 && player.postion.x <= 1000) pinkBeanHealth -= .5;
    if (player.postion.x >= 1010 && keys.attackk.pressed === true && player.postion.y >= 30 && player.postion.y <= 45 && player.postion.x <= 1065) pinkBeanHealth -= .5;
    // End of attack

    // Player Hurt
    // slime    
    if (player.postion.x === 375 && (keys.right.pressed === true || keys.left.pressed === true) && player.postion.y >= 510 && player.postion.y <= 530 && life.slime.dead === false) {  // slime left side
        health -= 10;
        player.postion.x -= 100;
    }
    if ((keys.left.pressed === true || keys.right.pressed === true) && player.postion.y >= 510 && player.postion.y <= 530 && player.postion.x === 420 && life.slime.dead === false) { // slime right side
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

    // console.log(monsterFrames);

    if (monsterFrames >= 1 && monsterFrames <= 30) {
        monsters2.currentSprite = monsters2.sprites.slime.s1;
    }

    if (monsterFrames >= 31 && monsterFrames <= 60) {
        monsters2.currentSprite = monsters2.sprites.slime.s2;
    }

    if (monsterFrames >=  1 && monsterFrames <= 30) {
        monsters1.currentSprite = monsters1.sprites.pig.p2;
    }

    if (monsterFrames >= 31 && monsterFrames <= 60) {
        monsters1.currentSprite = monsters1.sprites.pig.left;
    }

    if (monsterFrames >= 1 && monsterFrames <= 20) {
        monsters3.currentSprite = monsters3.sprites.golem.b1;
    }

    if (monsterFrames >= 21 && monsterFrames <= 40) {
        monsters3.currentSprite = monsters3.sprites.golem.b2;
    }

    if (monsterFrames >= 41 && monsterFrames <= 60) {
        monsters3.currentSprite = monsters3.sprites.golem.left;
    }

    if (monsterFrames >= 1 && monsterFrames <= 20) {
        monsters5.currentSprite = monsters5.sprites.barlog.o1
    }

    if (monsterFrames >= 21 && monsterFrames <= 40) {
        monsters5.currentSprite = monsters5.sprites.barlog.o2
    }

    if (monsterFrames >= 41 && monsterFrames <= 60) {
        monsters5.currentSprite = monsters5.sprites.barlog.left
    }

    if (monsterFrames >= 1 && monsterFrames <= 20) {
        monsters4.currentSprite = monsters4.sprites.metal.g1
    }

    if (monsterFrames >= 21 && monsterFrames <= 40) {
        monsters4.currentSprite = monsters4.sprites.metal.g2
    }

    if (monsterFrames >= 41 && monsterFrames <= 60) {
        monsters4.currentSprite = monsters4.sprites.metal.left
    }

    if (monsterFrames >= 1 && monsterFrames <= 12) {
        monsters6.currentSprite = monsters6.sprites.pinkBean.p1
    }

    if (monsterFrames >= 13 && monsterFrames <= 24) {
        monsters6.currentSprite = monsters6.sprites.pinkBean.pp2
    }

    if (monsterFrames >= 25 && monsterFrames <= 36) {
        monsters6.currentSprite = monsters6.sprites.pinkBean.p3
    }

    if (monsterFrames >= 37 && monsterFrames <= 48) {
        monsters6.currentSprite = monsters6.sprites.pinkBean.p4
    }

    if (monsterFrames >= 49 && monsterFrames <= 60) {
        monsters6.currentSprite = monsters6.sprites.pinkBean.p5
    }

    if (monsterFrames === 60) monsterFrames = 0;

    // console.log(playerFrames);
    if (playerFrames >= 1 && playerFrames <= 15 && keys.left.pressed === true) {
        player.currentSprite = player.sprites.walk.pw1
    }
    if (playerFrames >= 16 && playerFrames <= 30 && keys.left.pressed === true) {
        player.currentSprite = player.sprites.walk.pw2
    }
    if (playerFrames >= 31 && playerFrames <= 45 && keys.left.pressed === true) {
        player.currentSprite = player.sprites.walk.pw3
    }
    if (playerFrames >= 46 && playerFrames <= 60 && keys.left.pressed === true) {
        player.currentSprite = player.sprites.walk.pw4
    }

    if (playerFrames >= 1 && playerFrames <= 20 && keys.right.pressed === true) {
        player.currentSprite = player.sprites.walk.pwr2
    }
    if (playerFrames >= 21 && playerFrames <= 40 && keys.right.pressed === true) {
        player.currentSprite = player.sprites.walk.pwr3
    }
    if (playerFrames >= 41 && playerFrames <= 60 && keys.right.pressed === true) {
        player.currentSprite = player.sprites.walk.pwr4
    }
    if (playerFrames >= 46 && playerFrames <= 60 && keys.right.pressed === true) {
        player.currentSprite = player.sprites.walk.pwr5
    }

    if (playerFrames >= 1 && playerFrames <= 12 && keys.attackk.pressed === true) {
        player.currentSprite = player.sprites.attack.left
    }
    if (playerFrames >= 13 && playerFrames <= 24 && keys.attackk.pressed === true) {
        player.currentSprite = player.sprites.attack.al1
    }
    if (playerFrames >= 25 && playerFrames <= 36 && keys.attackk.pressed === true) {
        player.currentSprite = player.sprites.attack.al2
    }
    if (playerFrames >= 37 && playerFrames <= 48 && keys.attackk.pressed === true) {
        player.currentSprite = player.sprites.attack.al3
    }
    if (playerFrames >= 49 && playerFrames <= 60 && keys.attackk.pressed === true) {
        player.currentSprite = player.sprites.attack.al4
    }

    if (playerFrames >= 1 && playerFrames <= 12 && keys.attackj.pressed === true) {
        player.currentSprite = player.sprites.attack.right
    }
    if (playerFrames >= 13 && playerFrames <= 24 && keys.attackj.pressed === true) {
        player.currentSprite = player.sprites.attack.ar1
    }
    if (playerFrames >= 25 && playerFrames <= 36 && keys.attackj.pressed === true) {
        player.currentSprite = player.sprites.attack.ar2
    }
    if (playerFrames >= 37 && playerFrames <= 48 && keys.attackj.pressed === true) {
        player.currentSprite = player.sprites.attack.ar3
    }
    if (playerFrames >= 49 && playerFrames <= 60 && keys.attackj.pressed === true) {
        player.currentSprite = player.sprites.attack.ar4
    }

    if (playerFrames === 60) playerFrames = 0;

    // Monster Death
    if (slimeHealth <= 0) {
        life.slime.dead = true;
        monsters2.currentSprite = monsters2.sprites.slime.dead;
        monsters2.currentCropWidth = 100;
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
        monsters5.currentSprite.height = 80;
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
        monsters4.currentSprite.height = 80;
    }

    if (pinkBeanHealth <= 0) {
        life.pinkBean.dead = true;
        monsters6.currentSprite = monsters6.sprites.pinkBean.dead;
        monsters6.currentCropWidth = 100;
        monsters6.currentSprite.height = 90;
    }
    // End of Monster Death

    // Player Death

    if (health <= 80) {
        heart5.currentSprite = heart5.sprites.hrt.hurt;
        heart5.currentCropWidth = 0;
        heart5.currentSprite.height = 0;
    }
    if (health <= 60) {
        heart4.currentSprite = heart4.sprites.hrt.hurt;
        heart4.currentCropWidth = 0;
        heart4.currentSprite.height = 0;
    }
    if (health <= 40) {
        heart3.currentSprite = heart3.sprites.hrt.hurt;
        heart3.currentCropWidth = 0;
        heart3.currentSprite.height = 0;
    }
    if (health <= 20) {
        heart2.currentSprite = heart2.sprites.hrt.hurt;
        heart2.currentCropWidth = 0;
        heart2.currentSprite.height = 0;
    }
    if (health <= .1) {
        heart1.currentSprite = heart1.sprites.hrt.hurt;
        heart1.currentCropWidth = 0;
        heart1.currentSprite.height = 0;
    }

    if (health === 0) {
        location.reload(true);
        alert("You Fainted");
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
            if (player.velocity.y === 0)player.velocity.y = -16;
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
