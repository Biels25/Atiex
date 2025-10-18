# Teste de Aptidão - Simulação de Facção

Este projeto é um quiz interativo de aptidão de carreira, desenvolvido em React, com uma temática imersiva inspirada no universo do filme "Divergente".

O usuário responde a uma série de perguntas baseadas em cenários para determinar se sua aptidão se alinha mais com a **Lógica (Análise e Desenvolvimento de Sistemas)**, a **Ação (Mecatrônica)** ou a **Comunidade (Outros)**. Caso os resultados sejam equilibrados, o usuário é classificado como **Divergente**.

## ✨ Funcionalidades

* **Interface Temática:** Design, textos e imagens que criam uma atmosfera imersiva.
* **Perguntas Aleatórias:** A cada nova tentativa, 4 perguntas são sorteadas de um banco de 12 questões, garantindo uma experiência única a cada vez.
* **Animações e Transições:** Uso da biblioteca `framer-motion` para uma navegação fluida e agradável entre as telas e perguntas.
* **Resultados Personalizados:** Ao final, um gráfico de rosca interativo, criado com `Chart.js`, mostra o desempenho do usuário em cada uma das três áreas de aptidão.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuário.
* **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas na aplicação.
* **[Framer Motion](https://www.framer.com/motion/)**: Para animações declarativas e fluidas.
* **[Chart.js](https://www.chartjs.org/)** & **[react-chartjs-2](https://react-chartjs-2.js.org/)**: Para a criação do gráfico de resultados.
* **CSS Moderno**: Variáveis CSS para um tema consistente e fácil de manter.

## 🏁 Como Iniciar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
* `npm` ou `yarn` como gerenciador de pacotes.

### Passo a Passo

1.  **Clone o Repositório**

    Primeiro, clone este repositório para a sua máquina local usando o terminal:
    ```bash
    git clone [https://github.com/seu-usuario/atiex-quiz.git](https://github.com/seu-usuario/atiex-quiz.git)
    ```
    *(Lembre-se de substituir `<URL_DO_SEU_REPOSITORIO>` pela URL real do seu projeto no GitHub)*

2.  **Acesse a Pasta do Projeto**

    ```bash
    cd atiex-quiz
    ```

3.  **Instale as Dependências**

    Dentro da pasta do projeto, execute o comando abaixo para instalar todas as bibliotecas e pacotes necessários.
    ```bash
    npm install
    ```
    *ou, se estiver usando Yarn:*
    ```bash
    yarn install
    ```

4.  **Inicie o Servidor de Desenvolvimento**

    Após a instalação das dependências, inicie a aplicação com o comando:
    ```bash
    npm start
    ```
    *ou, com Yarn:*
    ```bash
    yarn start
    ```
    Isso irá iniciar o servidor de desenvolvimento e abrirá o projeto automaticamente em seu navegador padrão, geralmente no endereço **[http://localhost:3000](http://localhost:3000)**.

A página será recarregada automaticamente sempre que você fizer uma alteração nos arquivos do projeto.

## 📜 Scripts Disponíveis

Neste projeto, você pode rodar os seguintes scripts:

* `npm start`: Roda a aplicação em modo de desenvolvimento.
* `npm run build`: Compila a aplicação para produção na pasta `build`.
* `npm test`: Inicia o executor de testes no modo interativo.

---
_Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app)._
