# Doce Cabelos

     Site para venda de cabelos naturais da marca Doce Cabelos, com área de administração para gerenciar produtos.

     ## Pré-requisitos
     - Node.js (versão 18 ou superior)
     - npm

     ## Como Executar Localmente
     1. Clone o repositório:
        ```bash
        git clone https://github.com/seu-usuario/doce-cabelos.git
        ```
     2. Instale as dependências:
        ```bash
        cd doce-cabelos
        npm install
        ```
     3. Execute o projeto:
        ```bash
        npm run dev
        ```
        Acesse em `http://localhost:5173`.
     4. Para pré-visualizar o build:
        ```bash
        npm run build
        npm run preview
        ```
        Acesse em `http://localhost:4173`.

     ## Hospedagem no GitHub Pages
     1. Ajuste o `base` em `vite.config.js` para o nome do seu repositório (ex.: `/doce-cabelos/`).
     2. Faça o build:
        ```bash
        npm run build
        ```
     3. Deploy para o GitHub Pages:
        ```bash
        npx gh-pages -d dist
        ```
     4. Acesse o site em `https://seu-usuario.github.io/doce-cabelos/`.

     ## Credenciais de Admin
     - Usuário: admin
     - Senha: doce123

     ## Notas
     - Substitua `public/banner.jpg` e as URLs em `public/products.json` por imagens reais da marca.
     - Para persistência de dados, integre um backend (ex.: Firebase).
     - Verifique o console do navegador (F12 > Console) para erros, caso a página não carregue.