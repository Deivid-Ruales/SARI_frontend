import React from 'react';
import '../../Styles/DeviceHistory.css';

const DeviceHistory = () => {
  return (
    <main className="bg-main bg-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="client-data">
            <p className="label-client">TIPO:</p>
            <p className="data">Impresora</p>
            <p className="label-client">MARCA:</p>
            <p className="data">Epson</p>
            <p className="label-client">REFERENCIA:</p>
            <p className="data">L210</p>
            <p className="label-client">SERIAL:</p>
            <p className="data">VNHK0255TD3</p>
            <p className="label-client">PROPIETARIO:</p>
            <p className="data">Deivid Ruales</p>
          </div>
          <a href="newService.html" className="register-button">Ingresar un Servicio</a>
          <table className="device-table">
            <thead>
              <tr className="table-head">
                <th>No.</th>
                <th>Fecha</th>
                <th>Servicio</th>
                <th>Observaciones</th>
                <th>% Almohadillas</th>
                <th>Cant. ADF</th>
                <th>Cant. Impresiones</th>
                <th>Técnico</th>
                <th className="column-image">Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>15/Feb/24</td>
                <td>Mantenimiento</td>
                <td>Limpieza de inyectores, purga de sistema</td>
                <td>22,15</td>
                <td>2.533</td>
                <td>33.265</td>
                <td>Deivid Ruales</td>
                <td>
                  <a href="serviceEdit.html">
                    <img className="image-table" src="/resources/config.png" alt="Editar servicio" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DeviceHistory;
