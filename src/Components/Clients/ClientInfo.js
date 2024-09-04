import React from 'react';
import '../../Styles/ClientInfo.css';

const ClientInfo = () => {
  return (
    <main className="bg-main bg-client">
      {/* Contenedor principal de la información del cliente */}
      <div className="form-div-bg">
        <div className="form-div">
          
          {/* Información del cliente */}
          <div className="client-data">
            <p className="label-client">NOMBRE:</p>
            <p className="data">Deivid</p>
            <p className="label-client">CÉDULA:</p>
            <p className="data">1085000111</p>
            <p className="label-client">TELÉFONO:</p>
            <p className="data">3153890000</p>
            <p className="label-client">DIRECCIÓN:</p>
            <p className="data">Carrera 25 No. 20 - 22 Centro</p>
          </div>

          {/* Botón para crear un nuevo dispositivo */}
          <a href="newDevice.html" className="register-button">Crear nuevo dispositivo</a>

          {/* Tabla que muestra la lista de dispositivos */}
          <table className="device-table">
            <thead>
              <tr className="table-head">
                <th>No.</th>
                <th>Tipo</th>
                <th>Marca</th>
                <th>Referencia</th>
                <th>Serial</th>
                <th>Detalles</th>
                <th className="column-image">Historial</th>
                <th className="column-image">Editar</th>
                <th className="column-image">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {/* Fila que muestra un dispositivo específico */}
              <tr>
                <td>1</td>
                <td>Impresora</td>
                <td>Epson</td>
                <td>L210</td>
                <td>VNHK0255TD3</td>
                <td>Multifuncional</td>
                <td><a href="historyDevice.html"><img className="image-table" src="/resources/watch.png" alt="Ver historial" /></a></td>
                <td><a href="deviceEdit.html"><img className="image-table" src="/resources/config.png" alt="Editar" /></a></td>
                <td><a href="#"><img className="image-table" src="/resources/trash.png" alt="Eliminar" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ClientInfo;
