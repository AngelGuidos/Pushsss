import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalsFound.css";
import SideBar from "../../../SideBar/SideBar";
import NewRequestModal from "../../../Modals/NewRequestModal/NewRequestModal";
import AnimalsFoundNR from "../../../Modals/Users/AnimalsFoundNR/AnimalsFoundNR";

const AnimalsFound = () => {
    const [nrmodalstate, nrmodalchangemodalstate] = useState(false);

  return (
    <>
    <div className="afmp">
      <SideBar />
      <div className="afcard">
        <h1 className="main-afmp-title">Animales abandonados</h1>
        <Link to="/useranimalsfound" className="afmp-links">
          <button onClick={() => nrmodalchangemodalstate(!nrmodalstate)} className="afmp-btns">Nueva Solicitud</button>
        </Link>
        <Link to="/userafrequests" className="afmp-links">
          <button className="afmp-btns">Mis solicitudes</button>
        </Link>
      </div>
      <NewRequestModal nrstate={nrmodalstate} nrchangestate={nrmodalchangemodalstate}>
        <AnimalsFoundNR />
      </NewRequestModal>
    </div>
    </>
  );
};

export default AnimalsFound;
