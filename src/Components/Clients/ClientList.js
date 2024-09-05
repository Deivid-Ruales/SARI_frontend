import React from 'react';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const ClientList = () => {
  return (
    <center>
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">CLIENTES</h5>
          <div class="table-responsive">
            <table class="table">
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
                  <td><a href="clientInfo.html"><img className="image-table" src={watch} alt="Ver dispositivos" /></a></td>
                  <td><a href="clientEdit.html"><img className="image-table" src={config} alt="Editar" /></a></td>
                  <td><a href="#"><img className="image-table" src={trash} alt="Eliminar" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </center>
  );
};

export default ClientList;
