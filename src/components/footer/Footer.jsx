import React from "react";
import './FooterStyle.css'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <a href="#" className="footer__logo">
          GroznyEvents
        </a>
        <p className="footer__slogan">
          Открой для себя <br /> новые эмоции
        </p>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Страницы</h3>
        <ul className="footer__menu">
          <li className="footer__item">
            <Link to='/' className="footer__links">Главное</Link>
            
          </li>
          <li className="footer__item">
          <Link to='/events' className="footer__links">Мероприятия</Link>
          </li>
          <li className="footer__item">
          <Link to='/forusers' className="footer__links">Участникам</Link>
          
              
            
          </li>

          <li className="footer__item">
              <Link to='#aboutus' className="footer__links">О нас</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Контакты</h3>
        <ul className="footer__contacts">
          <li className="footer__item">
            Чеченская Республика, <br />
            г. Грозный, ул. Умара Димаева
          </li>
          <li className="footer__item">chechevents@email.com</li>
          <li className="footer__item">+7 (938) 000 99-99</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;