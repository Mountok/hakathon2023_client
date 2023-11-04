import React from "react";
import "./NavbarStyle.css";
import { CgLogIn } from "react-icons/cg";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link className="nav-logo" to='/'>GorznyEvents</Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
          <Link className="nav-link" to='/'>Домой</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/events'>Мероприятия</Link>

          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/'>Участникам</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/'>О нас</Link>
          </li>
        </ul>
        <div className="nav-auth">
            <Link className="nav-login" to='/login'><CgLogIn  className="nav-login_icons"/></Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;