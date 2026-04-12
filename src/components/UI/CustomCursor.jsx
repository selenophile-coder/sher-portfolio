import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    const cursorRing = document.createElement('div')
    cursor.classList.add('custom-cursor')
    cursorRing.classList.add('custom-cursor-ring')
    document.body.appendChild(cursor)
    document.body.appendChild(cursorRing)

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      cursorRing.style.left = e.clientX + 'px'
      cursorRing.style.top = e.clientY + 'px'
    }

    const addHover = () => {
      cursor.classList.add('hover')
      cursorRing.classList.add('hover')
    }

    const removeHover = () => {
      cursor.classList.remove('hover')
      cursorRing.classList.remove('hover')
    }

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .icon-circle, .resume-btn, .btn-github, .btn-demo, .send-btn, .back-main-btn, .info-item, .project-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cursor.remove()
      cursorRing.remove()
    }
  }, [])

  return null
}