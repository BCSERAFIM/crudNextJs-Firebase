# crudNextJs-Firebase
Cadastro simples de usuários: Incluir, Listar, Alterar e Excluir

[![Licença](https://img.shields.io/github/license/BCSERAFIM/crudNextJs-Firebase)](https://github.com/BCSERAFIM/crudNextJs-Firebase/blob/main/LICENSE)


# Projeto de Exemplo - Cadastro de Clientes

Este é um projeto de exemplo que demonstra um sistema de cadastro simples, construído usando Next.js e Firebase Firestore. Ele serve como uma demonstração das habilidades e práticas de desenvolvimento do autor.

## Recursos Destacados

- **Frontend em Next.js**: O projeto utiliza o Next.js como framework frontend para criar uma aplicação web moderna.

- **Integração com Firebase Firestore**: Os dados dos clientes são armazenados e gerenciados usando o Firebase Firestore, um banco de dados NoSQL em tempo real da Firebase.

- **Tailwind CSS para Estilos**: O projeto incorpora o Tailwind CSS para estilização, proporcionando uma interface limpa e responsiva.

- **Hooks Personalizados**: A aplicação faz uso de hooks personalizados para gerenciar o estado da aplicação e controlar a visibilidade de componentes.

## Visão Geral do Projeto

Este projeto simula um sistema de cadastro de clientes, onde é possível adicionar, editar, excluir e listar clientes. Ele é uma aplicação de página única (SPA) que oferece uma experiência de usuário suave.

## Como Executar

1. **Instale as Dependências**: Antes de executar o projeto, certifique-se de instalar as dependências usando `npm install`.

2. **Configuração do Firebase**: Este projeto utiliza o Firebase Firestore para armazenar dados. Você deve configurar suas credenciais do Firebase em `backend/config.ts`.

3. **Inicie a Aplicação**: Use `npm run dev` para iniciar a aplicação em modo de desenvolvimento.

4. **Acesse a Aplicação**: Acesse a aplicação no seu navegador em `http://localhost:3000`.

## Estrutura do Projeto

- `pages/index.tsx`: A página principal da aplicação que exibe o formulário de cadastro de clientes e a tabela de clientes.

- `backend/config.ts`: Configuração do Firebase Firestore e inicialização do Firebase.

- `backend/colecaoCliente.ts`: Implementação das operações de banco de dados para clientes usando Firebase Firestore.

- `hooks/useClientes.ts`: Gerencia o estado dos clientes e a interação com o banco de dados.

- `hooks/useTabelaOuForm.ts`: Controla a visibilidade da tabela de clientes e do formulário de cadastro.

## Autor

- [Bruno Cesar Serafim ](https://github.com/BCSERAFIM) - [bcserafim.infinityfreeapp](http://bcserafim.infinityfreeapp.com/)

**Nota**: Este é um projeto de exemplo e não está em produção. Foi criado com fins de demonstração e não deve ser utilizado em um ambiente de produção real.

