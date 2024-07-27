import React, { useEffect } from 'react';
import sponsorData from './sponsorInfo.json';
import blockStyle from '../Block';
import navLinker from '../pageState/observer/navLinker';
import '../Block.css';
import './sponsorBlock.css';

const sponsorBlock = React.forwardRef((props, ref) => {
    var id = "sponsorBlock";
    useEffect(() => {
        navLinker(ref.current, props.setBlock, id);
    }, []);

    let visible = true;
    if (Object.keys(sponsorData).length === 0) {
        visible = false;
    }

    return (
        <div style={blockStyle()} className="block" id={id} ref={ref}>
            {
                visible && <div className="sponsor-card-block">
                    <h1 className='sponsorBlockHeading heading'>We couldn't have done this event without...</h1>
                    {Object.keys(sponsorData).map((tier) => (
                        <SponsorSection key={tier} tier={tier} sponsors={sponsorData[tier]} />
                    ))}
                </div>
            }
        </div>
    )
});

const SponsorSection = ({ tier, sponsors }) => (
    <div className={`sponsor-section ${tier.toLowerCase()}`}>
        {(tier == 'Community')
            ? (<h2>{tier} Partners</h2>)
            : (<h2>{tier} Sponsors</h2>)}
        <div className='sponsor-cards'>
            {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
        </div>
    </div>
);

const SponsorCard = ({ sponsor }) => (
    <div className="sponsor-card">
        <a href={sponsor.website} className='sponsor-site' target='_blank'>
            <div className='sponsor-img-container'>
                <img src={sponsor.logo} alt={`${sponsor.name} company logo`}></img>
            </div>
            <div className="sponsor-info">
                <div className='logo-name'>
                    <h3>{sponsor.name}</h3>
                    <p>{sponsor.industry}</p>
                </div>
                <div className='text'>
                    <p>{sponsor.description}</p>
                </div>
            </div>
        </a>
    </div>
);

export default sponsorBlock
