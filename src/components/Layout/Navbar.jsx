import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollEffect } from '../../hooks/useScrollEffect'
import { useTheme } from '../../hooks/useTheme'
import { socialLinks } from '../../utils/socialLinks'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const isVisible = useScrollEffect()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const pill = document.getElementById('nav-pill')
    const navLinks = document.querySelectorAll('.nav-link')
    
    const handleMouseEnter = (e) => {
      if (pill) {
        const { offsetLeft, offsetWidth } = e.currentTarget
        pill.style.opacity = "1"
        pill.style.left = `${offsetLeft}px`
        pill.style.width = `${offsetWidth}px`
      }
    }
    
    const handleMouseLeave = () => {
      if (pill) {
        pill.style.opacity = "0"
      }
    }
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
    })
    
    const navWrapper = document.querySelector('.main-nav')
    if (navWrapper) {
      navWrapper.addEventListener('mouseleave', handleMouseLeave)
    }
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
      })
      if (navWrapper) {
        navWrapper.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

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
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header id="header" className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
        <div className="container">
          <div className="logo">Sher Mohammad</div>
          <div className="nav-wrapper">
            <nav className="main-nav" id="nav-wrapper">
              <span className="nav-pill" id="nav-pill"></span>
              <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
              <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <Link to="/reachme" className="nav-link external-link" onClick={() => window.scrollTo(0, 0)}>Reach Me</Link>
              <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
            </nav>
            <button className="hamburger" id="hamburgerBtn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="social-links">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onNavClick={handleNavClick} />
    </>
  )
}