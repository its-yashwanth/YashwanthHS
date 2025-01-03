// import React from 'react'
// import './Home.css'
// function Home()
// {
// const openLinkedIn = () => {
//         // Replace the URL below with your LinkedIn profile URL
//         window.open("https://www.linkedin.com/in/yashwanth-h-s-6803882a0/", "_blank");
//       };
// const openGithub= () => {
//         // Replace the URL below with your LinkedIn profile URL
//         window.open("https://github.com/its-yashwanth", "_blank");
//       };
//       const openResume = () => {
//         window.open("./src/assets/Resume-Sarthak_S_Kumar.pdf", "_blank"); 
//       };

// return(
//     <>
//     <div className="main">
//         <div className="intro"><span className="hello">Hii <img className="hii" src="./src/assets/hii.png"></img></span><div className='yash'>I'm  Yashwanth</div><span className="software">a Sofware developer in 
//         the making</span><br></br>
// <span className="desc">I am passionate about building web applications and <br></br> solvingreal-world problems with code.</span>
// <br></br>
// <button className="linkedin" onClick={openLinkedIn}><i class="fa-brands fa-linkedin linkedin"></i></button>
//     <button className="github" onClick={openGithub}><i class="fa-brands fa-github"></i></button>
//     <button  className="resume" onClick={openResume}><i class="fa-solid fa-file"></i>Resume</button>
// </div>
//      <div className="photo"><img className="myphoto" src="./src/assets/myphoto.png"></img></div>
//     </div>
//     </>
// )
// }
// export default Home

import React from 'react'
import  { useContext } from "react"; // Import useContext
import { ThemeContext } from "/src/ThemeContext.jsx"; // Import ThemeContext

import './Home.css'
function Home()
{

const { theme } = useContext(ThemeContext);
const openLinkedIn = () => {
        // Replace the URL below with your LinkedIn profile URL
        window.open("https://www.linkedin.com/in/yashwanth-h-s-6803882a0/", "_blank");
      };
const openGithub= () => {
        // Replace the URL below with your LinkedIn profile URL
        window.open("https://github.com/its-yashwanth", "_blank");
      };
      const openResume = () => {
        window.open("./src/assets/Resume-YashwanthHS.pdf", "_blank"); 
      };


return(
    <>
    <div className={`home-${theme}`}>
    <div className="main">
        <div className="intro"><span className="hello">Hii <span className="Hii">👋</span></span><div className='className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] yash'>I'm  Yashwanth</div><span className="software">a Sofware developer in 
        the making</span><br></br>
<span className="desc">I am passionate about building web applications and <br></br> solving real-world  🌏problems with code.</span>
<br></br>
<button className="linkedin" onClick={openLinkedIn}><i class="fa-brands fa-linkedin linkedin"></i></button>
    <button className="github" onClick={openGithub}><i class="fa-brands fa-github"></i></button>
    {/* <button  className="resume" onClick={openResume}><i class="fa-solid fa-file"></i> Resume</button> */}
</div>
     <div className="photo"><img className="myphoto" src="/assets/myphoto.png"></img></div>
    </div>

    </div>
    </>
)
}
export default Home

