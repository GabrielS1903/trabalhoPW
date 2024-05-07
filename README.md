# API de Usuário

Esta é uma aplicação simples para gerenciamento de usuários, desenvolvida como parte de um trabalho de Programação Web.

## Tabela de Conteúdos

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

## Como Usar

Esta aplicação fornece uma API REST para gerenciar usuários. Aqui estão os endpoints disponíveis:

- `GET /usuario/listaUsuarios`: Retorna uma lista de todos os usuários cadastrados.
- `GET /usuario/unicoUsuario/:id`: Retorna os detalhes de um único usuário com o ID fornecido.
- `POST /usuario/criarUsuario`: Cria um novo usuário com os detalhes fornecidos.
- `DELETE /usuario/deletarUsuario/:id`: Deleta o usuário com o ID fornecido.
- `PUT /usuario/alterarUsuario/:id`: Atualiza os detalhes do usuário com o ID fornecido.

Certifique-se de incluir os detalhes necessários, como nome, email, idade, gênero, telefone, CPF e RG, ao criar ou atualizar um usuário.

## DatabaseConnection
Arquivo databaseConnection.js
Este arquivo contém a função para estabelecer a conexão com o banco de dados MongoDB. Certifique-se de substituir a URI de conexão pelo URI do seu próprio banco de dados MongoDB.

import mongoose from "mongoose";

const URI = 'mongodb+srv://gabrielrenatoschons:masterkey@projetopw.kn7kfwa.mongodb.net/?retryWrites=true&w=majority&appName=projetoPW'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set("strictQuery", false)
        global.mongoose = await mongoose.connect(URI)
        .then(()=>console.log('connected to mongodb'))
        .catch(e=>console.log(e));
    }
}

export default databaseConnection
