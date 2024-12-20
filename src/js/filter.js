const cardsData = [
    { name: 'Card 1', category: 'nutricion', content: `<div class="bloque2DesktopCardsItem"> <img src="https://lp.cayetano.edu.pe/wp-content/uploads/2024/12/todos-mobile-image1.webp" alt="Imagen de nota"> <div class="content"> <!-- Bloque del calendario en la parte superior--> <div class="sliderItemInfo6ItemInfoCalendar"><img src="https://lp.cayetano.edu.pe/wp-content/uploads/2024/12/calendar-icon-whit.webp" alt=""> <h3>04</h3> <h3>|</h3> <h3>10</h3> </div> <h3>¿Por qué elegir una universidad priorizada?</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p><img class="keyframe-button-movement" src="https://lp.cayetano.edu.pe/wp-content/uploads/2024/12/arrow-black-button.webp" alt=""> </div> </div>` },
    { name: 'Card 2', category: 'educacion', content: 'Card 2' },
    { name: 'Card 3', category: 'biologia', content: 'Card 3' },
    { name: 'Card 4', category: 'ingAmbiental', content: 'Card 4'},
    { name: 'Card 5', category: 'nutricion', content: 'Card 5' },
    { name: 'Card 6', category: 'biologia', content: 'Card 6' },
    { name: 'Card 7', category: 'educacion', content: 'Card 7' },
    { name: 'Card 8', category: 'ingAmbiental', content: 'Card 8' },
    { name: 'Card 9', category: 'ingAmbiental', content: 'Card 9' },
    { name: 'Card 10', category: 'ingAmbiental', content: 'Card 10' }
    // Añade más tarjetas según sea necesario
];

const cardsContainer = document.querySelector('.bloque2DesktopCards');
const filterSelect = document.getElementById('filter');
const paginationContainer = document.querySelector('.bloque2ProgramNotas');
const itemsPerPage = 6;
let currentPage = 1;


function renderCards(data) {
    cardsContainer.innerHTML = '';
    data.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = card.content;
        cardsContainer.appendChild(cardDiv);
    });
}

function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.onclick = () => changePage(i);
        paginationContainer.appendChild(pageButton);
    }
}

function getPaginatedData(data, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
}

function filterCards() {
    const selectedCategory = filterSelect.value;
    const filteredData = selectedCategory ? 
        cardsData.filter(card => card.category === selectedCategory) : 
        cardsData;
    const paginatedData = getPaginatedData(filteredData, currentPage, itemsPerPage);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    renderCards(paginatedData);
    renderPagination(totalPages);
}

function changePage(page) {
    currentPage = page;
    filterCards();
}

filterCards();