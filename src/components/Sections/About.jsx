import { motion } from 'framer-motion'
import { socialLinks } from '../../utils/socialLinks'
import { RESUME_LINK } from '../../utils/constants'

export default function About() {
  return (
    <>
      <motion.section 
        id="about" 
        className="hero-about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-about-wrapper">
          <h1 className="hero-about-title">ABOUT ME</h1>
          <p className="hero-about-subtitle">GET TO KNOW MORE ABOUT</p>
          <h2 className="hero-about-focus">who i am.</h2>
        </div>
      </motion.section>

      <motion.section 
        className="portfolio-grid-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="main-container">
          <motion.div 
            className="column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h1 className="grid-headline">Nice to meet you. I'm <span className="gradient-name">SHER</span></h1>
            <div className="content-text">
              <p>I transform complex ideas into high-speed digital experiences. I focus on the entire
                stack—prioritizing clean architecture, seamless performance, and modern solutions that drive
                real value.</p>
              <p className="philosophy-text">My philosophy is simple: build things that last.</p>
            </div>
            <div className="social-links-about">
              <a href={`mailto:${socialLinks.email}`} className="icon-circle email"><i className="fas fa-envelope"></i></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-circle linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-circle github"><i className="fab fa-github"></i></a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="icon-circle x"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="resume-btn"><i className="fas fa-file-alt"></i> See My Resume</a>
          </motion.div>
          <motion.div 
            className="column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="eyebrow">WHAT I DO</span>
            <h2 className="grid-headline">Front End <span className="gradient-name">Development</span></h2>
            <div className="content-text">
              <p className="tagline">CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
              <div className="tech-stack">
                <div className="icon-circle" title="JavaScript"><i className="fab fa-js" style={{ color: '#F7DF1E' }}></i>
                </div>
                <div className="icon-circle" title="React"><i className="fab fa-react" style={{ color: '#61DAFB' }}></i>
                </div>
                <div className="icon-circle" title="Next.js"><i className="fab fa-node-js" style={{ color: '#ffffff' }}></i>
                </div>
                <div className="icon-circle" title="GitHub"><i className="fab fa-github" style={{ color: '#ffffff' }}></i>
                </div>
                <div className="icon-circle" title="Tailwind"><i className="fas fa-wind" style={{ color: '#38B2AC' }}></i>
                </div>
                <div className="icon-circle" title="Git"><i className="fab fa-git-alt" style={{ color: '#F05032' }}></i>
                </div>
                <div className="icon-circle" title="HTML5"><i className="fab fa-html5" style={{ color: '#E34F26' }}></i>
                </div>
                <div className="icon-circle" title="CSS3"><i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i>
                </div>
              </div>
              <ul className="bullet-points">
                <li><i className="fas fa-bolt"></i> Building responsive Single-Page-Apps (SPA) & PWA in React.js
                </li>
                <li><i className="fas fa-bolt"></i> Building responsive static websites using Next.js</li>
                <li><i className="fas fa-bolt"></i> Building Web Apps using Tailwind CSS & modern frameworks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}