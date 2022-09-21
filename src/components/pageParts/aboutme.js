import React from 'react';
import './aboutme.css';
function Aboutme(){
    return (
        <div className='row'>
            <div className='col'>
                <h1>Hello!</h1>
            </div>

            <div className='col'><h2 id="aboutMeText">Back-end web developer with knowledge of databases, and server-side development. 
                Recently earned a certificate in full stack development from the University of Toronto SCS Coding Boot Camp, 
                with newly developed skills in JavaScript, Express, Node.js, mySQl, noSql and MongoDb. I'm passionate about 
                learning new development skills with bun.js being a skill I'm currently learning. My goals for most projects 
                are to make a strong, connectable, and reliable server and database, that other front-end developers can easily 
                connect to the front-end. In a recent project I employed aspects of agile development in my back-end work. I worked 
                with a team of four to develop a single-page MERN app that allowed fellow coders to post their work in public form, and 
                get criticism, help and donations for their work. I'm thrilled to apply my skills as part of a fast-paced, quality-driven team 
                to build better experiences on the web.
                </h2>
            </div>
        </div>
    )
}

export default Aboutme;