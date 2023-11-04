import React from 'react'
import './WelcomePageStyle.css'
import { useNavigate } from 'react-router-dom'
const WelcomePage = () => {
    const navigate = useNavigate()
  return (
    <div className='head_page'>

        <div className="head_page_title">

            <div className="head_page_title_header">
                <h1>Будь <br />в курсе <br />и создавай.</h1>
            </div>

            <div className="head_page_title_body">
                <p>
Наше веб-приложение - источник актуальной информации о мероприятиях, которые проходят в Чеченской Республике. От культурных и спортивных событий до образовательных и развлекательных мероприятий, мы предоставляем всю необходимую информацию и возможность онлайн-регистрации.</p>
                <div className="head_page_title_body_controlls">
                    <button onClick={()=>navigate('/events')} className='head_page_title_body_controlls-btn1'>Мероприятия</button>
                    <button onClick={()=>navigate('/login')} className='head_page_title_body_controlls-btn2'>Войти</button>
                </div>
            </div>

        </div>

        <div className="head_page_image">
            <div className="head_page_image_item">

            </div>
        </div>
    </div>
  )
}

export default WelcomePage