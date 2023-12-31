import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from './components/WelcomePage'
import Events from './components/events/Events'
import Contacts from './components/contacts/Contacts'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <WelcomePage />
      <Events />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
