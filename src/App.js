import React, { useEffect, useState, createContext } from 'react';
import $ from 'jquery';
import './App.css';
import './responsive.css';
import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Passion from './components/Passion/Passion';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import ColorItem from './Color-item';
import myPhoto from './images/mh.PNG';
import './components/Header/Header.css';
import { FaPhone } from 'react-icons/fa';
import headerLogo from './images/all.png'

export const projectContext = createContext();

const App = () => {
  const [category, setCategory] = useState('');
  const colors = ['#774964', '#9586f7', '#be2edd', '#f9ca24', '#6ab04c', '#35f55e', 'red'];
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  // const [scrollPosition, setScrollPosition] = useState(0);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    // setScrollPosition(window.scrollY);

    $('html, body').animate(
      {
        scrollTop: $(sectionId).offset().top,
      },
      800
    );

    // Instead of closing Offcanvas here, manage it with a button
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // setScrollPosition(window.scrollY);
    console.log(currentScrollY)
    if (currentScrollY < 200) {
      setIsSticky(true)
    } else if (currentScrollY > 200 && currentScrollY < 600) {
      setIsSticky(false)
    } else {
      setIsSticky(true)

    }


  };



  const toggleShow = () => {
    // setScrollPosition(window.scrollY);
    setShow(!show);
  };

  useEffect(() => {
    const currentColor = localStorage.getItem('color');
    setTheme(currentColor);

    const contentSection = $('.content-section');

    $(window).on('scroll', function () {
      updateNavigation();
    });

    updateNavigation();

    function updateNavigation() {
      contentSection.each(function () {
        const sectionName = $(this).attr('id');
        const navigationMatch = $('nav a[href="#' + sectionName + '"]');
        if (
          $(this).offset().top - $(window).height() / 2 < $(window).scrollTop() &&
          $(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop()
        ) {
          navigationMatch.addClass('active-section');
        } else {
          navigationMatch.removeClass('active-section');
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
  };

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    localStorage.setItem('color', currentColor);
  };

  return (
    <projectContext.Provider value={[category, setCategory]}>
      <div className={`transition-all duration-300 ${show ? 'content-position-open' : 'content-position-full'}`}>
        <div className={`Header-area bg-slate-800 flex sticky ${isSticky ? 'sticky-header active' : 'sticky-header'} ${show ? 'resize' : ''}`}>
          
          <div className='relative'>
            
          <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}

              <input type="checkbox" checked={show} onChange={toggleShow} />
              {/* hamburger icon */}
            
              <svg
              className="swap-on fill-current absolute top-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>

            
            <svg
                className="swap-off fill-current absolute top-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              
            </label>
          </div>
          <div className={`text-center items-center header_title_section w-full  flex flex-row gap-2  px-4 justify-between ${show? 'show_hidden': ""}`}>
            <h1 className='text-[1rem] items-center   md:text-4xl mx-auto py-1 flex '> <img className='w-16 ' src={headerLogo} alt=""/>   <i>Mahmudul Hasan</i></h1>
            <h1 className={`text-xl flex gap-4 items-center ${show? 'show_hidden_number': ""}`}><FaPhone/> 01797692607</h1>
          </div>
            </div>

            {/* Offcanvas area */}
            <div>
            <Offcanvas className={`text-xs md:text-xl overflow-hidden bg-[#1e1d1d] ${show ? 'show-offcanvas' : ''}`} scroll show={show}>
              <Offcanvas.Header clssName='h-40% pb-6' >
                <Offcanvas.Title>
                  <img className='mask mask-hexagon-2 w-full' src={myPhoto} alt="Mahmudul Hasan" />
                  <div className='title_offcanvas_section text-center'>
                    <h3 className='text-sm md:text-xl'>Mahmudul Hasan</h3>
                    <h6 className="text-xs md:text-sm">FrontEnd Developer</h6>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                <header>
                  <Navbar expand="lg">
                    <Container className="header_container container-fluid">


                      <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                          <span className="rect"></span>
                          <span className="circle"></span>
                          Home
                        </Nav.Link>
                        <Nav.Link href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
                          <span className="rect"></span>
                          <span className="circle"></span>
                          About Me
                        </Nav.Link>
                        <Nav.Link href="#passion" onClick={(e) => handleLinkClick(e, '#passion')}>
                          <span className="rect"></span>
                          <span className="circle"></span>
                          Passion
                        </Nav.Link>
                        <Nav.Link href="#resume" onClick={(e) => handleLinkClick(e, '#resume')}>
                          <span className="rect"></span>
                          <span className="circle"></span>
                          Resume
                        </Nav.Link>
                        <Nav.Link href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>
                          <span className="rect"></span>
                          <span className="circle"></span>
                          Portfolio
                        </Nav.Link>
                      </Nav>

                    </Container>
                  </Navbar>
                </header>
              </Offcanvas.Body>
            </Offcanvas>
        

          
        </div>

        <div className='content-area'>
          <section id="home" className="content-section">
            <Home />
          </section>
          <section id="about" className="content-section">
            <AboutMe />
          </section>
          <section id="passion" className="content-section">
            <Passion />
          </section>
          <section id="resume" className="content-section">
            <Resume />
          </section>
          <section id="portfolio" className="content-section">
            <Portfolio />
          </section>
        </div>

        <div className={`color-switcher ${state && 'color-switcher--open'}`}>
          <button onClick={() => setState((prevState) => !prevState)}>
            <i className="ri-settings-2-line"></i>
          </button>
          <h1 className='heading'>Select Color</h1>
          <div className='color-list'>
            {colors.map((color, idx) => (
              <ColorItem key={idx} setColor={setColor} color={color} />
            ))}
          </div>
        </div>
      </div>
    </projectContext.Provider>
  );
};

export default App;
