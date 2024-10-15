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
                    <h4>I'm <span>Mahmhudul Hasan</span>, a web developer</h4>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <br />

                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>

                </div>
                <div className='contact-details col-lg-5 col-xl-4'>
                    <div className='items'>
                        <ul>
                            <li>Name: Mahmudul Hasan</li>
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
                                <h4 class="counter" max-data="50">0</h4>
                                <p>Happy Client’s</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="200">0</h4>
                                <p>Projects Done</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4 class="counter" max-data="10">0</h4>
                                <p>Get Awards</p>
                            </div>
                        </div>


                    </div>
            </div>

           
        </div>
    );


  
};

export default AboutMe;