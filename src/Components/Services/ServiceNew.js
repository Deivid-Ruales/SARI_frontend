import React from 'react';

const ServiceNew = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          {/* Título del formulario para registrar un nuevo servicio */}
          <h5 className="card-title">NUEVO SERVICIO</h5>

          {/* Formulario para ingresar los detalles de un nuevo servicio */}
          <form className="forms">
            
            {/* Campo para ingresar la fecha del servicio */}
            <div class="mb-3">
              <label for="fecha" class="form-label">Fecha</label>
              <input type="date" class="form-control" id="fecha"></input>
            </div>

            {/* Campo para especificar el tipo de servicio realizado */}
            <div class="mb-3">
              <label for="servicio" class="form-label">Servicio</label>
              <input type="text" class="form-control" id="servicio"></input>
            </div>

            {/* Campo para agregar observaciones adicionales del servicio */}
            <div class="mb-3">
              <label for="observaciones" class="form-label">Observaciones</label>
              <input type="text" class="form-control" id="observaciones"></input>
            </div>

            {/* Campo para ingresar el valor de las almohadillas del dispositivo */}
            <div class="mb-3">
              <label for="almohadillas" class="form-label">Almohadillas</label>
              <input type="text" class="form-control" id="almohadillas"></input>
            </div>

            {/* Campo para ingresar la cantidad de ADF del dispositivo */}
            <div class="mb-3">
              <label for="cantAdf" class="form-label">Cant.ADF</label>
              <input type="text" class="form-control" id="cantAdf"></input>
            </div>

            {/* Campo para ingresar la cantidad de impresiones del dispositivo */}
            <div class="mb-3">
              <label for="cantImpresiones" class="form-label">Cant.Impresiones</label>
              <input type="text" class="form-control" id="cantImpresiones"></input>
            </div>

            {/* Campo para ingresar el nombre del técnico que realizó el servicio */}
            <div class="mb-3">
              <label for="tecnico" class="form-label">Técnico</label>
              <input type="text" class="form-control" id="tecnico"></input>
            </div>

            {/* Botones de acción: registrar o cancelar */}
            <button type="submit" class="btn btn-primary button-form">Registrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ServiceNew;
