import React from 'react';

const Experience = ({data}) => {

    const {session, subject, institute} =data;
    return (
        <div className='education'>
        <div className='edu-card'>
            <h4>{session}</h4>
            <h5>{subject}</h5>
            <h6>{institute}</h6>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    </div>
    );
};

export default Experience;