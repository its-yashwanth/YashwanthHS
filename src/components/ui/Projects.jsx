import React from 'react';
import { ThemeContext } from "/src/ThemeContext.jsx";
import  { useContext, useRef } from "react";
import './Projects.css';
function Projects() {
    const { theme } = useContext(ThemeContext);
    const projects = [
        {
            title: "Currency converter",
            description: "A simple currency converter built using the currency API",
            image: "/src/assets/projectphotos/currency.jpg",
            github: "https://github.com/its-yashwanth/Currency-converter",
            demo: null,
        },
        {
            title: "Rent cars",
            description: "A car booking website",
            image: "/src/assets/projectphotos/currency.jpg",
            github: "https://github.com/its-yashwanth/Currency-converter",
            demo: null,
        },
        {
            title: "Portfolio website",
            description: "Personal portfolio website to display my work and projects.",
            image: "/src/assets/projectphotos/myfolio.jpg",
            github: "https://github.com/its-yashwanth/YashwanthHS",
            demo: null,
        },
    ];
    return (
        <>
        <div className={`project-${theme}`}>
        <div className="ptitle">Projects</div>
        <div className="psub">Here are a few projects I've worked on recently</div>
        <div className="grid-container">
            {projects.map((project, index) => (
                <div className="grid-item" key={index}>
                    <img src={project.image} alt={project.title} className="currency" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="buttons">
                        {
                            project.github && (
                                <a href={project.github} className="btns">GitHub</a>
                            )
                        }
                        {
                            project.demo && (
                                <a href={project.demo} className="btns">Demo</a>
                            )
                        }
                    </div>
                </div>
            ))}
        </div>
        </div>
    </>
    )
}
export default Projects