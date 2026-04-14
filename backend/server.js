//importar as bibliotecas necessárias do projeto

const express = require('express');
const axios = require('axios');
const cors = require('cors');

// criação da aplicação com Express e configuração do CORS para permitir acesso do frontend
const app = express();
app.use(cors());

// chaves para autenticação das APIs externas
const OMDB_KEY = '324fb755';
const NEWS_KEY = '17211a648b6f460f8e52008b1972c963';

// criação do endpoint que recebe o nome do filme como query e retorna os dados do filme e notícias relacionadas
app.get('/filme', async (req, res) => {
    const nome = req.query.nome;

    //primeiro faz uma requisição para a API do OMDB para obter os detalhes do filme, depois faz outra requisição 
    // para a API de notícias para obter as notícias relacionadas ao filme. Por fim, retorna um JSON com todas as informações.
    try {
        // 🎬 Buscar filme
        const filmeRes = await axios.get(`http://www.omdbapi.com/?t=${nome}&apikey=${OMDB_KEY}`);
        const filme = filmeRes.data;

        // 📰 Buscar notícias relacionadas
        const newsRes = await axios.get(`https://newsapi.org/v2/everything?q=${filme.Title}&apiKey=${NEWS_KEY}`);
        
    //apenas as 3 primeiras notícias retornadas pela API e reorganizo os dados em um formato mais limpo para o sistema
        const noticias = newsRes.data.articles.slice(0, 3).map(n => ({
            titulo: n.title,
            descricao: n.description,
            link: n.url
        }));

        // resposta final da API. Retorno dos principais dados do filme e as notícias relacionadas em um formato JSON para o frontend consumir e exibir para o usuário
        res.json({
            titulo: filme.Title,
            ano: filme.Year,
            sinopse: filme.Plot,
            nota: filme.imdbRating,
            poster: filme.Poster,
            noticias: noticias
        });

    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar dados' });
    }
});

//definição da porta para o servidor e mensagem de confirmação quando o servidor estiver rodando
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});