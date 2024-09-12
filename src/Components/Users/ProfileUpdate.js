import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ProfileUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    contrasena: "",
    cedula: "",
    telefono: "",
    direccion: ""
  });

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  const handleInputChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setModalMessage(`¿Estás seguro que deseas actualizar la información de ${usuario.nombre}?`);
  };

  const handleConfirm = async () => {
    try {
      await axios.put(`http://localhost:8080/sari/usuarios/${id}`, usuario);
      setShowModal(false);
      navigate(-1);
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const visibilidadPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5" style={{ width: '450px' }}>
          <div className="card-body">
            <h5 className="card-title">ACTUALIZAR DATOS DEL EMPLEADO</h5>
            <form onSubmit={onSubmit}>
              <div className="mb-3 row">
                {/* Campo para ingresar el nombre del usuario */}
                <label htmlFor="nombre" className="col-sm-4 col-form-label fw-bold">NOMBRE:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={usuario.nombre}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Campo para ingresar y mostrar/ocultar la contraseña del usuario */}
                <label htmlFor="contrasena" className="col-sm-4 col-form-label fw-bold">CONTRASEÑA:</label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <input
                      type={mostrarPassword ? "text" : "password"}
                      className="form-control"
                      id="contrasena"
                      value={usuario.contrasena}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={visibilidadPassword}
                    >
                      {mostrarPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>

                {/* Campo para ingresar la cédula del usuario */}
                <label htmlFor="cedula" className="col-sm-4 col-form-label fw-bold">CÉDULA:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="cedula"
                    value={usuario.cedula}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Campo para ingresar el teléfono del usuario */}
                <label htmlFor="telefono" className="col-sm-4 col-form-label fw-bold">TELÉFONO:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    value={usuario.telefono}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Campo para ingresar la dirección del usuario */}
                <label htmlFor="direccion" className="col-sm-4 col-form-label fw-bold">DIRECCIÓN:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    value={usuario.direccion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Botón para enviar los datos actualizados */}
              <button type="submit" className="btn btn-primary button-form">Actualizar</button>
              {/* Botón para cancelar y regresar al perfil */}
              <button type="button" className="btn btn-secondary button-form" onClick={() => navigate(`/Profile/${id}`)}>Cancelar</button>
            </form>
          </div>
        </div>
      </main>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Actualización</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileUpdate;
