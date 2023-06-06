import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './aboutme.css';
import profileImage from '../images/sebPFP.png'

function Aboutme(){
    return (
        <div id='Aboutme'>
        <div className='aboutme-body'>
            <div>
                <h1 className='about-title'><span className='gradient-title'>Hello!</span><br></br>I'm Sebastian Gillis</h1>
                <h2 className='about-text'>Full stack web developer with knowledge of MERN stack development. Recently earned a certificate in full stack development from the University of Toronto SCS Coding Boot Camp, with newly developed skills in HTML, Css, Javascript, Express, Node.js, mySQL, noSQL, MongoDb, Python and Docker. I am passionate about learning new development skills with bun.js being a skill I am currently learning. My goal for projects is to make a strong, connectable, and reliable website that users can easily connect to and use. In a recent project I employed aspects of agile development to make my code easily readable. In this project I worked with a team of four to develop a single-page MERN app that allowed fellow software engineers to post their work in public form, and get criticism, help and donations for their work. I am thrilled to apply my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</h2>
            </div>
            <LazyLoadImage alt="Profile" src={profileImage} className="profile-picture"></LazyLoadImage>
        </div>
        </div>
    )
}

export default Aboutme;