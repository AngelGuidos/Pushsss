import React from "react";
import { Link } from "react-router-dom";
import "./Body-Modal2.css";

const BodyModal2 = () => {
  return (
    <>
      <div className="modal2-body">
        <form action="" method="post" className="formorg">
          <input
            type="text"
            name="orgname"
            id="orgname"
            placeholder="Nombre de la organización"
            className="org-inputs"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo Electrónico"
            className="org-inputs"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            className="org-inputs"
          />
          <input
            type="text"
            name="adress"
            id="adress"
            placeholder="Dirección de la Organización"
            className="org-inputs"
          />
          <input
            type="text"
            name="orgphone"
            id="orgphone"
            placeholder="Teléfono de la Organización"
            className="org-inputs"
          />
          <Link to="/orgpage">
            <button className="org-btn">Registrarse</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default BodyModal2;
