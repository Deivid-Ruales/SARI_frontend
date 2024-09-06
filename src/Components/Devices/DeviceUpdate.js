import React from 'react';

const DeviceUpdate = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ACTUALIZAR DISPOSITIVO</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="name" class="form-label">Tipo</label>
              <input type="text" class="form-control" id="name" placeholder="Impresora"></input>
            </div>
            <div class="mb-3">
              <label for="cedula" class="form-label">Marca</label>
              <input type="text" class="form-control" id="cedual" placeholder="Epson"></input>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Referencia</label>
              <input type="text" class="form-control" id="telefono" placeholder="L210"></input>
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Serial</label>
              <input type="text" class="form-control" id="direccion" placeholder="VNHK0255TD3"></input>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Detalles</label>
              <input type="text" class="form-control" id="telefono" placeholder="Multifuncional"></input>
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Propietario</label>
              <input type="text" class="form-control" id="direccion" placeholder="Deivid Ruales"></input>
            </div>
            <button type="submit" class="btn btn-primary button-form">Registrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DeviceUpdate;
