import React from 'react';
import { EducationData } from '../../EducationData/EducationData';
import { ExperienceData } from '../../ExperienceData/ExperienceData';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import MySkill from '../MySkill/MySkill';
import './Resume.css'

const Resume = () => {
    const data1 = EducationData;
    const data2 = ExperienceData;
    return (
        <div id='Resume' style={{ background: '#212529'}}>
        <div className='about-me-title'>
            <h1>Summary</h1>
            <p>     
                Resume 
          </p>
            
        </div>

        <div className='education-work-skills'>
            <div className='my-education'>
                <div className='title' style={{color:'white'}}>
                <h2>My Education</h2> 
                </div>
                {
                    data1.map(pd => <Education data={pd}></Education>)
                }
            </div>
            <div className='my-experience'>
            <div className='title' style={{color:'white'}}>
                <h2>My Experience</h2> 
                </div>
                {
                    data2.map(pd => <Experience data={pd}></Experience>)
                }
            </div>
            
            
        </div>
        <div className='skill-area'>
                <MySkill></MySkill>
            </div>
            <div className='btn' >
                Download CV
                
            </div>
        </div>
    );
};

export default Resume;