import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import trash from '../../Resources/trash.png';
import config from '../../Resources/config.png';

const UserList = () => {
  const urlBase = "http://localhost:8080/sari/usuarios/empleados";
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setUsuarios(resultado.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  const handleEliminarClick = (usuario) => {
    setUsuarioAEliminar(usuario);
    setShowModal(true);
  };

  const eliminarUsuario = async () => {
    if (usuarioAEliminar) {
      try {
        await axios.delete(`http://localhost:8080/usuarios/${usuarioAEliminar.id_usuario}`);
        setShowModal(false);
        cargarUsuarios();
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center">
        <div className="card shadow p-3 mb-5">
          <div className="card-body">
            <h5 className="card-title">EMPLEADOS</h5>

            {/* Botón para registrar un nuevo empleado */}
            <div className="d-flex justify-content-end">
              <Link to={`/UserNew`}>
                <button type="button" className="btn btn-primary mb-3">Nuevo empleado
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
                    <th scope="col">Cargo</th>
                    <th scope="col" className="column-image">Editar</th>
                    <th scope="col" className="column-image">Eliminar</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider table-striped">
                  {usuarios.length > 0 ? (
                    usuarios.map((usuario, index) => (
                      <tr key={usuario.id_usuario}>
                        <td>{index + 1}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.cedula}</td>
                        <td>{usuario.telefono}</td>
                        <td>{usuario.direccion}</td>
                        <td>{usuario.rol}</td>
                        <td>
                          <Link to={`/ProfileUpdate/${usuario.id_usuario}`}>
                            <img className="image-table" src={config} alt="Editar" />
                          </Link>
                        </td>
                        <td>
                          <button onClick={() => handleEliminarClick(usuario)}>
                            <img className="image-table" src={trash} alt="Eliminar" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">No hay usuarios disponibles</td>
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
          {usuarioAEliminar && `¿Estás seguro que deseas eliminar a ${usuarioAEliminar.nombre}?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarUsuario}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
