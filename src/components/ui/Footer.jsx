import React from 'react'
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "/src/ThemeContext.jsx";
import './Footer.css';
function Footer()
{ const { theme, toggleTheme } = useContext(ThemeContext);
return(
    <>
    <footer className={`footer-${theme}`}>
        <div className='line'></div>
        <div className="names">Yashwanth H S</div>
        <div className="linkss">
          <ul >
            <NavLink exact to="/" className="nav-item" activeClassName="active">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="nav-item" activeClassName="active">
              <li>About</li>
            </NavLink>
            <NavLink to="/projects" className="nav-item" activeClassName="active">
              <li>Projects</li>
            </NavLink>
            <NavLink to="/contact" className="nav-item" activeClassName="active">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-icons">
        <a href="mailto:yashwanthhs910109@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="mail fa-solid fa-envelope "></i>
        </a>
        <a href="https://github.com/its-yashwanth" target="_blank" rel="noopener noreferrer">
          <i className="git fa-brands fa-github "></i>
        </a>
        <a href="https://www.linkedin.com/in/yashwanth-h-s-6803882a0/" target="_blank" rel="noopener noreferrer">
          <i className=" linkin fa-brands fa-linkedin "></i>
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="inst fa-brands fa-instagram "></i>
        </a>
      </div>
        <div className="copy">© Yashwanth H S-2025</div>
      </footer>
    </>
)
}
export default Footer