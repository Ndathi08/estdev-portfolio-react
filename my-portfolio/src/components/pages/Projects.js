import React from 'react'

function Projects() {
  return (
    <section className="projects" id="projects">
        <div className="content">
            <div className="title"><span>My Projects</span></div>
            <div className="boxes">
                <div className="box">
                    <div className="icon">
                        <i className="fas fa-desktop"></i>
                    </div>
                    <div className="topic">Exam Booking</div>
                    <p> This is a sample project that I did to learn about collection of data</p>
                    <div><a className="button" href="https://ndathi08.github.io/Exambooking/">View</a></div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <div className="topic">Graphic Design</div>
                    <p> This is a sample project that I did to learn about collection of data</p>
                    <div><a className="button" href="https://ndathi08.github.io/Exambooking/">View</a></div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="topic">Digital Marketing</div>
                    <p> This is a sample project that I did to learn about collection of data</p>
                    <div><a className="button" href="https://ndathi08.github.io/Exambooking/">View</a></div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Projects