import React, { useEffect, useState } from 'react'
import './EventsStyle.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
const Events = () => {
    const navigate = useNavigate();
    const [appState, setAppState] = useState([]);
    const [currentState, setcurrentState] = useState([]);
  
    useEffect(()=>{
        if(appState.length == 0){
        axios.get('http://localhost:5000/rest-api/getAllEvents').then((response) => {
        console.log(response.data)    
        setAppState(response.data);
        setcurrentState(response.data)
          });    
        }
        console.log(currentState)
    },[appState])
      
   
    
  
  return (
    <div className='events_block'>
        <div className="events_block_header">
            <p>получите не забываемые эмоции</p>
            <p>ГЛАВНЫЕ СОБЫТИЯ</p>    
        </div>
        
        <div className="events_block_cards">


        
        {(currentState.length!=0)?(
            <>
            <div key={currentState.at(-1).event_id} className="card_item">
                <img src={`${currentState.at(-1).event_image}`} alt="#" className='card_item_bg' />
                    <div className="card_item_header">
                        <p>{currentState.at(-1).event_name}</p>
                    </div>
                    <div className="card_item_title">
                        <p>{currentState.at(-1).event_subtitle}</p>
                    </div>
                <button onClick={()=>navigate(`/event?id=${currentState.at(-1).event_id}`)}>ЗАПИСАТЬСЯ</button>
            </div>
            <div key={currentState.at(-2).event_id} className="card_item">
                <img src={currentState.at(-2).event_image} alt="#" className='card_item_bg' />
                    <div className="card_item_header">
                        <p>{currentState.at(-2).event_name}</p>
                    </div>
                    <div className="card_item_title">
                        <p>{currentState.at(-2).event_subtitle}</p>
                    </div>
                <button onClick={()=>navigate(`/event?id=${currentState.at(-2).event_id}`)}>ЗАПИСАТЬСЯ</button>
            </div>
            <div key={currentState.at(-3).event_id} className="card_item">
                <img src={currentState.at(-3).event_image} alt="#" className='card_item_bg' />
                    <div className="card_item_header">
                        <p>{currentState.at(-3).event_name}</p>
                    </div>
                    <div className="card_item_title">
                        <p>{currentState.at(-3).event_subtitle}</p>
                    </div>
                <button onClick={()=>navigate(`/event?id=${currentState.at(-3).event_id}`)}>ЗАПИСАТЬСЯ</button>
            </div>
            </>

            
            
        ):(
            <h2>Загрузка</h2>
        )}
            
       

            


          

            
        </div>
    </div>
  )
}

export default Events