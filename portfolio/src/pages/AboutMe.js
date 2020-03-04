import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

function AboutMe() {
    return (
        <div id="aboutMe">
            <img className="profilePic" src="../images/ProfilePic.JPEG" alt="Profile" />


            <div id="aboutText">
                <h1>
                    Eksanie  <br /> Ghattas
            </h1>
                <p>
                    As a Human Centered Design Engineer <br /> 
                    I design, build, and research in an <br /> 
                    empathetic way. Inclusive Design is <br /> 
                    shapes the way we live and I would <br /> 
                    am shaping that future on day at a time. 
            </p>
            <h3>
                Contact 
            </h3>
            <p>
                mghattas3@gmail.com <br/>
                253-862-3913
            </p>
            </div>
            <a href="../docs/Resume.pdf" download='Resume.pdf'>
            <Button variant="outline-secondary">Resume</Button>
            </a>
        </div>

    );
}

export default AboutMe;