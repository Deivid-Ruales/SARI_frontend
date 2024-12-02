import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const DeviceList = () => {
  const urlBase = "http://localhost:8080/sari/dispositivos";
  const [dispositivos, setDispositivos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dispositivoAEliminar, setDispositivoAEliminar] = useState(null);

  useEffect(() => {
    cargarDispositivos();
  }, []);

  const cargarDispositivos = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setDispositivos(resultado.data);
    } catch (error) {
      console.error("Error al cargar dispositivos:", error);
    }
  };

  const handleEliminarClick = (dispositivo) => {
    setDispositivoAEliminar(dispositivo);
    setShowModal(true);
  };

  const eliminarDispositivo = async () => {
    if (dispositivoAEliminar) {
      try {
        await axios.delete(`${urlBase}/${dispositivoAEliminar.id_dispositivo}`);
        setShowModal(false);
        cargarDispositivos(); 
      } catch (error) {
        console.error("Error al eliminar dispositivo:", error);
      }
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            {/* Título del listado de dispositivos */}
            <h5 className="card-title">DISPOSITIVOS</h5>

             {/* Botón para registrar un nuevo dispositivos */}
             <div className="d-flex justify-content-end">
              <Link to={`/DeviceNew`}>
                <button type="button" className="btn btn-primary mb-3">Nuevo dispositivo
                </button>
              </Link>
            </div>

            {/* Tabla de dispositivos */}
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
                    <th scope="col">Propietario</th>
                    <th scope="col" className="column-image">Historial</th>
                    <th scope="col" className="column-image">Editar</th>
                    <th scope="col" className="column-image">Eliminar</th>
                  </tr>
                </thead>

                {/* Cuerpo de la tabla con datos de dispositivos */}
                <tbody className="table-group-divider table-striped">
                  {dispositivos.length > 0 ? (
                    dispositivos.map((dispositivo, index) => (
                      <tr key={dispositivo.id_dispositivo}>
                        <td>{index + 1}</td>
                        <td>{dispositivo.tipo}</td>
                        <td>{dispositivo.marca}</td>
                        <td>{dispositivo.referencia}</td>
                        <td>{dispositivo.serial_num}</td>
                        <td>{dispositivo.descripcion}</td>
                        <td>{dispositivo.usuario.nombre}</td>

                        {/* Enlace para ver el historial del dispositivo */}
                        <td>
                          <Link to={`/DeviceHistory/${dispositivo.id_dispositivo}`}>
                            <img className="image-table" src={watch} alt="Historial" />
                          </Link>
                        </td>

                        {/* Enlace para editar la información del dispositivo */}
                        <td>
                          <Link to={`/DeviceUpdate/${dispositivo.id_dispositivo}`}>
                            <img className="image-table" src={config} alt="Editar" />
                          </Link>
                        </td>

                        {/* Botón para eliminar el dispositivo */}
                        <td>
                          <button onClick={() => handleEliminarClick(dispositivo)}>
                            <img className="image-table" src={trash} alt="Eliminar" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center">No hay dispositivos disponibles</td>
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
          {dispositivoAEliminar && `¿Estás seguro que deseas eliminar el dispositivo ${dispositivoAEliminar.marca} ${dispositivoAEliminar.referencia}?`}
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

export default DeviceList;
