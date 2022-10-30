import React from 'react';
import './footer.css';

import github from '../images/githubicon.png'
import linkedin from '../images/linkedinLogo.png'
import resume from '../images/resume-and-cv.png'

function Footer(){
    return (
        <div id='backgroundFooter'>
            <a href='https://github.com/sw33ws'><img alt='something' className='footerImage' src={github}></img></a>
            <a href='https://www.linkedin.com/in/sebastian-gillis-995696239/'><img alt='something' className='footerImage' src={linkedin}></img></a>
            <a href='https://docs.google.com/document/d/1nnco2f_u03yzZth6RbP679BvM-j3CWusu_JlwLuOPtA/edit'><img alt='something' className='footerImage' src={resume}></img></a>
        </div>
    )
}

export default Footer;