


# Sistema de Favoritos

Este projeto é um sistema de favoritos que permite aos usuários autenticados adicionar e visualizar filmes e livros favoritos. A autenticação é feita através do Google, e os dados são armazenados no Firestore.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Firebase**: Plataforma para autenticação e banco de dados em tempo real.
  - **Firestore**: Banco de dados NoSQL para armazenar os favoritos.
  - **Firebase Authentication**: Para autenticação de usuários via Google.

## Funcionalidades

- Autenticação de usuários com Google.
- Adição de filmes e livros aos favoritos.
- Visualização da lista de favoritos.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Ative o Firestore e a autenticação via Google.
   - Substitua as configurações do Firebase no arquivo `src/utils/firebaseConfig.js`.

## Uso

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

2. Abra seu navegador e acesse `http://localhost:3000`.

