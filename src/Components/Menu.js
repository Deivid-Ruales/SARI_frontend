import React from 'react';
import '../Styles/Menu.css';
import customer from '../Resources/customer.png';
import printer from '../Resources/printer.png';
import customerNew from '../Resources/customerNew.png';
import printerNew from '../Resources/printerNew.png';
import historial from '../Resources/historial.png';
import user from '../Resources/user.png';

const Menu = () => {
  return (
      <main className="bg-main bg-main-page ">
        {/* Cada uno de estos divs representa un botón del menú con una imagen y un título */}
        <div className="item-menu">
          {/* Enlace a la lista de clientes */}
          <a href="ClientList">
            <img className="image-menu" src={customer} alt="Lista de clientes" />
            <p className="title-menu">LISTA DE CLIENTES</p>
          </a>
        </div>

        <div className="item-menu">
          {/* Enlace a la lista de dispositivos */}
          <a href="DeviceList">
            <img className="image-menu" src={printer} alt="Lista de dispositivos" />
            <p className="title-menu">LISTA DE DISPOSITIVOS</p>
          </a>
        </div>

        <div className="item-menu">
          {/* Enlace al historial del perfil */}
          <a href="ProfileHistory">
            <img className="image-menu" src={historial} alt="Mi historial" />
            <p className="title-menu">MI HISTORIAL</p>
          </a>
        </div>

        <div className="item-menu">
          {/* Enlace para registrar un nuevo cliente */}
          <a href="ClientNew">
            <img className="image-menu" src={customerNew} alt="Registrar cliente" />
            <p className="title-menu">REGISTRAR CLIENTE</p>
          </a>
        </div>

        <div className="item-menu">
          {/* Enlace para registrar un nuevo dispositivo */}
          <a href="DeviceNew">
            <img className="image-menu" src={printerNew} alt="Registrar dispositivo" />
            <p className="title-menu">REGISTRAR DISPOSITIVO</p>
          </a>
        </div>

        <div className="item-menu">
          {/* Enlace a la lista de usuarios */}
          <a href="UserList">
            <img className="image-menu" src={user} alt="Usuarios" />
            <p className="title-menu">EMPLEADOS</p>
          </a>
        </div>
      </main>
  );
};

export default Menu;
