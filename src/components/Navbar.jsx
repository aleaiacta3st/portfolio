import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar




