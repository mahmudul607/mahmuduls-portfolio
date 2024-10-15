import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import { FaAngleDown, FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import myPhoto from '../../images/Capture3-removebg-.png'
import myPhoto2 from '../../images/pic (2).jpg'
import myPhoto3 from '../../images/Capture.PNG'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div className='home-page' id='Home' style={{ minHeight: '100vh' }}>
            <div className='myPhotoTwo lg:right-32 right-12 absolute  top-24 h-5/6  hidden md:block'>
                <div className="mockup-phone h-full w-64">
                    <div className="camera"></div>
                    <div className="display w-full h-full">
                        <div className=" h-full bg-white">
                            <Carousel autoPlay infiniteLoop showThumbs={false} className='h-full'>
                                <div className='h-full'>
                                    <img src={myPhoto} alt='myPhoto' />

                                    <h3 >FrontEnd Developer</h3>
                                    <a href="https://www.facebook.com/mahmudul607"><p className="legend bottom-48"> <span className='flex text-xl items-center gap-2 justify-center'><FaFacebook /> Follow On FB</span> </p>

                                    </a>
                                </div>
                                <div className='h-full w-full bg-slate-400'>
                                    
                                   
                                    <img className="mask mask-heart w-72 h-72" src={myPhoto2} alt='myPhoto2'/>
                                    <a href="https://www.facebook.com/mahmudul607"><p className="legend bottom-48"> <span className='flex text-xl items-center gap-2 justify-center'><FaTwitterSquare /> Follow On Twitter</span> </p>

                                    </a>
                                </div>
                                <div>
                                    <img src={myPhoto3} alt='myPhoto3' />
                                    <p className="legend">Contact</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-text-area left-1/4 md:left-0 text-center'>
                <h1>Welcome</h1>
                <Typewriter
                    options={{
                        strings: [
                            "I'm Mahmudul Hasan",
                            "I'm a Web Developer",
                            "I'm a Web Designer",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <h6>based in City of Capital, Dhaka.</h6>
                <div className=''>
                    <p className='btn'>Hire Me</p>
                </div>
                <div className='animated-icon'>
                    <span>
                        <i><FaAngleDown></FaAngleDown></i>
                    </span>

                </div>

            </div>


        </div>
    );
};

export default Home;