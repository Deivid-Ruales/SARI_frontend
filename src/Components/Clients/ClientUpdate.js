import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ClientUpdate = () => {
  const urlBase = "http://localhost:8080/sari/usuarios";
  const navegacion = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    cargarCliente();
  }, []);

  // Cargar la información del cliente desde la API
  const cargarCliente = async () => {
    try {
      const resultado = await axios.get(`${urlBase}/${id}`);
      setCliente(resultado.data);
    } catch (error) {
      console.error("Error al cargar cliente:", error);
    }
  };

  // Manejo del cambio de valores en los campos del formulario
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  // Enviar el formulario actualizado
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show confirmation modal before proceeding
    setModalMessage(`¿Estás seguro que deseas actualizar la información de ${nombre}?`);
  };

  const handleConfirm = async () => {
    try {
      await axios.put(`${urlBase}/${id}`, cliente);
      setShowModal(false);
      navegacion(-1);
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
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
            <h5 className="card-title">ACTUALIZAR CLIENTE</h5>

            {/* Formulario para actualizar la información del cliente */}
            <form className="forms" onSubmit={onSubmit}>
              
              {/* Campo para actualizar el nombre del cliente */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name="nombre" 
                  value={nombre} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Campo para actualizar la cédula del cliente */}
              <div className="mb-3">
                <label htmlFor="cedula" className="form-label">Cédula</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="cedula" 
                  name="cedula" 
                  value={cedula} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Campo para actualizar el teléfono del cliente */}
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input 
                  type="phone" 
                  className="form-control" 
                  id="telefono" 
                  name="telefono" 
                  value={telefono} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Campo para actualizar la dirección del cliente */}
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="direccion" 
                  name="direccion" 
                  value={direccion} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Campo para actualizar el email del cliente */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Campo para actualizar la contraseña del cliente */}
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="contrasena" 
                  name="contrasena" 
                  value={contrasena} 
                  onChange={onInputChange} 
                  required 
                />
              </div>

              {/* Botón para confirmar la actualización */}
              <button type="submit" className="btn btn-primary button-form">Actualizar</button>

              {/* Botón para cancelar el formulario */}
              <button type="button" className="btn btn-secondary button-form" onClick={() => navegacion(-1)}>Cancelar</button>
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

export default ClientUpdate;
