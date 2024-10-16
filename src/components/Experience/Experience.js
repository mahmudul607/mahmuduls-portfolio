import React from 'react';

const Experience = ({data}) => {

    const {session, subject, institute, paragraph} =data;
    return (
        <div className='education'>
        <div className='edu-card'>
            <h4>{session}</h4>
            <h5>{subject}</h5>
            <h6>{institute}</h6>
            <p>{paragraph}.</p>
        </div>
    </div>
    );
};

export default Experience;