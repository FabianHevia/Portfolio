import React, { useState, useEffect } from 'react';
import './App.css'

interface Window {
  carousel?: {
    Carousel: any;
  };
}

function App() {
  useEffect(() => {
    // Cuando el componente se monta, se intenta iniciar el carrusel una vez que Bootstrap se ha cargado.
    const initializeCarousel = () => {
      if (window.carousel) {
        const myCarousel = new window.carousel.Carousel(document.getElementById('carouselExampleFade'), {
          // Configuración opcional del carrusel
        });
      }
    };

    initializeCarousel();
  }, []);

  
  return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mx-auto" style={{ backgroundColor:'rgb(25,25,25)' }}>

              <img className="position-relative translate-middle-x start-50 mt-5 mb-5" src="vite.svg"></img>
              
              <div>
                <h3 className="text-center" style={{color:'white'}}>--- Estudiante Unab ---</h3>
              </div>
              
              <div className="row d-flex">
                <div className="col-6">
                  <h3 className="text-center" style={{color:'white'}}>Linkedin</h3>
                </div>
                <div className="col-6">
                  <h3 className="text-center" style={{color:'white'}}>Curriculum</h3>
                </div>
              </div>

            <div className="scrollstrange">
              <br></br>
              <h1 className="text-center mt-5" style={{color:'white'}}>Proyectos</h1>
              <div id="carouselExampleFade" className="carousel carousel-dark slide slide carousel-fade">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="vite.svg" className="d-block w-100" alt="imagen1"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="react.svg" className="d-block w-100" alt="imagen2"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="vite.svg" className="d-block w-100" alt="imagen3"></img>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>


              <div className="row d-flex mt-5 scrollstrange">
                <div className="col-12">
                  <h3 className="text-center" style={{color:'white'}}>Contacto</h3>
                </div>
              </div>


          </div>
        </div>
      </div>
      </div>
  )
}

export default App
