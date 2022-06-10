import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U03DFBJL7CM-db3ce7d7dcaa-512"
          nome="Bruno Monteiro"
          descricao="Oi,me chamo Bruno, sou formado em Marketing, mas com uma vasta experiência em producao de TV.
          Venho de uma jornada de 7 anos na TV Globo, onde pude conhecer, crescer e aprender muito sobre entretenimento, produção executiva e criativa, musical e de negócios. Hoje me vejo numa transicao de carreira para a rea de técnologia. Transicao essa que esta sendo muito bem sucedida e me sinto muito realizado. "
        />

        <ImagemButton
          imagem=""
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">

        <CardPequeno
          imagem=""
          email= " mbrunomon@gmail.com"
          endereco= " New York City - NY"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/c/c6/Rede_Globo_logo.svg"
          nome="Tv Globo"
          descricao="As a Project Analyst, I was responsible for planning tasks with the operational team, driving better productivity, quality, and meeting deadlines;
          - Analyzed project performance and consolidate data for the preparation of monthly performance reports in the Production Management department.
          - Acted as point person for Production stakeholders, receiving and understanding demands to generate execution plans.
          "
        />

        <CardGrande
          imagem=""
          nome=""
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
