
window.addEventListener("load", () => {

    let clickerIndex = document.querySelector('.indexclicker');
    let indexContent = document.querySelector('.bloque6LeftIndexContent');

    clickerIndex.addEventListener('click', () => {
        indexContent.classList.toggle('bloque6LeftIndexBlock');
    })

    document.getElementById('boton-compartir').addEventListener("click", function() {
        var metaTag = document.createElement('meta');
        metaTag.property = "og:image";
        metaTag.content = "https://blogs.cayetano.edu.pe/pregrado/bioincuba/";
        document.head.appendChild(metaTag);
        const url = 'https://www.facebook.com/sharer/sharer.php?i=https%3A%2F%2Flp.cayetano.edu.pe%2Fwp-content%2Fuploads%2F2024%2F12%2Fimage-nota-24.jpg&u=https%3A%2F%2Fblogs.cayetano.edu.pe%2Fpregrado%2Fbioincuba%2F'
        window.open(url, '_blank')
    })

})