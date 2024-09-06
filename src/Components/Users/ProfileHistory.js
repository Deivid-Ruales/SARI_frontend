import React from 'react';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';

const ProfileHistory = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '800px' }}>
        <div className="card-body">
          <h5 className="card-title">HISTORIAL DE TRABAJOS</h5>

          {/* Información del perfil del usuario */}
          <form className="forms">
            <div class="mb-3 row">
              {/* Campo para mostrar el nombre del usuario */}
              <label for="nombre" class="col-sm-2 col-form-label fw-bold">NOMBRE:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="nombre" value="Deivid Ruales"></input>
              </div>
              {/* Campo para mostrar la cédula del usuario */}
              <label for="cedula" class="col-sm-2 col-form-label fw-bold">CÉDULA:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="cedula" value="1000123532"></input>
              </div>
              {/* Campo para mostrar el teléfono del usuario */}
              <label for="telefono" class="col-sm-2 col-form-label fw-bold">TELÉFONO:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="telefono" value="3153895621"></input>
              </div>
              {/* Campo para mostrar el cargo del usuario */}
              <label for="cargo" class="col-sm-2 col-form-label fw-bold">CARGO:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="cargo" value="Técnico"></input>
              </div>
            </div>
          </form>

          {/* Botón para registrar un nuevo servicio */}
          <div class="d-flex justify-content-end">
            <a href="DeviceNew">
              <button type="button" class="btn btn-primary mb-3">Registrar Nuevo Servicio</button>
            </a>
          </div>

          {/* Tabla que muestra el historial de trabajos */}
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead className="table-head table-primary">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Referencia</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Serial</th>
                  <th scope="col">Propietario</th>
                  <th scope="col" className="column-image">Editar</th>
                  <th scope="col" className="column-image">Eliminar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider table-striped">
                <tr>
                  <td>1</td>
                  <td>15/Feb/24</td>
                  <td>Epson</td>
                  <td>L210</td>
                  <td>Mantenimiento</td>
                  <td>VNHK0255TD3</td>
                  <td>Deivid Ruales</td>
                  {/* Icono para editar el registro */}
                  <td><a href="ServiceUpdate"><img className="image-table" src={config} alt="Editar" /></a></td>
                  {/* Icono para eliminar el registro */}
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

export default ProfileHistory;
