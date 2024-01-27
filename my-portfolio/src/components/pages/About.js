import React from 'react'

function About() {
  return (
    <section className="about" id="about">
        <div className="content">
            <div className="title"><span>About Me</span></div>
            <div className="about-details">
                <div className="left">
                    <img src="images/me.jpg" alt="" />
                </div>
                <div className="right">
                    <div className="topic">Web Development is my Passion</div>
                    <p>Web development is not just a skill for me;
                        it is a passion that stems from my love for convenience.
                        I find immense joy in harnessing the power of web development
                        to create functional and responsive websites that cater to
                        the diverse needs of users. In every line of code I write and
                        every design element I tweak, my primary goal is to enhance
                        user experience and deliver the utmost convenience. The ability
                        to transform ideas into interactive and user-friendly platforms
                        fuels my enthusiasm for web development. It goes beyond the technicalities;
                        it's about crafting digital spaces that seamlessly adapt to user requirements.
                        This passion propels me to continually refine my skills, ensuring that the websites
                        I create not only meet but exceed user expectations, making the online experience both efficient
                        and
                        enjoyable.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About