import React, { useEffect } from 'react';
import $ from 'jquery';
import './Header.css'
import myPhoto from '../../images/mh.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  useEffect(() => {
    const contentSection = $('.content-section');
    const navigation = $('nav');

    //when a nav link is clicked, smooth scroll to the section
    navigation.on('click', 'a', function (event) {
      event.preventDefault(); //prevents previous event
      smoothScroll($(this.hash));
    });

    //update navigation on scroll...
    $(window).on('scroll', function () {
      updateNavigation();
    });
    //...and when the page starts
    updateNavigation();

    /////FUNCTIONS
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

    function smoothScroll(target) {
      $('body,html').animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  }, []);

  return (

    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img src={myPhoto} alt=""/>
            <h3>Mahmudul Hasan</h3>
            <h6>FrontEnd Developer</h6></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
              <span className="rect"></span>
              <span className="circle"></span>
              Home</Nav.Link>
              <Nav.Link href="#about">
              <span className="rect"></span>
              <span className="circle"></span>
              About Me</Nav.Link>
              <Nav.Link href="#passion">
              <span className="rect"></span>
              <span className="circle"></span>
                Passion</Nav.Link>
              <Nav.Link href="#resume">
              <span className="rect"></span>
              <span className="circle"></span>
                Resume</Nav.Link>
              <Nav.Link href="#portfolio">
              <span className="rect"></span>
              <span className="circle"></span>
                Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="about">
       
      </div>
    </header>

 

  );
}

export default Header;
