import React, { useState } from 'react';

import NavTabs from './NavTabs';

import Aboutme from './pageParts/aboutme';
import Work from './pageParts/work';
import Skills from './pageParts/skills';
import Contact from './pageParts/contactinfo';

function Portfolio(){
    return (
        <div>
            <NavTabs />
            <Aboutme />
            <Work />
            <Skills />
            <Contact />
        </div>
    )
}

export default Portfolio;