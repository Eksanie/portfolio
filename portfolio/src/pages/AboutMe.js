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
                    Hey my TA is Awesome
            </p>
            </div>
            <a href="../docs/Resume.pdf" download='Resume.pdf'>
            <Button variant="outline-secondary">Resume</Button>
            </a>
        </div>

    );
}

export default AboutMe;