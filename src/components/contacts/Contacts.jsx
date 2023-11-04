import React, { useState } from 'react'
import './ContactsStyles.css'
import {AiFillMail } from 'react-icons/ai'
import axios from 'axios'



const Contacts = () => {
    const [currentName,setcurrentName] = useState('');
    const [currentSurname,setcurrentSurname] = useState('');
    const [currentPhone,setcurrentPhone] = useState('');
    const [currentMail,setcurrentMail] = useState('');
    const [currentText,setcurrentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/rest-api/sendHelpMail', {
            user_name: currentName + ' ' + currentSurname,
            user_mail: currentMail,
            user_phone: currentPhone,
            user_text: currentText
          })
    }
  return (
    <div className="contact_page">

        <div className="contact_block">
            <div className="send_message">
                <div className="send_message_header">
                    <p>Отправить письмо</p>
                    <AiFillMail/>
                </div>
                <div className="send_message_body">
                    <form className='send_message_body_form'>
                        <div className="send_message_body_form_item1">
                            <input 
                            onChange={(e)=>{setcurrentName(e.target.value)}}
                            value={currentName}
                            type="text" 
                            placeholder='Имя' />
                            <input
                            onChange={(e)=>{setcurrentSurname(e.target.value)}}
                            value={currentSurname}
                            type="text"  placeholder='Фамилия' />    
                        </div>
                        <div className="send_message_body_form_item1">
                            <input
                            onChange={(e)=>{setcurrentPhone(e.target.value)}}
                            value={currentPhone}
                            type="text"  placeholder='Телефон'  />
                            <input
                            onChange={(e)=>{setcurrentMail(e.target.value)}}
                            value={currentMail}
                            type="text"   placeholder='Почта' />    
                        </div>
                        <div className="send_message_body_form_item2">
                            <textarea
                            onChange={(e)=>{setcurrentText(e.target.value)}}
                            value={currentText}
                            cols="30" rows="10" placeholder='Как мы можем вам помочь?'></textarea>
                            <button onClick={handleSubmit}>Отправить</button>
                        </div>
                        
                    </form>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Contacts