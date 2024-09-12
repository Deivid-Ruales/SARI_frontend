import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const WorkShiftNew = () => {
  const navigate = useNavigate();
  const [dispositivos, setDispositivos] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [turno, setTurno] = useState({
    fecha_hora_inicio: new Date().toISOString().slice(0, 19),
    fecha_hora_fin: "",
    estado: 1,
    dispositivo: "",
    usuario: ""
  });
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    cargarDispositivos();
    cargarEmpleados();
  }, []);

  // Cargar la lista de Dispositivos
  const cargarDispositivos = async () => {
    try {
      const resultado = await axios.get("http://localhost:8080/sari/dispositivos");
      setDispositivos(resultado.data);
    } catch (error) {
      console.error("Error al cargar dispositivos:", error);
    }
  };

  // Cargar la lista de empleados
  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get("http://localhost:8080/sari/usuarios/empleados");
      setEmpleados(resultado.data);
      console.log("empleados: "+ empleados);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    }
  };

  const { fecha_hora_inicio, estado, dispositivo, usuario} = turno;

  const empleadoChange = (e) => {
    const empleadoId = e.target.value;
    const empleadoSeleccionado = empleados.find(empleado => empleado.id_usuario.toString() === empleadoId);
    setTurno({ ...turno, usuario: empleadoSeleccionado });
  };

  const dispositivoChange = (e) => {
    const dispositivoId = e.target.value;
    const dispositivoSeleccionado = dispositivos.find(dispositivo => dispositivo.id_dispositivo.toString() === dispositivoId);
    setTurno({ ...turno, dispositivo: dispositivoSeleccionado });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setModalMessage(`¿Estás seguro que deseas asignar el turno?`);
  };

  const handleConfirm = async () => {
    const urlBase = "http://localhost:8080/sari/turnos";
    console.log(turno);
    try {
      await axios.post(urlBase, {
        fecha_hora_inicio, 
        estado, 
        dispositivo, 
        usuario
      });
      setShowModal(false);
      navigate(-1);
    } catch (error) {
      console.error("Error al registrar turno:", error);
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
            <h5 className="card-title">ASIGNAR TURNO DE TRABAJO</h5>

            {/* Formulario para registrar los datos del nuevo turno */}
            <form className="forms" onSubmit={onSubmit}>

              {/* Campo para seleccionar el dispositivo */}
              <div className="mb-3">
                <label htmlFor="dispositivo" className="form-label">Dispositivo:</label>
                <select
                  className="form-control"
                  id="dispositivo"
                  name="dispositivo"
                  value={dispositivos ? dispositivos.id_dispositivo : ""}
                  onChange={dispositivoChange}
                  required
                >
                  <option value="">Seleccione un dispositivo</option>
                  {dispositivos.map(dispositivo => (
                    <option key={dispositivo.id_dispositivo} value={dispositivo.id_dispositivo}>
                      {dispositivo.referencia} {dispositivo.serial_num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campo para seleccionar el empleado */}
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Técnico:</label>
                <select
                  className="form-control"
                  id="usuario"
                  name="usuario"
                  value={empleados ? empleados.id_usuario : ""}
                  onChange={empleadoChange}
                  required
                >
                  <option value="">Seleccione un técnico</option>
                  {empleados.map(empleado => (
                    <option key={empleado.id_usuario} value={empleado.id_usuario}>
                      {empleado.nombre}
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

export default WorkShiftNew;
