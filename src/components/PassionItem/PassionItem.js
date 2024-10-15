
import React from 'react';
import './PassionItem.css'


import { FaPaintBrush, FaChartArea, FaDesktop, FaPencilRuler, FaBullhorn, FaQuestionCircle } from "react-icons/fa";

const iconMaps = {
       FaPaintBrush: FaPaintBrush,
       FaChartArea: FaChartArea,
       FaDesktop: FaDesktop,
       FaPencilRuler: FaPencilRuler, 
       FaBullhorn: FaBullhorn, 
       FaQuestionCircle: FaQuestionCircle


}
const PassionItem = ({ ps }) => {



    const { title, paragraph, icon } = ps;
    
    const IconShow = iconMaps[icon] || FaQuestionCircle;

    return (
        <div className='passion-item'>
            <div className='passion-item-icon'>
                <div className='icon-area'>
                   <IconShow className="icon" />
                </div>
            </div>
            <div className='item-text'>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>

        </div>
    );
};

export default PassionItem;