import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Body-Modal1.css";

const BodyModal1 = ({ onRegister = () => { } }) => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  //const [gender, setGender] = useState("");

  const hombre = true;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    /*
    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }*/

    onRegister(name, lastname, email, password, birthdate, phone, hombre);
  }

  return (
    <>
      <div className="modal1-body">
        <form className="formuser" onSubmit = {onSubmitHandler}>
          <div className="user-names">
            <input
              type={"text"}
              name="name"
              value={ name }
              id="name"
              placeholder="Nombre"
              className="name-inputs"
              onChange={({target})=> {setName(target.value)}}
            />
            <input
              type={"text"}
              name="lastname"
              value={ lastname }
              id="lastname"
              placeholder="Apellido"
              className="name-inputs"
              onChange={({target})=> {setLastname(target.value)}}
            />
          </div>
          <input
            type={"email"}
            name="email"
            value={ email }
            id="email"
            placeholder="Correo Electrónico"
            className="reg-inputs"
            onChange={({target})=> {setEmail(target.value)}}
          />
          <input
            type={"password"}
            name="password"
            value={ password }
            id="password"
            placeholder="Contraseña"
            className="reg-inputs"
            onChange={({target})=> {setPassword(target.value)}}
          />
          <div className="birth-date">
            <label for="birthdate" className="reg-labels">
              Fecha de Nacimiento
            </label>
            <input type={"date"} name="birthdate" value={birthdate} id="birthdate" className="reg-inputs" onChange={({target})=> {setBirthDate(target.value)}}/>
          </div>
          <input
            type={"tel"}
            name="phone"
            value={phone}
            id="phonenumber"
            placeholder="Número de teléfono"
            className="reg-inputs"
            onChange={({target})=> {setPhone(target.value)}}
          />
          <fieldset className="reg-gender">
            <legend className="reg-labels"> Sexo </legend>
            <div className="radio-btns">
              <input
                type="radio"
                id="gender1"
                name="female"
                value={hombre}
                onChange={() => hombre= false}
              />
              <label for="gender" className="reg-labels">
                Mujer
              </label>
            </div>
            <div className="radio-btns">
              <input
                type="radio"
                id="gender2"
                name="male"
                value={hombre}
              />
              <label for="gender" className="reg-labels">
                Hombre
              </label>
            </div>
          </fieldset>
          <Link >
            <button type="submit" className="reg-btn">Registrarse</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default BodyModal1;
