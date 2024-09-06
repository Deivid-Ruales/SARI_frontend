import React from 'react';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const ClientInfo = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '800px' }}>
        <div className="card-body">
          <h5 className="card-title">INFORMACIÓN DEL CLIENTE</h5>

          <form className="forms">
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label fw-bold">NOMBRE:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="nombre" value="Deivid Ruales"></input>
              </div>
              <label for="cedula" class="col-sm-2 col-form-label fw-bold">CÉDULA:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="cedula" value="1000123532"></input>
              </div>
              <label for="telefono" class="col-sm-2 col-form-label fw-bold">TELÉFONO:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="telefono" value="3153895621"></input>
              </div>
              <label for="direccion" class="col-sm-2 col-form-label fw-bold">DIRECCIÓN:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="direccion" value="Carrera 25 No. 15 - 32 Centro"></input>
              </div>
            </div>
          </form>

          <div class="d-flex justify-content-end">
            <a href="DeviceNew">
              <button type="button" class="btn btn-primary mb-3">Registrar Nuevo Dispositivo</button>
            </a>
          </div>

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

export default ClientInfo;
