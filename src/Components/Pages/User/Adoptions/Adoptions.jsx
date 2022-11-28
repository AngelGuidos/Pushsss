import React from "react";
import { Link } from "react-router-dom";
import "./Adoptions.css";
import SideBar from "../../../SideBar/SideBar";

const Adoptions = () => {
    return(
        <div className="amp">
            <SideBar />
            <div className="adoption-card">
                <h1 className="main-adop-title">Adopciones</h1>
                <Link to="/useradopr" className="adoption-links">
                    <button className="adop-btns">Ver animales en adopcion</button>
                </Link>
                <Link to="/usermyadopr" className="adoption-links">
                    <button className="adop-btns"> Mis solicitudes </button>
                </Link>
            </div>
        </div>
    );
};

export default Adoptions;