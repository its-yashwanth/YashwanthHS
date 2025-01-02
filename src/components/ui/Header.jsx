// // import React from 'react'
// // import './Header.css'
// // import {Link} from 'react-router-dom'
// // function Header()
// // {
// // return(
// //     <>
// //     <nav>
// //         <div className="nav">
// //             <div className="name">Yashwanth H S</div>
// //             <div className="links">
// //                 <ul>
// //                 <Link to=''><li> Home</li></Link>
// //                 <Link to='about'><li>About</li></Link>
// //                 <Link to='/projects'><li>Projects</li></Link>
// //                 <Link to='/skills'><li>Skills</li></Link>
// //                 <Link to='/contact'><li>Contact</li></Link>
                
// //                 </ul>
// //             </div>
// //         </div>
// //     </nav>
// //     </>
// // )
// // }
// // export default Header

// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import { ThemeContext } from "/src/ThemeContext.jsx";
// // import "./Header.css";

// // function Header() {
// //   const { theme, toggleTheme } = useContext(ThemeContext);

// //   return (
// //     <>
// //       <nav className={`nav ${theme}`}>
// //         <div className="name">Yashwanth H S</div>
// //         <div className="links">
// //           <ul>
// //             <Link to="/"><li>Home</li></Link>
// //             <Link to="/about"><li>About</li></Link>
// //             <Link to="/projects"><li>Projects</li></Link>
// //             <Link to="/skills"><li>Skills</li></Link>
// //             <Link to="/contact"><li>Contact</li></Link>
// //               <li className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer" }}>
// //           {theme === "light" ? (
// //             <i className="fa-regular fa-moon fa moon"></i> // Moon icon for light theme
// //           ) : (
// //             <i className="fa-regular fa-sun fa  sun"></i> // Sun icon for dark theme
// //           )}
// //         </li>
// //           </ul>
// //         </div>
// //         {/* Dark mode toggle button */}
      
// //       </nav>
// //     </>
// //   );
// // }

// // export default Header;

// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "/src/ThemeContext.jsx";
// import "./Header.css";

// function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <>
//       <nav className={`nav ${theme}`}>
//         <div className="name">Yashwanth H S</div>
//         <div className="links">
//           <ul>
//             <NavLink 
//               exact 
//               to="/" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Home</li>
//             </NavLink>
//             <NavLink 
//               to="/about" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>About</li>
//             </NavLink>
//             <NavLink 
//               to="/projects" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Projects</li>
//             </NavLink>
//             <NavLink 
//               to="/skills" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Skills</li>
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Contact</li>
//             </NavLink>
//             <li 
//               className="theme-toggle" 
//               onClick={toggleTheme} 
//               style={{ cursor: "pointer" }}
//             >
//               {theme === "light" ? (
//                 <i className="fa-regular fa-moon fa moon"></i> // Moon icon for light theme
//               ) : (
//                 <i className="fa-regular fa-sun fa sun"></i> // Sun icon for dark theme
//               )}
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;

// import React from 'react'
// import './Header.css'
// import {Link} from 'react-router-dom'
// function Header()
// {
// return(
//     <>
//     <nav>
//         <div className="nav">
//             <div className="name">Yashwanth H S</div>
//             <div className="links">
//                 <ul>
//                 <Link to=''><li> Home</li></Link>
//                 <Link to='about'><li>About</li></Link>
//                 <Link to='/projects'><li>Projects</li></Link>
//                 <Link to='/skills'><li>Skills</li></Link>
//                 <Link to='/contact'><li>Contact</li></Link>
                
//                 </ul>
//             </div>
//         </div>
//     </nav>
//     </>
// )
// }
// export default Header

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "/src/ThemeContext.jsx";
// import "./Header.css";

// function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <>
//       <nav className={`nav ${theme}`}>
//         <div className="name">Yashwanth H S</div>
//         <div className="links">
//           <ul>
//             <Link to="/"><li>Home</li></Link>
//             <Link to="/about"><li>About</li></Link>
//             <Link to="/projects"><li>Projects</li></Link>
//             <Link to="/skills"><li>Skills</li></Link>
//             <Link to="/contact"><li>Contact</li></Link>
//               <li className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer" }}>
//           {theme === "light" ? (
//             <i className="fa-regular fa-moon fa moon"></i> // Moon icon for light theme
//           ) : (
//             <i className="fa-regular fa-sun fa  sun"></i> // Sun icon for dark theme
//           )}
//         </li>
//           </ul>
//         </div>
//         {/* Dark mode toggle button */}
      
//       </nav>
//     </>
//   );
// }

// export default Header;

// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "/src/ThemeContext.jsx";
// import "./Header.css";

// function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
  
//   const sidemenu=document.getElementById("sidemenu");
//   const openmenu=()=>{
//     sidemenu.style.right="0";
//   }

//   const closemenu=()=>{
//     sidemenu.style.right="-290px";
//   }
//   return (
//     <>
//       <nav className={`nav ${theme}`}>
//         <div className="name">Yashwanth H S</div>
//         <div className="links">
//           <ul id="sidemenu">
//             <NavLink 
//               exact 
//               to="/" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Home</li>
//             </NavLink>
//             <NavLink 
//               to="/about" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>About</li>
//             </NavLink>
//             <NavLink 
//               to="/projects" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Projects</li>
//             </NavLink>
//             <NavLink 
//               to="/skills" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Skills</li>
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               className="nav-item" 
//               activeClassName="active"
//             >
//               <li>Contact</li>
//             </NavLink>
//             <li 
//               className="theme-toggle" 
//               onClick={toggleTheme} 
//               style={{ cursor: "pointer" }}
//             >
//               {theme === "light" ? (
//                 <i className="fa-regular fa-moon fa moon"></i> // Moon icon for light theme
//               ) : (
//                 <i className="fa-regular fa-sun fa sun"></i> // Sun icon for dark theme
//               )}
//             </li>
//             <i class="fa-solid fa-xmark menu" onClick={closemenu}></i>            
//           </ul>
//         </div>
//         <i class="fa-solid fa-bars multiply" onClick={openmenu}></i>
//       </nav>
//     </>
//   );
// }

// export default Header;

// import React, { useContext, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "/src/ThemeContext.jsx";
// import "./Header.css";

// function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const sidemenuRef = useRef(null); // Reference for the sidemenu

//   const openmenu = () => {
//     if (sidemenuRef.current) {
//       sidemenuRef.current.style.right = "0";
//     }
//   };

//   const closemenu = () => {
//     if (sidemenuRef.current) {
//       sidemenuRef.current.style.right = "-290px";
//     }
//   };

//   return (
//     <>
//       <nav className={`nav ${theme}`}>
//         <div className="name">Yashwanth H S</div>
//         <div className="links">
//           <ul id="sidemenu" ref={sidemenuRef}>
//             <NavLink
//               exact
//               to="/"
//               className="nav-item"
//               activeClassName="active"
//             >
//               <li>Home</li>
//             </NavLink>
//             <NavLink
//               to="/about"
//               className="nav-item"
//               activeClassName="active"
//             >
//               <li>About</li>
//             </NavLink>
//             <NavLink
//               to="/projects"
//               className="nav-item"
//               activeClassName="active"
//             >
//               <li>Projects</li>
//             </NavLink>
//             <NavLink
//               to="/skills"
//               className="nav-item"
//               activeClassName="active"
//             >
//               <li>Skills</li>
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="nav-item"
//               activeClassName="active"
//             >
//               <li>Contact</li>
//             </NavLink>
//             <li
//               className="theme-toggle"
//               onClick={toggleTheme}
//               style={{ cursor: "pointer" }}
//             >
//               {theme === "light" ? (
//                 <i className="fa-regular fa-moon fa moon"></i> // Moon icon for light theme
//               ) : (
//                 <i className="fa-regular fa-sun fa sun"></i> // Sun icon for dark theme
//               )}
//             </li>
//             <i
//               className="fa-solid fa-xmark menu"
//               onClick={closemenu}
//             ></i>
//           </ul>
//         </div>
//         <i
//           className="fa-solid fa-bars multiply"
//           onClick={openmenu}
//         ></i>
//       </nav>
//     </>
//   );
// }

// export default Header;
import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "/src/ThemeContext.jsx";
import "./Header.css";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidemenuRef = useRef(null); // Reference for the sidemenu

  const openmenu = () => {
    if (sidemenuRef.current) {
      sidemenuRef.current.style.right = "0";
    }
  };

  const closemenu = () => {
    if (sidemenuRef.current) {
      sidemenuRef.current.style.right = "-290px";
    }
  };

  return (
    <>
      <nav className={`nav ${theme}`}>
        <div className="name">Yashwanth H S</div>
        <div className="links">
          <ul id="sidemenu" ref={sidemenuRef}>
            <li className="close-btn" onClick={closemenu}>
              <i className="fa-solid fa-xmark cancel"></i> {/* Cancel button */}
            </li>
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
            <li
              className="theme-toggle"
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            >
              {theme === "light" ? (
                <i className="fa-regular fa-moon"></i> // Moon icon for light theme
              ) : (
                <i className="fa-regular fa-sun"></i> // Sun icon for dark theme
              )}
            </li>
          </ul>
        </div>
        <i
          className="fa-solid fa-bars multiply "
          onClick={openmenu}
        ></i>
      </nav>
    </>
  );
}

export default Header;
