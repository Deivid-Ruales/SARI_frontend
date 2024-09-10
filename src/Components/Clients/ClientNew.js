import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ClientNew = () => {
  const navegacion = useNavigate();
  const [cliente, setCliente] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    email: "",
    contrasena: "",
    direccion: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { nombre, cedula, telefono, direccion, email, contrasena } = cliente;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true); // Show confirmation modal before proceeding
    setModalMessage(`¿Estás seguro que deseas registrar a ${nombre}?`);
  };

  const handleConfirm = async () => {
    const urlBase = "http://localhost:8080/sari/usuarios";
    try {
      await axios.post(urlBase, cliente);
      setShowModal(false);
      navegacion(-1);
    } catch (error) {
      console.error("Error al registrar cliente:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            <h5 className="card-title">REGISTRAR NUEVO CLIENTE</h5>

            {/* Formulario para registrar un nuevo cliente */}
            <form className="forms" onSubmit={onSubmit}>

              {/* Campo para ingresar el nombre del cliente */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={nombre}
                  name="nombre"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para ingresar la cédula del cliente */}
              <div className="mb-3">
                <label htmlFor="cedula" className="form-label">Cédula</label>
                <input
                  type="text"
                  className="form-control"
                  id="cedula"
                  value={cedula}
                  name="cedula"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para ingresar el teléfono del cliente */}
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  value={telefono}
                  name="telefono"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para ingresar la dirección del cliente */}
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  value={direccion}
                  name="direccion"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para ingresar el email del cliente */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para ingresar la contraseña del cliente */}
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="contrasena"
                  value={contrasena}
                  name="contrasena"
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Botón para registrar el cliente */}
              <button type="submit" className="btn btn-primary button-form">Registrar</button>

              {/* Botón para cancelar el formulario */}
              <button type="button" className="btn btn-secondary button-form" onClick={() => navegacion(-1)}>Cancelar</button>
            </form>
          </div>
        </div>
      </main>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Registro</Modal.Title>
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

export default ClientNew;
