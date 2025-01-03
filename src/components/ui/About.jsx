// import React from 'react'
// import { ThemeContext } from "/src/ThemeContext.jsx";
// import './About.css'
// function About()
// {const { theme, toggleTheme } = useContext(ThemeContext);
// return(
//     <>

//     <div className={`about-${theme}`}>
//       <h2>Welcome to the Home Page</h2>
//     </div>
//     </>
// )
// }
// export default About




// import React, { useContext } from "react"; // Import useContext
// import { ThemeContext } from "/src/ThemeContext.jsx"; // Import ThemeContext
// import "./About.css"; // Import styles


// function About() {
//   // Use the theme and toggleTheme from ThemeContext
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`about-${theme}`}>
//     <div className="one"> <div className="abt ">About Me</div>
//     <div className="mains">
//       <div className="myphotos"><img className="pht" src="./src/assets/myphoto.png"></img></div>
//       <div className="information"><span className="some">I am a second-year undergraduate student in the Department of Computer Science and Engineering💻 at <span className="clg"><a  href="https://pes.edu/">PES University</a></span>, Bangalore, India. I was born in Bangalore, Karnataka.<br></br>
//       Driven by a natural knack for problem-solving and a desire to create impactful solutions, I found my path in technology. I’m passionate about applying my skills to various projects and entrepreneurial ventures while forging connections 🤝 across platforms. Constantly evolving my technical expertise to stay ahead of the curve in this fast-paced industry, I focus on both building solutions from the ground up and optimizing systems for efficiency. I thrive on collaboration and am always eager to embrace new opportunities for growth 🚀 and innovation.</span>
// </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default About;


import React, { useContext } from "react"; // Import useContext
import { ThemeContext } from "/src/ThemeContext.jsx"; // Import ThemeContext
import "./About.css"; // Import styles
import { useState } from "react";

function About() {
  // Use the theme and toggleTheme from ThemeContext
  const { theme } = useContext(ThemeContext);
  const timelineData = [
    {
      title: "B.Tech-CSE",
      period: "2021 - 2025",
      institution: "PES University",
    },
    {
      title: "12th Grade",
      period: "2019 - 2021",
      institution: "Expert Pre-University College",
    },
    {
      title: "10th Grade",
      period: "2016 - 2019",
      institution: "Sharada Vidyanikethana",
    },
  ];
  const technologies = [
    {
      name: "Programming Languages",
      icons: [<img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        alt="C Language"
        style={{ width: "24px", height: "24px" }}
      />
        ,
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        alt="C++ Language"
        style={{ width: "24px", height: "24px" }}
      />
        ,
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />]
    },
    {
      name: "Frontend Development",
      icons: [
        <i
          className="fab fa-html5"
          style={{ color: "#E34F26", fontSize: "24px" }}
        ></i>,
        <i
          className="fab fa-css3-alt"
          style={{ color: "#1572B6", fontSize: "24px" }}
        ></i>,
        <i
          className="fab fa-js-square"
          style={{ color: "#F7DF1E", fontSize: "24px" }}
        ></i>,
        <i className="fab fa-react" style={{ color: "#61DBFB", fontSize: "24px" }}></i>,
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
          alt="jQuery"
          style={{ width: "24px", height: "24px" }}
        />

      ],
    },
    {
      name: "Backend Development",
      icons: [
        <i
          className="fab fa-node"
          style={{ color: "#68A063", fontSize: "24px" }}
        ></i>,
        <img className="express"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          style={{ width: "24px", height: "24px" }}
        />,
      ],
    },
    {
      name: "Database",
      icons: [
        <img
          src="https://www.svgrepo.com/show/331488/mongodb.svg"
          alt="MongoDB"
          style={{ width: "24px", height: "24px" }}
        />
      ],
    },
    {
      name: "Version Control",
      icons: [
        <img
        src="https://www.svgrepo.com/show/353782/git-icon.svg"
        alt="Git"
        style={{ width: "24px", height: "24px" }}
      />,
        <i className="fab fa-github" style={{ color: "#181717", fontSize: "24px" }}></i>,
      ],
    },
  ]
  return (
    <div className={`about-${theme}`}>
      <div className="abt">About Me</div>
      <div className="containers">
        <div className="boxes box1">
          <img className="pht" src="./assets/aboutphoto.png"></img>
        </div>
        <div className="boxes box2">  <div className="information"><span className="some">I am a second-year undergraduate student in the Department of Computer Science and Engineering💻 at <span className="clg"><a href="https://pes.edu/">PES University</a></span>, Bangalore, India. I was born in Bangalore, Karnataka.<br></br>
          Driven by a natural knack for problem-solving and a desire to create impactful solutions, I found my path in technology. I’m passionate about applying my skills to various projects and entrepreneurial ventures while forging connections 🤝 across platforms. Constantly evolving my technical expertise to stay ahead of the curve in this fast-paced industry, I focus on both building solutions from the ground up and optimizing systems for efficiency. I thrive on collaboration and am always eager to embrace new opportunities for growth 🚀 and innovation.</span>
        </div></div>
      </div>
      <div className="timeline">
  <h2 className="edu">Education</h2>
  <div className="timeline-container">
    <div className="timeline-line"></div>
    <div className="timeline-item">
      <div className="circle">
        <i className="icon-computer"></i>
      </div>
      <div className="content">
        <h3>B.Tech-CSE</h3>
        <span className="date">2023 - 2027</span>
        <p>PES University</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="circle">
        <i className="icon-pencil"></i>
      </div>
      <div className="content">
        <h3>12th Grade</h3>
        <span className="date">2021 - 2023</span>
        <p>Deeksha College</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="circle">
        <i className="icon-pencil"></i>
      </div>
      <div className="content">
        <h3>10th Grade</h3>
        <span className="date">2020 - 2021</span>
        <p>JVPS</p>
      </div>
    </div>
  </div>
</div>

      <div className="domains">
        <h3>Domains & Technologies</h3>
        <p className="view">Hover to view more</p>
        <div className="tags-container">
          {technologies.map((tech, index) => (
            <div key={index} className="tag">
              {tech.name}
              <div className="hover-icons">
                {tech.icons.map((icon, iconIndex) => (
                  <span key={iconIndex} className="icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}

export default About;
