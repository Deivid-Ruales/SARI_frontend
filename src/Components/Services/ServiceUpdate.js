import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ServiceUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [service, setService] = useState({
    observaciones: "",
    almohadillas: "",
    paginas_adf: "",
    paginas_impresas: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { observaciones, almohadillas, paginas_adf, paginas_impresas } = service;

  // Cargar la información del servicio desde la API
  useEffect(() => {
    cargarServicio();
  }, []);

  const cargarServicio = async () => {
    try {
      const urlBase = `http://localhost:8080/sari/historiales/${id}`;
      const resultado = await axios.get(urlBase);
      setService(resultado.data);
    } catch (error) {
      console.error("Error al cargar el servicio:", error);
    }
  };

  // Manejar cambios en los campos del formulario
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Enviar el formulario actualizado
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Mostrar el modal de confirmación
    setModalMessage(`¿Estás seguro que deseas actualizar este servicio?`);
  };

  // Confirmar la actualización
  const handleConfirm = async () => {
    const urlBase = `http://localhost:8080/sari/historiales/${id}`;
    try {
      await axios.put(urlBase, service);
      setShowModal(false);
      navigate(-1); // Volver a la página anterior
    } catch (error) {
      console.error("Error al actualizar el servicio:", error);
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
            <h5 className="card-title">ACTUALIZAR SERVICIO</h5>

            {/* Formulario para actualizar los detalles del servicio */}
            <form className="forms" onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="observaciones" className="form-label">Observaciones</label>
                <input
                  type="text"
                  className="form-control"
                  id="observaciones"
                  name="observaciones"
                  value={observaciones}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="almohadillas" className="form-label">% Almohadillas</label>
                <input
                  type="text"
                  className="form-control"
                  id="almohadillas"
                  name="almohadillas"
                  value={almohadillas}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="paginas_adf" className="form-label">Contador ADF</label>
                <input
                  type="text"
                  className="form-control"
                  id="paginas_adf"
                  name="paginas_adf"
                  value={paginas_adf}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="paginas_impresas" className="form-label">Contador Impresiones</label>
                <input
                  type="text"
                  className="form-control"
                  id="paginas_impresas"
                  name="paginas_impresas"
                  value={paginas_impresas}
                  onChange={onInputChange}
                />
              </div>

              <button type="submit" className="btn btn-primary button-form">Actualizar</button>
              <button type="reset" className="btn btn-secondary button-form" onClick={() => navigate(-1)}>Cancelar</button>
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
          <Button variant="secondary" onClick={handleCancel}>Cancelar</Button>
          <Button variant="primary" onClick={handleConfirm}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceUpdate;
