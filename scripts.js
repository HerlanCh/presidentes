// Datos de los presidentes (podrían cargarse desde una API)
const presidentsData = [
    {
        id: 1,
        name: "Simón Bolívar",
        period: "1825 - 1826",
        party: "Libertador",
        category: ["siglo19", "militares"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png/330px-Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png",
        bio: "Conocido como el Libertador, Simón Bolívar fue el primer presidente de Bolivia tras su independencia en 1825. Gobernó por un breve período mientras redactaba la primera constitución del país.",
        details: {
            fullPeriod: "12 de agosto de 1825 - 29 de diciembre de 1825",
            birth: "24 de julio de 1783, Caracas, Venezuela",
            death: "17 de diciembre de 1830 (47 años), Santa Marta, Colombia",
            profession: "Militar, político",
            fullBio: `Simón José Antonio de la Santísima Trinidad Bolívar y Palacios Ponte y Blanco, conocido como Simón Bolívar, fue un militar y político venezolano, fundador de las repúblicas de la Gran Colombia y Bolivia.

Tras la independencia de Bolivia el 6 de agosto de 1825, la Asamblea Deliberante lo designó primer Presidente de la República, cargo que ejerció por breve tiempo mientras redactaba la primera Constitución del país.

Durante su mandato en Bolivia, Bolívar estableció las bases del nuevo estado, promovió la abolición de la esclavitud y sentó las instituciones republicanas. Sin embargo, delegó el gobierno en Antonio José de Sucre para continuar sus campañas libertadoras en otros territorios.

Bolívar es considerado una de las figuras más destacadas de la emancipación americana frente al Imperio español, por lo que recibe el título de "Libertador". Su pensamiento político influyó en toda la región y su legado sigue siendo fundamental en la identidad boliviana.`
        }
    },

    {
        "id": 2,
        "name": "Antonio José de Sucre",
        "period": "1826 - 1828",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Martin_Tovar_y_Tovar_12.JPG/330px-Martin_Tovar_y_Tovar_12.JPG",
        "bio": "Sucre fue el segundo presidente de Bolivia y colaborador cercano de Bolívar. Promovió la organización del Estado boliviano y fue fundamental en su consolidación.",
        "details": {
            "fullPeriod": "29 de diciembre de 1825 - 18 de abril de 1828",
            "birth": "3 de febrero de 1795, Cumaná, Venezuela",
            "death": "4 de junio de 1830 (35 años), Berruecos, Colombia",
            "profession": "Militar, político",
            "fullBio": "Antonio José de Sucre y Alcalá fue un militar y político venezolano, uno de los principales líderes de la independencia sudamericana y primer presidente constitucional de Bolivia. Durante su gobierno estableció instituciones republicanas y promovió la educación. Renunció tras conflictos internos y atentados contra su vida."
        }
    },
    {
        "id": 3,
        "name": "Andrés de Santa Cruz",
        "period": "1829 - 1839",
        "party": "Conservador",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Andr%C3%A9s_de_Santa_Cruz._Ugalde%2C_Manuel._c._1835%2C_Andr%C3%A9s_de_Santa_Cruz_collection%2C_La_Paz.png/500px-Andr%C3%A9s_de_Santa_Cruz._Ugalde%2C_Manuel._c._1835%2C_Andr%C3%A9s_de_Santa_Cruz_collection%2C_La_Paz.png",
        "bio": "Santa Cruz fue un líder clave que logró estabilidad y progreso. Gobernó también como Supremo Protector de la Confederación Perú-Boliviana.",
        "details": {
            "fullPeriod": "24 de mayo de 1829 - 20 de febrero de 1839",
            "birth": "5 de diciembre de 1792, La Paz, Alto Perú",
            "death": "25 de septiembre de 1865 (72 años), Niza, Francia",
            "profession": "Militar, político",
            "fullBio": "Andrés de Santa Cruz y Calahumana fue un estadista y militar boliviano-peruano que logró una administración eficaz. Fundó la Confederación Perú-Boliviana, pero fue derrotado por fuerzas chilenas y peruanas. Su gobierno es recordado por su disciplina administrativa y su impulso al desarrollo."
        }
    },
    {
        "id": 4,
        "name": "José Ballivián",
        "period": "1841 - 1847",
        "party": "Conservador",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jos%C3%A9_Ballivi%C3%A1n.jpg/330px-Jos%C3%A9_Ballivi%C3%A1n.jpg",
        "bio": "Conocido por su victoria en la batalla de Ingavi, consolidó el territorio boliviano y gobernó con mano firme.",
        "details": {
            "fullPeriod": "27 de septiembre de 1841 - 23 de diciembre de 1847",
            "birth": "5 de mayo de 1805, La Paz, Alto Perú",
            "death": "6 de octubre de 1852 (47 años), Río de Janeiro, Brasil",
            "profession": "Militar, político",
            "fullBio": "José Ballivián y Segurola fue presidente de Bolivia tras derrotar al invasor peruano Agustín Gamarra en la batalla de Ingavi. Durante su mandato se dedicó a modernizar el Estado, establecer límites fronterizos y mejorar la educación. Renunció y se exilió por presiones políticas."
        }
    },
    {
        "id": 5,
        "name": "Manuel Isidoro Belzu",
        "period": "1848 - 1855",
        "party": "Populista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Manuel_Isidoro_Belzu._Villavicencio%2C_Antonio._c._1848%2C_Museo_de_Charcas%2C_Sucre.png/500px-Manuel_Isidoro_Belzu._Villavicencio%2C_Antonio._c._1848%2C_Museo_de_Charcas%2C_Sucre.png",
        "bio": "Belzu fue un caudillo popular que atrajo a las clases bajas con su discurso contra la oligarquía.",
        "details": {
            "fullPeriod": "15 de agosto de 1848 - 17 de diciembre de 1855",
            "birth": "14 de abril de 1808, La Paz, Alto Perú",
            "death": "23 de marzo de 1865 (56 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Manuel Isidoro Belzu Humérez se destacó por su política de defensa de los intereses populares. Fue un líder carismático pero también autoritario. Su mandato estuvo marcado por conflictos con las élites y guerras civiles. Fue asesinado durante un intento de retorno al poder."
        }
    },
    {
        "id": 6,
        "name": "José María Linares",
        "period": "1857 - 1861",
        "party": "Liberal Moderado",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jos%C3%A9_Mar%C3%ADa_Linares._de_La_Cruz_Tapia%2C_Juan._c._1860%2C_Legislative_Palace%2C_La_Paz.png/330px-Jos%C3%A9_Mar%C3%ADa_Linares._de_La_Cruz_Tapia%2C_Juan._c._1860%2C_Legislative_Palace%2C_La_Paz.png",
        "bio": "Primer presidente civil elegido mediante golpe militar, modernizó la administración pública.",
        "details": {
            "fullPeriod": "9 de diciembre de 1857 - 14 de enero de 1861",
            "birth": "19 de septiembre de 1808, Ticaloma, Alto Perú",
            "death": "23 de octubre de 1861 (53 años), Potosí, Bolivia",
            "profession": "Abogado, político",
            "fullBio": "José María Linares Lizarazu fue el primer presidente civil de Bolivia que asumió tras un golpe. Promovió reformas para reducir la corrupción y aumentar la transparencia. Fue depuesto tras perder apoyo militar y popular."
        }
    },
    {
        "id": 7,
        "name": "Mariano Melgarejo",
        "period": "1864 - 1871",
        "party": "Dictadura Militar",
        "category": ["siglo19", "militares", "controversiales"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mariano_Melgarejo._Villavicencio%2C_Antonio._c._1864%2C_Museo_de_Charcas%2C_Sucre.png/330px-Mariano_Melgarejo._Villavicencio%2C_Antonio._c._1864%2C_Museo_de_Charcas%2C_Sucre.png",
        "bio": "Figura controvertida, Melgarejo gobernó con autoritarismo y entregó territorios a Brasil.",
        "details": {
            "fullPeriod": "28 de diciembre de 1864 - 15 de enero de 1871",
            "birth": "13 de abril de 1820, Tarata, Alto Perú",
            "death": "23 de noviembre de 1871 (51 años), Lima, Perú",
            "profession": "Militar",
            "fullBio": "Mariano Melgarejo Valencia fue un militar que se hizo del poder por la fuerza. Su mandato estuvo marcado por abusos de poder, escándalos y cesiones de territorio a cambio de reconocimiento diplomático. Fue depuesto y asesinado poco después."
        }
    },
    {
        "id": 8,
        "name": "Hilarión Daza",
        "period": "1876 - 1879",
        "party": "Liberal",
        "category": ["siglo19", "militares", "guerra"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hilari%C3%B3n_Daza._Anonymous_author._c._1876%2C_C%C3%ADrculo_Militar%2C_La_Paz.png/330px-Hilari%C3%B3n_Daza._Anonymous_author._c._1876%2C_C%C3%ADrculo_Militar%2C_La_Paz.png",
        "bio": "Presidente durante el inicio de la Guerra del Pacífico. Fue derrocado por traición.",
        "details": {
            "fullPeriod": "4 de mayo de 1876 - 28 de diciembre de 1879",
            "birth": "1840, Sucre, Bolivia",
            "death": "27 de febrero de 1894 (54 años), Uyuni, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Hilarión Daza Groselle gobernó Bolivia al estallar la Guerra del Pacífico contra Chile. Su retirada injustificada de la campaña militar fue considerada traición. Exiliado en Europa, fue asesinado al regresar a Bolivia para rendir cuentas."
        }
    },
    {
        "id": 9,
        "name": "Aniceto Arce",
        "period": "1888 - 1892",
        "party": "Partido Conservador",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Aniceto_Arce._Gorostiaga%2C_Isaac._c._1900s%2C_C%C3%ADrculo_Militar%2C_La_Paz.png/330px-Aniceto_Arce._Gorostiaga%2C_Isaac._c._1900s%2C_C%C3%ADrculo_Militar%2C_La_Paz.png",
        "bio": "Arce fue un presidente conservador que impulsó el desarrollo ferroviario y la economía.",
        "details": {
            "fullPeriod": "15 de agosto de 1888 - 11 de agosto de 1892",
            "birth": "15 de abril de 1824, Tarija, Bolivia",
            "death": "14 de agosto de 1906 (82 años), Sucre, Bolivia",
            "profession": "Abogado, empresario, político",
            "fullBio": "Aniceto Arce Ruiz fue un prominente político y empresario. Durante su mandato fomentó la inversión extranjera, los ferrocarriles y la minería. Representó el poder de la élite conservadora durante el periodo conocido como la República Oligárquica."
        }
    },
    {
        "id": 10,
        "name": "Ismael Montes",
        "period": "1904 - 1909 / 1913 - 1917",
        "party": "Partido Liberal",
        "category": ["siglo20", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/26b_-_Ismael_Montes.png/330px-26b_-_Ismael_Montes.png",
        "bio": "Gobernó dos periodos, firmó el Tratado de Paz con Chile y consolidó el liberalismo.",
        "details": {
            "fullPeriod": "14 de agosto de 1904 - 12 de agosto de 1909 / 14 de agosto de 1913 - 15 de agosto de 1917",
            "birth": "5 de octubre de 1861, La Paz, Bolivia",
            "death": "16 de octubre de 1933 (72 años), La Paz, Bolivia",
            "profession": "Abogado, militar, político",
            "fullBio": "Ismael Montes Gamboa fue un político liberal que lideró reformas modernizadoras. Firmó el Tratado de Paz con Chile (1904) aceptando la pérdida del litoral boliviano. Impulsó la educación laica y la infraestructura."
        }
    },
    {
        "id": 11,
        "name": "Germán Busch",
        "period": "1937 - 1939",
        "party": "Revolucionario Militar",
        "category": ["siglo20", "militares", "revolucionarios"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Germ%C3%A1n_Busch_-_2.jpg/500px-Germ%C3%A1n_Busch_-_2.jpg",
        "bio": "Busch fue un joven militar que gobernó con ideas nacionalistas y murió en circunstancias trágicas.",
        "details": {
            "fullPeriod": "13 de julio de 1937 - 23 de agosto de 1939",
            "birth": "23 de marzo de 1904, El Carmen, Beni",
            "death": "23 de agosto de 1939 (35 años), La Paz, Bolivia",
            "profession": "Militar",
            "fullBio": "Germán Busch Becerra asumió el poder tras un golpe. Declaró dictadura para promulgar reformas económicas nacionalistas y fortalecer al Estado. Su gobierno terminó con su misteriosa muerte, considerada suicidio por algunos, asesinato por otros."
        }
    },
    {
        "id": 12,
        "name": "Víctor Paz Estenssoro",
        "period": "1952 - 1956 / 1960 - 1964 / 1985 - 1989",
        "party": "Movimiento Nacionalista Revolucionario (MNR)",
        "category": ["siglo20", "civiles", "revolucionarios"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/45_-_V%C3%ADctor_Paz_Estenssoro.jpg/330px-45_-_V%C3%ADctor_Paz_Estenssoro.jpg",
        "bio": "Líder de la Revolución Nacional de 1952, nacionalizó las minas y promovió la reforma agraria.",
        "details": {
            "fullPeriod": "15 de abril de 1952 - 6 de agosto de 1956 / 6 de agosto de 1960 - 4 de noviembre de 1964 / 6 de agosto de 1985 - 6 de agosto de 1989",
            "birth": "2 de octubre de 1907, Tarija, Bolivia",
            "death": "7 de junio de 2001 (93 años), Tarija, Bolivia",
            "profession": "Abogado, político",
            "fullBio": "Víctor Paz Estenssoro fue uno de los líderes más influyentes de Bolivia. Condujo la Revolución de 1952 que transformó el país: universalización del voto, reforma agraria y nacionalización de las minas. Volvió al poder en los 80 para implementar un ajuste económico radical que estabilizó la hiperinflación."
        }
    },
    {
        "id": 13,
        "name": "Hugo Banzer Suárez",
        "period": "1971 - 1978 / 1997 - 2001",
        "party": "Acción Democrática Nacionalista (ADN)",
        "category": ["siglo20", "militares", "dictadores", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/GralHugoBanzerSuarez.jpg/330px-GralHugoBanzerSuarez.jpg",
        "bio": "Gobernó como dictador en los años 70 y luego fue elegido democráticamente en los años 90.",
        "details": {
            "fullPeriod": "21 de agosto de 1971 - 21 de julio de 1978 / 6 de agosto de 1997 - 7 de agosto de 2001",
            "birth": "10 de mayo de 1926, Concepción, Santa Cruz",
            "death": "5 de mayo de 2002 (75 años), Santa Cruz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Hugo Banzer Suárez fue un militar que asumió el poder mediante un golpe de Estado en 1971, instaurando una dictadura caracterizada por la represión política. En 1997, regresó al poder mediante elecciones democráticas. Su segundo mandato estuvo marcado por una política económica neoliberal. Renunció en 2001 por motivos de salud."
        }
    },
    {
        "id": 14,
        "name": "Evo Morales",
        "period": "2006 - 2019",
        "party": "Movimiento al Socialismo (MAS)",
        "category": ["siglo21", "indígenas", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Evo_Morales_Ayma_%28cropped%29.jpg/330px-Evo_Morales_Ayma_%28cropped%29.jpg",
        "bio": "Primer presidente indígena de Bolivia, lideró un gobierno de transformación social y económica.",
        "details": {
            "fullPeriod": "22 de enero de 2006 - 10 de noviembre de 2019",
            "birth": "26 de octubre de 1959, Isallavi, Bolivia",
            "death":"",
            "profession": "Sindicalista, político",
            "fullBio": "Juan Evo Morales Ayma fue el primer presidente indígena en la historia de Bolivia. Durante su gestión impulsó la redistribución de la riqueza, la nacionalización de recursos naturales y una nueva Constitución. Fue reelecto varias veces, aunque su último mandato fue interrumpido por una crisis política y social en 2019."
        }
    },{
        "id": 15,
        "name": "Luis Arce Catacora",
        "period": "2020 - presente",
        "party": "Movimiento al Socialismo (MAS-IPSP)",
        "category": ["siglo21", "civiles", "economistas"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_I.png/500px-Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_I.png",
        "bio": "Economista y exministro de Evo Morales, ganó las elecciones de 2020 tras la crisis de 2019.",
        "details": {
            "fullPeriod": "8 de noviembre de 2020 - presente",
            "birth": "28 de septiembre de 1963, La Paz, Bolivia",
            "death": "",
            "profession": "Economista, político",
            "fullBio": "Luis Alberto Arce Catacora es un economista y político boliviano que fue ministro de Economía durante gran parte del gobierno de Evo Morales. Se destacó por impulsar el modelo económico social comunitario productivo. Tras la crisis política de 2019, fue elegido presidente en 2020 con una amplia mayoría. Su mandato ha enfrentado desafíos económicos y políticos, así como tensiones internas dentro del MAS."
        }
    }



    // ... (agregar los demás presidentes con la misma estructura)
];

// Variables globales
let currentTab = 'todos';
let currentPage = 1;
const presidentsPerPage = 8;

// Elementos del DOM
const tabsContainer = document.querySelector('.tabs');
const tabsContentContainer = document.getElementById('tabs-content-container');
const paginationContainer = document.getElementById('pagination-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const modal = document.getElementById('president-modal');
const modalContent = document.querySelector('.modal-content');
const currentYearSpan = document.getElementById('current-year');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Establecer año actual en el footer
    currentYearSpan.textContent = new Date().getFullYear();

    // Cargar datos iniciales
    loadPresidents(currentTab);
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Pestañas
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            currentTab = e.target.getAttribute('data-tab');
            currentPage = 1;
            loadPresidents(currentTab);

            // Actualizar estado activo de las pestañas
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });

    // Búsqueda
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        } else {
            showSearchSuggestions();
        }
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Cargar presidentes según categoría
function loadPresidents(category) {
    let filteredPresidents = [];

    if (category === 'todos') {
        filteredPresidents = [...presidentsData];
    } else {
        filteredPresidents = presidentsData.filter(president =>
            president.category.includes(category)
        );
    }

    renderPresidentsGrid(filteredPresidents);
    renderPagination(filteredPresidents.length);
}

// Renderizar la cuadrícula de presidentes
function renderPresidentsGrid(presidents) {
    const startIndex = (currentPage - 1) * presidentsPerPage;
    const endIndex = startIndex + presidentsPerPage;
    const presidentsToShow = presidents.slice(startIndex, endIndex);

    let html = `<div id="${currentTab}" class="tab-content active"><div class="presidents-grid">`;

    presidentsToShow.forEach(president => {
        html += `
        <div class="president-card" onclick="openModal(${president.id})">
            <div class="president-image">
                <img src="${president.image}" alt="${president.name}" loading="lazy">
                <div class="president-period">${president.period}</div>
            </div>
            <div class="president-info">
                <h3 class="president-name">${president.name}</h3>
                <span class="president-party">${president.party}</span>
                <p class="president-bio">${president.bio}</p>
                <a href="#" class="read-more">Leer más <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        `;
    });

    html += `</div></div>`;
    tabsContentContainer.innerHTML = html;
}

// Renderizar paginación
function renderPagination(totalPresidents) {
    const totalPages = Math.ceil(totalPresidents / presidentsPerPage);
    let html = '';

    if (totalPages > 1) {
        // Botón anterior
        html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" 
                 onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
                 <i class="fas fa-chevron-left"></i></button>`;

        // Páginas
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" 
                     onclick="changePage(${i})">${i}</button>`;
        }

        // Botón siguiente
        html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                 onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                 <i class="fas fa-chevron-right"></i></button>`;
    }

    paginationContainer.innerHTML = html;
}

// Cambiar página
function changePage(page) {
    if (page < 1 || page > Math.ceil(presidentsData.length / presidentsPerPage)) return;

    currentPage = page;
    loadPresidents(currentTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Búsqueda de presidentes
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        loadPresidents(currentTab);
        searchSuggestions.innerHTML = '';
        return;
    }

    const filteredPresidents = presidentsData.filter(president =>
        president.name.toLowerCase().includes(searchTerm) ||
        president.party.toLowerCase().includes(searchTerm) ||
        president.period.toLowerCase().includes(searchTerm) ||
        president.bio.toLowerCase().includes(searchTerm)
    );

    renderPresidentsGrid(filteredPresidents);
    renderPagination(filteredPresidents.length);
    searchSuggestions.innerHTML = '';
}

// Mostrar sugerencias de búsqueda
function showSearchSuggestions() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        searchSuggestions.innerHTML = '';
        return;
    }

    const suggestions = presidentsData.filter(president =>
        president.name.toLowerCase().includes(searchTerm) ||
        president.party.toLowerCase().includes(searchTerm)
    ).slice(0, 5);

    let html = '';
    suggestions.forEach(president => {
        html += `<div class="suggestion-item" onclick="selectSuggestion('${president.name}')">
                 <i class="fas fa-search"></i> ${president.name} (${president.period})</div>`;
    });

    searchSuggestions.innerHTML = html;
}

// Seleccionar sugerencia
function selectSuggestion(name) {
    searchInput.value = name;
    performSearch();
}

// Abrir modal con detalles del presidente
function openModal(presidentId) {
    const president = presidentsData.find(p => p.id === presidentId);

    if (!president) return;

    const modalHtml = `
        <div class="modal-header">
            <h2>${president.name}</h2>
            <button class="close-modal" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-image">
                <img src="${president.image.replace('220px', '800px')}" alt="${president.name}">
            </div>
            <div class="modal-info">
                <div class="president-details">
                    <div class="detail-item">
                        <span class="detail-label">Período:</span>
                        <span>${president.details.fullPeriod}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Nacimiento:</span>
                        <span>${president.details.birth}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fallecimiento:</span>
                        <span>${president.details.death}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Profesión:</span>
                        <span>${president.details.profession}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Partido:</span>
                        <span>${president.party}</span>
                    </div>
                </div>
                
                <h3>Biografía</h3>
                <div class="modal-bio">
                    <p>${president.details.fullBio}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button onclick="closeModal()" class="modal-close-btn">Cerrar</button>
        </div>
    `;

    modalContent.innerHTML = modalHtml;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Hacer funciones accesibles globalmente
window.openModal = openModal;
window.closeModal = closeModal;
window.changePage = changePage;
window.selectSuggestion = selectSuggestion;