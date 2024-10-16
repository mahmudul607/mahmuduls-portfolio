import React, { useEffect, useState } from 'react';
import './AboutMe.css'

const AboutMe = () => {
    const [scrollTop, setScrollTop] = useState(0)


    useEffect (() => {

        let count = document.getElementsByClassName('counter');
    let inc = [];

    function interval () {
        for(let i = 0; i < count.length; i++){
            inc.push(1);
            if(inc[i] != count[i].getAttribute('max-data')){
                inc[i]++;

            }
            count[i].innerHTML = inc[i];
        }
    }
    let mainArea = document.getElementById('About');

    window.onscroll = function() {
        let tmr = setInterval(() => {
           
            let topElem = mainArea.offsetTop;
            let btmElem = mainArea.offsetTop + mainArea.clientHeight;
            let topScreen = window.pageYOffset;
            let btmScreen = window.pageYOffset + mainArea.clientHeight;
    
            if(btmScreen > topElem && topScreen < btmElem) {
                interval();
            }
            else{
                clearInterval(tmr);
                for(let i=0; i<count.length; i++) {
                    
                    inc =[];
                }
            }
        }, 100)
    }




    }, [])
    




    return (
        <div id='About' style={{  padding: '5px', minHeight:'100vh'}}>
            <div className='about-me-title'>
                <h1>About me</h1>
                <p>Know Me More</p>
            </div>
            <div className='details_section'>
            <div className='about-details'>
                <div className='about-me-text col-lg-7 col-xl-8'>
                    <h4>Hi, I'm ,  <span>Mahmudul Hassan</span>, a passionate web developer</h4>
                    <p>I focuses on creating clean, efficient and user friendly websites. I specialize in frontend development with a strong command of React.Js and modern web technologies 
                    <br />
                         My goal is to build responsive, high-quality web applications that deliver a superior user experience.
                        

                      </p>

                </div>
                <div className='contact-details col-lg-5 col-xl-4'>
                    <div className='items'>
                        <ul>
                            <li>Mahmudul Hasan</li>
                            <li>Email: mahmudul.cse.eng@gmail.com</li>
                            <li>Age: 22</li>
                            <li>From: Dhaka, Bangladesh</li>
                        </ul>

                    </div>
                    <div>
                        <a href="./mahmudul.pdf" download="filename.pdf">
                          <button  className='cv-btn btn btn-primary'>Download CV</button>
                            </a>

                    </div>
                    

                </div>

            </div>
            <div className='row work-details' >
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="1">0</h4>
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="15">0</h4>
                                <p>Happy Client’s</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="60">0</h4>
                                <p>Projects Done</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="12">0</h4>
                                <p>Get Awards</p>
                            </div>
                        </div>


                    </div>
            </div>

           
        </div>
    );


  
};

export default AboutMe;