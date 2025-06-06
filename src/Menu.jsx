import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">📰 NewsPoint</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">All</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
