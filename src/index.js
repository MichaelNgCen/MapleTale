
document.addEventListener('DOMContentLoaded',  () => {

    // GET THE DOM ELEMENTS
    const main = document.getElementById('main');
    const title = document.getElementById('titleScreen');
    const game = document.getElementById('game');
    const instructions = document.getElementById('instructionScreen');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const info = document.getElementById('info');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    const bgm = document.getElementById('bgm');
    const lg = document.querySelector('#lg');
    const im = document.querySelector('#im');

    // TITLE SCREEN
    // window.onload = function() {
    //     im.play();
    // }
    title.addEventListener("click", (e) => {
        im.play();
        lg.play();
        title.style.display = "none";
        instructions.style.display = "block";
    });

    // INSTRUCTIONS SCREEN
    instructions.addEventListener("click", (e) => {
        instructions.style.display = "none";
        game.style.display = "block";
        im.pause();
        bgm.play();
    });

    // LINKEDIN
    linkedin.addEventListener("click", (e) => {
        window.open('https://www.linkedin.com/in/michaelngcen/', '_blank');
    });

    // GITHUB
    github.addEventListener("click", (e) => {
        window.open('https://github.com/MichaelNgCen', '_blank');
    });

    // INFOMATION
    info.addEventListener("click", (e) => {
        game.style.display = "none";
        instructions.style.display = "block";
    });

    playButton.addEventListener('click', () => {
        bgm.pause();
        playButton.style.display = "none";
        stopButton.style.display = "block";
      });
      stopButton.addEventListener('click', () => {
        bgm.play();
        playButton.style.display = "block";
        stopButton.style.display = "none";
      });
});