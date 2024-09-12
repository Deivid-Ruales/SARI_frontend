import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';

const WorkShiftList = () => {
  const urlBase = "http://localhost:8080/sari/turnos";
  const [turnos, setTurnos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [turnoAEliminar, setTurnoAEliminar] = useState(null);

  useEffect(() => {
    cargarTurnos();
  }, []);

  const cargarTurnos = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setTurnos(resultado.data);
    } catch (error) {
      console.error("Error al cargar turnos:", error);
    }
  };

  const handleEliminarClick = (turno) => {
    setTurnoAEliminar(turno);
    setShowModal(true);
  };

  const eliminarTurno = async () => {
    if (turnoAEliminar) {
      try {
        await axios.delete(`${urlBase}/${turnoAEliminar.id_turno}`);
        setShowModal(false);
        cargarTurnos();
      } catch (error) {
        console.error("Error al eliminar turno:", error);
      }
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            {/* Título del listado de turnos */}
            <h5 className="card-title">TURNOS DE TRABAJO</h5>

             {/* Botón para registrar un nuevo turno */}
             <div className="d-flex justify-content-end">
              <Link to={`/WorkShiftNew`}>
                <button type="button" className="btn btn-primary mb-3">Nuevo turno
                </button>
              </Link>
            </div>

            {/* Tabla de turnos */}
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead className="table-head table-primary">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Fecha de inicio</th>
                    <th scope="col">Fecha de fin</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Dispositivo</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Técnico</th>
                    <th scope="col" className="column-image">Editar</th>
                    <th scope="col" className="column-image">Eliminar</th>
                  </tr>
                </thead>

                {/* Cuerpo de la tabla con datos de turnos */}
                <tbody className="table-group-divider table-striped">
                  {turnos.length > 0 ? (
                    turnos.map((turno, index) => (
                      <tr key={turno.id_turno}>
                        <td>{index + 1}</td>
                        <td>{turno.fecha_hora_inicio}</td>
                        <td>{turno.fecha_hora_fin}</td>
                        <td>{turno.estado}</td>
                        <td>{turno.dispositivo.marca} {turno.dispositivo.referencia}</td>
                        <td>{turno.dispositivo.serial_num}</td>
                        <td>{turno.dispositivo.usuario.nombre}</td>
                        <td>{turno.dispositivo.usuario.telefono}</td>
                        <td>{turno.usuario.nombre}</td>

                        {/* Enlace para editar la información del turno */}
                        <td>
                          <Link to={`/WorkShiftUpdate/${turno.id_turno}`}>
                            <img className="image-table" src={config} alt="Editar" />
                          </Link>
                        </td>

                        {/* Botón para eliminar el turno */}
                        <td>
                          <button onClick={() => handleEliminarClick(turno)}>
                            <img className="image-table" src={trash} alt="Eliminar" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">No hay turnos disponibles</td>
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
          {turnoAEliminar && `¿Estás seguro que deseas eliminar el turno ${turnoAEliminar.dispositivo.marca}  ${turnoAEliminar.dispositivo.referencia}
          a cargo de  ${turnoAEliminar.usuario.nombre}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarTurno}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkShiftList;
