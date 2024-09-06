import React from 'react';

const ClientNew = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          <h5 className="card-title">REGISTRAR NUEVO CLIENTE</h5>

          {/* Formulario para registrar un nuevo cliente */}
          <form className="forms">
            
            {/* Campo para ingresar el nombre del cliente */}
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name"></input>
            </div>
            
            {/* Campo para ingresar la cédula del cliente */}
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedual"></input>
            </div>
            
            {/* Campo para ingresar el teléfono del cliente */}
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="telefono"></input>
            </div>
            
            {/* Campo para ingresar la dirección del cliente */}
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="direccion"></input>
            </div>
            
            {/* Botón para registrar el cliente */}
            <button type="submit" class="btn btn-primary button-form">Registrar</button>

            {/* Botón para cancelar el formulario */}
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ClientNew;
