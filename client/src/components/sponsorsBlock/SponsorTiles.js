import React, {useEffect} from 'react'
import sponsorData from './sponsorInfo.json'
import blockStyle from '../Block';
import navLinker from '../pageState/observer/navLinker';

const SponsorTiles = React.forwardRef((props, ref) => {
    var id = "sponsorTiles";
    useEffect(() => {
        navLinker(ref.current, props.setBlock, id);
    }, []);

    function groupBySponsorTitle(sponsorArray) {
        return sponsorArray.reduce((acc, sponsor) => {
            if(!acc[sponsor.tier])
                acc[sponsor.tier] = [];
            acc[sponsor.tier].push(sponsor);
            return acc;
        }, {})
    }

    const groupedSponsors = groupBySponsorTitle(sponsorData.sponsors);

    return (
        <div style={blockStyle()} classname="block" id={id} ref={ref}>
            {Object.keys(groupedSponsors).map( (tier) => (
                <SponsorSection key={tier} tier={tier} sponsors={groupedSponsors[tier]}/>
            ))}
        </div>
    )
});

const SponsorCard = ({sponsor}) => (
    <div>
        <img src={sponsor.logo}></img>
        <div className="sponsor-info">
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
            <p>{sponsor.flipdescription}</p>
        </div>
    </div>
);

const SponsorSection = ({tier, sponsors}) => (
    <div className={`sponsor-section ${tier.toLowerCase()}`}>
        {tier='Title'? <h2>{tier} Sponsor</h2> : <h2>{tier} Sponsors</h2>}
        <div className='sponsor-cards'>
            {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor}/>
            ))}
        </div>
    </div>
);
export default SponsorTiles