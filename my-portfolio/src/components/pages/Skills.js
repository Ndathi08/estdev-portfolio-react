import React from 'react'

function Skills() {
  return (
    <section className="skills" id="skills">
        <div className="content">
            <div className="title"><span>My Skills</span></div>
            <div className="skills-details">
                <div className="text">
                    <div className="topic">Skills Reflect Our Knowledge</div>
                    <p>
                        I possess a high level of proficiency in HTML, CSS, JavaScript, and PHP,
                        leveraging these languages to create robust and dynamic web solutions. Currently,
                        I am actively expanding my skill set by delving into advanced JavaScript frameworks
                        like Node.js and React. This ongoing commitment to learning and mastering cutting-edge
                        technologies reflects my dedication to staying at the forefront of web development trends,
                        ensuring that I can deliver innovative and high-quality projects.</p>
                    <div className="experience">
                        <div className="num">2</div>
                        <div className="exp">Years Of <br /> Experience</div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <div className="topic">HTML</div>
                        <div className="per">90%</div>
                    </div>
                    <div className="box">
                        <div className="topic">CSS</div>
                        <div className="per">80%</div>
                    </div>
                    <div className="box">
                        <div className="topic">JavScript</div>
                        <div className="per">70%</div>
                    </div>
                    <div className="box">
                        <div className="topic">PHP</div>
                        <div className="per">60%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills