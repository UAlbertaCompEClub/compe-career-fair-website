import React, { Component } from 'react';
import NavBar from "../navBar/NavBar";
import LandingBlock from '../landing/LandingBlock';
import SocialsBlock from '../socialsBlock/SocialsBlock';
import AboutUsBlock from '../aboutUs/AboutUsBlock';
import PrevCareerFairBlock from '../aboutUs/PrevCareerFairBlock';
import OverviewBlock from '../overviewBlock/OverviewBlock';
import ScheduleBlock from '../scheduleBlock/scheduleBlock';
import FaqBlock from '../faqBlock/FaqBlock';
import SponsorTiles from '../sponsorsBlock/sponsorBlock';

class LinkedPage extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.scheduleBlockRef = React.createRef();
        this.landingBlockRef = React.createRef();
        this.aboutUsBlockRef = React.createRef();
        this.faqBlockRef = React.createRef();
        this.sponsorBlockRef = React.createRef();
    };

    state = {
        visibleBlock: ""
    };
    setVisibleBlock = id => { this.setState({ visibleBlock: id })};

    render() {
        return (
            <>
                <NavBar visibleBlock={this.state.visibleBlock} />
                <LandingBlock ref={this.landingBlockRef} setBlock={this.setVisibleBlock} height={95} />
                <OverviewBlock />
                <ScheduleBlock ref={this.scheduleBlockRef} setBlock={this.setVisibleBlock} />
                <AboutUsBlock ref={this.aboutUsBlockRef} setBlock={this.setVisibleBlock} />
                <PrevCareerFairBlock/>
                <SponsorTiles ref={this.sponsorBlockRef} setBlock={this.setVisibleBlock}/>
                <FaqBlock ref={this.faqBlockRef} setBlock={this.setVisibleBlock} />
                <SocialsBlock />
            </>
            
        );
    }
}

export default LinkedPage;