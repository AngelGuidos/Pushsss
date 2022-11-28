import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrgAdoptions.css";
import OrgSideBar from "../../OrgSideBar/OrgSideBar";
import NewRequestModal from "../../../Modals/NewRequestModal/NewRequestModal";
import OrgAdopNR from "../../../Modals/Org/OrgAdopNR/OrgAdopNR";

const OrgAdoptions = () => {
    const [adoptionmodalstate, adoptionchangemodalstate] = useState(false);

    return(
        <>
        <div className="orgadoptions-mp">
            <OrgSideBar />
            <div className="orgadoptions-card">
                <h1 className="main-orgadoptions-title">Adopciones</h1>
                <Link to="/orgadop" className="orgadoptions-links">
                    <button onClick={() => adoptionchangemodalstate(!adoptionmodalstate)} className="orgadoptions-btns">Nueva solicitud</button>
                </Link>
                <Link to="/orgadopr" className="orgadoptions-links">
                    <button className="orgadoptions-btns">Mis solicitudes</button>
                </Link>
            </div>
            <NewRequestModal nrstate={adoptionmodalstate} nrchangestate={adoptionchangemodalstate}>
                <OrgAdopNR />
            </NewRequestModal>
        </div>
        </>
    );
};

export default OrgAdoptions;