import React from 'react';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const ClientList = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body"> 
          <h5 className="card-title">CLIENTES</h5>
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead className="table-head table-primary">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cédula</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Dirección</th>
                  <th scope="col" className="column-image">Dispositivos</th>
                  <th scope="col" className="column-image">Editar</th>
                  <th scope="col" className="column-image">Eliminar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider table-striped">
                <tr>
                  <td scope="row">1</td>
                  <td >Deivid Ruales</td>
                  <td>1085000111</td>
                  <td>3153890000</td>
                  <td>Carrera 25 No. 20 - 22 Centro</td>
                  <td><a href="ClientInfo"><img className="image-table" src={watch} alt="Ver dispositivos" /></a></td>
                  <td><a href="ClientUpdate"><img className="image-table" src={config} alt="Editar" /></a></td>
                  <td><a href="#"><img className="image-table" src={trash} alt="Eliminar" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientList;
