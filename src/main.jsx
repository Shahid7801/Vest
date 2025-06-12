import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./Component/Navbar.jsx"
import About from "./Component/About.jsx"
import Home from "./Component/Home.jsx"
import Project from "./Component/project.jsx"
import WeDo from "./Component/WeDo.jsx"
import Contact from "./Component/Contact.jsx"
import Footer from "./Component/Footer.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <WeDo/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
