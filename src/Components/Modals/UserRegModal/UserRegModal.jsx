import React from "react";
import "./UserRegModal.css";

const UserRegModal = ({ children, state, changestate }) => {
  return (
    <>
      {state && (
        <div className="modal">
          <div className="modal1-card">
            <div className="modal1-header">
              <h2 className="modal1-title">Registrate</h2>
            </div>
            <button
              onClick={() => changestate(false)}
              className="modal-btn-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default UserRegModal;
