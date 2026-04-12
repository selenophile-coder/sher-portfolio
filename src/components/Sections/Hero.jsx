export default function Hero() {
  return (
    <main id="home" className="hero animate-on-load">
      <div className="name-container">
        <h1>SHER<br />MOHAMMAD</h1>
      </div>
      <div className="middle-content">
        <p className="subtitle-hero1">I DESIGN AND BUILD PRODUCTS THAT</p>
        <p className="impact-text">deliver real impact.</p>
      </div>
      <div className="footer-info">
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
      </div>
    </main>
  )
}