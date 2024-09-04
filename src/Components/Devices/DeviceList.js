import React from 'react';
import '../../Styles/ClientList.css';

const ListDevices = () => {
  return (
    <main className="bg-main bg-client">
      {/* Contenedor principal de la tabla de dispositivos */}
      <div className="form-div-bg">
        <div className="form-div">
          
          {/* Título de la sección */}
          <div className="title">
            <h1 className="text-title">DISPOSITIVOS</h1>
          </div>

          {/* Tabla con la lista de dispositivos */}
          <table className="device-table">
            <thead>
              <tr className="table-head">
                <th>No.</th>
                <th>Tipo</th>
                <th>Marca</th>
                <th>Referencia</th>
                <th>Serial</th>
                <th>Detalles</th>
                <th>Propietario</th>
                <th className="column-image">Historial</th>
                <th className="column-image">Editar</th>
                <th className="column-image">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Impresora</td>
                <td>Epson</td>
                <td>L210</td>
                <td>VNHK0255TD3</td>
                <td>Multifuncional</td>
                <td>Deivid Ruales</td>
                <td><a href="historyDevice.html"><img className="image-table" src="/resources/watch.png" alt="Historial" /></a></td>
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

export default ListDevices;
