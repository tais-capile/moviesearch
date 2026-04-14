# 🎬 MovieSearch API

Aplicação web desenvolvida para consumo e integração de APIs externas, combinando informações de filmes com notícias relacionadas em uma interface moderna.

---

## Objetivo do Projeto

Desenvolver uma API capaz de consumir e integrar dados de múltiplas fontes externas, fornecendo ao usuário informações completas sobre filmes junto com notícias relevantes em uma única requisição.

---

## Proposta da Atividade

Este projeto foi desenvolvido como atividade avaliativa da disciplina de Desenvolvimento Back-End.

A proposta consistia em:

- Criar um servidor utilizando Node.js e Express  
- Consumir dados de pelo menos duas APIs externas  
- Processar e combinar esses dados no backend  
- Disponibilizar um endpoint para acesso às informações  
- Apresentar o funcionamento da aplicação  

---

## O que o Projeto Faz

A aplicação permite que o usuário:

- Busque um filme pelo nome  
- Visualize informações detalhadas do filme  
- Acesse notícias relacionadas ao filme  

---

## Como Funciona

1. O usuário digita o nome de um filme no frontend  
2. O frontend envia uma requisição para o backend  
3. O backend consulta duas APIs externas:
   - OMDb API (dados do filme)
   - News API (notícias relacionadas)
4. Os dados são processados e combinados  
5. O backend retorna uma resposta única em formato JSON  
6. O frontend exibe as informações de forma organizada  

---

## APIs Utilizadas

### OMDb API
Fornece dados sobre filmes:
- Título  
- Ano  
- Sinopse  
- Nota (IMDb)  
- Pôster  

### News API
Fornece notícias relacionadas ao filme:
- Título da notícia  
- Descrição  
- Link  

---

## Tecnologias Utilizadas

- Node.js  
- Express  
- Axios  
- HTML  
- CSS  
- JavaScript  

---

## Endpoint

### GET /filme

Busca informações de um filme e notícias relacionadas.

#### Parâmetro:
- `nome` → nome do filme

#### Exemplo:
http://localhost:3000/filme?nome=batman

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório
git clone https://github.com/HevelynLV/MovieSearch-API.git

### 2. Entrar na pasta do projeto

cd api-filmes

### 3. Instalar as dependências
npm install

### 4. Configurar as chaves das APIs

Abra o arquivo server.js e adicione suas chaves:

const OMDB_KEY = 'SUA_CHAVE_OMDB';
const NEWS_KEY = 'SUA_CHAVE_NEWS';

### 5. Iniciar o servidor
node server.js
