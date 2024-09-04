import React from 'react'; 

const Login = () => { 
  return (
    // Aquí empieza el contenido que se va a mostrar en la pantalla.
    <div className="form-div-bg">
      <div className="form-div">
        <div className="title">
          <h1 className="text-title">INGRESAR AL SISTEMA</h1>
        </div>

        {/* Sección que contiene el formulario de inicio de sesión */}
        <form className="form">
          <input className="input-form" type="text" />
          <p className="label-input">Cédula</p>
          
          <input className="input-form" type="password" />
          <p className="label-input">Contraseña</p>

          {/* Enlace que lleva al usuario al menú después de iniciar sesión */}
          <a href="menu.html" className="login-button">Ingresar</a>

          {/* Enlace para recuperar la contraseña si el usuario la ha olvidado */}
          <a className="forgot-pass-link" href="#" target="_blank">Olvidé mi contraseña</a>
        </form>
      </div>
      
      {/* Sección para mostrar el logotipo en la página */}
      <div className="logo-div">
        <img className="logo" src="resources/logo-cgimport.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Login; // Exporta el componente para que pueda usarse en otras partes de la aplicación.
