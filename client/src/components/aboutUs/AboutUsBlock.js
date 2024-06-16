import React, { useEffect } from 'react';
import './AboutUsBlock.css';
import '../Block.css'
import blockStyle from '../Block';
import navLinker from "../pageState/observer/navLinker";

var AboutUsBlock = React.forwardRef((props, ref) => {
    var id = "about-us-block";
    useEffect(() => {
        navLinker(ref.current, props.setBlock, id);
    }, []);
    return (
        <div style={blockStyle()} className="block" id={id} ref={ref}>
            <div className="about-us-text" id="about-us-text" style={{paddingBottom: '10px'}}>
                <h1 className='main-heading faded text-main'>About Us</h1>
                <h2 className='sub-heading-about-us faded text-main colored-text'>The Computer Engineering Club</h2>
                <p>
                    For over 35 years, the University of Alberta's Computer Engineering Club has brought 
                    Computer Engineering students together, organized specialized events and initiatives, 
                    and advocated to larger bodies — such as the Engineering Students' Society, the Faculty 
                    of Engineering, and the Students' Union. In recent years, however, we have expanded our 
                    scope to include students in Computer Science, and Data Science fields who share similar interests in industry.
                </p>
                <p>
                    We have a longstanding history of running large-scale events focused on educational and hands-on learning for programming and design, such as <a href="https://hacked.compeclub.com" target="_blank" rel="noopener noreferrer">HackED</a> and <a href="https://hackedbeta.compeclub.com" target="_blank" rel="noopener noreferrer">HackED Beta</a>, <strong className="colored-text">Alberta's largest student-run hackathons with over 700 participants</strong>.
                    Now, we are excited to continue this fairly new endeavor, <strong className="colored-text">to connect 
                    undergraduate students to employers and businesses</strong> in a way that is unprecedented on our campus: Aether
                </p>
                <p>
                    While Aether is still somewhat new, last year we had an incredible participation 
                    rate of over 1000 students and received overwhelmingly positive feedback from the 
                    students and companies! Furthermore, many students successfully received internship 
                    or new grad job offers directly from this event! 
                    Some of the companies and organizations that attended previously are:
                    <ul>
                        Servus Credit Union, DriveWyze, Inflexion Games, Technology Alberta, PCL, 
                        Drugbank, Sparrow Connected, Fig Finance, DevFacto, Blue Marvel Ai/Spartan Controls, 
                        Lantern, Amii, IEEE, Microchip, and Paper Leaf
                    </ul>
                    <br/><strong className="colored-text">Check out the images below to get a better sense of this event!</strong>
                </p>
            </div>
        </div>
)});

export default AboutUsBlock;
