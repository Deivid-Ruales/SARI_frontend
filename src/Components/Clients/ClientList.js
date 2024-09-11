import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';
import watch from '../../Resources/watch.png';
import plus from '../../Resources/plus.png';

const ClientList = () => {
  const urlBase = "http://localhost:8080/sari/usuarios";
  const [clientes, setClientes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [clienteAEliminar, setClienteAEliminar] = useState(null);
  const navegacion = useNavigate();

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setClientes(resultado.data);
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  const handleEliminarClick = (cliente) => {
    setClienteAEliminar(cliente);
    setShowModal(true);
  };

  const eliminarCliente = async () => {
    if (clienteAEliminar) {
      try {
        await axios.delete(`${urlBase}/${clienteAEliminar.id_usuario}`);
        setShowModal(false);
        cargarClientes();
      } catch (error) {
        console.error("Error al eliminar cliente:", error);
      }
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            <h5 className="card-title">CLIENTES</h5>

            {/* Botón para registrar un nuevo cliente */}
            <div className="d-flex justify-content-end">
              <Link to={`/ClientNew`}>
                <button type="button" className="btn btn-primary mb-3">Nuevo cliente
                </button>
              </Link>
            </div>

            <div className="table-responsive">
              <table className="table table-borderless">
                <thead className="table-head table-primary">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cédula</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col" className="column-image">Dispositivos</th>
                    <th scope="col" className="column-image">Editar</th>
                    <th scope="col" className="column-image">Eliminar</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider table-striped">
                  {clientes.length > 0 ? (
                    clientes.map((cliente, index) => (
                      <tr key={cliente.id_usuario}>
                        <td>{index + 1}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.cedula}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.direccion}</td>
                        <td>
                          <Link to={`/ClientInfo/${cliente.id_usuario}`} className="btn btn-link">
                            <img className="image-table" src={watch} alt="Ver dispositivos" />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/ClientUpdate/${cliente.id_usuario}`}>
                            <img className="image-table" src={config} alt="Editar" />
                          </Link>
                        </td>
                        <td>
                          <button onClick={() => handleEliminarClick(cliente)}>
                            <img className="image-table" src={trash} alt="Eliminar" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">No hay clientes disponibles</td>
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
          {clienteAEliminar && `¿Estás seguro que deseas eliminar a ${clienteAEliminar.nombre}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarCliente}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientList;
