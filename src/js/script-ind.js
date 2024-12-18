
window.addEventListener("load", () => {

    let clickerIndex = document.querySelector('.indexclicker');
    let indexContent = document.querySelector('.bloque6LeftIndexContent');

    clickerIndex.addEventListener('click', () => {
        indexContent.classList.toggle('bloque6LeftIndexBlock');
    })

})