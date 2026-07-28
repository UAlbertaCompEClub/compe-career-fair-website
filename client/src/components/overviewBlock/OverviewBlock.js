import React from 'react';
import './OverviewBlock.css';

function OverviewBlock() {
    return (
        <div className="block overview-block" id="overview-block">
            <div className="overview-content">
                <div className="overview-text" id="overview-text">
                    <h2 className="colored-text">Are you ready to land a tech internship or full-time position for Winter/Summer 2026?</h2>
                    <h3 className="text-main">Simplify your job search journey through Aether!</h3>
                    <p>Aether is a tech conference and career fair with both in-person and virtual components for both software and hardware topics.</p>
                    <p>   
                    At Aether, <strong>expand your network</strong> by connecting with recruiters and industry professionals from companies looking to fill tech related internship positions. 
                    Networking is the <strong>best way</strong> to find a job - don’t miss this <em>amazing opportunity</em> to kickstart your career!
                    </p>
                    <p>   
                    In 2024, the inaugural Aether (previously Career++) surpassed our expectations with an <strong>astounding 1200 participants!</strong> This year we are excited to bring back this extraordinary event on the 25th to 26th of September and tentatively expect more than 1000 participants!
                    </p>
                    <h4 className="text-main">Reach the finish line by attending this tech-focused career fair to learn more about available 
                    internships, what each company and their recruitment process is like, and how to stand out as an applicant. </h4>
                </div>
                <div className="overview-text gradient-border-padded" id="overview-text">
                    <h3 className="text-main">
                        Aether will run from <em>12:00 PM to 5:00 PM tentatively in the Donadeo Innovation Center for Engineering at the University of Alberta North Campus</em> on September 25th and from <em>12:00 PM to 3:00 PM </em>
                        on September 26th, virtually. Additional information will be released closer to the event.</h3>
                </div>
            </div>
        </div>
    );
}

export default OverviewBlock;
