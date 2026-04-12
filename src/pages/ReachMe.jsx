import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormSubmit } from '../hooks/useFormSubmit'
import { WEB3FORMS_KEY } from '../utils/constants'

export default function ReachMe() {
  const navigate = useNavigate()
  const { submitForm, loading } = useFormSubmit()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [toast, setToast] = useState({ show: false, message: '', isError: false })

  // ✅ FORCE scroll to top immediately
  useEffect(() => {
    // Multiple methods to ensure scroll to top works
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also try with a small delay for any race conditions
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  const showToast = (message, isError = false) => {
    setToast({ show: true, message, isError })
    setTimeout(() => setToast({ show: false, message: '', isError: false }), 4000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('❌ Please fill all fields before sending.', true)
      return
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      showToast('📧 Enter a valid email address.', true)
      return
    }
    
    const success = await submitForm({
      access_key: WEB3FORMS_KEY,
      ...formData
    })
    
    if (success) {
      showToast('✨ Message delivered! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } else {
      showToast('⚠️ Something went wrong. Please try again.', true)
    }
  }

  return (
    <div className="container-reach">
      <div className="reach-header">
        <div className="logo-mini">Sher<span style={{ fontWeight: 300 }}>.</span>reach</div>
      </div>

      <div className="contact-intro">
        <div className="badge"><i className="fas fa-comment-dots"></i> • Let's connect</div>
        <h1>Reach Me</h1>
        <p>Whether you have a project in mind, a collaboration proposal, or just want to say hello — I'm one message away. Let's craft something extraordinary.</p>
        <div className="japanese-quote">
          <span className="jp-text">" 一瞬一瞬を大切に "</span>
          <span className="en-meaning">— "Cherish every single moment." (Isshun isshun o taisetsu ni)</span>
        </div>
      </div>

      <div className="reach-grid">
        <div className="form-card">
          <div className="form-title">
            <i className="fas fa-pen-fancy"></i> 
            <span>Send a message</span>
          </div>
          <div className="form-sub">✨ Hey Buddy! Let's create something amazing together.</div>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-user-astronaut"></i>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required />
            </div>
            <div className="input-group">
              <i className="fas fa-comment"></i>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your idea, project, or just say hi..." required></textarea>
            </div>
            <button type="submit" className="send-btn" disabled={loading}>
              <i className={`fas ${loading ? 'fa-spinner fa-pulse' : 'fa-paper-plane'}`}></i> 
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <div className="status-badge">
            <i className="fas fa-circle"></i> Available for freelance & full-time opportunities
          </div>
          <div className="detail-item">
            <div className="detail-icon"><i className="fas fa-map-pin"></i></div>
            <div className="detail-text">
              <h4>Location</h4>
              <p>Delhi, India — Remote Worldwide</p>
            </div>
          </div>
          <div className="social-connect">
            <h3><i className="fas fa-share-alt"></i> Connect everywhere</h3>
          </div>
          <div className="extra-note">
            <i className="fas fa-mug-hot"></i> Let's chat over coffee (virtual ☕)
          </div>
        </div>
      </div>

      <div className="back-footer">
        <button className="btn-back-footer" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-circle-left"></i> Return to main page
        </button>
      </div>

      {toast.show && (
        <div className="toast-msg" style={{ display: 'flex' }}>
          <i className={`fas ${toast.isError ? 'fa-exclamation-triangle' : 'fa-check-circle'}`} style={{ color: toast.isError ? '#f97316' : '#2dd4bf' }}></i>
          {toast.message}
        </div>
      )}
    </div>
  )
}