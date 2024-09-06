import React from 'react';

const Login = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5">
        <div className="card-body">
          <h5 className="card-title">INGRESAR AL SISTEMA</h5>
          <form className="forms">
            {/* Campo para ingresar la cédula del usuario */}
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedula" ></input>
            </div>
            {/* Campo para ingresar la contraseña del usuario */}
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password"></input>
            </div>
            {/* Botón para ingresar al sistema; se debe cambiar el tipo a 'submit' y eliminar el <a> */}
            <a href="Menu"> 
              <button type="button" class="btn btn-primary button-form">Entrar</button> {/*Eliminar <a> y cambiar el tipo de boton a submit*/}
            </a>
            {/* Botón para reiniciar el formulario */}
            <button type="reset" class="btn btn-secondary button-form">Cancelar</button>
            {/* Enlace para recuperar la contraseña */}
            <div className="div-rec-contra">
              <a href="#" className="recupera-contrasena">Olvidé mi contraseña</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
