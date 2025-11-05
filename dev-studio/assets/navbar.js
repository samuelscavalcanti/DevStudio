const currentPage = window.location.pathname.split("/").pop();

const navbarHTML = `
  <h1 class="brand-title">
    <img src="assets/logo.svg" alt="DevStudio Logo" class="navbar-logo"> 
     DevStudio
  </h1>

  <button class="menu-toggle" aria-expanded="false" aria-controls="main-navigation">
    ☰
  </button>

  <nav class="navbar" id="main-navigation" aria-label="Menu principal">
    <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
    <a href="quem-somos.html" class="${currentPage === 'quem-somos.html' ? 'active' : ''}">Quem somos</a>
    <a href="portfolio.html" class="${currentPage === 'portfolio.html' ? 'active' : ''}">Portfólio</a>
    <a href="equipe.html" class="${currentPage === 'equipe.html' ? 'active' : ''}">Equipe</a>
    <a href="contato.html" class="${currentPage === 'contato.html' ? 'active' : ''}">Contato</a>
  </nav>
`;

function loadNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
    setupNavbarToggle();
  }
}

function setupNavbarToggle() {
    // Pegamos os elementos que ACABARAM de ser injetados
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-navigation');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'open' na navbar (que o CSS usa para mostrar/esconder)
            nav.classList.toggle('open');
            
            // Lógica de Acessibilidade (ARIA)
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Opcional: Altera o ícone de Sanduíche para "X"
            menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });
    }
}

loadNavbar();