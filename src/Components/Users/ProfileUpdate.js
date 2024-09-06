import React from 'react';

const ProfileUpdate = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">ACTUALIZAR DATOS DE USUARIO</h5>
          {/* Formulario para actualizar los datos del usuario */}
          <form className="forms">
            {/* Campo para ingresar el nombre del usuario */}
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" placeholder='Deivid Ruales'></input>
            </div>
            {/* Campo para ingresar la contraseña del usuario */}
            <div class="mb-3">
              <label for="contrasena" class="form-label">Contraseña</label>
              <input type="text" class="form-control" id="contrasena" placeholder='*********'></input>
            </div>
            {/* Campo para ingresar la cédula del usuario */}
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedula" placeholder='1085000111' ></input>
            </div>
            {/* Campo para ingresar el teléfono del usuario */}
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="telefono" placeholder='3153890000'></input>
            </div>
            {/* Campo para ingresar la dirección del usuario */}
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="direccion" placeholder='Carrera 25 No. 20 - 22 Centro'></input>
            </div>
            {/* Campo para ingresar el cargo del usuario */}
            <div class="mb-3">
              <label for="cargo" class="form-label">Cargo</label>
              <input type="text" class="form-control" id="cargo" placeholder='Técnico'></input>
            </div>
            {/* Botón para enviar los datos actualizados */}
            <button type="submit" class="btn btn-primary button-form">Actualizar</button>
            {/* Botón para resetear los campos del formulario */}
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfileUpdate;
