import React from 'react';
import './Passion.css';
import Data from '../../Data/Data'
import PassionItem from '../PassionItem/PassionItem';



const Passion = () => {
   
      
   
    const passionData = Data;
    
    return (
        <section id='Passion' style={{background:'#343a40'}}>
            <div className='about-me-title'>
                <h1>Passion</h1>
                <p> Providing Services</p>
                
            </div>
            <div className='item-box'>
            {
                passionData.map((ps, index) => <PassionItem ps={ps} key={index}></PassionItem>)
            }
                
            </div>
        </section>
    );
};

export default Passion;