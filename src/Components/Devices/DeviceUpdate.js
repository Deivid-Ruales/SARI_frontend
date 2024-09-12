import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const DeviceUpdate = () => {
  const urlBase = "http://localhost:8080/sari/dispositivos";
  const navigate = useNavigate();
  const { id } = useParams();

  const [dispositivo, setDispositivo] = useState({
    tipo: "",
    marca: "",
    referencia: "",
    serial_num: "",
    descripcion: ""
  });
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { tipo, marca, referencia, serial_num, descripcion } = dispositivo;

  useEffect(() => {
    cargarDispositivo();
  }, []);

  // Cargar la información del dispositivo desde la API
  const cargarDispositivo = async () => {
    try {
      const resultado = await axios.get(`${urlBase}/${id}`);
      setDispositivo(resultado.data);
    } catch (error) {
      console.error("Error al cargar dispositivo:", error);
    }
  };

  // Manejo del cambio de valores en los campos del formulario
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDispositivo({ ...dispositivo, [name]: value });
  };

  // Enviar el formulario actualizado
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Mostrar el modal de confirmación
    setModalMessage(`¿Estás seguro que deseas actualizar el dispositivo ${marca} ${referencia}?`);
  };

  // Confirmar la actualización
  const handleConfirm = async () => {
    try {
      await axios.put(`${urlBase}/${id}`, dispositivo);
      setShowModal(false);
      navigate(-1); // Regresar a la página anterior
    } catch (error) {
      console.error("Error al actualizar dispositivo:", error);
    }
  };

  // Cancelar la acción del modal
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            <h5 className="card-title">ACTUALIZAR DISPOSITIVO</h5>

            {/* Formulario para actualizar la información del dispositivo */}
            <form className="forms" onSubmit={onSubmit}>
              {/* Campo para actualizar el tipo de dispositivo */}
              <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <input
                  type="text"
                  className="form-control"
                  id="tipo"
                  name="tipo"
                  value={tipo}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para actualizar la marca del dispositivo */}
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input
                  type="text"
                  className="form-control"
                  id="marca"
                  name="marca"
                  value={marca}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para actualizar la referencia del dispositivo */}
              <div className="mb-3">
                <label htmlFor="referencia" className="form-label">Referencia</label>
                <input
                  type="text"
                  className="form-control"
                  id="referencia"
                  name="referencia"
                  value={referencia}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para actualizar el número de serie del dispositivo */}
              <div className="mb-3">
                <label htmlFor="serial_num" className="form-label">Serial</label>
                <input
                  type="text"
                  className="form-control"
                  id="serial_num"
                  name="serial_num"
                  value={serial_num}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Campo para actualizar los detalles del dispositivo */}
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Detalles</label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Botones de acción: actualizar y cancelar */}
              <button type="submit" className="btn btn-primary button-form">Actualizar</button>
              <button type="button" className="btn btn-secondary button-form" onClick={() => navigate(-1)}>Cancelar</button>
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

export default DeviceUpdate;
