import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "developer-portfolio",
    description: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    hasGithub: true,
    githubUrl: "https://github.com/selenophile-coder/",
    demoUrl: "https://sher-portfolio-kappa.vercel.app/"
  },
  {
    id: 2,
    title: "Self Study Management Library with Admin Control",
    description: "Developed a full-stack library management system using React 18, Node.js, Express.js, MongoDB Atlas, and Mongoose ORM.",
    hasGithub: false,
    demoUrl: "https://achievers-library.vercel.app/"
  },
  // {
  //   id: 3,
  //   title: "C",
  //   description: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
  //   hasGithub: false,
  //   demoUrl: "https://your-demo-link.com"
  // },
  // {
  //   id: 4,
  //   title: "Hooligan Culture",
  //   description: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
  //   hasGithub: false,
  //   demoUrl: "https://your-demo-link.com"
  // }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1]
    }
  }
}

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-icon-circle"><i className="fa-solid fa-laptop-code"></i></div>
          <h2>Featured Projects</h2>
        </div>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="button-group">
                {project.hasGithub && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-github"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                )}
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-demo"
                >
                  <i className="fa-solid fa-arrow-right"></i> DEMO
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}