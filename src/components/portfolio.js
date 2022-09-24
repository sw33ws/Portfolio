import React, { useState } from 'react';

import NavTabs from './NavTabs';

import Aboutme from './pageParts/aboutme';
import Work from './pageParts/work'
import Skills from './pageParts/skills'

function Portfolio(){
    return (
        <div>
            <NavTabs />
            <Aboutme />
            <Work />
            <Skills />
        </div>
    )
}

export default Portfolio;