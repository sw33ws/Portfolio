import React, { useState } from 'react';
import Aboutme from './pageParts/aboutme';
import NavTabs from './NavTabs';

function Portfolio(){
    return (
        <div>
            <NavTabs />
            <Aboutme />
        </div>
    )
}

export default Portfolio;