import React from 'react';
import '../../Styles/Profile.css';

const Profile = () => {
  return (
    <main className="bg-main bg-new-client">
      <div className="form-div-bg">
        <div className="form-div">
          <div className="title">
            <h1 className="text-title">DATOS DE USUARIO</h1>
          </div>
          <form className="form">
            <div className="client-data">
              <p className="label-client">NOMBRE:</p>
              <p className="data">Deivid Ruales</p>
              <p className="label-client">CONTRASEÑA:</p>
              <p className="data">********</p>
              <p className="label-client">CÉDULA:</p>
              <p className="data">1085000111</p>
              <p className="label-client">TELÉFONO:</p>
              <p className="data">3153890000</p>
              <p className="label-client">DIRECCIÓN:</p>
              <p className="data">Carrera 25 No. 20 - 22 Centro</p>
              <p className="label-client">CARGO:</p>
              <p className="data">Técnico</p>
            </div>
            <a className="register-button" href="userEditProfile.html">Modificar datos</a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
