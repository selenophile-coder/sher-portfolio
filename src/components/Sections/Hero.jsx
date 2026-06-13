import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
}

const nameVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  }
}

export default function Hero() {
  return (
    <motion.main 
      id="home" 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="name-container">
        <motion.h1 variants={nameVariants}>
          SHER<br />MOHAMMAD
        </motion.h1>
      </div>
      <motion.div className="middle-content" variants={itemVariants}>
        <p className="subtitle-hero1">I DESIGN AND BUILD PRODUCTS THAT</p>
        <p className="impact-text">deliver real impact.</p>
      </motion.div>
      <motion.div className="footer-info" variants={itemVariants}>
        <div className="info-item">
          <svg className="icon-svg-custom" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div className="text-box"><span className="main-label">FROM DELHI,</span><span className="sub-label">INDIA</span>
          </div>
        </div>
        <div className="info-item">
          <svg className="icon-svg-custom" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div className="text-box"><span className="main-label">FULL STACK DEV,</span><span className="sub-label">&
              DESIGNER</span></div>
        </div>
      </motion.div>
    </motion.main>
  )
}