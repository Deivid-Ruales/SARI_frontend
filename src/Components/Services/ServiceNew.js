import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ServiceNew = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [service, setService] = useState({
    observaciones: "",
    almohadillas: "",
    paginas_adf: "",
    paginas_impresas: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { observaciones, almohadillas, paginas_adf, paginas_impresas } = service;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setModalMessage(`¿Estás seguro que deseas registrar este nuevo servicio?`);
  };

  const handleConfirm = async () => {
    const urlBase = `http://localhost:8080/sari/historiales/${id}`;
    try {
      await axios.post(urlBase, service);
      setShowModal(false);
      navigate(-1);
    } catch (error) {
      console.error("Error al registrar el servicio:", error);
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
            <h5 className="card-title">NUEVO SERVICIO</h5>

            {/* Formulario para registrar los detalles del nuevo servicio */}
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

              {/* <div className="mb-3">
                <label htmlFor="tecnico" className="form-label">Técnico</label>
                <input
                  type="text"
                  className="form-control"
                  id="tecnico"
                  name="tecnico"
                  value={tecnico}
                  onChange={onInputChange}
                  required
                />
              </div> */}

              {/* Botones de acción */}
              <button type="submit" className="btn btn-primary button-form">Registrar</button>
              <button type="reset" className="btn btn-secondary button-form" onClick={() => navigate(-1)}>Cancelar</button>
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
          <Button variant="secondary" onClick={handleCancel}>Cancelar</Button>
          <Button variant="primary" onClick={handleConfirm}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceNew;
