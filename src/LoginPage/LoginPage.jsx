import React, { useState } from "react";
import "./LoginPageStyle.css";
import { HiUserCircle, HiUser } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import { BiSolidUserPin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  const [userlogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let passIsTrue = false,
      loginIsTrue = false;
    if (/[a-zA-Z]/.test(userPassword.charAt(0))) {
      if (/\d/.test(userPassword)) {
        if (userPassword.length > 3) {
          passIsTrue = true;
        } else alert("Длина пароля меньше 3-х символоф");
      } else alert("Пароль пароль должен содержать хотябы одну цифру");
    } else alert("Пароль неможет начинаться с цифры");

    const pattern = /^\w+$/;
    if (!pattern.test(userlogin)) {
      alert("Логин должен состоять только из букв и цифр");
    } else {
      loginIsTrue = true;
    }
    if (passIsTrue && loginIsTrue) {
      const sendDatas = {
        userlogin,
        userPassword,
      };
      if (
        sendDatas.userlogin == "Admin" &&
        sendDatas.userPassword == "Admin1"
      ) {
        navigate("/organize");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="login_wrapper">
        <div className="login_form">
          <BiSolidUserPin className="login_form_user_circle" />
          <form>
            <p>Логин</p>

            <div className="login_form_input">
              <HiUser className="login_form_input_icon" />
              <input
                type="text"
                onChange={(e) => setUserLogin(e.target.value)}
                value={userlogin}
                placeholder="Введите логин"
              />
            </div>
            <p>Пароль</p>
            <div className="login_form_input">
              <AiFillLock className="login_form_input_icon" />
              <input
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                placeholder="Введите пароль"
              />
            </div>

            <button onClick={(e) => handleSubmit(e)}>Войти</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
