import mobileNav from './modules/mobile-nav.js';

mobileNav();

const newsItems = [
    {
        title: "Опрыскивание растений с беспилотников",
        date: "22/04/2019",
        text: "Опрыскивание с дронов может проводиться как минимум в двух форматах: “классическом авиационном”, когда химикаты распыляются по всему полю, и “точечном”, совмещенным, например, с предварительным осмотром посевов при помощи мультиспектральных камер.",
        image: "../img/novosti/news1.jpg"
    },
    {
        title: "Дроны – будущее сельского хозяйства",
        date: "10/04/2019",
        text: "Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов.",
        image: "../img/novosti/news2.jpg"
    },
    {
        title: "Зачем нужны беспилотники в сельском хозяйстве?",
        date: "14/03/2019",
        text: "Использование дронов в земледелии - одно из наиболее перспективных направлений применения этой технологии. БЛА могут быть использованы для химической обработки посевов.",
        image: "../img/novosti/news3.jpg"
    },
    {
        title: "Создание цифровых карт и контуров полей",
        date: "05/03/2019",
        text: "Многие руководители агрохозяйств только приблизительно знают площади своих полей, что негативно влияет на точность расчетов.",
        image: "../img/novosti/news4.jpg"
    },
    {
        title: "Новая технология в сельском хозяйстве",
        date: "01/03/2019",
        text: "Современные методы обработки земли с применением дронов и других технологий могут значительно повысить урожай.",
        image: "../img/novosti/news5.jpg"
    },
    {
        title: "Эффективность использования дронов",
        date: "28/02/2019",
        text: "Дроны обеспечивают точность и эффективность в агросекторе, улучшая процессы сельскохозяйственного производства.",
        image: "../img/novosti/news6.jpg"
    },
    {
        title: "Новая технология в сельском хозяйстве",
        date: "22/02/2019",
        text: "Современные методы обработки земли с применением дронов и других технологий могут значительно повысить урожай.",
        image: "../img/novosti/news7.jpg"
    },
    {
        title: "Эффективность использования дронов",
        date: "18/01/2019",
        text: "Дроны обеспечивают точность и эффективность в агросекторе, улучшая процессы сельскохозяйственного производства.",
        image: "../img/novosti/news6.jpg"
    },
];

const articlesPerPage = 4;
let currentPage = 1;

// Отображение новостей
function displayNews(page) {
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedNews = newsItems.slice(startIndex, endIndex);

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    paginatedNews.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('__card');
        card.innerHTML = `
            <div class="__left">
                <img class="__img" src="${item.image}" alt="imgNews.jpg">
            </div>
            <div class="__right">
                <div class="__top">
                    <h4>${item.title}</h4>
                    <h5>${item.date} 00:00</h5>
                </div>
                <p>${item.text}</p>
                <a class="desc-block__link" href="/">Читайте полностью</a>
            </div>
        `;
        newsContainer.appendChild(card);
    });
}

function setupPagination() {
    const paginationTopDiv = document.getElementById('pagination-top');
    const paginationBottomDiv = document.getElementById('pagination-bottom');
    paginationTopDiv.innerHTML = '';
    paginationBottomDiv.innerHTML = '';

    const pageCount = Math.ceil(newsItems.length / articlesPerPage);
    
    for (let i = 1; i <= Math.min(5, pageCount); i++) {
        createPageButton(i, paginationTopDiv);
    }

    for (let i = 6; i <= pageCount; i++) {
        createPageButton(i, paginationBottomDiv);
    }
}

function createPageButton(pageNum, container) {
    const button = document.createElement('button');
    button.textContent = pageNum;
    button.classList.add('button'); // Добавить класс 'button'

    if (pageNum === currentPage) {
        button.classList.add('active');
    }

    button.addEventListener('click', () => {
        currentPage = pageNum;
        displayNews(currentPage);
        updateActivePage(); // Обновляем активные кнопки
    });

    container.appendChild(button);
}

function updateActivePage() {
    const buttons = document.querySelectorAll('.pagination-section .button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = [...buttons].find(button => button.textContent == currentPage);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Инициализация
displayNews(currentPage);
setupPagination();
updateActivePage(); // Убедитесь, что это тоже вызывается