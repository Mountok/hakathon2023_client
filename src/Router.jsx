import React from 'react'
import {Route, Routes } from 'react-router-dom'
import App from './App'
import EventsPage from './EventsPage/EventsPage'
import EventInfo from './components/EventInfo/EventInfo'
import LoginPage from './LoginPage/LoginPage'
import OrganizerPage from './components/Organizer/OrganizerPage'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/event' element={<EventInfo/>}/>
        <Route path='/orgnize' element={<OrganizerPage/>}/>
        {/* <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/:propr' element={<OtherUserScreen/> }/>
        <Route path='/addPost' element={<PostAddPage userdate={user_date} posts={all_posts}/>}/> */}
    </Routes>
  )
}

export default Router