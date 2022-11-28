import React from "react";
import {Link} from 'react-router-dom';
import "./OrgMainPage.css";
import OrgSideBar from "../OrgSideBar/OrgSideBar";

const OrgMainPage = () => {
    return(
        <>
        <div className="orgpage">
            <OrgSideBar />
            <div className="org-main-card">
                <h1 className="orgmain-title">¿Que te gustaría hacer?</h1>
                <Link to="/orgaf" className="orgmain-links">
                    <button className="orgmain-btns">Animales abandonados</button>
                </Link>
                <Link to="/orgadop" className="orgmain-links">
                    <button className="orgmain-btns">Adopciones</button>
                </Link>
                <Link to="/orgr" className="orgmain-links">
                    <button className="orgmain-btns">Rescates</button>
                </Link>
            </div>
        </div>
        </>
    );
};

export default OrgMainPage;