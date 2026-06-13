import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { socialLinks } from '../../utils/socialLinks'
import { RESUME_LINK } from '../../utils/constants'

export default function Footer() {
  const navigate = useNavigate()

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <motion.footer 
      className="new-footer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-hero">
        <div className="footer-hero-content">
          <div className="title-row">
            <img src="./image/Sher.png" alt="Profile" className="profile-img" />
            <h1 className="white-text">Let's create</h1>
          </div>
          <h1 className="gray-text">something real.</h1>
        </div>
        <div className="live-oval-container">
          <div className="live-oval"></div>
        </div>
      </div>
      <div className="footer-wrapper project-card">
        <div className="footer-branding">
          <h2 className="footer-logo">SHER</h2>
          <p className="brand-desc">Building digital experiences that matter, one line of code at a time. Crafting
            interfaces that feel alive, solving problems that make a difference.</p>
        </div>
        <div className="footer-nav-icons">
          <nav className="footer-nav">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Me</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <Link to="/reachme">Contact</Link>
          </nav>
          <div className="footer-social-icons">
            <a href={`mailto:${socialLinks.email}`} className="icon-circle email"><i className="fas fa-envelope"></i></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-circle linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon-circle github"><i className="fab fa-github"></i></a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="icon-circle x"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <div className="copyright">© 2026 SHER MOHAMMAD. ALL RIGHTS RESERVED.</div>
      </div>
    </motion.footer>
  )
}