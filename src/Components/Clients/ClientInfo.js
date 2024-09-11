import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const ClientInfo = () => {
  const urlCliente = "http://localhost:8080/sari/usuarios";
  const urlDispositivos = "http://localhost:8080/sari/dispositivos";
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [dispositivoAEliminar, setDispositivoAEliminar] = useState(null);

  const [cliente, setCliente] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    direccion: ""
  });

  const [dispositivo, setDispositivo] = useState({
    tipo: "",
    marca: "",
    referencia: "",
    serial_num: "",
    descripcion: ""
  })

  useEffect(() => {
    cargarCliente();
    cargarDispositivos();
  }, []);

  const cargarCliente = async () => {
    try {
      const resultado = await axios.get(`${urlCliente}/${id}`);
      setCliente(resultado.data);
    } catch (error) {
      console.error("Error al cargar cliente:", error);
    }
  };

  const cargarDispositivos = async () => {
    try {
      const resultado = await axios.get(`${urlDispositivos}/cliente/${id}`);
      setDispositivo(resultado.data);
    } catch (error) {
      console.error("Error al cargar dispositivo:", error);
    }
  };

  const eliminarDispositivo = async () => {
    if (dispositivoAEliminar) {
      try {
        await axios.delete(`${urlDispositivos}/${dispositivoAEliminar.id_dispositivo}`);
        setShowModal(false);
        cargarDispositivos();
      } catch (error) {
        console.error("Error al eliminar dispositivo:", error);
      }
    }
  };

  const handleEliminarClick = (dispositivo) => {
    setDispositivoAEliminar(dispositivo);
    setShowModal(true);
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5" style={{ width: '800px' }}>
          <div className="card-body">
            <h5 className="card-title">INFORMACIÓN DEL CLIENTE</h5>

            {/* Formulario para mostrar la información del cliente (sólo lectura) */}
            <form className="forms">
              <div className="mb-3 row">
                <label htmlFor="nombre" className="col-sm-2 col-form-label fw-bold">NOMBRE:</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="nombre" value={cliente.nombre || ''}></input>
                </div>
                <label htmlFor="cedula" className="col-sm-2 col-form-label fw-bold">CÉDULA:</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="cedula" value={cliente.cedula || ''}></input>
                </div>
                <label htmlFor="telefono" className="col-sm-2 col-form-label fw-bold">TELÉFONO:</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="telefono" value={cliente.telefono || ''}></input>
                </div>
                <label htmlFor="direccion" className="col-sm-2 col-form-label fw-bold">DIRECCIÓN:</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="direccion" value={cliente.direccion || ''}></input>
                </div>
              </div>
            </form>

            {/* Botón para registrar un nuevo dispositivo */}
            <div className="d-flex justify-content-end">
              <Link to={`/DeviceNew`}>
                <button type="button" className="btn btn-primary mb-3">Registrar Nuevo Dispositivo</button>
              </Link>
            </div>

            {/* Tabla de dispositivos del cliente */}
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead className="table-head table-primary">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Detalles</th>
                    <th scope="col" className="column-image">Historial</th>
                    <th scope="col" className="column-image">Editar</th>
                    <th scope="col" className="column-image">Eliminar</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider table-striped">
                  {dispositivo.length > 0 ? (dispositivo.map((disp, index) => (
                    <tr key={disp.id_dispositivo}>
                      <td>{index + 1}</td>
                      <td>{disp.tipo}</td>
                      <td>{disp.marca}</td>
                      <td>{disp.referencia}</td>
                      <td>{disp.serial_num}</td>
                      <td>{disp.descripcion}</td>
                      <td>
                        <Link to={`/DeviceHistory/${disp.id_dispositivo}`}>
                          <img className="image-table" src={watch} alt="Historial" />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/DeviceUpdate/${disp.id_dispositivo}`}>
                          <img className="image-table" src={config} alt="Editar" />
                        </Link>
                      </td>
                      <td>
                        <button onClick={() => handleEliminarClick(disp)}>
                          <img className="image-table" src={trash} alt="Eliminar" />
                        </button>
                      </td>
                    </tr>
                  ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">El cliente no tiene dispositivos registrados</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modal de confirmación para eliminar */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dispositivoAEliminar && `¿Estás seguro que deseas eliminar a ${dispositivoAEliminar.marca} ${dispositivoAEliminar.referencia}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarDispositivo}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientInfo;
