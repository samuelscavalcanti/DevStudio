document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "1",
      nome: "Conversor de Binário",
      alt: "Mockup da interface do Conversor de Binário", 
      resumo:
        "Ferramenta interativa que converte números em binário. Desenvolvida para praticar lógica de programação e manipulação de DOM com JavaScript puro",
      github: "https://github.com/jamaralm/binaryConverter",
      imagem: "https://i.pinimg.com/736x/dc/98/1c/dc981c46667e7f9c4572e1d53e8edd04.jpg",
    },
    {
      id: "2",
      nome: "TAG Paramentação",
      alt: "Mockup da plataforma TAG Paramentação em um computador",
      resumo:
        "Plataforma web desenvolvida para a empresa TAG Paramentação, focada na gestão e divulgação de vestimentas hospitalares. O sistema apresenta um site institucional moderno, totalmente responsivo e desenvolvido com React.",
      github: "https://github.com/gustavolinodev/Tag-Site",
      imagem: "https://imgur.com/a/CxM9H6O",
    },
    {
      id: "3",
      nome: "Mini Spotify",
      alt: "Mockup da interface do Mini Spotify em um celular",
      resumo:
        "Um projeto em Java inspirado no Spotify, desenvolvida para controle de playlists. O projeto permite ao usuário criar, e gerenciar músicas em uma interface moderna e responsiva.",
      github: "https://github.com/jamaralm/spotifyProject",
      imagem: "https://static.vecteezy.com/ti/vetor-gratis/p1/6057992-spotify-logo-on-transparent-background-gratis-vetor.jpg ",
    },
  ];

  const projectListContainer = document.getElementById("project-list");

  const createProjectCard = (project) => {
    return `
            <article class="card portfolio-item">
                <h3>${project.nome}</h3>
                <p>${project.resumo}</p>
                <button class="mini-bio-btn" onclick="window.open('${project.github}', '_blank')">
                    Ver no GitHub
                </button>
                <img src="${project.imagem}" alt="${project.alt}" class="portfolio-img">
            </article>
        `;
  };
  const renderProject = () => {
    const html = projects.map(createProjectCard).join("");
    projectListContainer.innerHTML = html;
  };

  renderProject();
});
