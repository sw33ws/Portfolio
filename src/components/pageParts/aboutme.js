import React from 'react';
import './aboutme.css';
import profileImage from '../images/sebPFP.png'

function Aboutme(){
    return (
        <div className='row' id='aboutmeBackground'>
            <div className='col'>
                <img alt="My Profile Picture" className='profilePicture' src={profileImage} id="aboutmeLink"></img>
            </div>

            <div className='col'>
                <h1 id="aboutMeTitle">Hello! <br></br> I'm Sebastian Gillis</h1>
                <h2 id="aboutMeText">A back-end web developer with knowledge of databases,<br></br> and server-side development. 
                Recently earned a certificate<br></br> in full stack development from the University of Toronto SCS<br></br> Coding Boot Camp, 
                with newly developed skills in JavaScript,<br></br> Express, Node.js, mySQl, noSql and MongoDb. I'm passionate<br></br> about 
                learning new development skills with bun.js being a skill<br></br> I'm currently learning. My goals for most projects 
                are to make<br></br> a strong, connectable, and reliable server and database, that<br></br> other front-end developers can easily 
                connect to the front-end.<br></br> In a recent project I employed aspects of agile development in<br></br> my back-end work. I worked 
                with a team of four to develop a<br></br> single-page MERN app that allowed fellow software engineers<br></br> to post their work in public form, and 
                get criticism, help and<br></br> donations for their work. I'm thrilled to apply my skills as part<br></br> of a fast-paced, quality-driven team 
                to build better experiences<br></br> on the web.
                </h2>
            </div>
        </div>
    )
}

export default Aboutme;