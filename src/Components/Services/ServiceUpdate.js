import React from 'react';

const ServiceUpdate = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          <h5 className="card-title">ACTUALIZAR SERVICIO</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="fecha" class="form-label">Fecha</label>
              <input type="date" class="form-control" id="fecha" placeholder="15/Feb/24"></input>
            </div>
            <div class="mb-3">
              <label for="servicio" class="form-label">Servicio</label>
              <input type="text" class="form-control" id="servicio" placeholder="Mantenimiento"></input>
            </div>
            <div class="mb-3">
              <label for="observaciones" class="form-label">Observaciones</label>
              <input type="text" class="form-control" id="observaciones" placeholder="Limpieza de inyectores, purga de sistema"></input>
            </div>
            <div class="mb-3">
              <label for="almohadillas" class="form-label">Almohadillas</label>
              <input type="text" class="form-control" id="almohadillas" placeholder="22,15"></input>
            </div>
            <div class="mb-3">
              <label for="cantAdf" class="form-label">Cant.ADF</label>
              <input type="text" class="form-control" id="cantAdf" placeholder="2.533"></input>
            </div>
            <div class="mb-3">
              <label for="cantImpresiones" class="form-label">Cant.Impresiones</label>
              <input type="text" class="form-control" id="cantImpresiones" placeholder="33.265"></input>
            </div>
            <div class="mb-3">
              <label for="tecnico" class="form-label">Técnico</label>
              <input type="text" class="form-control" id="tecnico" placeholder="Deivid Ruales"></input>
            </div>
            <button type="submit" class="btn btn-primary button-form">Registrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ServiceUpdate;
