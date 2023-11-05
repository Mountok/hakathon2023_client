import React, { useState,useEffect } from 'react'
import './AllEventsStyle.css'
import {FaFilter} from 'react-icons/fa'
import axios from 'axios'
import {PORT} from '../../assets/dates/port'
import { useNavigate } from 'react-router-dom'
const AllEvents = () => {
    const navigate = useNavigate()
    const [allEvents,setAllEvents] = useState([])
    const [currentEvents,setCurrentEvents] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [searchType,setSearchType] = useState('')
    const [searchLocation,setSearchLoction] = useState('')

    useEffect(()=>{
        if(allEvents.length == 0){
        axios.get(`http://localhost:${PORT}/rest-api/getAllEvents`).then((response) => {
        console.log(response.data)    
        setAllEvents(response.data);
        setCurrentEvents(response.data)
          });    
        }
    },[allEvents])
    
    
       
       
        
    

    const handleClick = (e) => {
        e.preventDefault()

        if(searchValue.length == 0 && searchType.length == 0 && searchLocation.length == 0) {
            setCurrentEvents(allEvents)
        }else{
            let newPost = currentEvents;
            if(searchValue.length != 0) {
                newPost = newPost.filter(value => value.event_name.toLowerCase().includes(searchValue.toLowerCase()))
            }
            if(searchType.length != 0) {
                newPost = newPost.filter(value => value.event_type.toLowerCase().includes(searchType.toLowerCase()))
            }
            if(searchLocation.length != 0) {
                newPost = newPost.filter(value => value.event_location.toLowerCase().includes(searchLocation.toLowerCase()))
            }
            setCurrentEvents(newPost) 
        }

        
    }
  return (
    <div className='all_events_block'>
        <div className="events_block_header">
            <p>ГЛАВНЫЕ СОБЫТИЯ</p>    
        </div>
        <div className="event_filters">
            <form>
                <p><FaFilter/>Фильтры</p>
                <input 
                onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue}
                type="text" 
                placeholder='Название'/>
                <input 
                onChange={(e)=>{setSearchType(e.target.value)}} value={searchType}
                type="text" 
                placeholder='Тип мероприятия'/>
                <input 
                onChange={(e)=>{setSearchLoction(e.target.value)}} value={searchLocation}
                type="text" 
                placeholder='Место проведения'/>
               
                <button onClick={(e)=>handleClick(e)} className='event_filter_btn'>Поиск</button>
            </form>
        </div>
        
        <div className="all_events_block_cards">
            {
                (currentEvents)?(
                    currentEvents.map(el => (
                        <div key={el.event_id} className="card_item">
                            <img src={el.event_image} alt="#" className='card_item_bg' />
                            <div className="card_item_header">
                                <p>{el.event_name}</p>
                            </div>
                            <div className="card_item_title">
                                <p>{el.event_subtitle}</p>
                            </div>
                            <button onClick={()=>navigate(`/event?id=${el.event_id}`)}>ЗАПИСАТЬСЯ</button>
                        </div>
                    ))
                ):null
            }
            
        </div>
    </div>
  )
}

export default AllEvents