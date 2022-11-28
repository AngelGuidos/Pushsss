import React from "react";
import { Link } from "react-router-dom";
import "./OrgRescues.css";
import OrgSideBar from "../../OrgSideBar/OrgSideBar";

const OrgRescues = () => {
    return(
        <div className="orgrmp">
            <OrgSideBar />
            <div className="orgrcard">
                <h1 className="main-orgr-title">Rescates</h1>
                <Link to="/orgrr" className="orgr-links">
                    <button className="orgr-btns">Lista de solicitudes</button>
                </Link>
            </div>
        </div>
    );
};

export default OrgRescues;