import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './work.css';

import github from '../images/githubicon.png'
import website from '../images/websitenew.png'
import weatherimage from '../images/weather.png'
import goldendevs from '../images/goldendev.png'
import zeldaimage from '../images/zelda-logo.jpg'
// import downloads from '../images/downloads.png'
import downloads from '../images/download.png'
import ai from '../images/ai.png'
import calculator from '../images/calculator.png'

function Work(){
    return(
        <div className='backgroundcolor-work' id='Work'>
        <div className='row' id='workbackground'>
            <div>
                <h1 className='title' id='workLink'>Past Work</h1>
            </div>

            <div className='project-holder'>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Zelda Travel Companion</span> is a lightweight travel companion that can quickly gather information on hotels, local events and music in the city of your choice.</h1>
                        <a href='https://github.com/Ydennekrf/Zelda-Travel-App'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        <a href='https://ydennekrf.github.io/Zelda-Travel-App/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a>
                    <LazyLoadImage alt="Zelda Travel Companion"src={zeldaimage} className="project-image-background"></LazyLoadImage>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Golden Devs</span> is a freelance developer website that allows freelance developers to advertise their expertise, languages and experience. The website also allows for clients to put up requests for what they need.</h1>
                        <a href='https://github.com/SuedePritch/fluffy-palm-tree'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        <a href='https://protected-peak-08029.herokuapp.com/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a>
                    <LazyLoadImage alt="GoldenDevs"src={goldendevs} className="project-image-background"></LazyLoadImage>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Weather App</span> is a simple app that tells you the weather of a city you search up, alongside a five day forecast.</h1>
                        <a href='https://github.com/sw33ws/Weather-App'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        <a href='https://sw33ws.github.io/Weather-App/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a>
                    <LazyLoadImage alt="Weather App"src={weatherimage} className="project-image-background"></LazyLoadImage>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Download page</span> is a simple download page where you can check out and download my projects</h1>
                        <a href='https://github.com/sw33ws/My-Download-Page'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        <a href='https://sw33ws.github.io/My-Download-Page/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a>
                    <LazyLoadImage alt="DownLoad Page"src={downloads} className="project-image-background"></LazyLoadImage>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>ChatGPT Voice Assistant</span> is a python that takes in user audio, converts it to text, and then reads the response back to you!</h1>
                        <a href='https://github.com/sw33ws/ChatGPT-Voice-Assistant'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        {/* <a href='https://sw33ws.github.io/My-Download-Page/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a> */}
                    <LazyLoadImage alt="DownLoad Page"src={ai} className="project-image-background"></LazyLoadImage>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Calculator</span> is a simple calculator, with a dark/light mode added in!</h1>
                        <a href='https://github.com/sw33ws/Calculator'><LazyLoadImage alt='something' className='project-github' src={github}></LazyLoadImage></a>
                        <a href='https://sw33ws.github.io/Calculator/'><LazyLoadImage alt='something' className='project-website' src={website}></LazyLoadImage></a>
                    <LazyLoadImage alt="DownLoad Page"src={calculator} className="project-image-background"></LazyLoadImage>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Work;