import React from "react";
import { Link } from "react-router-dom";
import "./AnimalsFound.css";
import OrgSideBar from "../../OrgSideBar/OrgSideBar";

const OrgAnimalsFound = () => {
  return (
    <div className="orgafmp">
      <OrgSideBar />
      <div className="orgafcard">
        <h1 className="main-orgaf-title">Animales Abandonados</h1>
        <Link to="/orgafar" className="orgafmp-links">
            <button className="orgafmp-btns">Lista de solicitudes</button>
        </Link>
        <Link to="/orgmafra" className="orgafmp-links">
            <button className="orgafmp-btns">Solicitudes aceptadas</button>
        </Link>
      </div>
    </div>
  );
};

export default OrgAnimalsFound;
