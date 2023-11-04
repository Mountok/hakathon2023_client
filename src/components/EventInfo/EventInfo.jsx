import React, { useEffect, useState } from 'react'
import {all_events} from '../../assets/dates/EVENTS'
import Navbar from '../navbar/Navbar'
import { useLocation } from 'react-router-dom'
import {GrLocation} from 'react-icons/gr'
import {BiTime} from 'react-icons/bi'
import queryString from 'query-string'
import './EventInfoStyle.css'

import axios from 'axios'
const EventInfo = () => {
    const location = useLocation();
    const [openEvent,setOpenEvent] = useState(queryString.parse(location.search).id)
    const [appState, setAppState] = useState([]);
    const [currentState, setcurrentState] = useState([]);
  
    useEffect(()=>{
        if(appState.length == 0){
        axios.get('http://localhost:5000/rest-api/getAllEvents').then((response) => {
        console.log(response.data)    
        setAppState(response.data);
        setcurrentState(response.data.filter(value=>value.event_id==openEvent))
          });    
        }
        console.log(currentState)
    },[appState])


   
  return (
    <>
        <Navbar/>
        <div className="container">
        <div className="event_full">
            {(currentState.length!=0)?(
                <>
                <div className="event_full_section_1">
                <p>{currentState[0].event_name}</p>
                <p>{currentState[0].event_text}</p>
                <p> <GrLocation className='contact_info_icons'/> {currentState[0].event_location}</p>
                <p> <BiTime className='contact_info_icons'/> С {currentState[0].event_start} по {currentState[0].event_end}</p>
                <button>Подать заявку</button>
                </div>
                <div className="event_full_section_2">
                    <div className="event_full_section_2_img">
                        <img src={currentState[0].event_image} alt="#" />
                    </div>
                    <p> </p>
                </div>
                </>
            ):(
                <h2>Загрузка</h2>
            )}
            
        </div>
        </div>
    </>
  )
}

export default EventInfo