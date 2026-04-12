import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { socialLinks } from '../../utils/socialLinks'

export default function MobileMenu({ isOpen, onClose, onNavClick }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobileMenu">
        <a href="#home" onClick={(e) => onNavClick(e, 'home')}><i className="fas fa-home"></i> Home</a>
        <a href="#about" onClick={(e) => onNavClick(e, 'about')}><i className="fas fa-user"></i> About</a>
        <a href="#projects" onClick={(e) => onNavClick(e, 'projects')}><i className="fas fa-code"></i> Projects</a>
       <Link to="/reachme" className="external-link" onClick={() => { onClose(); window.scrollTo(0, 0); }}><i className="fas fa-envelope"></i> Reach Me</Link>
        <div className="theme-section">
          <button className="theme-toggle-mobile" onClick={toggleTheme}>
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i> Switch Theme
          </button>
        </div>
        <div className="social-links-mobile">
          <a href={socialLinks.x} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
    </>
  )
}