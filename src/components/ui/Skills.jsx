import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "C", level: "Coding Language", icon: "./src/assets/icons/c.svg" },
        { name: "C++", level: "Coding Language", icon: "/assets/icons/cpp.svg" },
        { name: "Python", level: "Coding Language", icon: "./src/assets/icons/python.svg" },
        { name: "JavaScript", level: "Intermediate", icon: "/assets/icons/javascript.svg" },
        { name: "HTML", level: "Experience", icon: "./src/assets/icons/html.svg" },
        { name: "CSS", level: "Experience", icon: "/assets/icons/css.svg" },
        { name: "Bootstrap", level: "Experience", icon: "/assets/icons/bootstrap.svg" },
        { name: "Tailwind", level: "Experience", icon: "/assets/icons/tailwind.svg" },
        { name: "ReactJS", level: "Intermediate", icon: "/assets/icons/react.svg" },
        { name: "NextJS", level: "Intermediate", icon: "/assets/icons/nextjs.svg" },
        { name: "ViteJS", level: "Intermediate", icon: "/assets/icons/vite.svg" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "NodeJS", level: "Intermediate", icon: "/assets/icons/nodejs.svg" },
        { name: "ExpressJS", level: "Intermediate", icon: "/assets/icons/express.svg" },
        { name: "MySQL", level: "Intermediate", icon: "/assets/icons/mysql.svg" },
        { name: "PostgreSQL", level: "Intermediate", icon: "/assets/icons/postgresql.svg" },
        { name: "MongoDB", level: "Intermediate", icon: "/assets/icons/mongodb.svg" },
        { name: "Git", level: "Intermediate", icon: "/assets/icons/git.svg" },
        { name: "GitHub", level: "Intermediate", icon: "/assets/icons/github.svg" },
        { name: "AWS", level: "Basic", icon: "/assets/icons/aws.svg" },
      ],
    },
  ];

  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Technical Level</p>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <div>
                    <p className="skill-name">{skill.name}</p>
                    <p className="skill-level">{skill.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
