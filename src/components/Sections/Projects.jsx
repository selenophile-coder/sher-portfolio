const projects = [
  {
    id: 1,
    title: "developer-portfolio",
    description: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    hasGithub: true,
    githubUrl: "https://github.com/yourusername/developer-portfolio",
    demoUrl: "https://your-demo-link.com"
  },
  {
    id: 2,
    title: "Vantage CRM",
    description: "All in one marketing, automation and CRM solution for business, which includes automate leads, followup, booking, payment, and more.",
    hasGithub: false,
    demoUrl: "https://your-demo-link.com"
  },
  {
    id: 3,
    title: "O Mejor Oferta",
    description: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    hasGithub: false,
    demoUrl: "https://your-demo-link.com"
  },
  {
    id: 4,
    title: "Hooligan Culture",
    description: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    hasGithub: false,
    demoUrl: "https://your-demo-link.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section animate-on-load">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-icon-circle"><i className="fa-solid fa-laptop-code"></i></div>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="button-group">
                {project.hasGithub && (
                  <button className="btn-github" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <i className="fa-brands fa-github"></i> GitHub
                  </button>
                )}
                <button className="btn-demo" onClick={() => window.open(project.demoUrl, '_blank')}>
                  <i className="fa-solid fa-arrow-right"></i> DEMO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}