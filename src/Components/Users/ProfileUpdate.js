import React from 'react';
import '../../Styles/DeviceNew.css';

const UpdateProfile = () => {
  return (
    <main className="bg-main bg-new-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="title">
            <h1 className="text-title">ACTUALIZAR DATOS DE PERFIL</h1>
          </div>
          <form className="form">
            <input className="input-form" type="text" placeholder="Deivid Ruales" />
            <p className="label-input">Nombre</p>
            <input className="input-form" type="text" placeholder="*******" />
            <p className="label-input">Contraseña</p>
            <input className="input-form" type="text" placeholder="1085000111" />
            <p className="label-input">Cédula</p>
            <input className="input-form" type="text" placeholder="3153890000" />
            <p className="label-input">Teléfono</p>
            <input className="input-form" type="text" placeholder="Carrera 25 No. 20 - 22 Centro" />
            <p className="label-input">Dirección</p>
            <input className="input-form" type="text" placeholder="Técnico" />
            <p className="label-input">Cargo</p>
            <button className="register-button">Actualizar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UpdateProfile;
