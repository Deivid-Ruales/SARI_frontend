import React from 'react';
import '../Styles/Menu.css';

const Menu = () => {
  return (
    <div>
      {/* Sección de encabezado, que contiene el logo y las opciones de accesibilidad */}
      <header className="header">
        <img className="logo-header" alt="Logo CGImport" src="/resources/logo-cgimport.png" />

        {/* Opciones de accesibilidad: aumento y disminución de zoom */}
        <div className="accessibility">
          <a id="zoom-plus" href="#"><img className="icon-access" src="resources/zoom-mas.png" alt="Aumentar zoom" /></a>
          <a id="zoom-less" href="#"><img className="icon-access" src="resources/zoom-menos.png" alt="Disminuir zoom" /></a>
        </div>

        {/* Menú de navegación, con enlaces a diferentes secciones */}
        <div className="nav-header">
          <a className="options-header" href="menu.html">Inicio</a>
          <a className="options-header" href="listClient.html">Clientes</a>
          <a className="options-header" href="listDevice.html">Dispositivos</a>
          <a className="options-header" href="profile.html">Perfil</a>
        </div>
      </header>

      {/* Sección principal con los diferentes botones del menú */}
      <main className="bg-main bg-main-page">

        {/* Cada uno de estos divs representa un botón del menú con una imagen y un título */}
        <div className="item-menu">
          <a href="listClient.html">
            <img className="image-menu" src="/resources/customer.png" alt="Lista de clientes" />
            <p className="title-menu">LISTA DE CLIENTES</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="listDevice.html">
            <img className="image-menu" src="/resources/printer.png" alt="Lista de dispositivos" />
            <p className="title-menu">LISTA DE DISPOSITIVOS</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="userHistory.html">
            <img className="image-menu" src="/resources/historial.png" alt="Mi historial" />
            <p className="title-menu">MI HISTORIAL</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="newClient.html">
            <img className="image-menu" src="/resources/customer.png" alt="Registrar cliente" />
            <p className="title-menu">REGISTRAR CLIENTE</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="newDevice.html">
            <img className="image-menu" src="/resources/printer.png" alt="Registrar dispositivo" />
            <p className="title-menu">REGISTRAR DISPOSITIVO</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="listUser.html">
            <img className="image-menu" src="/resources/user.png" alt="Usuarios" />
            <p className="title-menu">USUARIOS</p>
          </a>
        </div>
      </main>

      {/* Sección de pie de página con información de derechos de autor y enlaces de contacto */}
      <footer className="footer-menu">
        <p className="text-footer">CG Import Copyright 2024</p>
        <div className="images-footer">
          <img className="contact-icons-footer" src="/resources/whatsapp.png" alt="Whatsapp" />
          <img className="contact-icons-footer" src="/resources/facebook.PNG" alt="Facebook" />
          <img className="contact-icons-footer" src="/resources/instagram.PNG" alt="Instagram" />
        </div>
      </footer>

      {/* Archivo JavaScript para manejar accesibilidad (ej. zoom) */}
      <script src="js/accessibility.js"></script>
    </div>
  );
};

export default Menu; // Exporta el componente para su uso en otras partes de la aplicación.
