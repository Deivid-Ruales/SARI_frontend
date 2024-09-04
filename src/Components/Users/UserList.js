import React from 'react';
import '../../Styles/ClientList.css';

const Users = () => {
  return (
    <div>
       {/* Sección principal donde se muestra la tabla de usuarios */}
      <main className="bg-main bg-client">

        {/* Contenedor del formulario */}
        <div className="form-div-bg">
          <div className="form-div">
            
            {/* Título de la tabla */}
            <div className="title">
              <h1 className="text-title">USUARIOS</h1>
            </div>
            
            {/* Tabla que muestra la lista de usuarios */}
            <table className="device-table">
              <thead>
                <tr className="table-head">
                  <th>No.</th>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>Cargo</th>
                  <th className="column-image">Editar</th>
                  <th className="column-image">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Deivid Ruales</td>
                  <td>1085000111</td>
                  <td>3153890000</td>
                  <td>Carrera 25 No. 20 - 22 Centro</td>
                  <td>Técnico</td>
                  {/* Enlace para editar el perfil del usuario */}
                  <td><a href="userEditProfile.html"><img className="image-table" src="/resources/config.png" alt="Editar" /></a></td>
                  {/* Enlace para eliminar al usuario */}
                  <td><a href="#"><img className="image-table" src="/resources/trash.png" alt="Eliminar" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </main>

      {/* Archivo JavaScript que gestiona la accesibilidad */}
      <script src="js/accessibility.js"></script>
    </div>
  );
};

export default Users; // Exporta el componente para usarlo en otras partes de la aplicación.
