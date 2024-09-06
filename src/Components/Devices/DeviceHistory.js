import React from 'react';
import config from '../../Resources/config.png';

const DeviceHistory = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '800px' }}>
        <div className="card-body">
          <h5 className="card-title">INFORMACIÓN DEL DISPOSITIVO</h5>

          {/* Formulario para mostrar la información del dispositivo */}
          <form className="forms">
            <div class="mb-3 row">
              
              {/* Campo para el tipo de dispositivo */}
              <label for="tipo" class="col-sm-2 col-form-label fw-bold">TIPO:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="tipo" value="Impresora"></input>
              </div>

              {/* Campo para la marca del dispositivo */}
              <label for="marca" class="col-sm-2 col-form-label fw-bold">MARCA:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="marca" value="Epson"></input>
              </div>

              {/* Campo para la referencia del dispositivo */}
              <label for="referencia" class="col-sm-2 col-form-label fw-bold">REFERENCIA:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="referencia" value="L210"></input>
              </div>

              {/* Campo para el número de serie */}
              <label for="serial" class="col-sm-2 col-form-label fw-bold">SERIAL:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="serial" value="VNHK0255TD3"></input>
              </div>

              {/* Campo para mostrar el nombre del propietario */}
              <label for="propietario" class="col-sm-2 col-form-label fw-bold">PROPIETARIO:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="propietario" value="Deivid Ruales"></input>
              </div>
            </div>
          </form>

          {/* Botón para ingresar un nuevo servicio */}
          <div class="d-flex justify-content-end">
            <a href="ServiceNew">
              <button type="button" class="btn btn-primary mb-3">Ingresar un Servicio</button>
            </a>
          </div>

          {/* Tabla para mostrar el historial de servicios del dispositivo */}
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead className="table-head table-primary">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Observaciones</th>
                  <th scope="col">Almohadillas</th>
                  <th scope="col">Cant.ADF</th>
                  <th scope="col">Cant.Impresiones</th>
                  <th scope="col">Técnico</th>
                  <th scope="col" className="column-image">Editar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider table-striped">
                <tr>
                  <td>1</td>
                  <td>15/Feb/24</td>
                  <td>Mantenimiento</td>
                  <td>Limpieza de inyectores, purga de sistema</td>
                  <td>22,15</td>
                  <td>2.533</td>
                  <td>33.265</td>
                  <td>Deivid Ruales</td>

                  {/* Imagen con enlace para editar un servicio */}
                  <td><a href="ServiceUpdate"><img className="image-table" src={config} alt="Editar" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeviceHistory;
