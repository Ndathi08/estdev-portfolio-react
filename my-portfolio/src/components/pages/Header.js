import React from 'react'

function Header() {
    
  return (
    <nav>
        <div classNameName="navbar">
            <div classNameName="logo"><a href="#">Hellen's Portfolio</a></div>
            <ul classNameName="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <div classNameName="cancel-btn">
                    <i className="fas fa-times"></i>
                </div>
            </ul>
            <div className="media-icons">
                <a href="https://www.linkedin.com/in/hellen-ndathi-671a3b216/ " target="_blank"><i
                        className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Ndathi08" target="_blank"><i className="fab fa-github-square"></i></a>
            </div>
        </div>
        <div className="menu-btn">
            <i className="fas fa-bars"></i>
        </div>
    </nav>
  )
}

export default Header