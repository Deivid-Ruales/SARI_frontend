import React from 'react';

const ProfileUpdate = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title">ACTUALIZAR DATOS DE USUARIO</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" placeholder='Deivid Ruales'></input>
            </div>
            <div class="mb-3">
              <label for="contrasena" class="form-label">Contraseña</label>
              <input type="text" class="form-control" id="contrasena" placeholder='*********'></input>
            </div>
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedula" placeholder='1085000111' ></input>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="telefono" placeholder='3153890000'></input>
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="direccion" placeholder='Carrera 25 No. 20 - 22 Centro'></input>
            </div>
            <div class="mb-3">
              <label for="cargo" class="form-label">Cargo</label>
              <input type="text" class="form-control" id="cargo" placeholder='Técnico'></input>
            </div>
            <button type="submit" class="btn btn-primary button-form">Actualizar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfileUpdate;
