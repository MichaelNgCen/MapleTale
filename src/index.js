
document.addEventListener('DOMContentLoaded',  () => {
    const main = document.getElementById('main');

    
    // get element by id
    const title = document.getElementById('titleScreen');
    const game = document.getElementById('game');
    const instructions = document.getElementById('instructionScreen');
    console.log(title);
    title.addEventListener("click", (e) => {
        title.style.display = "none";
        instructions.style.display = "block";
    });

    instructions.addEventListener("click", (e) => {
        instructions.style.display = "none";
        game.style.display = "block";
    });
});