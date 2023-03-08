import React from 'react';
import { SkillData } from '../../SkillData/SkillData';
import SkillsBar from '../SkillsBar/SkillsBar';
import './MySkill.css';

const MySkill = () => {

    const data = SkillData;
    return (
        <div className='mySkill'>
            <div  className='mySkill-title'>
                <h3>My Skills</h3>
            </div>
            <div className='skills'>
                {
                    data.map(pd => <SkillsBar data={pd}></SkillsBar>)
                }
            </div>
            
        </div>
    );
};

export default MySkill;