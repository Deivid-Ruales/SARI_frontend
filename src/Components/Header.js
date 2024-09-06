import React, { useState, useEffect } from 'react';
import logo from '../Resources/logo-cgimport.png';
import zoomPlus from '../Resources/zoom-mas.png';
import zoomMinus from '../Resources/zoom-menos.png';

function Header() {
  const [fontSize, setFontSize] = useState(parseFloat(getComputedStyle(document.body).fontSize));

  // Efecto para actualizar el tamaño de la fuente del body cuando cambia el estado
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleZoomPlus = () => {
    if (fontSize < 18 && fontSize > 7) {
      setFontSize(prevSize => prevSize * 1.1);
    }
  };

  const handleZoomLess = () => {
    if (fontSize < 20 && fontSize > 9) {
      setFontSize(prevSize => prevSize / 1.1);
    }
  };

  return (
    <header>
      <div className="accessibility">
        <button id="zoom-plus" onClick={handleZoomPlus}>
          <img className="icon-access" src={zoomPlus} alt="Zoom Más" />
        </button>
        <button id="zoom-less" onClick={handleZoomLess}>
          <img className="icon-access" src={zoomMinus} alt="Zoom Menos" />
        </button>
      </div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo-header" alt="Logo CGImport" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/Menu">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/ClientList">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/DeviceList">Dispositivos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Profile">Perfil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
