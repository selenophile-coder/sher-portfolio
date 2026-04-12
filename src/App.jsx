import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Projects from './components/Sections/Projects'
import CustomCursor from './components/UI/CustomCursor'
import ScrollToTop from './components/UI/ScrollToTop'

// Lazy load ReachMe page for faster initial load
const ReachMe = lazy(() => import('./pages/ReachMe'))

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Projects />
              </main>
            } />
            <Route path="/reachme" element={<ReachMe />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

export default App