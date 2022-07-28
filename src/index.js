
document.addEventListener('DOMContentLoaded',  () => {
    const main = document.getElementById('main');
    // get element by id
    const title = document.getElementById('titleScreen');
    const game = document.getElementById('game');
    const instructions = document.getElementById('instructionScreen');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const info = document.getElementById('info');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    const bgm = document.getElementById('bgm');

    console.log(title);
    title.addEventListener("click", (e) => {
        title.style.display = "none";
        instructions.style.display = "block";
    });

    instructions.addEventListener("click", (e) => {
        instructions.style.display = "none";
        game.style.display = "block";
    });

    linkedin.addEventListener("click", (e) => {
        window.open('https://www.linkedin.com/in/michaelngcen/', '_blank');
    });

    github.addEventListener("click", (e) => {
        window.open('https://github.com/MichaelNgCen', '_blank');
    });

    info.addEventListener("click", (e) => {
        game.style.display = "none";
        instructions.style.display = "block";
    });

    playButton.addEventListener('click', () => {
        bgm.play();
        playButton.style.display = "none";
        stopButton.style.display = "block";
      });
      stopButton.addEventListener('click', () => {
        bgm.pause();
        playButton.style.display = "block";
        stopButton.style.display = "none";
      });
      
    
});