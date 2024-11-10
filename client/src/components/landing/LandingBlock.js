import React, { useEffect } from 'react';
import './LandingBlock.css'
import navLinker from "../pageState/observer/navLinker";
import background from './background/background.svg';
//removing this removes all the text styles so just gonna leave this for ease
import GradientImg from '../../commons/gradient/GradientImg';

var LandingBlock = React.forwardRef((props, ref) => {
    var id = "landing-block";
    useEffect(() => {
       navLinker(ref.current, props.setBlock, id)
    }, []);
    return (
        <div className="block" id={id} ref={ref}>
            <div className="landing-content">
                <div className="landing-overlay">
                    <div className="landing-text text-main" id="landing-text">
                        <div className='landing-logo-container'>
                            <h1 className='main-heading faded text-main'>Aether</h1>
                            <h1 className='main-heading faded gradient-header'></h1>
                        </div>
                        <h2 className='sub-heading faded text-main'>Presented by the Computer Engineering Club and Lantern</h2>
                        <h3 className='faded colored-text'>November 21st - 22nd, 2024</h3>
                    </div>
                    <div className='landing-img-container faded'>
                        <img src='./aetherStarLogo.svg' className='landing-img'/>
                    </div>
                </div>
                <div className="landing-underlay">
                    <div className="landing-background">
                        <img src={background} className="landing-background-img" alt="Cool Graphic" />
                    </div>
                </div>
            </div>
        </div>
)});

export default LandingBlock;
