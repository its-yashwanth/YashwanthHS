// import React from 'react'
// import './Contact.css'
// function Contact()
// {
// return(
//     <>
   
//    <div className="contact-container">
//       <div className="contact-info">
//         <h2>Talk to me</h2>
//         <div className="info-card">
//           <div className="icon">📧</div>
//           <div className="info">
//             <p>Email</p>
//             <p>abhihonnapure@gmail.com</p>
//             <a href="mailto:abhihonnapure@gmail.com">Write Me →</a>
//           </div>
//         </div>
//         <div className="info-card">
//           <div className="icon">📸</div>
//           <div className="info">
//             <p>Instagram</p>
//             <p>@abhishek_honnapure</p>
//             <a
//               href="https://instagram.com/abhishek_honnapure"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Send a message →
//             </a>
//           </div>
//         </div>
//         <div className="info-card">
//           <div className="icon">📍</div>
//           <div className="info">
//             <p>Location</p>
//             <p>Bangalore, India</p>
//             <a
//               href="https://www.google.com/maps?q=Bangalore,India"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Me 
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="contact-form">
//         <h2>What's the project?</h2>
//         <form>
//           <input type="text" placeholder="Type your name" name="name" required />
//           <input
//             type="email"
//             placeholder="Type your email"
//             name="email"
//             required
//           />
//           <input type="text" placeholder="Type your subject" name="subject" />
//           <textarea
//             placeholder="Provide some project details..."
//             name="project"
//           ></textarea>
//           <button type="submit">
//             Send Message <span>✉️</span>
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
// )
// }
// export default Contact




import React from 'react'
import { ThemeContext } from "/src/ThemeContext.jsx";
import  { useContext, useRef } from "react";
import './Contact.css';
function Contact()
{ const { theme } = useContext(ThemeContext);
return(
    <>
  <div className={`contact-${theme}`}>
 <div className="connect">Let's Connect</div>
 <div className="cont">
    <div className="boxes">
        <div className="emailb"><div><i class="fa-regular fa-envelope"></i></div><div >Email</div><div>yashwanthhs@gmail.com</div>
            <div><a href="mailto:yashwanthhs910109@gmail.com" target="_blank" rel="noopener noreferrer">Write Me<i class="fa-solid fa-arrow-right"></i>
        </a></div></div>
        <div className="emailb"><div> <i className="insta fa-brands fa-instagram "></i></div><div >Instagram</div><div>@yashwanthhs</div>
            <div><a href="https://instagram.com/yash_wanth.h.s" target="_blank" rel="noopener noreferrer">Send a message<i class="fa-solid fa-arrow-right"></i>
        </a></div></div>
        <div className="emailb"><div><i class="loc fa-solid fa-location-dot"></i></div><div >Location</div><div>Bangalore,India</div>
            <div><a href="https://www.google.com/maps?q=Bangalore,India" target="_blank" rel="noopener noreferrer">Visit me<i class=" fa-solid fa-arrow-right"></i>
        </a></div></div>
    </div>
    <div className="forms">
    <div className="what">What's the project?</div>
    <form method="POST" action="mailto:yashwanthhs910109@gmail.com" enctype="plain/text">
        <fieldset>
  <legend>Name</legend>
  <input type="text" placeholder="Type your name" />
</fieldset>
        <fieldset>
  <legend>Email</legend>
  <input type="email" placeholder="Type your email" />
</fieldset>
        <fieldset>
  <legend>Subject</legend>
  <input type="text" placeholder="Type your subject" />
</fieldset>
        <fieldset>
  <legend>Project</legend>
 <textarea  placeholder='Project details'></textarea>
</fieldset>
<button className="submit" type="submit">
            Send Message <i class="fas fa-paper-plane"></i> 
           </button>
        </form>
    </div>
 </div>
      </div>
  
    </>
)
}
export default Contact