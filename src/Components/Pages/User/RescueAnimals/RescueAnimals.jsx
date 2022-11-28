import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RescueAnimals.css";
import SideBar from "../../../SideBar/SideBar";
import NewRequestModal from "../../../Modals/NewRequestModal/NewRequestModal";
import RescueNR from "../../../Modals/Users/RescueNR/RescueNR";

const RescueAnimals = () => {
    const [rmodalstate, rmodalchangemodalstate] = useState(false);

    return(
        <>
        <div className="rmp">
            <SideBar />
            <div className="rcard">
                <h1 className="main-r-title">Rescate de animales</h1>
                <Link className="r-links">
                    <button onClick={() => rmodalchangemodalstate(!rmodalstate)} className="r-btns">Nueva solicitud</button>
                </Link>
                <Link to="/usermyresanimrequests" className="r-links">
                    <button className="r-btns">Mis solicitudes</button>
                </Link>
            </div>
            <NewRequestModal nrstate={rmodalstate} nrchangestate={rmodalchangemodalstate}>
                <RescueNR />
            </NewRequestModal>
        </div>
        </>
    );
};

export default RescueAnimals;