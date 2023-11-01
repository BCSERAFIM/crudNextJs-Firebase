# crudNextJs-Firebase
Cadastro simples de usuários: Incluir, Listar, Alterar e Excluir / Simple User Registration: Create, Read, Update, Delete (CRUD)

[![Licença](https://img.shields.io/github/license/BCSERAFIM/crudNextJs-Firebase)](https://github.com/BCSERAFIM/crudNextJs-Firebase/blob/main/LICENSE)


# Projeto de Exemplo - Cadastro de Clientes / Sample Project - Customer Registration

Este é um projeto de exemplo que demonstra um sistema de cadastro simples, construído usando Next.js e Firebase. Ele serve como uma demonstração das habilidades e práticas de desenvolvimento do autor.

This is a sample project that showcases a simple registration system, built using Next.js and Firebase. It serves as a demonstration of the author's development skills and practices.

## Recursos Destacados / Highlighted Features

- **Frontend em Next.js / Frontend in Next.js**: O projeto utiliza o Next.js como framework frontend para criar uma aplicação web moderna. / The project uses Next.js as the frontend framework to create a modern web application.

- **Integração com Firebase / Integration with Firebase:** Os dados dos clientes são armazenados e gerenciados usando o Firebase Firestore, um banco de dados NoSQL em tempo real da Firebase.

- **Tailwind CSS para Estilos / Tailwind CSS for Styling:** O projeto incorpora o Tailwind CSS para estilização, proporcionando uma interface limpa e responsiva. / The project incorporates Tailwind CSS for styling, delivering a clean and responsive interface.

- **Hooks Personalizados / Custom Hooks:** A aplicação faz uso de hooks personalizados para gerenciar o estado da aplicação e controlar a visibilidade de componentes. / The application makes use of custom hooks to manage the application's state and control component visibility.

## Visão Geral do Projeto / Project Overview

Este projeto simula um sistema de cadastro de clientes, onde é possível adicionar, editar, excluir e listar clientes. Ele é uma aplicação de página única (SPA) que oferece uma experiência de usuário suave.

This project simulates a customer registration system where you can add, edit, delete, and list customers. It is a single-page application (SPA) that provides a smooth user experience.

## Como Executar / How to Run

1. **Instale as Dependências / Install Dependencies:**: Antes de executar o projeto, certifique-se de instalar as dependências usando `npm install`. / Before running the project, make sure to install the dependencies using npm install.

2. **Configuração do Firebase / Firebase Configuration:** Este projeto utiliza o Firebase Firestore para armazenar dados. Você deve configurar suas credenciais do Firebase em `backend/config.ts`. / This project uses Firebase Firestore to store data. You should configure your Firebase credentials in backend/config.ts.

3. **Inicie a Aplicação / Start the Application:** Use `npm run dev` para iniciar a aplicação em modo de desenvolvimento. / Use npm run dev to start the application in development mode.

4. **Acesse a Aplicação / Access the Application:** Acesse a aplicação no seu navegador em / Access the application in your browser at :`http://localhost:3000`.

## Estrutura do Projeto / Project Structure

- `pages/index.tsx`: A página principal da aplicação que exibe o formulário de cadastro de clientes e a tabela de clientes. / The main page of the application that displays the customer registration form and the customer table.

- `backend/config.ts`: Configuração do Firebase e inicialização do Firebase. / Firebase Configuration and Firebase Initialization.

- `backend/colecaoCliente.ts`: Implementação das operações de banco de dados para clientes usando Firebase. / Implementation of database operations for customers using Firebase Firestore.

- `hooks/useClientes.ts`: Gerencia o estado dos clientes e a interação com o banco de dados. / Manages the state of customers and the interaction with the database.

- `hooks/useTabelaOuForm.ts`: Controla a visibilidade da tabela de clientes e do formulário de cadastro. / Controls the visibility of the customer table and the registration form.

# Autor / Author
Bruno Cesar Serafim
[Linkedin](https://www.linkedin.com/in/bcserafim) - [Site Pessoal](http://bcserafim.infinityfreeapp.com/)

