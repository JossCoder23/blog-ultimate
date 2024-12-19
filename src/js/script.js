
window.addEventListener("load", () => {


    function perfObserver(list, observer, options) {
        list.getEntries().forEach((entry) => {
          // do something with the entries
        });
        if (options?.droppedEntriesCount > 0) {
          console.warn(
            `${options?.droppedEntriesCount} entries got dropped due to the buffer being full.`,
          );
        }
    }
    
    const observer = new PerformanceObserver(perfObserver);
    observer.observe({ type: "resource", buffered: true });

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

    if( window.screen.width >= 767 ) {
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


    var slider2 = new Swiper(".mySwiper2", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet2 ' + className + '"></span>';
            }
        },
    });

    var slider3 = new Swiper(".mySwiper3", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet4 ' + className + '"></span>';
            }
        },
        breakpoints: { }
    });

    var slider5 = new Swiper(".mySwiper5", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet5 ' + className + '"></span>';
            }
        },
        breakpoints: { 
            768: {
                slidesPerView: 3
            }
        }
    });

    var slider6 = new Swiper(".mySwiper6", {
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev6"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet6 ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        }
    });
        

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

    // let clickerIndex = document.querySelector('.indexclicker');
    // let indexContent = document.querySelector('.bloque6LeftIndexContent');

    // clickerIndex.addEventListener('click', () => {
    //     alert("hice click")
    //     indexContent.classList.add('bloque6LeftIndexBlock');
    // })

})