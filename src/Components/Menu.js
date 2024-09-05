import React from 'react';
import '../Styles/Menu.css';
import customer from '../Resources/customer.png';
import printer from '../Resources/printer.png';
import historial from '../Resources/historial.png';
import user from '../Resources/user.png';

const Menu = () => {
  return (
    <div>
      {/* Sección principal con los diferentes botones del menú */}
      <main className="bg-main bg-main-page">

        {/* Cada uno de estos divs representa un botón del menú con una imagen y un título */}
        <div className="item-menu">
          <a href="ClientList">
            <img className="image-menu" src={customer} alt="Lista de clientes" />
            <p className="title-menu">LISTA DE CLIENTES</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="DeviceList">
            <img className="image-menu" src={printer} alt="Lista de dispositivos" />
            <p className="title-menu">LISTA DE DISPOSITIVOS</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="ProfileHistory">
            <img className="image-menu" src={historial} alt="Mi historial" />
            <p className="title-menu">MI HISTORIAL</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="ClientNew">
            <img className="image-menu" src={customer} alt="Registrar cliente" />
            <p className="title-menu">REGISTRAR CLIENTE</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="DeviceNew">
            <img className="image-menu" src={printer} alt="Registrar dispositivo" />
            <p className="title-menu">REGISTRAR DISPOSITIVO</p>
          </a>
        </div>

        <div className="item-menu">
          <a href="UserList">
            <img className="image-menu" src={user} alt="Usuarios" />
            <p className="title-menu">USUARIOS</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Menu; // Exporta el componente para su uso en otras partes de la aplicación.
