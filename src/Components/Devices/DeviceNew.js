import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const DeviceNew = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  const [device, setDevice] = useState({
    tipo: "",
    marca: "",
    referencia: "",
    serial_num: "",
    descripcion: "",
    usuario: "" 
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    cargarClientes();
  }, []);

  // Cargar la lista de clientes
  const cargarClientes = async () => {
    try {
      const resultado = await axios.get("http://localhost:8080/sari/usuarios");
      setClientes(resultado.data);
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  const { tipo, marca, referencia, serial_num, descripcion, usuario } = device;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDevice({ ...device, [name]: value });
  };

  const onSelectChange = (e) => {
    const usuarioId = e.target.value;
    const usuarioSeleccionado = clientes.find(cli => cli.id_usuario.toString() === usuarioId);
    setDevice({ ...device, usuario: usuarioSeleccionado });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setModalMessage(`¿Estás seguro que deseas registrar el dispositivo ${marca} ${referencia}?`);
  };

  const handleConfirm = async () => {
    const urlBase = "http://localhost:8080/sari/dispositivos";
    console.log("handleConfirm: ", tipo, marca, referencia, serial_num, descripcion, usuario);
    try {
      await axios.post(urlBase, {
        tipo,
        marca,
        referencia,
        serial_num,
        descripcion,
        usuario 
      });
      setShowModal(false);
      navigate(-1);
    } catch (error) {
      console.error("Error al registrar dispositivo:", error);
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
            <h5 className="card-title">REGISTRAR NUEVO DISPOSITIVO</h5>

            {/* Formulario para registrar los datos del nuevo dispositivo */}
            <form className="forms" onSubmit={onSubmit}>
              {/* Campo para el tipo de dispositivo */}
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

              {/* Campo para la marca del dispositivo */}
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

              {/* Campo para la referencia del dispositivo */}
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

              {/* Campo para el número de serial del dispositivo */}
              <div className="mb-3">
                <label htmlFor="serial" className="form-label">Serial</label>
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

              {/* Campo para los detalles del dispositivo */}
              <div className="mb-3">
                <label htmlFor="detalles" className="form-label">Detalles</label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={onInputChange}
                />
              </div>

              {/* Campo para seleccionar el propietario */}
              <div className="mb-3">
                <label htmlFor="id_usuario" className="form-label">Propietario</label>
                <select
                  className="form-control"
                  id="usuario"
                  name="usuario"
                  value={clientes ? clientes.id_usuario : ""}
                  onChange={onSelectChange}
                  required
                >
                  <option value="">Seleccione un propietario</option>
                  {clientes.map(cliente => (
                    <option key={cliente.id_usuario} value={cliente.id_usuario}>
                      {cliente.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botones de acción: registrar y cancelar */}
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

export default DeviceNew;
