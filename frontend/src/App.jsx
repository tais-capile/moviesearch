import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState("");

  async function buscarFilme() {
    if (!nome.trim()) {
      setStatus("Digite o nome de um filme.");
      setResultado(null);
      return;
    }

    setStatus("Carregando...");
    setResultado(null);

    try {
      const resposta = await fetch(`http://localhost:3000/filme?nome=${nome}`);
      const data = await resposta.json();

      if (!data.titulo) {
        setStatus("Filme não encontrado.");
        return;
      }

      setResultado(data);
      setStatus("");
    } catch (erro) {
      setStatus("Erro ao buscar filme.");
    }
  }

  return (
    <div className="app">
      <div className="navbar">
        <div className="logo">
          Movie<span>Search</span>
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Buscar filme..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={buscarFilme}>Buscar</button>
      </div>

      <div className="container">
        {resultado && (
          <>
            <div className="card">
              <img src={resultado.poster} alt={resultado.titulo} />
              <div className="info">
                <h2>
                  {resultado.titulo} ({resultado.ano})
                </h2>
                <div className="nota">⭐ {resultado.nota}</div>
                <p>{resultado.sinopse}</p>
              </div>
            </div>

            <div className="news">
              <h3>📰 Notícias relacionadas</h3>
              {resultado.noticias.map((noticia, index) => (
                <div className="news-item" key={index}>
                  <h4>{noticia.titulo}</h4>
                  <p>{noticia.descricao || ""}</p>
                  <a href={noticia.link} target="_blank" rel="noreferrer">
                    Ver notícia
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="status">{status}</div>
    </div>
  );
}

export default App;