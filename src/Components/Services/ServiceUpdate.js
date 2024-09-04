import React from 'react';
import '../../Styles/DeviceNew.css';

const EditService = () => {
  return (
    <main className="bg-main bg-new-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="title">
            <h1 className="text-title">EDITAR SERVICIO</h1>
          </div>
          <form className="form">
            <input className="input-form" type="text" placeholder="15/Feb/24" />
            <p className="label-input">Fecha</p>
            <input className="input-form" type="text" placeholder="Mantenimiento" />
            <p className="label-input">Servicio</p>
            <input className="input-form" type="text" placeholder="Limpieza de inyectores, purga de sistema" />
            <p className="label-input">Observaciones</p>
            <input className="input-form" type="text" placeholder="22,15" />
            <p className="label-input">% Almohadillas</p>
            <input className="input-form" type="text" placeholder="2.533" />
            <p className="label-input">Cant. ADF</p>
            <input className="input-form" type="text" placeholder="33.265" />
            <p className="label-input">Cant. Impresiones</p>
            <input className="input-form" type="text" placeholder="Deivid Ruales" />
            <p className="label-input">Técnico</p>
            <button className="register-button">Actualizar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EditService;
