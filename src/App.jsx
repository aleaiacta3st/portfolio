import Navbar from './components/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

useEffect(() => {
  const elements = document.querySelectorAll('.fade-in')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  elements.forEach(el => observer.observe(el))

  setTimeout(() => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('visible')
      }
    })
  }, 100)

  return () => observer.disconnect()
}, [location])

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App
