import React, { useEffect, useState } from 'react';
import './App.css';
import myPhoto from './assets/madhumitha.jpg';
import rentloopImg from './assets/rentloop.png';
import algoArenaImg from './assets/algo-arena.png';
import smartClassroomImg from './assets/smart-classroom.png';
import bloodBankImg from './assets/blood-bank.png';
import sixsigmaImg from './assets/sixsigma.png';
import nptelImg from './assets/nptel.jpg';
import webdevImg from './assets/webdev.jpg';
import javaImg from './assets/java.jpg';
import tcsImg from './assets/tcs.jpg';
import topcgpaImg from './assets/topcgpa.jpg';
import attendanceImg from './assets/attendance.jpg';
import hackathonImg from './assets/hackathon.png';
import journal1Img from './assets/journal1.jpg';
import journal2Img from './assets/journal2.jpg';
import journal3Img from './assets/journal3.jpg';
import ciscoImg from './assets/cisco.png';
import mernImg from './assets/mern.jpg';
import nodeImg from './assets/node.jpg';

import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
function App() {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const toggleProject = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  useEffect(() => {
    const educationSection = document.querySelector('.education-section');
    const handleMouseMove = (e) => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${e.pageX}px`;
      spark.style.top = `${e.pageY}px`;
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    };
    educationSection.addEventListener('mousemove', handleMouseMove);
    return () => educationSection.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">Madhumitha</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <a href="/resume.pdf" className="resume-button" download>📄 Resume</a>
      </nav>

      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={myPhoto} alt="Madhumitha" className="profile-pic" />
        <div className="typewriter">
          <p>Aspiring Full-Stack Developer</p>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="about-me-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am Madhumitha, a dedicated and passionate student skilled in MERN stack and Java. 
            I have experience building interactive and real-time applications and love turning 
            complex problems into elegant, practical solutions. My passion lies in creating 
            functional, user-friendly applications while continuously learning and improving 
            my skills to contribute to impactful technology innovations. I aim to combine 
            creativity with technical expertise to develop meaningful and efficient solutions 
            for real-world problems. Additionally, I enjoy exploring new technologies and 
            developing projects that challenge my skills and creativity.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="education-container">
          <div className="edu-card">
            <h3>HSC - Literacy Mission School</h3>
            <p><strong>2021 - 2023</strong></p>
            <p>Grade: 89%</p>
            <p>Subjects: Computer Science, Mathematics</p>
          </div>

          <div className="edu-card">
            <h3>B.Tech - IT, Sri Shakthi Institute of Engineering and Technology</h3>
            <p><strong>2023 - 2027</strong></p>
            <p>Branch: Information Technology</p>
            <p>CGPA:9.39(upto sem 4)</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">
            <img src={rentloopImg} alt="RentLoop" className="project-img" />
            <h3>Design and Development of RentLoop Platform</h3>
            <button className="toggle-btn" onClick={() => toggleProject(0)}>
              {expanded[0] ? "Hide Details" : "Show Details"}
            </button>
            <a href="https://github.com/madhu9787/rent" target="_blank" className="github-btn">View on GitHub</a>
            {expanded[0] && (
              <div className="project-details">
                <p>Facilitates renting with smart listings, advanced filters, real-time availability.</p>
                <p><strong>Duration:</strong> Jul 2025 – Present</p>
                <p><strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js, Twilio</p>
              </div>
            )}
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src={algoArenaImg} alt="Algo Arena" className="project-img" />
            <h3>Algo Arena - A Gamified Coding Platform</h3>
            <button className="toggle-btn" onClick={() => toggleProject(1)}>
              {expanded[1] ? "Hide Details" : "Show Details"}
            </button>
            <a href="https://github.com/madhu9787/algo" target="_blank" className="github-btn">View on GitHub</a>
            {expanded[1] && (
              <div className="project-details">
                <p>Built with multiple levels and score tracking to make learning programming interactive.</p>
                <p><strong>Duration:</strong> Jan 2025 – Mar 2025</p>
                <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Firebase</p>
              </div>
            )}
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src={smartClassroomImg} alt="Smart Classroom" className="project-img" />
            <h3>Smart Classroom Management System - Hackathon Project</h3>
            <button className="toggle-btn" onClick={() => toggleProject(2)}>
              {expanded[2] ? "Hide Details" : "Show Details"}
            </button>
            <a href="https://github.com/madhu9787" target="_blank" className="github-btn">View on GitHub</a>
            {expanded[2] && (
              <div className="project-details">
                <p>Developed an interactive system with Twilio, automated attendance, and real-time reporting.</p>
                <p><strong>Duration:</strong> Sep 2024 – Dec 2024</p>
                <p><strong>Tech Stack:</strong> Twilio, HTML, CSS, JavaScript, Firebase</p>
              </div>
            )}
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <img src={bloodBankImg} alt="Blood Bank" className="project-img" />
            <h3>Blood Bank Management System</h3>
            <button className="toggle-btn" onClick={() => toggleProject(3)}>
              {expanded[3] ? "Hide Details" : "Show Details"}
            </button>
            <a href="https://github.com/madhu9787/BBM.github.io" target="_blank" className="github-btn">View on GitHub</a>
            {expanded[3] && (
              <div className="project-details">
                <p>Developed a management system to track blood donors, stock, and availability efficiently.</p>
                <p><strong>Duration:</strong> Mar 2024 – Jun 2024</p>
                <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js</p>
              </div>
            )}
          </div>

        </div>
      </section>
  <section id="skills" className="skills-section">
  <h2 className="skills-title">Skills</h2>

  {/* Programming Languages */}
  <div className="skills-category">
    <h3>Programming Languages</h3>
    <div className="skills-container">
      <div className="skill-card"><p>C</p></div>
      <div className="skill-card"><FaJava className="skill-icon"/><p>Java</p></div>
      <div className="skill-card"><FaHtml5 className="skill-icon"/><p>HTML</p></div>
      <div className="skill-card"><FaCss3Alt className="skill-icon"/><p>CSS</p></div>
      <div className="skill-card"><FaJs className="skill-icon"/><p>JavaScript</p></div>
    </div>
  </div>

  {/* Databases */}
  <div className="skills-category">
    <h3>Databases</h3>
    <div className="skills-container">
      <div className="skill-card"><SiMongodb className="skill-icon"/><p>MongoDB</p></div>
      <div className="skill-card"><SiFirebase className="skill-icon"/><p>Firebase</p></div>
    </div>
  </div>

  {/* Frameworks & Libraries */}
  <div className="skills-category">
    <h3>Frameworks & Libraries</h3>
    <div className="skills-container">
      <div className="skill-card"><FaBootstrap className="skill-icon"/><p>Bootstrap</p></div>
      <div className="skill-card"><FaReact className="skill-icon"/><p>React.js</p></div>
      <div className="skill-card"><SiExpress className="skill-icon"/><p>Express.js</p></div>
      <div className="skill-card"><FaNodeJs className="skill-icon"/><p>Node.js</p></div>
    </div>
  </div>

  {/* Tools */}
  <div className="skills-category">
    <h3>Tools</h3>
    <div className="skills-container">
      <div className="skill-card"><FaGithub className="skill-icon"/><p>GitHub</p></div>
      <div className="skill-card"><p>VS Code</p></div>
    </div>
  </div>
</section>
<section id="achievements" className="achievements-section">
  <h2 className="achievements-title">Achievements & Certifications</h2>

  {/* 📘 Courses */}
  <h3 className="sub-title">📘 Courses</h3>
  <div className="certificates-container">
    {[
      {
        img: sixsigmaImg,
        title: "Lean Six Sigma",
        desc: "Knowledge of process improvement, waste reduction, and quality management.",
        link: "https://drive.google.com/file/d/1ptt1cEoImeYEexZrcsYNZspikG4EF8if/view?usp=drive_link"
      },
      {
        img: nptelImg,
        title: "NPTEL – Industry 4.0 & IoT",
        desc: "Introduction to Industry 4.0 and Industrial Internet of Things.",
        link: "https://drive.google.com/file/d/1Z3joK0ayKZ7MWehmNqeM8phIE1u_BpMz/view?usp=drive_link"
      },
      {
        img: webdevImg,
        title: "Web Development – Coursera",
        desc: "Full-stack web development using HTML, CSS, and JavaScript.",
        link: "https://drive.google.com/file/d/1Zqyx3i_XzZ_j40YlyQG1YdHUWsjzGWvc/view?usp=drive_link"
      },
      {
        img: javaImg,
        title: "Java – Scaler",
        desc: "Comprehensive understanding of Java programming and OOP concepts.",
        link: "https://drive.google.com/file/d/1o8TZrQqF1-CkMkrccyC5eyyoQReGCG_k/view?usp=drive_link"
      },
      {
        img: tcsImg,
        title: "TCS iON Career Edge",
        desc: "Professional readiness program by TCS iON.",
        link: "https://drive.google.com/file/d/17rL_dxLLmHmSQ1ghBI_Mx08y-8Kbp_EL/view?usp=drive_link"
      }
    ].map((cert, i) => (
      <div className="ripple-card" key={i}>
        <div className="ripple-card-inner">
          <img src={cert.img} alt={cert.title} className="certificate-img" />
          <h4>{cert.title}</h4>
          <p>{cert.desc}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Certificate
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* 🏆 Achievements */}
  <h3 className="sub-title">🏆 Achievements</h3>
  <div className="certificates-container">
    {[
      {
        img: topcgpaImg,
        title: "Top CGPA Award",
        desc: "Recognized for securing top CGPA in the department.",
        link: "https://drive.google.com/file/d/1qAEq1RGd8XFur_CfgbW4nAqIrS8AkTOb/view?usp=drive_link"
      },
      {
        img: attendanceImg,
        title: "100% Attendance Award",
        desc: "Awarded for consistent dedication and perfect attendance.",
        link: "https://drive.google.com/file/d/1kc4zQae7KMmtJLTtVlOCDWpA8vdAyfAx/view?usp=drive_link"
      },
      {
        img: hackathonImg,
        title: "Intercollege 24-Hour Hackathon",
        desc: "Participated at intercollege hackathon for innovation and problem-solving.",
        link: "https://drive.google.com/file/d/1bcRn3aMYiwhjhIf6GnDooL2AFLFYTz7Y/view?usp=drive_link"
      }
    ].map((ach, i) => (
      <div className="ripple-card" key={i}>
        <div className="ripple-card-inner">
          <img src={ach.img} alt={ach.title} className="certificate-img" />
          <h4>{ach.title}</h4>
          <p>{ach.desc}</p>
          <a href={ach.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Certificate
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* 💻 Bootcamps */}
  <h3 className="sub-title">💻 Bootcamps</h3>
  <div className="certificates-container">
    {[
      {
        img: ciscoImg,
        title: "Networking Essentials – Cisco",
        desc: "Bootcamp on network fundamentals, protocols, and configuration.",
        link: "https://drive.google.com/file/d/1vslFkiXxQJU4UBEmAIRn3AaB9mRuWQNp/view?usp=drive_link"
      },
      {
        img: mernImg,
        title: "MERN Stack Bootcamp – DevTown",
        desc: "Hands-on training on MongoDB, Express.js, React, and Node.js.",
        link: "https://drive.google.com/file/d/1bM6j0tGsexSPyc0gBGMRK4QoF9vr9dR_/view?usp=drive_link"
      }
    ].map((boot, i) => (
      <div className="ripple-card" key={i}>
        <div className="ripple-card-inner">
          <img src={boot.img} alt={boot.title} className="certificate-img" />
          <h4>{boot.title}</h4>
          <p>{boot.desc}</p>
          <a href={boot.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Certificate
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


{/* 🌐 Contact Section */}
<section id="contact" className="contact-section">
  <h2 className="contact-title">Connect With Me ✨</h2>

  <p className="contact-intro">
    I’m always excited to connect! Reach out through any of the platforms below.
  </p>

  {/* 🔗 Contact Links */}
  <div className="contact-links">
    <a href="tel:+918056327230" className="contact-icon phone">
      <i className="fa-solid fa-phone"></i>
      <span>+91 8056327230</span>
    </a>

    <a
      href="https://github.com/madhu9787"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon github"
    >
      <i className="fab fa-github"></i>
      <span>GitHub</span>
    </a>

    <a
      href="http://www.linkedin.com/in/madhumitha8056/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon linkedin"
    >
      <i className="fab fa-linkedin"></i>
      <span>LinkedIn</span>
    </a>

    <a href="https://leetcode.com/u/madhumithamadhumitha/" target="_blank" rel="noopener noreferrer" className="contact-icon leetcode">
  <i className="fa-solid fa-code"></i>
  <span>LeetCode</span>
</a>

    <a href="mailto:madhumitha805632@gmail.com" className="contact-icon mail">
      <i className="fa-solid fa-envelope"></i>
      <span>Email Me</span>
    </a>
  </div>

  {/* 📩 Contact Form */}
  <div className="contact-form-container">
    <h3>Contact Me</h3>
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks for reaching out! I’ll get back to you soon 💌");
      }}
    >
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="5" placeholder="Your Message..." required></textarea>
      <button type="submit" className="send-btn">
        Send Message 🚀
      </button>
    </form>
  </div>
</section>

{/* 🌟 Footer */}
<footer className="footer">
  <p>💜 Thanks for visiting my portfolio 💜</p>
  <small>© 2025 Madhumitha | Designed with passion 💫</small>
</footer>



    </div>
  );
}

export default App;
