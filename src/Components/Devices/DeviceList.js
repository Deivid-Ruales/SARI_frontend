import React from 'react';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const DeviceList = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">DISPOSITIVOS</h5>
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead className="table-head table-primary">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Referencia</th>
                  <th scope="col">Serial</th>
                  <th scope="col">Detalles</th>
                  <th scope="col">Propietario</th>
                  <th scope="col" className="column-image">Historial</th>
                  <th scope="col" className="column-image">Editar</th>
                  <th scope="col" className="column-image">Eliminar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider table-striped">
                <tr>
                  <td>1</td>
                  <td>Impresora</td>
                  <td>Epson</td>
                  <td>L210</td>
                  <td>VNHK0255TD3</td>
                  <td>Multifuncional</td>
                  <td>Deivid Ruales</td>
                  <td><a href="DeviceHistory"><img className="image-table" src={watch} alt="Historial" /></a></td>
                  <td><a href="DeviceUpdate"><img className="image-table" src={config} alt="Editar" /></a></td>
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

export default DeviceList;
