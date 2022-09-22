import React from 'react';
import './work.css';

import github from '../images/githubicon.png'
import website from '../images/websiteicon.png'
import weatherimage from '../images/weather.png'
import goldendevs from '../images/goldendev.png'
import zeldaimage from '../images/zelda-logo.jpg'
import jadeimage from '../images/jadelogo.png'

function Work(){
    return(
        <div className='row' id='workbackground'>
            <div>
                <h1 className='title' id='workLink'>Past Work</h1>
                <h2 className='text'></h2>
            </div>

            <div className='col'>
                <div className='workbox'>
                    <h2 className='text'>A quick weather app that tells you the weather of a city you search up, along side a five day forecast.</h2>
                    <img alt="Weather App"src={weatherimage} id="images"></img>
                    <a href='https://github.com/sw33ws/Weather-App'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://sw33ws.github.io/Weather-App/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

                <div className='workbox'>
                    <h2 className='text'>A lightweight travel companion to quickly gather information on hotels, and music in the city of your choice.</h2>
                    <img alt=""src={zeldaimage} id="images"></img>\
                    <a href='https://github.com/Ydennekrf/Zelda-Travel-App'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://ydennekrf.github.io/Zelda-Travel-App/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

            </div>
            <div className='col'>
                <div className='workbox'>
                    <h2 className='text'>This is a full stack app, that allows freelance developers to advertise their services, and for clients to buy a software dev.</h2>
                    <img alt="Freelance Developer Work"src={goldendevs} id="images"></img>
                    <a href='https://github.com/SuedePritch/fluffy-palm-tree'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://protected-peak-08029.herokuapp.com/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

                <div className='workbox'>
                    <h2 className='text'>A simple text editor that your can download, and have it save what you write</h2>
                    <img alt=""src={jadeimage} id="images"></img>
                    <a href='https://github.com/sw33ws/solid-pancake'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://mighty-hamlet-13053.herokuapp.com/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Work;