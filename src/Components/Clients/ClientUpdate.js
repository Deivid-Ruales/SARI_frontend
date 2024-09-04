import React from 'react';
import '../../Styles/ClientNew.css';

const UpdateClient = () => {
  return (
    <main className="bg-main bg-new-client">
      {/* Contenedor principal del formulario de actualización */}
      <div className="form-div-bg">
        <div className="form-div">
          
          {/* Título de la sección */}
          <div className="title">
            <h1 className="text-title">ACTUALIZAR CLIENTE</h1>
          </div>

          {/* Formulario para actualizar la información del cliente */}
          <form className="form">
            <input className="input-form" type="text" placeholder="Deivid Ruales" />
            <p className="label-input">Nombre</p>
            <input className="input-form" type="text" placeholder="1085000111" />
            <p className="label-input">Cédula</p>
            <input className="input-form" type="text" placeholder="315389000" />
            <p className="label-input">Teléfono</p>
            <input className="input-form" type="text" placeholder="Carrera 25 No. 20 - 22 Centro" />
            <p className="label-input">Dirección</p>
            <button className="register-button">Actualizar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UpdateClient;
