import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './footer.css';

import github from '../images/githubicon.png'
import linkedin from '../images/linkedinLogo.png'
import resume from '../images/resume-and-cv.png'

function Footer(){
    return (
        <div id='backgroundFooter'>
            <a href='https://github.com/sw33ws'><LazyLoadImage alt='something' className='footerImage' src={github}></LazyLoadImage></a>
            <a href='https://www.linkedin.com/in/sebastian-gillis-995696239/'><LazyLoadImage alt='something' className='footerImage' src={linkedin}></LazyLoadImage></a>
            <a href='https://docs.google.com/document/d/1nnco2f_u03yzZth6RbP679BvM-j3CWusu_JlwLuOPtA/edit'><LazyLoadImage alt='something' className='footerImage' src={resume}></LazyLoadImage></a>
        </div>
    )
}

export default Footer;