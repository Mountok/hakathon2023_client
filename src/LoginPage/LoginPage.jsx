import React from 'react'
import './LoginPageStyle.css'
import {HiUserCircle, HiUser} from 'react-icons/hi'
import {AiFillLock} from 'react-icons/ai'
import {BiSolidUserPin} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <div className="login_wrapper">
      <div className="login_form">
        <BiSolidUserPin className="login_form_user_circle"/>
        <form>
        <p>Логин</p>

          <div className="login_form_input">
          <HiUser className="login_form_input_icon"/>
          <input type="text" />

          </div>
          <p>Пароль</p>
          <div className="login_form_input">
          <AiFillLock className="login_form_input_icon"/>
          <input type="password"  />
          </div>

          <button onClick={()=>navigate('/orgnize')}>Войти</button>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default LoginPage