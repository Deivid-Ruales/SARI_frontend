import React from 'react';
import '../../Styles/DeviceNew.css';

const DeviceUpdate = () => {
  return (
    <main className="bg-main bg-new-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="title">
            <h1 className="text-title">ACTUALIZAR DISPOSITIVO</h1>
          </div>
          <form className="form">
            <input className="input-form" type="text" placeholder="Impresora" />
            <p className="label-input">Tipo</p>
            <input className="input-form" type="text" placeholder="Epson" />
            <p className="label-input">Marca</p>
            <input className="input-form" type="text" placeholder="L210" />
            <p className="label-input">Referencia</p>
            <input className="input-form" type="text" placeholder="VNHK0255TD3" />
            <p className="label-input">Serial</p>
            <input className="input-form" type="text" placeholder="Multifuncional" />
            <p className="label-input">Detalles</p>
            <input className="input-form" type="text" placeholder="Deivid Ruales" />
            <p className="label-input">Propietario</p>
            <button className="register-button">Actualizar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DeviceUpdate;
