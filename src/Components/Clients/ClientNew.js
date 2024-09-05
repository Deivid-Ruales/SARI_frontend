import React from 'react';
import '../../Styles/ClientNew.css';

const ClientNew = () => {
  return (
    <main className="bg-main bg-new-client">
      {/* Contenedor principal del formulario para crear un nuevo cliente */}
      <div className="form-div-bg">
        <div className="form-div">
          
          {/* Título de la sección */}
          <div className="title">
            <h1 className="text-title">CREAR NUEVO CLIENTE</h1>
          </div>

          {/* Formulario para ingresar la información del nuevo cliente */}
          <form className="form">
            <input className="input-form" type="text" placeholder="Nombre" />
            <p className="label-input">Nombre</p>
            <input className="input-form" type="text" placeholder="Cédula" />
            <p className="label-input">Cédula</p>
            <input className="input-form" type="text" placeholder="Teléfono" />
            <p className="label-input">Teléfono</p>
            <input className="input-form" type="text" placeholder="Dirección" />
            <p className="label-input">Dirección</p>
            <button className="register-button">Registrar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ClientNew;
