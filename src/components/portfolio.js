import React, { useState } from 'react';
import Aboutme from './pageParts/aboutme';
import NavTabs from './NavTabs';
import Work from './pageParts/work'

function Portfolio(){
    return (
        <div>
            <NavTabs />
            <Aboutme />
            <Work />
        </div>
    )
}

export default Portfolio;