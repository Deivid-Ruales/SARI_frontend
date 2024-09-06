import React from 'react';

const ClientNew = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">REGISTRAR NUEVO CLIENTE</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name"></input>
            </div>
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedual" ></input>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="telefono"></input>
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="direccion"></input>
            </div>
            <button type="submit" class="btn btn-primary button-form">Registrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ClientNew;
