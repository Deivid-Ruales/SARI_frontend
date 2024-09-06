import React from 'react';

const DeviceNew = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          {/* Título del formulario para registrar un nuevo dispositivo */}
          <h5 className="card-title">REGISTRAR NUEVO DISPOSITIVO</h5>

          {/* Formulario para registrar los datos del nuevo dispositivo */}
          <form className="forms">
            {/* Campo para el tipo de dispositivo */}
            <div class="mb-3">
              <label for="name" class="form-label">Tipo</label>
              <input type="text" class="form-control" id="name"></input>
            </div>

            {/* Campo para la marca del dispositivo */}
            <div class="mb-3">
              <label for="cedula" class="form-label">Marca</label>
              <input type="text" class="form-control" id="cedual"></input>
            </div>

            {/* Campo para la referencia del dispositivo */}
            <div class="mb-3">
              <label for="telefono" class="form-label">Referencia</label>
              <input type="text" class="form-control" id="telefono"></input>
            </div>

            {/* Campo para el número de serial del dispositivo */}
            <div class="mb-3">
              <label for="direccion" class="form-label">Serial</label>
              <input type="text" class="form-control" id="direccion"></input>
            </div>

            {/* Campo para los detalles del dispositivo */}
            <div class="mb-3">
              <label for="telefono" class="form-label">Detalles</label>
              <input type="text" class="form-control" id="telefono"></input>
            </div>

            {/* Campo para el nombre del propietario */}
            <div class="mb-3">
              <label for="direccion" class="form-label">Propietario</label>
              <input type="text" class="form-control" id="direccion"></input>
            </div>

            {/* Botones de acción: registrar y cancelar */}
            <button type="submit" class="btn btn-primary button-form">Registrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DeviceNew;
