import React from 'react';
import '../../Styles/ClientList.css';

const ClientList = () => {
  return (
    <main className="bg-main bg-client">
      {/* Contenedor principal del formulario */}
      <div className="form-div-bg">
        <div className="form-div">
          
          {/* Título de la sección */}
          <div className="title">
            <h1 className="text-title">CLIENTES</h1>
          </div>

          {/* Tabla que muestra la lista de clientes */}
          <table className="device-table">
            <thead>
              <tr className="table-head">
                <th>No.</th>
                <th>Nombre</th>
                <th>Cédula</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th className="column-image">Dispositivos</th>
                <th className="column-image">Editar</th>
                <th className="column-image">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {/* Fila que muestra un cliente específico */}
              <tr>
                <td>1</td>
                <td>Deivid Ruales</td>
                <td>1085000111</td>
                <td>3153890000</td>
                <td>Carrera 25 No. 20 - 22 Centro</td>
                <td><a href="clientInfo.html"><img className="image-table" src="/resources/watch.png" alt="Ver dispositivos" /></a></td>
                <td><a href="clientEdit.html"><img className="image-table" src="/resources/config.png" alt="Editar" /></a></td>
                <td><a href="#"><img className="image-table" src="/resources/trash.png" alt="Eliminar" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ClientList;
