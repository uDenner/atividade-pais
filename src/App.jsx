import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import heroImg from './assets/viagem.jpg';
import heroImg2 from './assets/nos3.JPG';
import heroImg4 from './assets/IMG_6123.jpg';
import videoHomenagem from './assets/954AF998-75EA-4EEB-9307-C9D0124166B4.MP4';
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
            <img src={heroImg3} alt="Homenagem à Mãe" className="section-img" />
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
          <div className="imagem-pai">
            <img src={"src/assets/foto pai e eu.jpg"} alt="Homenagem ao Pai" className="section-img" />
          </div>
        </section>

       {/* Galeria de Memórias */}
        <section id="galeria" className="gallery-section">
          <h2>Galeria de Memórias</h2>
          <div className="grid-gallery">
            
            {/* Card 1: Foto de Família */}
            <div className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={heroImg2} alt="Foto de Família" className="gallery-img-item" />
              </div>
              <div className="gallery-caption">📸 Foto de Família</div>
            </div>

            {/* Card 2: Momentos Felizes */}
            <div className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={heroImg4} alt="Momentos Felizes" className="gallery-img-item" />
              </div>
              <div className="gallery-caption">❤️ Momentos Felizes</div>
            </div>

            {/* Card 3: Viagens e Sorrisos */}
            <div className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={heroImg} alt="Viagens e Sorrisos" className="gallery-img-item" />
              </div>
              <div className="gallery-caption">✨ Viagens e Sorrisos</div>
            </div>

          </div>
        </section>

        {/* NOVA SEÇÃO: Momentos em Vídeo */}
        <section id="video-homenagem" className="video-section">
          <h2>Nossa História em Vídeo</h2>
          <p>Um pequeno registro dos nossos melhores registros e sorrisos compartilhados.</p>
          <div className="video-container">
            <video controls className="tribute-video">
              <source src={videoHomenagem} type="video/mp4" />
            </video>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
