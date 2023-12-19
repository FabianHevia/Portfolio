import React from 'react';

interface MenuProps {
  onMenuSelect: (option: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <button className="btn btn-link" onClick={() => onMenuSelect('proyectos')}>
            Proyectos
          </button>
        </div>
        <div className="col">
          <button className="btn btn-link" onClick={() => onMenuSelect('acerca')}>
            Acerca de mi
          </button>
        </div>
        <div className="col">
          <button className="btn btn-link" onClick={() => onMenuSelect('contacto')}>
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;