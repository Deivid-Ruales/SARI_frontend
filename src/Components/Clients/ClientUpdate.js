import React from 'react';

const ClientUpdate = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          <h5 className="card-title">ACTUALIZAR CLIENTE</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" placeholder='Deivid Ruales'></input>
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
            <button type="submit" class="btn btn-primary button-form">Actualizar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ClientUpdate;
