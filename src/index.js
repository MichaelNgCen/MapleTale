
document.addEventListener('DOMContentLoaded',  () => {
    const main = document.getElementById('main');

    
    // get element by id
    const title = document.getElementById('titleScreen');
    const game = document.getElementById('game');
    const instructions = document.getElementById('instructionScreen');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const info = document.getElementById('info');
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
    
});