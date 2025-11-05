# 💻 DevStudio: Soluções Digitais

Este repositório contém o código-fonte completo do site institucional da **DevStudio**, uma empresa especializada no desenvolvimento de soluções digitais inovadoras, focado em web, mobile, UX/UI e consultoria em DevOps.

O projeto é um template moderno e responsivo, ideal para empresas de tecnologia que desejam apresentar sua missão, valores e portfólio de forma profissional.

## 🚀 Tecnologias Utilizadas

O projeto é construído com tecnologias front-end puras para garantir alta performance e compatibilidade:

| Tecnologia | Finalidade |
| :---: | :---: |
| **HTML5** | Estrutura semântica das páginas. |
| **CSS3** | Estilização e design responsivo (Mobile First). |
| **JavaScript (ES6+)** | Lógica de carregamento de componentes (Navbar) e renderização dinâmica do Portfólio. |

## 📂 Estrutura do Projeto

A estrutura de arquivos segue uma convenção clara para facilitar a manutenção e a navegação:
dev-studio/ css/ style.css # Estilos gerais do site animate-responsive.css # Estilos para responsividade e animações js/ navbar.js # Lógica de carregamento e menu do cabeçalho portfolio.js # Renderização dinâmica dos projetos script.js # Funções utilitárias gerais img/ logo.png/logo.svg # Arquivos de imagem (logo, ícones, mockups) index.html quem-somos.html portfolio.html equipe.html contato.html README.md

## ✨ Funcionalidades Principais

* **Design Responsivo:** O layout se adapta perfeitamente a qualquer dispositivo (desktops, tablets e smartphones).
* **Componentização via JS:** O cabeçalho (`navbar.js`) é carregado dinamicamente para facilitar a manutenção em todas as páginas.
* **Portfólio Dinâmico:** Os projetos são carregados a partir de um array JavaScript (`portfolio.js`), facilitando a adição ou remoção de novos trabalhos sem tocar no HTML.
* **Foco na Acessibilidade (ARIA):** Elementos de navegação utilizam atributos ARIA para melhorar a experiência de usuários com tecnologias assistivas.

## ⚙️ Como Executar o Projeto Localmente

Para clonar e rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/samuelscavalcanti/DevStudio.git](https://github.com/samuelscavalcanti/DevStudio.git)
    ```

2.  **Entre no diretório do projeto:**
    ```bash
    cd DevStudio
    ```

3.  **Abra as páginas no navegador:**
    Como o projeto é puramente estático (HTML, CSS e JS), basta abrir o arquivo `index.html` diretamente no seu navegador. Alternativamente, você pode usar uma extensão como o *Live Server* do VS Code para hospedar o projeto em um servidor local.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
