import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/ui/Home.jsx'
import About from './components/ui/About.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Skills from './components/ui/Skills.jsx'
import Projects from './components/ui/Projects.jsx'
import Contact from './components/ui/Contact.jsx'
import { ThemeProvider } from "./ThemeContext.jsx";
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about/' element={<About/>}/>
    <Route path='skills/' element={<Skills/>}/>
    <Route path='contact/' element={<Contact/>}/>
    <Route path='projects/' element={<Projects/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router={router}/>
   </ThemeProvider>
  </StrictMode>,

)
