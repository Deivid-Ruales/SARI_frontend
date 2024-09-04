import React from 'react';
import '../Styles/Header.css';
import logo from '../Resources/logo-cgimport.png';
import zoomPlus from '../Resources/zoom-mas.png';
import zoomMinus from '../Resources/zoom-menos.png';


function Header() {
  return (
    <header className="header">
      <img className="logo-header" alt="Logo CGImport" src={logo} />
      <div className="accessibility">
        <a id="zoom-plus" href="#"><img className="icon-access" src={zoomPlus} alt="Zoom Más" /></a>
        <a id="zoom-less" href="#"><img className="icon-access" src={zoomMinus} alt="Zoom Menos" /></a>
      </div>
      <nav className="nav-header">
        <a className="options-header" href="/">Inicio</a>
        <a className="options-header" href="/listClient">Clientes</a>
        <a className="options-header" href="/listDevice">Dispositivos</a>
        <a className="options-header" href="/profile">Perfil</a>
      </nav>
    </header>
  );
}

export default Header;
