
window.addEventListener("load", () => {

    let buscar = document.getElementById('buscar');
        
    let opciones = document.getElementById('options-search');
    let drop = document.querySelector('.search-dropdown');

    buscar.addEventListener('input', buscarMobile)

    function buscarMobile() {
        let textoBuscar = buscar.value.toLowerCase();
        let optionLi = opciones.children;

        drop.style.display = 'block'

        for( let i = 0; i < optionLi.length; i++ ) {
            let optionText = optionLi[i].textContent.toLowerCase();
            if( optionText.includes( textoBuscar ) ) {
                optionLi[i].style.display = 'block';
            } else {
                optionLi[i].style.display = 'none';
            }
        }
    }

    if( window.screen.width >= 768 ) {
        let buscar2 = document.getElementById('buscar2');
        let opciones2 = document.getElementById('options-search2');
        let drop2 = document.querySelector('.search-dropdown2');
        function buscarDesktop() {
            let textoBuscar = buscar2.value.toLowerCase();
            let optionLi = opciones2.children;

            drop2.style.display = 'block'

            for( let i = 0; i < optionLi.length; i++ ) {
                let optionText = optionLi[i].textContent.toLowerCase();
                if( optionText.includes( textoBuscar ) ) {
                    optionLi[i].style.display = 'block';
                } else {
                    optionLi[i].style.display = 'none';
                }
            }
        }
        buscar.removeEventListener('input', buscarMobile);
        buscar2.addEventListener('input', buscarDesktop);
        document.addEventListener('click', (e) => {
            if( e.target !== buscar2 && e.target.parentNode !== opciones2 ) {
                drop2.style.display = 'none';
            }
        })
    }


    document.addEventListener('click', (e) => {
        if( e.target !== buscar && e.target.parentNode !== opciones ) {
            drop.style.display = 'none';
        }
    })

    let iconOpen = document.querySelector('.top-icon-mobile');
    let menuOpen = document.querySelector('.manuInner');
    let menuClose = document.querySelector('.manuInnerClose');
    let bodyContent = document.querySelector('body');

    iconOpen.addEventListener("click", () => {
        menuOpen.classList.toggle('menuInnerOpen');
        bodyContent.classList.toggle('bodyOverflow');
    })

    menuClose.addEventListener('click', () => {
        menuOpen.classList.toggle('menuInnerOpen');
        bodyContent.classList.toggle('bodyOverflow')
    })

})