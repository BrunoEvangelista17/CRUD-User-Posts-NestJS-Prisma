# NestJS Prisma Project

Este projeto é uma aplicação construída com [NestJS](https://nestjs.com/) e [Prisma](https://www.prisma.io/), projetada para demonstrar boas práticas e integração com banco de dados utilizando o Prisma ORM.

## Tabela de Conteúdo

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Visão Geral

Esta aplicação implementa:

- Autenticação JWT.
- Manipulação de banco de dados com Prisma ORM.
- Estrutura modular seguindo as boas práticas do NestJS.

## Funcionalidades

- **Autenticação:** Login e registro de usuários.
- **CRUD:** Operações completas para gestão de entidades.
- **Integração de Banco de Dados:** Gerenciamento automático de esquemas.

## Configuração

### Dependências

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados compatível com Prisma (MySQL, PostgreSQL, SQLite, etc.)

### Instalação

1. Clone o repositório:

   ```bash
   git clone <URL-do-Repositório>
   cd nestjs-prisma-project
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados:
   Renomeie o arquivo `example.env` para `.env` e preencha as variáveis de ambiente:

   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
   ```

4. Gere o esquema Prisma:

   ```bash
   npx prisma generate
   ```

5. Execute as migrações:

   ```bash
   npx prisma migrate dev
   ```

## Uso

Inicie o servidor:

```bash
npm run start:dev
```

Acesse a aplicação em `http://localhost:3000`.

## Estrutura do Projeto

```
nestjs-prisma-project/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── modules/
│   │   ├── auth/
│   │   ├── user/
│   ├── prisma/
├── prisma/
│   ├── schema.prisma
├── .env
├── package.json
├── README.md
```

