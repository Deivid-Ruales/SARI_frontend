import React from 'react';

const Login = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">INGRESAR AL SISTEMA</h5>
          <form className="forms">
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedula" ></input>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password"></input>
            </div>
            <button type="submit" class="btn btn-primary button-form">Entrar</button>
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
            <div className="div-rec-contra">
              <a href="#" className="recupera-contrasena">Olvidé mi contraseña</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login; // Exporta el componente para que pueda usarse en otras partes de la aplicación.
