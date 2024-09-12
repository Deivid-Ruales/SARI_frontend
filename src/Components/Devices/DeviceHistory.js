import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import config from '../../Resources/config.png';
import trash from '../../Resources/trash.png';

const DeviceHistory = () => {
  const urlDispositivos = "http://localhost:8080/sari/dispositivos";
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [historialAEliminar, setHistorialAEliminar] = useState(null);

  const [dispositivo, setDispositivo] = useState({
    tipo: "",
    marca: "",
    referencia: "",
    serial_num: "",
    descripcion: ""
  });

  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    cargarDispositivo();
    cargarHistorial();
  }, []);

  const cargarDispositivo = async () => {
    try {
      const resultado = await axios.get(`${urlDispositivos}/${id}`);
      setDispositivo(resultado.data);
    } catch (error) {
      console.error("Error al cargar dispositivo:", error);
    }
  };

  const cargarHistorial = async () => {
    try {
      const resultado = await axios.get(`${urlDispositivos}/${id}/historial`);
      setHistorial(resultado.data);
    } catch (error) {
      console.error("Error al cargar historial:", error);
    }
  };

  const eliminarHistorial = async () => {
    if (historialAEliminar) {
      try {
        await axios.delete(`${urlDispositivos}/${id}/historial/${historialAEliminar.id}`);
        setShowModal(false);
        cargarHistorial();
      } catch (error) {
        console.error("Error al eliminar historial:", error);
      }
    }
  };

  const handleEliminarClick = (historial) => {
    setHistorialAEliminar(historial);
    setShowModal(true);
  };

  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow p-3 mb-5" style={{ width: '800px' }}>
        <div className="card-body">
          <h5 className="card-title">INFORMACIÓN DEL DISPOSITIVO</h5>

          {/* Formulario para mostrar la información del dispositivo (sólo lectura) */}
          <form className="forms">
            <div className="mb-3 row">
              <label htmlFor="tipo" className="col-sm-2 col-form-label fw-bold">TIPO:</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="tipo" value={dispositivo.tipo || ''}></input>
              </div>
              <label htmlFor="marca" className="col-sm-2 col-form-label fw-bold">MARCA:</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="marca" value={dispositivo.marca || ''}></input>
              </div>
              <label htmlFor="referencia" className="col-sm-2 col-form-label fw-bold">REFERENCIA:</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="referencia" value={dispositivo.referencia || ''}></input>
              </div>
              <label htmlFor="serial" className="col-sm-2 col-form-label fw-bold">SERIAL:</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="serial" value={dispositivo.serial_num || ''}></input>
              </div>
              <label htmlFor="descripcion" className="col-sm-2 col-form-label fw-bold">DESCRIPCIÓN:</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="descripcion" value={dispositivo.descripcion || ''}></input>
              </div>
            </div>
          </form>

          {/* Botón para registrar un nuevo dispositivo */}
          <div className="d-flex justify-content-end">
              <Link to={`/ServiceNew`}>
                <button type="button" className="btn btn-primary mb-3">Registrar Nuevo Servicio</button>
              </Link>
            </div>

          {/* Tabla para mostrar el historial de servicios del dispositivo */}
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead className="table-head table-primary">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Observaciones</th>
                  <th scope="col">Almohadillas</th>
                  <th scope="col">Cant.ADF</th>
                  <th scope="col">Cant.Impresiones</th>
                  <th scope="col">Técnico</th>
                  <th scope="col" className="column-image">Editar</th>
                  <th scope="col" className="column-image">Eliminar</th>
                </tr>
              </thead>
              <tbody className="table-group-divider table-striped">
                {historial.length > 0 ? (
                  historial.map((servicio, index) => (
                    <tr key={servicio.id}>
                      <td>{index + 1}</td>
                      <td>{servicio.fecha}</td>
                      <td>{servicio.servicio}</td>
                      <td>{servicio.observaciones}</td>
                      <td>{servicio.almohadillas}</td>
                      <td>{servicio.cant_adf}</td>
                      <td>{servicio.cant_impresiones}</td>
                      <td>{servicio.tecnico}</td>
                      <td><a href="ServiceUpdate"><img className="image-table" src={config} alt="Editar" /></a></td>
                      <td>
                        <button onClick={() => handleEliminarClick(servicio)}>
                          <img className="image-table" src={trash} alt="Eliminar" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center">No hay historial de servicios registrado para este dispositivo</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de confirmación para eliminar */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {historialAEliminar && `¿Estás seguro que deseas eliminar el servicio de fecha ${historialAEliminar.fecha}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarHistorial}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default DeviceHistory;
