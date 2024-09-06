import React from 'react';

const Profile = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">DATOS DE USUARIO</h5>
          <form className="forms">
            <div class="mb-3 row">
              {/* Campo para mostrar el nombre del usuario */}
              <label for="nombre" class="col-sm-4 col-form-label fw-bold">NOMBRE:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="nombre" value="Deivid Ruales"></input>
              </div>
              {/* Campo para mostrar la contraseña del usuario */}
              <label for="contrasena" class="col-sm-4 col-form-label fw-bold">CONTRASEÑA:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="contrasena" value="********"></input>
              </div>
              {/* Campo para mostrar la cédula del usuario */}
              <label for="cedula" class="col-sm-4 col-form-label fw-bold">CÉDULA:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="cedula" value="1000123532"></input>
              </div>
              {/* Campo para mostrar el teléfono del usuario */}
              <label for="telefono" class="col-sm-4 col-form-label fw-bold">TELÉFONO:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="telefono" value="3153895621"></input>
              </div>
              {/* Campo para mostrar la dirección del usuario */}
              <label for="direccion" class="col-sm-4 col-form-label fw-bold">DIRECCIÓN:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="direccion" value="Carrera 25 No. 15 - 32 Centro"></input>
              </div>
              {/* Campo para mostrar el cargo del usuario */}
              <label for="cargo" class="col-sm-4 col-form-label fw-bold">CARGO:</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="cargo" value="Técnico"></input>
              </div>
            </div>
            {/* Botón para modificar los datos del perfil */}
            <a href="ProfileUpdate">
              <button type="button" class="btn btn-primary mb-3">Modificar Datos</button>
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
