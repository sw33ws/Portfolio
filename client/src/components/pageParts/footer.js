import React from 'react';
import './footer.css';

import github from '../images/githubicon.png'
import linkedin from '../images/linkedinLogo.png'

function Footer(){
    return (
        <div id='backgroundFooter'>
            <a href='https://github.com/sw33ws'><img alt='something' className='footerImage' src={github} id="footerImageleft"></img></a>
            <a href='https://www.linkedin.com/in/sebastian-gillis-995696239/'><img alt='something' className='footerImage' src={linkedin} id="footerImageright"></img></a>
        </div>
    )
}

export default Footer;