import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({
    nombre: "",
    contrasena: "",
    cedula: "",
    telefono: "",
    direccion: "",
    rol: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    cargarUsuario();
  }, []);

  const cargarUsuario = async () => {
    try {
      const resultado = await axios.get(`http://localhost:8080/sari/usuarios/${id}`);
      setUsuario(resultado.data);
    } catch (error) {
      console.error("Error al cargar los datos del usuario:", error);
    }
  };

  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '450px' }}>
        <div className="card-body">
          <h5 className="card-title">DATOS DE PERFIL</h5>
          <form className="forms">
            <div className="mb-3 row">
              {/* Campo para mostrar el nombre del usuario */}
              <label htmlFor="nombre" className="col-sm-4 col-form-label fw-bold">NOMBRE:</label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" id="nombre" value={usuario.nombre || ''}></input>
              </div>

              {/* Campo para mostrar la contraseña del usuario */}
              <label htmlFor="contrasena" className="col-sm-4 col-form-label fw-bold">CONTRASEÑA:</label>
              <div className="col-sm-8">
                <input type="password" readOnly className="form-control-plaintext" id="contrasena" value={usuario.contrasena}></input>
              </div>

              {/* Campo para mostrar la cédula del usuario */}
              <label htmlFor="cedula" className="col-sm-4 col-form-label fw-bold">CÉDULA:</label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" id="cedula" value={usuario.cedula || ''}></input>
              </div>

              {/* Campo para mostrar el teléfono del usuario */}
              <label htmlFor="telefono" className="col-sm-4 col-form-label fw-bold">TELÉFONO:</label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" id="telefono" value={usuario.telefono || ''}></input>
              </div>

              {/* Campo para mostrar la dirección del usuario */}
              <label htmlFor="direccion" className="col-sm-4 col-form-label fw-bold">DIRECCIÓN:</label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" id="direccion" value={usuario.direccion || ''}></input>
              </div>

              {/* Campo para mostrar el cargo del usuario */}
              <label htmlFor="cargo" className="col-sm-4 col-form-label fw-bold">CARGO:</label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" id="cargo" value={usuario.rol || ''}></input>
              </div>
            </div>

            {/* Botón para modificar los datos del perfil */}
            <button type="button" className="btn btn-primary button-form" onClick={() => navigate(`/ProfileUpdate/${id}`)}>
              Modificar Datos
            </button>
            <button type="button" className="btn btn-secondary button-form" onClick={() => navigate(`/Menu`)}>
              Volver
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
