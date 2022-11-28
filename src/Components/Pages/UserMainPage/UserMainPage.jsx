import React from "react";
import { Link } from 'react-router-dom'
import "./UserMainPage.css";
import SideBar from "../../SideBar/SideBar";

const UserMainPage = () => {
  return (
    <>
      <div className="ump">
        <SideBar />
        <div className="main-card">
            <h1 className="main-title">¿Que te gustaría hacer?</h1>
            <Link to="/useranimalsfound" className="main-links">
              <button className="main-btns">Animales abandonados</button>
            </Link>
            <Link to="/useradoptions" className="main-links">
              <button className="main-btns">Adopciones</button>
            </Link>
            <Link to="/userrescueanimals" className="main-links">
              <button className="main-btns">Rescates</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default UserMainPage;
