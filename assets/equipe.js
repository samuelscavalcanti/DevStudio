document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = [
        {
            id: 'joao',
            nome: 'João Amaral',
            cargo: 'Líder de projeto | DevOps',
            foto: 'https://i.imgur.com/nnKxCKb.png',
            alt: 'João Amaral',
            github: 'https://github.com/jamaralm',
            resumo: 'Responsável pela organização do time e planejamento de infraestrutura dos projetos.',
            bioCompleta: `
                <p>Líder técnico com foco em soluções web escaláveis. Esteve à frente do projeto de automação interna da DevStudio, aumentando a produtividade em 35%.</p>
            `
        },
        {
            id: 'samuel',
            nome: 'Samuel Schneweiss',
            cargo: 'UI/UX Designer',
            foto: 'https://i.imgur.com/1seyMZS.png',
            alt: 'Samuel Schneweiss',
            github: 'https://github.com/samuelscavalcanti',
            resumo: 'Cuida da identidade visual, experiência do usuário e design de interfaces.',
            bioCompleta: `
                <p>Designer e desenvolvedor especializado em experiência do usuário e identidade visual. Além de atuar na DevStudio, Samuel criou o fronted e a identidade visual da TAG Paramentação, uma empresa do setor médico focada em vestimentas hospitalares.</p>            `
        },
        {
            id: 'davi',
            nome: 'Davi Chaves',
            cargo: 'Back-end Developer',
            foto: 'https://i.imgur.com/synYJJy.png',
            alt: 'Davi Chaves',
            github: 'https://github.com/davichavesvieira',
            resumo: 'Responsável pela lógica do servidor, banco de dados e infraestrutura.',
            bioCompleta: `
                <p>Especialista em infraestrutura e banco de dados. Desenvolveu a API que sustenta o sistema de relatórios automatizados da empresa.</p>
            `
        },
        {
            id: 'joaoantonio',
            nome: 'João Antonio',
            cargo: 'Front-end Developer',
            foto: 'https://i.imgur.com/A7vGg1c.png',
            alt: 'João Antonio',
            github: 'https://github.com/',
            resumo: 'Especialista em interfaces de usuário modernas, responsável por transformar designs em código interativo e responsivo.',
            bioCompleta: `
                <p>Com vasta experiência em React e Vue.js, João é o arquiteto de front-end que garante a performance e a usabilidade de nossos produtos. Seu foco é otimizar o tempo de carregamento e proporcionar a melhor experiência de navegação para os usuários finais.</p>
            `
        }
    ];

    const teamListContainer = document.getElementById('team-list');

    const createMemberCard = (member) => {
        return `
            <section class="member">
            
            <div class="member-header">
                <img src="${member.foto}" alt="${member.alt}">
                <div>
                    <h3>${member.nome}</h3>
                    <p style="margin: 0; color: var(--accent); font-weight: 500;">${member.cargo}</p>
                </div>
            </div>
            
            <a href="${member.github}" style="
    /* 1. Propriedades de Layout e Tamanho */
    display: flex; /* Transforma o link em um contêiner flexível */
    justify-content: center; /* Centraliza horizontalmente o conteúdo (a logo) */
    align-items: center; /* Centraliza verticalmente o conteúdo (a logo) */
    width: 40px; /* Largura do quadrado */
    height: 40px; /* Altura do quadrado (Mantenha igual à largura para um quadrado) */
    
    /* 2. Estilo Visual */
    background-color: #2a4260; /* Cor de fundo do GitHub */
    border-radius: 6px; /* Bordas arredondadas */
    text-decoration: none; /* Apenas por garantia, remove sublinhado */
">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style="
        fill: white; /* Garante que o ícone seja branco */
    ">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
    </a>

            <p>${member.resumo}</p>
            
            <a href="#" class="mini-bio-btn" data-member="${member.id}">Ver Detalhes</a>
            <div class="mini-bio-content" id="bio-${member.id}"></div>
        </section>
        `;
    };

    const renderTeam = () => {
        const html = teamMembers.map(createMemberCard).join('');
        teamListContainer.innerHTML = html;
        setupMiniBioListeners();
    };

    const setupMiniBioListeners = () => {
        document.querySelectorAll(".mini-bio-btn").forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                const memberId = btn.dataset.member;
                const content = document.getElementById(`bio-${memberId}`);
                const isOpen = content.classList.contains("open");
                
                const memberData = teamMembers.find(m => m.id === memberId);

                document.querySelectorAll(".mini-bio-content").forEach(div => {
                    div.classList.remove("open");
                    div.innerHTML = "";
                });

                if (!isOpen && memberData) {
                    content.innerHTML = memberData.bioCompleta;
                    content.classList.add("open");
                }
            });
        });
    };
    
    renderTeam();
});