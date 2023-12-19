import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [seleccion, setSeleccion] = useState<string | null>(null);

  const handleMenuSelect = (option: string) => {
    setSeleccion(option);
    // Aquí puedes realizar acciones adicionales al seleccionar una opción del menú
  };
  return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mx-auto" style={{ backgroundColor:'rgb(25,25,25)' }}>
              <div className="row">
                <div className="col-4">
                  <img className="position-relative translate-middle-x start-50 mt-5 mb-5" src="vite.svg"></img>
                </div>
                <div className="col-8 mt-5">
                  <h5 style={{color:'white'}}>Estudiante Unab</h5>
                  <h5 style={{color:'white'}}>Linkedin</h5>
                  <h5 style={{color:'white'}}>Curriculum</h5>
                </div>
              </div>

            <div className="container">
              <Menu onMenuSelect={handleMenuSelect} />
                {seleccion && (
                  <div className="container mt-4">
                    <div className="row">
                      <div className="col">
                        {seleccion === 'proyectos' && 
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
                        
                        }
                        {seleccion === 'acerca' && <p>Contenido Acerca de mi</p>}
                        {seleccion === 'contacto' && <p>Contenido Contacto</p>}
                      </div>
                    </div>
                  </div>
                )}
              <br></br>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
