import React from 'react';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionTwoMobile from './SectionTwoMobile/SectionTwoMobile';


const Content = () => {
    return <main className='content'>
            <meta http-equiv="Content type" content="text/html;sharset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionTwoMobile />
        <SectionFour />
        <SectionFive />
        <SectionSix />
    </main>
}

export default Content;