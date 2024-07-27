import React, {useEffect} from "react";
import attendeeData from "./attendeeBlock.json";
import blockStyle from "../Block";
import navLinker from "../pageState/observer/navLinker";
import "../Block.css";
import "./attendeeBlock.css";

const AttendeeBlock = React.forwardRef((props, ref) => {
    let id = 'attendeeBlock';
    useEffect(() => {
        navLinker(ref.current, props.setBlock, id);
    });

    let visible = true;

    return (
        <div style={blockStyle()} className="block" id={id} ref={ref}>
            {
                visible && <div className="attendee-card-block">
                    <h1 className="attendee-block-heading heading">Companies Attending</h1>
                    {
                        Object.keys(attendeeData).map((attendenceMode) => (
                            <AttendeeSection key={attendenceMode} attendenceMode={attendenceMode} attendees={attendeeData[attendenceMode]}/>
                        ))
                    }
                </div>
            }
        </div>
    )
});

const AttendeeSection = ({attendenceMode, attendees}) => (
    <div className={`attendee-section ${attendenceMode.toLowerCase()}`}>
        <h2>{attendenceMode}</h2>
        <div className='attendee-cards'>
            {attendees.map((attendee) => (
                <AttendeeCard key={attendee.name} attendee={attendee} />
            ))}
        </div>
    </div>
);

const AttendeeCard = ({attendee}) => (
    <div className="attendee-card">
        <a href={attendee.website} className='attendee-site' target='_blank'>
            <div className="attendee-img-container">
                <img src={attendee.logo} alt={`${attendee.name} company logo`}></img>
            </div>
            <div className="attendee-info">
                <div className='logo-name'>
                    <h3>{attendee.name}</h3>
                    <p>{attendee.industry}</p>
                </div>
                <div className='text'>
                    <p>{attendee.description}</p>
                </div>
            </div>
        </a>
    </div>
);

export default AttendeeBlock;

