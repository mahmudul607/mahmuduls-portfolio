
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import ColorItem from './Color-item';
import { useEffect, useState } from 'react';
import Passion from './components/Passion/Passion';
import Resume from './components/Resume/Resume';

function App() {
  const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab04c', '#30336b', 'red']
  const [state, setState] = useState(false)

  useEffect(() => {

    const currentColor = localStorage.getItem('color');
    setTheme(currentColor)

  }, [])
  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color)
  }
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    localStorage.setItem('color', currentColor);

  }
  return (
    <>
    <div className='App'>
      
    <div className='Header-area'>
    <Header></Header>
    </div>
      <div className='content-area'>
      <section id="home" className="content-section">
        <Home></Home>
      </section>
      <section id="about" className="content-section">
      <AboutMe></AboutMe>
      </section>
      <section id="passion" className="content-section">
        <Passion></Passion>
      </section>
      <section id="resume" className="content-section">
        <Resume></Resume>
      </section>
      <section id="section5" className="content-section">
        <h1>SECTION FIVE</h1>
      </section>
      </div>

        {/* color changer */}
         <div className={`color-switcher ${state && 'color-switcher--open'}`}>
            <button onClick={() => setState(prevState => !prevState)}><i className="ri-settings-2-line"></i></button>
            <h1 className='heading'>Select Color</h1>
            <div className='color-list'>
              {
                colors.map((color, idx) => <ColorItem key={idx} setColor={setColor} color={color}></ColorItem>)
              }

            </div>
          </div>
          {/* end color changer */}
          </div>
    </>
)}

export default App;
