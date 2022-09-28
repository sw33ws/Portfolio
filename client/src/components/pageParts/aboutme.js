import React from 'react';
import './aboutme.css';
import profileImage from '../images/sebPFP.png'

function Aboutme(){
    return (
        <div className='row g-2' id='aboutmeBackground'>
            <div className='col'>
                <img alt='Me' className='profilePicture' src={profileImage} id="Aboutme"></img>
            </div>

            <div className='col'>
                <h1 id="aboutMeTitle">Hello! <br></br>I'm Sebastian Gillis</h1>
                <h2 id="aboutMeText">A back-end web developer with knowledge of databases and server-side development. 
                Recently earned a certificat in full stack development from the University of Toronto SC Coding Boot Camp, 
                with newly developed skills in JavaScript Express, Node.js, mySQl, noSql and MongoDb. I'm passionat about 
                learning new development skills with bun.js being a skil I'm currently learning. My goals for most projects 
                are to mak a strong, connectable, and reliable server and database, tha other front-end developers can easily 
                connect to the front-end In a recent project I employed aspects of agile development i my back-end work. I worked 
                with a team of four to develop  single-page MERN app that allowed fellow software engineer to post their work in public form, and 
                get criticism, help an donations for their work. I'm thrilled to apply my skills as par of a fast-paced, quality-driven team 
                to build better experience on the web.
                </h2>
            </div>
        </div>
    )
}

export default Aboutme;