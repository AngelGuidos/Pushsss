import { useConfigContext } from '../../contexts/ConfigContext';
import { useUserContext } from "../../contexts/UserContexts";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Container.css";
import Logo from "./logoContainer/logoContainer";
import UserRegModal from "../Modals/UserRegModal/UserRegModal";
import BodyModal1 from "../Modals/Body-Modal1/Body-Modal1";
import BodyModal2 from "../Modals/Body-Modal2/Body-Modal2";



const Container = () => {
  const [modalstate1, changemodalstate1] = useState(false);
  const [modalstate2, changemodalstate2] = useState(false);

  const { login, register } = useUserContext();
  
  const onLoginHandler = async  (identifier, contrasena) => {
    await login(identifier, contrasena);
  };

  const onRegisterHandler = async (nombre, apellido, correo, Contrasena, telefono, sexo, birthdate) => {
    await register();
  };

  return (
    <>
      <div className="main-page-container">
        <Logo />
        <div>
          <div className="logincard">
            <div className="logincomponents">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="login-inputs"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="login-inputs"
              />
              <button className="loginbtn">Iniciar Sesión</button>
              <hr className="login-divider" />
              <div className="registerbtns">
                <button
                  onClick={() => changemodalstate1(!modalstate1)}
                  className="rbtns"
                >
                  Crear Cuenta
                </button>
                <button
                  onClick={() => changemodalstate2(!modalstate2)}
                  className="rbtns"
                >
                  Registrar Organización
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserRegModal state={modalstate1} changestate={changemodalstate1}>
          <BodyModal1 onRegister ={ onRegisterHandler }/>
        </UserRegModal>
        <UserRegModal state={modalstate2} changestate={changemodalstate2}>
          <BodyModal2 />
        </UserRegModal>
      </div>
    </>
  );
};

export default Container;
