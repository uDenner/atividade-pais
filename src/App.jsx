import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {/* Seção Hero / Boas-vindas */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>Uma Homenagem Especial</h2>
            <p>Dedicado àqueles que nos deram a vida, nos guiaram com paciência e nos cobriram de amor.</p>
          </div>
          <div className="hero-image-container">
            <img src={"src/assets/eles.jpg"} alt="Homenagem aos Pais" className="hero-img" />
          </div>
        </section>

        {/* Seção Mãe */}
        <section id="mae" className="tribute-section section-mom">
          <div className="section-card">
            <h2>Minha Mãe, Meu Porto Seguro</h2>
            <p>
              Exemplo de força, resiliência e carinho infinito. O coração de uma mãe é um
              santuário profundo no fundo do qual você sempre encontrará o perdão e o aconchego.
            </p>
          </div>
          <div className="imagem-mae">
            <img src={"src/assets/foto mae e eu.jpg"} alt="Homenagem à Mãe" className="section-img" />
          </div>
        </section>

        {/* Seção Pai */}
        <section id="pai" className="tribute-section section-dad">
          <div className="section-card">
            <h2>Meu Pai, Meu Grande Exemplo</h2>
            <p>
              A base firme, o conselheiro nas horas difíceis e o herói sem capa. Ser pai é 
              plantar raízes e nos dar asas para voar, sabendo que sempre teremos para onde voltar.
            </p>
          </div>
        </section>

        {/* Galeria de Memórias */}
        <section id="galeria" className="gallery-section">
          <h2>Galeria de Memórias</h2>
          <div className="grid-gallery">
            <div className="gallery-item item-placeholder">📸 Foto de Família</div>
            <div className="gallery-item item-placeholder">❤️ Momentos Felizes</div>
            <div className="gallery-item item-placeholder">✨ Viagens e Sorrisos</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;