import React from 'react';
import '../../Styles/ClientInfo.css';

const ProfileHistory = () => {
  return (
    <main className="bg-main bg-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="client-data">
            <p className="label-client">NOMBRE:</p>
            <p className="data">Deivid</p>
            <p className="label-client">CÉDULA:</p>
            <p className="data">1085000111</p>
            <p className="label-client">TELÉFONO:</p>
            <p className="data">3153890000</p>
            <p className="label-client">CARGO</p>
            <p className="data">Técnico</p>
          </div>
          <a href="newService.html" className="register-button">Ingresar servicio</a>
          <table className="device-table">
            <thead>
              <tr className="table-head">
                <th>No.</th>
                <th>Fecha</th>
                <th>Marca</th>
                <th>Referencia</th>
                <th>Servicio</th>
                <th>Serial</th>
                <th>Propietario</th>
                <th className="column-image">Editar</th>
                <th className="column-image">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>15/Feb/24</td>
                <td>Epson</td>
                <td>L210</td>
                <td>Mantenimiento</td>
                <td>VNHK0255TD3</td>
                <td>Deivid Ruales</td>
                <td><a href="serviceEdit.html"><img className="image-table" src="/resources/config.png" alt="Editar" /></a></td>
                <td><a href="#"><img className="image-table" src="/resources/trash.png" alt="Eliminar" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProfileHistory;
